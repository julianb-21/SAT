/*
  # Create SAT leads table

  1. New Tables
    - `sat_leads`
      - `id` (uuid, primary key)
      - `is_parent` (boolean) - whether they confirmed as parent/guardian
      - `parent_name` (text) - parent's full name
      - `student_name` (text) - student's name
      - `email` (text) - contact email
      - `phone` (text) - contact phone
      - `current_sat_score` (text) - student's current SAT score
      - `created_at` (timestamptz)
  2. Security
    - Enable RLS on `sat_leads` table
    - Allow anonymous inserts (public lead form)
    - No select policy (only admins via service role can read)
*/

CREATE TABLE IF NOT EXISTS sat_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  is_parent boolean DEFAULT false,
  parent_name text DEFAULT '',
  student_name text DEFAULT '',
  email text DEFAULT '',
  phone text DEFAULT '',
  current_sat_score text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE sat_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a lead"
  ON sat_leads
  FOR INSERT
  TO anon
  WITH CHECK (true);
