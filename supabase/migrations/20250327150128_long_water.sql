/*
  # Salon Management System Schema

  1. New Tables
    - `services`
      - `id` (uuid, primary key)
      - `name` (text)
      - `description` (text)
      - `price` (decimal)
      - `duration` (integer, minutes)
      - `category` (text)
      - `image_url` (text)
      - `created_at` (timestamp)
      
    - `bookings`
      - `id` (uuid, primary key)
      - `customer_id` (uuid, references auth.users)
      - `service_id` (uuid, references services)
      - `booking_date` (date)
      - `booking_time` (time)
      - `status` (text)
      - `notes` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create services table
CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  price decimal(10,2) NOT NULL,
  duration integer NOT NULL,
  category text NOT NULL,
  image_url text,
  created_at timestamptz DEFAULT now(),
  CONSTRAINT valid_price CHECK (price >= 0),
  CONSTRAINT valid_duration CHECK (duration > 0)
);

-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id uuid REFERENCES auth.users NOT NULL,
  service_id uuid REFERENCES services NOT NULL,
  booking_date date NOT NULL,
  booking_time time NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  notes text,
  created_at timestamptz DEFAULT now(),
  CONSTRAINT valid_status CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled'))
);

-- Enable Row Level Security
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Services policies
CREATE POLICY "Services are viewable by everyone"
  ON services FOR SELECT
  TO public
  USING (true);

-- Bookings policies
CREATE POLICY "Users can view their own bookings"
  ON bookings FOR SELECT
  TO authenticated
  USING (auth.uid() = customer_id);

CREATE POLICY "Users can insert their own bookings"
  ON bookings FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = customer_id);

CREATE POLICY "Users can update their own bookings"
  ON bookings FOR UPDATE
  TO authenticated
  USING (auth.uid() = customer_id)
  WITH CHECK (auth.uid() = customer_id);

-- Insert initial services data
INSERT INTO services (name, description, price, duration, category, image_url) VALUES
  ('Eyebrow Threading', 'Precise eyebrow shaping using threading technique', 10.00, 15, 'Eyebrow & Facial Hair', 'https://images.unsplash.com/photo-1622244099803-75e0b9ca0519'),
  ('Full Body Massage', 'Comprehensive full body relaxation treatment', 59.00, 60, 'Body Massage & Relaxation', 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1'),
  ('Manicure', 'Professional hand care and nail styling', 29.00, 45, 'Manicure & Pedicure', 'https://images.unsplash.com/photo-1610992015732-2449b0bb0a86'),
  ('Brazilian Wax', 'Comprehensive intimate area hair removal', 35.00, 45, 'Waxing Services', 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c'),
  ('Eyelash Extensions', 'Premium eyelash extensions for stunning look', 70.00, 90, 'Eyelash Services', 'https://images.unsplash.com/photo-1618330210807-5bc5e1b649dc');