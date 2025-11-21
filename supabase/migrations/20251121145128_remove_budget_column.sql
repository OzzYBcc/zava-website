/*
  # Remove Budget Column

  1. Changes
    - Removes the `budget` column from the `form_submissions` table as it's no longer needed
*/

ALTER TABLE form_submissions DROP COLUMN IF EXISTS budget;
