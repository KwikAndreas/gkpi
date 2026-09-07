import { useState, useEffect } from "react";
import { supabase } from "../api/supabase";

export interface SEOMetadata {
  id: number;
  content_type: "artikel" | "berita" | "kegiatan";
  content_id: number;
  title: string;
  description?: string;
  keywords?: string;
  image_url?: string;
  canonical_url: string;
  og_title?: string;
  og_description?: string;
  og_image?: string;
  og_type?: string;
  twitter_title?: string;
  twitter_description?: string;
  twitter_image?: string;
  author?: string;
  published_time?: string;
  modified_time?: string;
  schema_type?: string;
  created_at?: string;
  updated_at?: string;
}

export const useSEOMetadata = (
  contentType: "artikel" | "berita" | "kegiatan",
  contentId: number | null
) => {
  const [metadata, setMetadata] = useState<SEOMetadata | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!contentId || !contentType) {
      setMetadata(null);
      return;
    }

    const fetchMetadata = async () => {
      setLoading(true);
      setError(null);

      try {
        const { data, error } = await supabase
          .from("seo_metadata")
          .select("*")
          .eq("content_type", contentType)
          .eq("content_id", contentId)
          .maybeSingle();

        if (error) {
          // Handle different error types gracefully
          if (error.code === "PGRST116") {
            // Not found - this is okay, use defaults
            setMetadata(null);
          } else if (error.code === "42P01" || error.message.includes("406")) {
            // Table doesn't exist or permission denied - log warning but don't break app
            console.warn(
              "SEO metadata table not accessible, using defaults:",
              error.message
            );
            setMetadata(null);
          } else {
            // Other errors
            throw error;
          }
        } else {
          setMetadata(data || null);
        }
      } catch (err: any) {
        // Graceful fallback - log error but don't break the app
        console.warn("SEO Metadata fetch error (using defaults):", err.message);
        setMetadata(null);
        setError(null); // Don't set error to avoid breaking the UI
      } finally {
        setLoading(false);
      }
    };

    fetchMetadata();
  }, [contentType, contentId]);

  return { metadata, loading, error };
};

export const useSEOMetadataList = (
  contentType: "artikel" | "berita" | "kegiatan",
  contentIds: number[]
) => {
  const [metadataList, setMetadataList] = useState<SEOMetadata[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!contentIds.length || !contentType) {
      setMetadataList([]);
      return;
    }

    const fetchMetadataList = async () => {
      setLoading(true);
      setError(null);

      try {
        const { data, error } = await supabase
          .from("seo_metadata")
          .select("*")
          .eq("content_type", contentType)
          .in("content_id", contentIds);

        if (error) {
          // Handle different error types gracefully
          if (error.code === "42P01" || error.message.includes("406")) {
            // Table doesn't exist or permission denied - log warning but don't break app
            console.warn(
              "SEO metadata table not accessible, using defaults:",
              error.message
            );
            setMetadataList([]);
          } else {
            throw error;
          }
        } else {
          setMetadataList(data || []);
        }
      } catch (err: any) {
        // Graceful fallback - log error but don't break the app
        console.warn(
          "SEO Metadata list fetch error (using defaults):",
          err.message
        );
        setMetadataList([]);
        setError(null); // Don't set error to avoid breaking the UI
      } finally {
        setLoading(false);
      }
    };

    fetchMetadataList();
  }, [contentType, contentIds]);

  return { metadataList, loading, error };
};
