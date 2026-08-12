import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function InferencePipeline() {
  const [activeNode, setActiveNode] = useState<string | null>('model');
  const [isSimulating, setIsSimulating] = useState(true);

  return (
    <div className="relative w-full overflow-hidden bg-zinc-950/90 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-[0_0_50px_rgba(6,182,212,0.08)]">

      {/* Top Console Header Bar */}
      <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          </div>
          <span className="text-xs font-mono text-zinc-400 pl-2">racoona-ai // inference-pipeline-v2.orchestrator</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-[11px] font-mono text-emerald-400 font-semibold">Active Stream</span>
          </div>
          <button
            onClick={() => setIsSimulating(!isSimulating)}
            className="text-xs font-mono text-zinc-400 hover:text-cyan-400 transition-colors px-2 py-1 bg-zinc-900 border border-zinc-800 rounded"
          >
            {isSimulating ? 'Pause' : 'Replay'}
          </button>
        </div>
      </div>

      {/* Pipeline Visualization Canvas */}
      <div className="relative w-full h-[360px] sm:h-[400px] flex items-center justify-between px-2 sm:px-6">

        {/* Background Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b15_1px,transparent_1px),linear-gradient(to_bottom,#18181b15_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

        {/* Node 1: Input Trigger */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onMouseEnter={() => setActiveNode('input')}
          className={`relative z-10 w-36 sm:w-44 p-4 rounded-xl border transition-all duration-300 cursor-pointer ${activeNode === 'input'
            ? 'border-cyan-400 bg-cyan-500/10 shadow-[0_0_20px_rgba(6,182,212,0.2)]'
            : 'border-zinc-800 bg-zinc-900/90 hover:border-zinc-700'
            }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono uppercase text-zinc-500 tracking-wider">Source</span>
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
          </div>
          <h4 className="text-xs font-mono font-bold text-zinc-200">API Gateway</h4>
          <p className="text-[11px] font-mono text-zinc-400 mt-1">/v1/chat/completions</p>
          <div className="mt-3 pt-2 border-t border-zinc-800/80 flex items-center justify-between text-[10px] font-mono text-zinc-500">
            <span>Latency</span>
            <span className="text-cyan-400">1.2ms</span>
          </div>
        </motion.div>

        {/* Connecting SVG Path 1 (Input to Model) */}
        <svg className="absolute left-[20%] right-[60%] top-0 bottom-0 w-[40%] h-full pointer-events-none z-0">
          <defs>
            <linearGradient id="cyanGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <motion.path
            d="M 10 200 C 60 200, 80 200, 130 200"
            stroke="url(#cyanGlow)"
            strokeWidth="3"
            fill="transparent"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: isSimulating ? 1 : 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
          {/* Animated Pulse Dot */}
          {isSimulating && (
            <motion.circle
              r="4"
              fill="#06b6d4"
              initial={{ offsetDistance: "0%" }}
              animate={{ offsetDistance: "100%" }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              style={{
                offsetPath: "path('M 10 200 C 60 200, 80 200, 130 200')",
              }}
            />
          )}
        </svg>

        {/* Node 2: Central AI Model Engine */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onMouseEnter={() => setActiveNode('model')}
          className={`relative z-10 w-44 sm:w-56 p-5 rounded-xl border transition-all duration-300 cursor-pointer ${activeNode === 'model'
            ? 'border-cyan-400 bg-zinc-900 shadow-[0_0_30px_rgba(6,182,212,0.3)]'
            : 'border-zinc-800 bg-zinc-900/90 hover:border-zinc-700'
            }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono uppercase text-cyan-400 font-bold tracking-wider">Inference Engine</span>
            <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-cyan-500/20 text-cyan-300 font-semibold">vLLM 70B</span>
          </div>
          <h4 className="text-sm font-mono font-bold text-white">Racoona-Llama-3.3</h4>
          <div className="mt-3 space-y-1.5 font-mono text-[11px]">
            <div className="flex justify-between text-zinc-400">
              <span>Throughput</span>
              <span className="text-emerald-400 font-bold">142 tok/s</span>
            </div>
            <div className="flex justify-between text-zinc-400">
              <span>GPU Memory</span>
              <span className="text-cyan-400">92% H100</span>
            </div>
          </div>
        </motion.div>

        {/* Connecting SVG Path 2 (Model to Output) */}
        <svg className="absolute left-[55%] right-[20%] top-0 bottom-0 w-[40%] h-full pointer-events-none z-0">
          <motion.path
            d="M 10 200 C 60 200, 80 200, 130 200"
            stroke="url(#cyanGlow)"
            strokeWidth="3"
            fill="transparent"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: isSimulating ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
          />
          {/* Animated Pulse Dot */}
          {isSimulating && (
            <motion.circle
              r="4"
              fill="#10b981"
              initial={{ offsetDistance: "0%" }}
              animate={{ offsetDistance: "100%" }}
              transition={{ duration: 1.5, delay: 0.5, repeat: Infinity, ease: "linear" }}
              style={{
                offsetPath: "path('M 10 200 C 60 200, 80 200, 130 200')",
              }}
            />
          )}
        </svg>

        {/* Node 3: Streaming Output Stream */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          onMouseEnter={() => setActiveNode('output')}
          className={`relative z-10 w-36 sm:w-44 p-4 rounded-xl border transition-all duration-300 cursor-pointer ${activeNode === 'output'
            ? 'border-emerald-400 bg-emerald-500/10 shadow-[0_0_20px_rgba(16,185,129,0.2)]'
            : 'border-zinc-800 bg-zinc-900/90 hover:border-zinc-700'
            }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono uppercase text-zinc-500 tracking-wider">Output</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          </div>
          <h4 className="text-xs font-mono font-bold text-zinc-200">SSE Stream</h4>
          <p className="text-[11px] font-mono text-emerald-400 mt-1">HTTP 200 OK</p>
          <div className="mt-3 pt-2 border-t border-zinc-800/80 flex items-center justify-between text-[10px] font-mono text-zinc-500">
            <span>TTFT</span>
            <span className="text-emerald-400">18ms</span>
          </div>
        </motion.div>

      </div>

      {/* Live Pipeline Telemetry Footer Bar */}
      <div className="mt-6 pt-4 border-t border-zinc-800/80 flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-zinc-400 gap-2">
        <div className="flex items-center gap-4">
          <span>Status: <span className="text-emerald-400 font-bold">HEALTHY</span></span>
          <span className="hidden sm:inline text-zinc-700">|</span>
          <span>Region: <span className="text-zinc-300">us-east-1 (Ashburn, VA)</span></span>
        </div>
        <div className="text-zinc-500 text-[11px]">
          Hover nodes to inspect live metrics
        </div>
      </div>

    </div>
  );
}
