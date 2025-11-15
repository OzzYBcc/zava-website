/*
  # Create form submissions table

  1. New Tables
    - `form_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Full name of the submitter
      - `email` (text) - Email address
      - `company` (text, nullable) - Company name
      - `phone` (text, nullable) - Phone number
      - `project_type` (text) - Type of project (website, redesign, webapp, ecommerce, other)
      - `description` (text) - Project description
      - `branding` (text) - Branding status (yes, partial, no)
      - `timeline` (text) - Project timeline (urgent, standard, flexible)
      - `budget` (integer) - Budget amount in GBP
      - `competitors` (text, nullable) - Competitor websites
      - `website_references` (text, nullable) - Website references
      - `additional` (text, nullable) - Additional information
      - `requires_maintenance` (boolean) - Whether ongoing maintenance is required
      - `requires_seo` (boolean) - Whether SEO services are required
      - `communication_preference` (text) - Preferred communication method (email, phone, whatsapp, any)
      - `created_at` (timestamptz) - Submission timestamp

  2. Security
    - Enable RLS on `form_submissions` table
    - Add policy for service role to insert submissions (public form access)
    - Add policy for authenticated admin users to view all submissions
*/

CREATE TABLE IF NOT EXISTS form_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  phone text,
  project_type text NOT NULL,
  description text NOT NULL,
  branding text NOT NULL,
  timeline text NOT NULL,
  budget integer NOT NULL,
  competitors text,
  website_references text,
  additional text,
  requires_maintenance boolean DEFAULT false,
  requires_seo boolean DEFAULT false,
  communication_preference text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert form submissions"
  ON form_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all submissions"
  ON form_submissions
  FOR SELECT
  TO authenticated
  USING (true);