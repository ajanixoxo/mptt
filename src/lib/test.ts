import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET() {
  try {
    // Test database connection by fetching data
    const results = {
      // Try to get all admins
      admins: await prisma.admin.findMany({
        take: 5, // Limit to 5 records
      }),

      // Try to get all users
      users: await prisma.user.findMany({
        take: 5, // Limit to 5 records
      }),

      // Check database schema
      adminModel: Object.keys(prisma.admin),
      userModel: Object.keys(prisma.user),

      // Check if we can find a specific admin by email
      adminByEmail: await prisma.admin.findUnique({
        where: { email: "admin@example.com" }, // Replace with your admin email
      }),
    }

    return NextResponse.json({
      message: "Database connection successful",
      results,
    })
  } catch (error) {
    console.error("Database test error:", error)
    return NextResponse.json(
      {
        message: "Database test failed",
        error: error.message,
        stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
      },
      { status: 500 },
    )
  }
}

