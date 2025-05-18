/*
  # Create CMS tables

  1. New Tables
    - `content_blocks`
      - `id` (uuid, primary key)
      - `page` (text) - страница, где используется блок
      - `identifier` (text) - уникальный идентификатор блока на странице
      - `content` (jsonb) - содержимое блока
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `images`
      - `id` (uuid, primary key)
      - `url` (text) - URL изображения
      - `alt` (text) - альтернативный текст
      - `created_at` (timestamp)
    
  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users
*/

-- Create content_blocks table
CREATE TABLE IF NOT EXISTS content_blocks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  page text NOT NULL,
  identifier text NOT NULL,
  content jsonb NOT NULL DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(page, identifier)
);

-- Create images table
CREATE TABLE IF NOT EXISTS images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  url text NOT NULL,
  alt text,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE content_blocks ENABLE ROW LEVEL SECURITY;
ALTER TABLE images ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow read access to all users for content_blocks"
  ON content_blocks
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to update content_blocks"
  ON content_blocks
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow read access to all users for images"
  ON images
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to insert and delete images"
  ON images
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);