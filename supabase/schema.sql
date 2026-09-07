-- Placeholder SQL schema for GKPI website
-- This is intended to be overwritten in future iterations when Supabase is fully set up.

-- Create table for Warta Jemaat
CREATE TABLE IF NOT EXISTS warta (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    content TEXT,
    pdf_url TEXT,
    is_active BOOLEAN DEFAULT false,
    published_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create table for Renungan
CREATE TABLE IF NOT EXISTS renungan (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    content TEXT,
    author VARCHAR(100),
    is_active BOOLEAN DEFAULT false,
    published_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Example policies (assuming RLS is enabled later)
-- ALTER TABLE warta ENABLE ROW LEVEL SECURITY;
-- CREATE POLICY "Public Warta are viewable by everyone." ON warta FOR SELECT USING (true);
