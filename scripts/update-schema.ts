// This script updates your Supabase database schema to add the new fields
// Run with: npx ts-node -r tsconfig-paths/register src/scripts/update-schema.ts

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  console.log("Starting schema update...")

  try {
    // Check if the columns already exist to avoid errors
    // This is a simple check and might not work for all databases
    // For a production migration, consider using Prisma Migrate

    // First, try to get the database schema information
    console.log("Checking current schema...")

    // Try to update the schema using raw SQL
    // Note: This is specific to PostgreSQL (which Supabase uses)
    console.log("Adding new columns to the events table...")

    await prisma.$executeRaw`
      ALTER TABLE events 
      ADD COLUMN IF NOT EXISTS third_party_link TEXT,
      ADD COLUMN IF NOT EXISTS third_party_event_id TEXT;
    `

    // Add the redirected column to the registrations table
    console.log("Adding new column to the registrations table...")

    await prisma.$executeRaw`
      ALTER TABLE registrations
      ADD COLUMN IF NOT EXISTS redirected BOOLEAN DEFAULT FALSE;
    `

    console.log("Schema update completed successfully!")
  } catch (error) {
    console.error("Schema update failed:", error)
  } finally {
    await prisma.$disconnect()
  }
}

main()

