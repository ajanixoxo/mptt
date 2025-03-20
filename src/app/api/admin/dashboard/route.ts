import { NextResponse } from "next/server";
import { verify } from "jsonwebtoken";
import { cookies } from "next/headers";
import prisma from "@/lib/prisma";

// Helper function to get admin from token
async function getAdminFromToken() {
  const cookie = await cookies();
  const token = cookie.get("admin-token")?.value;

  if (!token) {
    return null;
  }

  try {
    const decoded = verify(token, process.env.JWT_SECRET || "your-secret-key");

    if (!decoded || typeof decoded !== "object") {
      return null;
    }

    const admin = await prisma.admin.findUnique({
      where: { id: decoded.id },
    });

    if (!admin) {
      return null;
    }

    return admin;
  } catch (error) {
    console.log(error)
    return null;
  }
}

export async function GET() {
  try {
    // Check if user is authenticated and is an admin
    const admin = await getAdminFromToken();

    if (!admin) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    // Get dashboard data
    const [
      activeEvents,
      closedEvents,
      totalRegistrations,
      recentEvents,
      recentRegistrations,
    ] = await Promise.all([
      // Count active events
      prisma.event.count({
        where: { status: "active" },
      }),

      // Count closed events
      prisma.event.count({
        where: { status: "closed" },
      }),

      // Count total registrations
      prisma.registration.count(),

      // Get recent events
      prisma.event.findMany({
        take: 5,
        orderBy: { createdAt: "desc" },
        include: {
          _count: {
            select: { registrations: true },
          },
        },
      }),

      // Get recent registrations
      prisma.registration.findMany({
        take: 5,
        orderBy: { createdAt: "desc" },
        include: {
          event: {
            select: { title: true },
          },
        },
      }),
    ]);

    // Format registrations for the frontend
    const recentUsers = recentRegistrations.map((reg) => ({
      id: reg.id,
      userName: reg.userName,
      userEmail: reg.userEmail,
      createdAt: reg.createdAt,
      event: {
        title: reg.event?.title || "Unknown event",
      },
    }));

    return NextResponse.json({
      activeEvents,
      closedEvents,
      totalRegistrations,
      recentEvents,
      recentUsers,
    });
  } catch (error) {
    console.error("Dashboard API error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
