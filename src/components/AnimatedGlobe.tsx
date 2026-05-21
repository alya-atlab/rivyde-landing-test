import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { palette } from "../theme";

const dots = [
  [212, 92], [226, 104], [242, 112], [260, 124], [276, 140], [290, 158],
  [210, 120], [230, 132], [252, 148], [272, 166], [288, 188], [298, 212],
  [180, 130], [204, 146], [226, 164], [246, 184], [266, 206], [282, 230],
  [162, 166], [184, 182], [206, 200], [228, 220], [250, 242], [270, 266],
  [150, 202], [172, 218], [196, 236], [220, 254], [246, 274], [274, 292],
  [164, 242], [190, 258], [218, 276], [246, 292], [276, 306], [306, 318],
  [200, 302], [228, 316], [258, 326], [290, 334], [324, 338], [356, 338],
  [314, 96], [338, 112], [362, 132], [384, 158], [402, 188], [414, 220],
  [338, 84], [368, 96], [398, 116], [424, 144], [444, 178], [454, 216],
  [380, 88], [410, 104], [438, 130], [460, 164], [474, 204], [480, 248],
  [422, 108], [450, 136], [470, 174], [482, 218], [484, 264], [476, 306],
  [248, 76], [284, 72], [320, 72], [356, 76], [392, 84], [426, 100],
  [232, 344], [270, 358], [312, 366], [354, 366], [394, 358], [432, 342],
];

const latitudePaths = [
  "M94 180 C190 120 402 120 498 180",
  "M72 238 C178 196 414 196 520 238",
  "M86 300 C188 336 404 336 506 300",
];

const orbitPaths = [
  "M38 188 C166 40 442 34 555 166",
  "M66 350 C190 488 472 452 544 270",
  "M120 116 C260 222 404 294 530 394",
];

export default function AnimatedGlobe() {
  return (
    <Box
      aria-hidden="true"
      sx={{
        position: "absolute",
        right: { xs: -190, md: -98, lg: -2 },
        top: { xs: 36, md: 54, lg: 8 },
        width: { xs: 330, sm: 420, md: 520, lg: 560 },
        height: { xs: 330, sm: 420, md: 520, lg: 560 },
        pointerEvents: "none",
        opacity: { xs: 0.32, md: 0.9 },
        zIndex: 0,
      }}
    >
      <motion.svg
        viewBox="0 0 560 560"
        width="100%"
        height="100%"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <defs>
          <radialGradient id="globeGlow" cx="48%" cy="46%" r="56%">
            <stop offset="0%" stopColor="rgba(85,242,245,0.34)" />
            <stop offset="58%" stopColor="rgba(33,166,200,0.12)" />
            <stop offset="100%" stopColor="rgba(33,166,200,0)" />
          </radialGradient>
          <linearGradient id="globeLine" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="rgba(85,242,245,0.12)" />
            <stop offset="52%" stopColor="rgba(85,242,245,0.62)" />
            <stop offset="100%" stopColor="rgba(85,242,245,0.1)" />
          </linearGradient>
        </defs>

        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "280px 280px" }}
        >
          {orbitPaths.map((path, index) => (
            <path
              key={path}
              d={path}
              fill="none"
              stroke="url(#globeLine)"
              strokeWidth="1.2"
              opacity={0.38 + index * 0.12}
            />
          ))}
          {[0, 1, 2, 3].map((index) => {
            const cx = [112, 498, 468, 140][index];
            const cy = [138, 182, 402, 356][index];
            return (
              <motion.circle
                key={index}
                cx={cx}
                cy={cy}
                r="4"
                fill={palette.cyan}
                animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.3, 0.9] }}
                transition={{ duration: 2.4, delay: index * 0.45, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformOrigin: `${cx}px ${cy}px` }}
              />
            );
          })}
        </motion.g>

        <motion.g
          animate={{ x: [-10, 10, -10] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle cx="332" cy="256" r="178" fill="url(#globeGlow)" />
          <circle cx="332" cy="256" r="178" fill="none" stroke="rgba(85,242,245,0.22)" strokeWidth="1" />
          {latitudePaths.map((path) => (
            <path key={path} d={path} fill="none" stroke="rgba(85,242,245,0.2)" strokeWidth="1" />
          ))}
          {[238, 286, 334, 382, 430].map((x) => (
            <path
              key={x}
              d={`M${x} 88 C${x - 58} 170 ${x - 58} 342 ${x} 428`}
              fill="none"
              stroke="rgba(85,242,245,0.16)"
              strokeWidth="1"
            />
          ))}
          {dots.map(([cx, cy], index) => (
            <motion.circle
              key={`${cx}-${cy}`}
              cx={cx}
              cy={cy}
              r={index % 5 === 0 ? 1.8 : 1.3}
              fill={palette.cyan}
              opacity="0.72"
              animate={{ opacity: [0.28, 0.95, 0.42] }}
              transition={{ duration: 2.8, delay: (index % 12) * 0.12, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </motion.g>
      </motion.svg>
    </Box>
  );
}
