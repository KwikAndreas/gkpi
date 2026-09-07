// API base URL - untuk Hostinger gunakan Supabase Edge Functions
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
const API_BASE_URL = `${SUPABASE_URL}/functions/v1/youtube-proxy`;

export interface ChannelInfo {
  title: string;
  description: string;
  thumbnails: {
    default: { url: string };
    medium: { url: string };
    high: { url: string };
  };
  subscriberCount: string;
  customUrl?: string;
}

export const getChannelInfo = async (): Promise<ChannelInfo | null> => {
  try {
    const res = await fetch(`${API_BASE_URL}?action=channel-info`, {
      headers: {
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      console.error(
        "Failed to fetch channel info:",
        res.status,
        res.statusText,
      );
      return null;
    }
    const data = await res.json();
    if (data.error) {
      console.error("API error:", data.error);
      return null;
    }
    return data;
  } catch (error) {
    console.error("Error fetching channel info:", error);
    return null;
  }
};

export const getLiveStreamVideoId = async (): Promise<string | null> => {
  try {
    const res = await fetch(`${API_BASE_URL}?action=live-stream`, {
      headers: {
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      console.error("Failed to fetch live stream:", res.status, res.statusText);
      return null;
    }
    const data = await res.json();
    if (data.error) {
      console.error("API error:", data.error);
      return null;
    }
    return data.videoId;
  } catch (error) {
    console.error("Error fetching live stream:", error);
    return null;
  }
};

export const getLatestVideos = async (maxResults = 3): Promise<string[]> => {
  try {
    const res = await fetch(
      `${API_BASE_URL}?action=latest-videos&maxResults=${maxResults}`,
      {
        headers: {
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          "Content-Type": "application/json",
        },
      },
    );
    if (!res.ok) {
      console.error(
        "Failed to fetch latest videos:",
        res.status,
        res.statusText,
      );
      return [];
    }
    const data = await res.json();
    if (data.error) {
      console.error("API error:", data.error);
      return [];
    }
    return data.videoIds || [];
  } catch (error) {
    console.error("Error fetching latest videos:", error);
    return [];
  }
};
