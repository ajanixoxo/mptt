import { PrismaClient } from "@prisma/client"

const globalForPrisma = global as unknown as { prismaGlobal: PrismaClient | undefined }

// Create the PrismaClient instance
export const prisma =
  globalForPrisma.prismaGlobal ||
  new PrismaClient({
    log: ["error", "warn"],
  })

// Save to global in development to prevent duplicate instances
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prismaGlobal = prisma
}

export default prisma