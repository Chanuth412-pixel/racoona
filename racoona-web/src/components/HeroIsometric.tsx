import React from 'react';
import { motion } from "framer-motion";

export default function HeroIsometric() {
  return (
    <div className="relative w-full h-[520px] sm:h-[600px] flex items-center justify-center font-mono text-xs overflow-visible">

      {/* Main Isometric Container */}
      <div className="relative w-full max-w-[500px] h-[500px] flex flex-col items-center justify-end pb-10">

        {/* Core Vertical Dashed Axis */}
        <div className="absolute left-1/2 top-4 bottom-20 w-px border-l border-dashed border-slate-300 -translate-x-1/2 z-0"></div>

        {/* Animated Data Particles moving up the axis */}
        <motion.div
          className="absolute left-1/2 w-1.5 h-8 bg-blue-600 rounded-full -translate-x-1/2 z-10"
          animate={{ top: ["80%", "10%"], opacity: [0, 1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute left-1/2 w-1.5 h-8 bg-purple-700 rounded-full -translate-x-1/2 z-10"
          animate={{ top: ["80%", "10%"], opacity: [0, 1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 1.2 }}
        />

        {/* --- TOP LAYER: PRODUCTION --- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative z-30 mb-12 flex flex-col items-center"
        >
          {/* Top Label */}
          <div className="mb-4 bg-blue-50 border border-blue-200 text-blue-700 px-4 py-1.5 rounded font-semibold shadow-sm">
            PRODUCTION
          </div>
          {/* 3D Cylinder */}
          <div className="w-[280px] sm:w-[340px] h-[90px] sm:h-[110px] rounded-[50%] border-t border-blue-400/60 border-x border-slate-200 border-b-[6px] border-b-blue-600 bg-white/90 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center justify-center relative">
          </div>
          {/* Floating Metrics Badge */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[200px] sm:left-[310px] top-[30px] sm:top-[40px] bg-white/90 backdrop-blur-md border border-slate-200 text-slate-800 p-2 rounded shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex flex-col gap-1 w-36 sm:w-44 z-40"
          >
            <div className="text-slate-900 bg-slate-100 px-2 py-0.5 rounded border border-slate-200 font-bold">415 REPLICAS</div>
            <div className="text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 font-semibold">75% GPU UTILIZATION</div>
            <div className="text-slate-500 px-2">93 TPS</div>
          </motion.div>
        </motion.div>

        {/* --- MIDDLE LAYER: STAGING --- */}
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-20 mb-12 flex flex-col items-center"
        >
          {/* 3D Cylinder */}
          <div className="w-[210px] sm:w-[260px] h-[70px] sm:h-[85px] rounded-[50%] border-t border-purple-400/50 border-x border-slate-200 border-b-[5px] border-b-purple-600 bg-white/90 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.08)] relative">
          </div>
          {/* Side Label */}
          <div className="absolute left-[160px] sm:left-[240px] top-[15px] sm:top-[20px] bg-white/90 backdrop-blur-md border border-slate-200 text-slate-800 px-3 py-1.5 rounded shadow-[0_8px_30px_rgb(0,0,0,0.08)] font-semibold">
            STAGING
          </div>
        </motion.div>

        {/* --- BOTTOM LAYER: DEPLOYMENTS --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 flex flex-col items-center"
        >
          {/* Side Label */}
          <div className="absolute -left-[100px] sm:-left-[140px] top-[15px] sm:top-[20px] bg-white/90 backdrop-blur-md border border-slate-200 text-slate-800 px-3 py-1.5 rounded shadow-[0_8px_30px_rgb(0,0,0,0.08)] font-semibold">
            DEPLOYMENTS
          </div>
          {/* 3D Cylinder */}
          <div className="w-[160px] sm:w-[200px] h-[55px] sm:h-[65px] rounded-[50%] border-t border-teal-400/50 border-x border-slate-200 border-b-[4px] border-b-teal-600 bg-white/90 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.08)] relative">
          </div>
        </motion.div>

        {/* Incoming Traffic Indicator (Left Side) */}
        <div className="absolute -left-4 sm:-left-10 bottom-[140px] flex items-center gap-2">
          <motion.div
            animate={{ x: [-10, 0, -10], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex gap-1"
          >
            <div className="w-2 h-2 bg-teal-600 rotate-45"></div>
            <div className="w-2 h-2 bg-teal-600 rotate-45"></div>
            <div className="w-2 h-2 bg-teal-500 rotate-45"></div>
          </motion.div>
          <div className="bg-white border border-slate-200 text-slate-700 px-2 py-1 rounded shadow-[0_8px_30px_rgb(0,0,0,0.08)] font-semibold">
            3000 REQUESTS/M
          </div>
        </div>

      </div>
    </div>
  );
}
