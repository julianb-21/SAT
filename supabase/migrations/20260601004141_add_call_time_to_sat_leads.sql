/*
  # Add call_time column to sat_leads

  1. Changes
    - `sat_leads` table: add `call_time` (text) column to store preferred call time (Morning, Afternoon, Evening)
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'sat_leads' AND column_name = 'call_time'
  ) THEN
    ALTER TABLE sat_leads ADD COLUMN call_time text DEFAULT '';
  END IF;
END $$;
