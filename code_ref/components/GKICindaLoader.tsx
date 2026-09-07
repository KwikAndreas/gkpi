import React from "react";
import { motion } from "framer-motion";

interface GKICindaLoaderProps {
  size?: number;
  className?: string;
}

const GKICindaLoader: React.FC<GKICindaLoaderProps> = ({
  size = 100,
  className = "",
}) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <motion.svg
        width={size}
        height={size * 1.1}
        viewBox="0 0 400 450"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Left pillar with horizontal lines */}
        <motion.g>
          {Array.from({ length: 30 }).map((_, i) => {
            const y = 350 - i * 11.5;
            const leftX = 30 + i * 2.3;
            const width = 50 - i * 1.5;
            return (
              <motion.line
                key={`left-pillar-${i}`}
                x1={leftX}
                y1={y}
                x2={leftX + width}
                y2={y}
                stroke="#00BCD4"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  pathLength: { duration: 1.5, delay: i * 0.015 },
                  opacity: { duration: 0.3, delay: i * 0.015 },
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 0.5,
                }}
              />
            );
          })}
        </motion.g>

        {/* Right pillar with horizontal lines */}
        <motion.g>
          {Array.from({ length: 30 }).map((_, i) => {
            const y = 350 - i * 11.5;
            const rightX = 370 - i * 2.3;
            const width = 50 - i * 1.5;
            return (
              <motion.line
                key={`right-pillar-${i}`}
                x1={rightX - width}
                y1={y}
                x2={rightX}
                y2={y}
                stroke="#00BCD4"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  pathLength: { duration: 1.5, delay: i * 0.015 },
                  opacity: { duration: 0.3, delay: i * 0.015 },
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 0.5,
                }}
              />
            );
          })}
        </motion.g>

        {/* Center triangle with horizontal lines */}
        <motion.g>
          {Array.from({ length: 35 }).map((_, i) => {
            const y = 350 - i * 10;
            const centerWidth = 70 - i * 1.8;
            return (
              <motion.line
                key={`center-${i}`}
                x1={200 - centerWidth / 2}
                y1={y}
                x2={200 + centerWidth / 2}
                y2={y}
                stroke="#00BCD4"
                strokeWidth="4.5"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  pathLength: { duration: 1.5, delay: i * 0.02 },
                  opacity: { duration: 0.3, delay: i * 0.02 },
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 0.5,
                }}
              />
            );
          })}
        </motion.g>

        {/* Cross - animated with scale pulse */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [1, 1.08, 1], opacity: 1 }}
          transition={{
            scale: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
            opacity: { duration: 0.5, delay: 0.5 },
          }}
        >
          {/* Vertical part of cross */}
          <rect x="190" y="60" width="20" height="100" fill="#E53935" rx="3" />
          {/* Horizontal part of cross */}
          <rect x="160" y="90" width="80" height="20" fill="#E53935" rx="3" />
        </motion.g>

        {/* Wavy ribbon banners */}
        <motion.g>
          {/* Top ribbon with wave */}
          <motion.path
            d="M 80 180 Q 85 175 90 180 Q 95 185 100 180 Q 140 180 180 180 Q 220 180 260 180 Q 300 180 310 180 Q 315 185 320 180 Q 325 175 330 180 L 340 195 Q 330 195 325 200 Q 320 205 325 210 L 330 220 L 70 220 L 75 210 Q 80 205 75 200 Q 70 195 60 195 Z"
            fill="#E53935"
            stroke="#C62828"
            strokeWidth="2"
            initial={{ pathLength: 0, fillOpacity: 0 }}
            animate={{ pathLength: 1, fillOpacity: 1 }}
            transition={{
              pathLength: { duration: 1.2, delay: 0.8 },
              fillOpacity: { duration: 0.4, delay: 1.5 },
            }}
          />

          {/* Bottom ribbon with wave */}
          <motion.path
            d="M 60 240 Q 65 235 70 240 Q 75 245 80 240 Q 120 240 160 240 Q 200 240 240 240 Q 280 240 320 240 Q 325 245 330 240 Q 335 235 340 240 L 350 255 Q 340 255 335 260 Q 330 265 335 270 L 340 280 L 50 280 L 55 270 Q 60 265 55 260 Q 50 255 40 255 Z"
            fill="#E53935"
            stroke="#C62828"
            strokeWidth="2"
            initial={{ pathLength: 0, fillOpacity: 0 }}
            animate={{ pathLength: 1, fillOpacity: 1 }}
            transition={{
              pathLength: { duration: 1.2, delay: 1 },
              fillOpacity: { duration: 0.4, delay: 1.7 },
            }}
          />
        </motion.g>

        {/* Base platforms with horizontal lines */}
        <motion.g>
          {/* Left base */}
          {Array.from({ length: 4 }).map((_, i) => (
            <motion.rect
              key={`left-base-${i}`}
              x="20"
              y={360 + i * 8}
              width="160"
              height="5"
              fill="#00BCD4"
              rx="1"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 1.2 + i * 0.1 }}
            />
          ))}

          {/* Right base */}
          {Array.from({ length: 4 }).map((_, i) => (
            <motion.rect
              key={`right-base-${i}`}
              x="220"
              y={360 + i * 8}
              width="160"
              height="5"
              fill="#00BCD4"
              rx="1"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 1.2 + i * 0.1 }}
            />
          ))}
        </motion.g>

        {/* Text "CIPINANG INDAH" */}
        <motion.text
          x="200"
          y="420"
          textAnchor="middle"
          fontSize="24"
          fontWeight="bold"
          fill="#333"
          letterSpacing="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.8, 1] }}
          transition={{
            duration: 2.5,
            delay: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          CIPINANG INDAH
        </motion.text>
      </motion.svg>

      {/* Loading text */}
      <motion.p
        className="mt-3 text-gray-600 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        Memuat...
      </motion.p>
    </div>
  );
};

export default GKICindaLoader;
