import React from "react";
import { motion } from "framer-motion";

export default function CloudRouter() {
  // Constant Velocity Timeline (8 equal segments over 10 seconds)
  // Segments: Cube > Hub > Cloud > Hub > Hybrid > Hub > Racoona > Hub > Cube
  const packetTiming = {
    times: [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1],
    duration: 10,
    repeat: Infinity,
    ease: "linear"
  };
  const packetX = [150, 400, 650, 400, 650, 400, 150, 400, 150];
  const packetY = [150, 300, 150, 300, 450, 300, 450, 300, 150];

  // Node 1: YOUR CLOUD (Syncs with Toggle)
  const cloudTiming = { times: [0, 0.125, 0.2, 0.3, 0.375, 1], duration: 10, repeat: Infinity, ease: "easeInOut" };
  const toggleOn = [0, 0, 1, 1, 0, 0];
  const pillMidX = [-40, -40, -55, -55, -40, -40];
  const pillMidY = [-10, -10, -25, -25, -10, -10];
  const pillTopX = [-20, -20, -35, -35, -20, -20];
  const pillTopY = [-5, -5, -35, -35, -5, -5];

  // Node 2: HYBRID (Activates between 0.375 and 0.625 | Peaks at 0.5)
  const hybridTiming = { times: [0, 0.375, 0.45, 0.55, 0.625, 1], duration: 10, repeat: Infinity, ease: "easeInOut" };

  // Node 3: RACOONA (Activates between 0.625 and 0.875 | Peaks at 0.75)
  const racoonaTiming = { times: [0, 0.625, 0.7, 0.8, 0.875, 1], duration: 10, repeat: Infinity, ease: "easeInOut" };

  return (
    <div className="relative w-full max-w-[800px] aspect-[4/3] mx-auto font-mono text-xs text-slate-900 overflow-hidden flex items-center justify-center">

      {/* 100% SVG Canvas to guarantee perfect scaling */}
      <svg viewBox="0 0 800 600" className="absolute inset-0 w-full h-full z-0">

        {/* Connection Paths (Dashed Structural Slate-500 #64748b) */}
        <g stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 6" opacity="0.7">
          <line x1="150" y1="150" x2="400" y2="300" />
          <line x1="400" y1="300" x2="650" y2="150" />
          <line x1="400" y1="300" x2="650" y2="450" />
          <line x1="400" y1="300" x2="150" y2="450" />
        </g>

        {/* --- Data Packet (Solid Emerald-600 #059669) - Placed under Hub Core for seamless passthrough --- */}
        <motion.circle
          r="7"
          fill="#059669"
          stroke="#022c22"
          strokeWidth="2"
          animate={{ cx: packetX, cy: packetY }}
          transition={packetTiming}
        />

        {/* Source Isometric Cube (Top Left) - Light Graphite Theme */}
        <g transform="translate(150, 150) scale(0.6)">
          <polygon points="0,20 50,45 0,70 -50,45" fill="#e2e8f0" stroke="#475569" strokeWidth="2" />
          <polygon points="-50,45 0,70 0,130 -50,105" fill="#cbd5e1" stroke="#475569" strokeWidth="1.5" />
          <polygon points="0,70 50,45 50,105 0,130" fill="#94a3b8" stroke="#475569" strokeWidth="1.5" />
          <motion.polygon points="0,-10 50,15 0,40 -50,15" fill="rgba(148, 163, 184, 0.2)" stroke="#334155" strokeWidth="2"
            animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
        </g>

        {/* Central Orchestration Hub (Paints on top of Data Packet) */}
        <g transform="translate(400, 300)">
          {/* Green Dotted Outer Ring (r=70) */}
          <motion.circle cx="0" cy="0" r="70" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="8 8" opacity="0.8"
            animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
          
          {/* Solid Circle immediately after the green dotted line (r=55) - Bubble vanishes EXACTLY when touching this boundary */}
          <circle cx="0" cy="0" r="55" fill="#f8fafc" stroke="#475569" strokeWidth="3" />
          
          {/* Inner Core Circle (r=40) */}
          <circle cx="0" cy="0" r="40" fill="#e2e8f0" />
          <path d="M-15,-10 L15,-10 L15,0 L-5,0 L-5,10 L15,10" fill="none" stroke="#0f172a" strokeWidth="4" />
        </g>

        {/* --- DYNAMIC TERMINAL NODES --- */}

        {/* Node 1: YOUR CLOUD (Syncs with Toggle) */}
        <g transform="translate(650, 150) rotate(-30)">
          <rect x="-40" y="-10" width="80" height="24" rx="12" fill="none" stroke="#64748b" strokeWidth="1.5" />
          <motion.rect width="80" height="24" rx="12" fill="#cbd5e1" stroke="#64748b" strokeWidth="1"
            animate={{ opacity: toggleOn, x: pillMidX, y: pillMidY }} transition={cloudTiming} />
          <motion.rect width="40" height="14" rx="7" fill="#94a3b8" opacity="0.9"
            animate={{ opacity: toggleOn, x: pillTopX, y: pillTopY }} transition={cloudTiming} />
        </g>

        {/* Node 2: HYBRID */}
        <g transform="translate(650, 450) rotate(-30)">
          <rect x="-40" y="-10" width="80" height="24" rx="12" fill="none" stroke="#64748b" strokeWidth="1.5" />
          <motion.rect width="80" height="24" rx="12" fill="#cbd5e1" stroke="#64748b" strokeWidth="1"
            animate={{ opacity: toggleOn, x: pillMidX, y: pillMidY }} transition={hybridTiming} />
          <motion.rect width="40" height="14" rx="7" fill="#94a3b8" opacity="0.9"
            animate={{ opacity: toggleOn, x: pillTopX, y: pillTopY }} transition={hybridTiming} />
        </g>
        <g transform="translate(650, 520)">
          <rect x="-50" y="-15" width="100" height="30" rx="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
          <text x="0" y="5" fill="#0f172a" fontSize="14" fontFamily="monospace" fontWeight="bold" textAnchor="middle" letterSpacing="1">HYBRID</text>
        </g>

        {/* Node 3: RACOONA */}
        <g transform="translate(150, 450) rotate(-30)">
          <rect x="-40" y="-10" width="80" height="24" rx="12" fill="none" stroke="#64748b" strokeWidth="1.5" />
          <motion.rect width="80" height="24" rx="12" fill="#cbd5e1" stroke="#64748b" strokeWidth="1"
            animate={{ opacity: toggleOn, x: pillMidX, y: pillMidY }} transition={racoonaTiming} />
          <motion.rect width="40" height="14" rx="7" fill="#94a3b8" opacity="0.9"
            animate={{ opacity: toggleOn, x: pillTopX, y: pillTopY }} transition={racoonaTiming} />
        </g>
        <g transform="translate(150, 520)">
          <rect x="-50" y="-15" width="100" height="30" rx="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
          <text x="0" y="5" fill="#0f172a" fontSize="14" fontFamily="monospace" fontWeight="bold" textAnchor="middle" letterSpacing="1">RACOONA</text>
        </g>
      </svg>

      {/* --- HTML YOUR CLOUD TOGGLE (Syncs flawlessly with SVG) --- */}
      <div className="absolute z-10 flex flex-col items-center -translate-x-1/2 -translate-y-1/2 w-max" style={{ left: '81.25%', top: '10%' }}>
        <motion.div
          className="rounded-md shadow-sm flex items-center justify-between px-3 gap-3 h-8 border bg-white"
          animate={{
            borderColor: ["#cbd5e1", "#cbd5e1", "#10b981", "#10b981", "#cbd5e1", "#cbd5e1"]
          }}
          transition={cloudTiming}
        >
          <motion.span
            className="font-mono font-bold text-[10px] tracking-widest text-slate-900"
          >
            YOUR CLOUD
          </motion.span>

          <motion.div
            className="w-7 h-4 rounded-full border relative bg-slate-100 border-slate-300"
            animate={{
              backgroundColor: ["#f1f5f9", "#f1f5f9", "#ecfdf5", "#ecfdf5", "#f1f5f9", "#f1f5f9"],
              borderColor: ["#cbd5e1", "#cbd5e1", "#10b981", "#10b981", "#cbd5e1", "#cbd5e1"]
            }}
            transition={cloudTiming}
          >
            <motion.div
              className="absolute top-[1px] w-3 h-3 rounded-full"
              animate={{
                backgroundColor: ["#94a3b8", "#94a3b8", "#10b981", "#10b981", "#94a3b8", "#94a3b8"],
                left: ["1px", "1px", "13px", "13px", "1px", "1px"]
              }}
              transition={cloudTiming}
            />
          </motion.div>
        </motion.div>
      </div>

    </div>
  );
}
