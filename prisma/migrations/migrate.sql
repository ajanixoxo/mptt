-- Add third-party fields to events table
ALTER TABLE "events" 
ADD COLUMN IF NOT EXISTS "third_party_link" TEXT,
ADD COLUMN IF NOT EXISTS "third_party_event_id" TEXT;

-- Add redirected field to registrations table
ALTER TABLE "registrations"
ADD COLUMN IF NOT EXISTS "redirected" BOOLEAN DEFAULT FALSE;

