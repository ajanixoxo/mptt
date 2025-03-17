import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"
import * as schema from "./schema"
import { config } from 'dotenv';


config({ path: '.env' }); // or .env.local

// For Node.js, we'll use postgres.js as the driver
const connectionString = process.env.DATABASE_URL

// Check if we're in a production environment
const ssl = process.env.NODE_ENV === "production"

// Create a postgres client with the connection string
const client = postgres(process.env.DATABASE_URL!)

// Create a drizzle client with the postgres client
export const db = drizzle(  {client })

// Export types for better type safety
export type DbClient = typeof db

