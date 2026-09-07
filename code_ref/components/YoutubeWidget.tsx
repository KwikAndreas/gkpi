import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  getLiveStreamVideoId,
  getLatestVideos,
  getChannelInfo,
  type ChannelInfo,
} from "../api/YoutubeWidget";

const YoutubeWidget: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [channelInfo, setChannelInfo] = useState<ChannelInfo | null>(null);
  const [liveVideoId, setLiveVideoId] = useState<string | null>(null);
  const [latestVideos, setLatestVideos] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const channel = await getChannelInfo();
        setChannelInfo(channel);

        const liveId = await getLiveStreamVideoId();
        // console.log("Live video ID:", liveId);
        setLiveVideoId(liveId);

        if (!liveId) {
          const videos = await getLatestVideos();
          // console.log("Latest videos:", videos);
          setLatestVideos(videos);
        }
      } catch (error) {
        console.error("Failed to fetch YouTube data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="text-center text-gray-500 py-10">
        Memuat video dari YouTube...
      </div>
    );
  }

  if (!channelInfo) {
    return (
      <div className="text-center text-red-500 py-10">Gagal Memuat Youtube</div>
    );
  }

  if (!liveVideoId && latestVideos.length === 0) {
    return (
      <div className="text-center text-gray-500">
        Tidak ada video tersedia saat ini.
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6 md:space-y-8 mt-2">
      {/* Channel Info Card - Improved Layout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-gradient-to-r from-white to-gray-50 dark:from-zinc-800 dark:to-zinc-900 rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6">
          {/* Channel Avatar */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src={channelInfo.thumbnails.high.url}
              alt={channelInfo.title}
              className="w-20 h-20 md:w-28 md:h-28 rounded-full ring-4 shadow-lg object-cover"
              style={{ borderColor: "rgb(206, 146, 38)" }}
            />
          </motion.div>

          {/* Channel Info */}
          <div className="flex-grow text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 mb-2">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white text-center md:text-left">
                {channelInfo.title}
              </h2>
              <svg
                className="w-6 h-6 text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-red-100 text-red-700">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                {Number(channelInfo.subscriberCount).toLocaleString()}{" "}
                Subscribers
              </span>
              {channelInfo.customUrl && (
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {channelInfo.customUrl}
                </span>
              )}
            </div>

            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4 max-w-2xl">
              {channelInfo.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start w-full mt-2 md:mt-0">
              <motion.a
                href={
                  channelInfo.customUrl
                    ? `https://www.youtube.com/${channelInfo.customUrl}`
                    : `https://www.youtube.com/channel/UCrRdYLwFJ-siHD0V_BqSl4Q`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-6 py-3 md:px-8 rounded-xl font-bold text-white shadow-lg overflow-hidden transition-all duration-300 w-full sm:w-auto"
                style={{ backgroundColor: "rgb(206, 146, 38)" }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Shine effect */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 group-hover:translate-x-full transition-all duration-700"></span>

                {/* Icon */}
                <svg
                  className="w-5 h-5 mr-2 transform group-hover:rotate-12 transition-transform duration-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="relative z-10">Kunjungi Channel</span>

                {/* Arrow */}
                <svg
                  className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </motion.a>

              <motion.a
                href={
                  channelInfo.customUrl
                    ? `https://www.youtube.com/${channelInfo.customUrl}?sub_confirmation=1`
                    : `https://www.youtube.com/channel/UCrRdYLwFJ-siHD0V_BqSl4Q?sub_confirmation=1`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-6 py-3 md:px-8 rounded-xl font-bold bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg overflow-hidden transition-all duration-300 hover:shadow-red-500/50 w-full sm:w-auto"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Shine effect */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -skew-x-12 group-hover:translate-x-full transition-all duration-700"></span>

                {/* YouTube Icon */}
                <svg
                  className="w-6 h-6 mr-2 transform group-hover:scale-110 transition-transform duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>

                <span className="relative z-10">Subscribe</span>

                {/* Bell Icon */}
                <svg
                  className="w-4 h-4 ml-2 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Video Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {liveVideoId ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="col-span-3 aspect-video"
          >
            <iframe
              className="w-full h-full rounded-xl shadow-xl"
              src={`https://www.youtube.com/embed/${liveVideoId}?autoplay=1`}
              title="Live Stream"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </motion.div>
        ) : (
          latestVideos.map((videoId, index) => (
            <motion.a
              key={videoId}
              href={`https://www.youtube.com/watch?v=${videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="aspect-video block group"
            >
              <div className="relative w-full h-0 pb-[56.25%] rounded-lg shadow-md overflow-hidden">
                <img
                  src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                  alt="YouTube Video"
                  className="absolute top-0 left-0 w-full h-full object-cover group-hover:brightness-90 transition"
                />
                <span className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-white opacity-80"
                    fill="currentColor"
                    viewBox="0 0 84 84"
                  >
                    <circle
                      cx="42"
                      cy="42"
                      r="42"
                      fill="#000"
                      fillOpacity="0.4"
                    />
                    <polygon points="34,26 62,42 34,58" fill="#fff" />
                  </svg>
                </span>
              </div>
            </motion.a>
          ))
        )}
      </div>
    </div>
  );
};

export default YoutubeWidget;
