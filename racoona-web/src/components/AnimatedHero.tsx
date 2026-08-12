import { motion } from 'framer-motion';

const rawBase = typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env.BASE_URL || '' : '';
const base = rawBase.endsWith('/') ? rawBase.slice(0, -1) : rawBase;

export default function AnimatedHero() {
  return (
    <div className="relative flex flex-col items-start text-left py-12 px-2 max-w-xl z-10">

      {/* Pill Badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-6 px-4 py-1.5 rounded-full border border-slate-200 bg-white shadow-sm"
      >
        <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-semibold">Racoona AI Platform</span>
      </motion.div>

      {/* Main Headline */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-sans tracking-tight mb-6 text-slate-900 leading-tight">
          Technology & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Investment Infrastructure
          </span>
        </h1>
      </motion.div>

      {/* Subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="text-base text-slate-600 max-w-lg mb-8 font-sans leading-relaxed"
      >
        Deploying AI models, managing enterprise cloud infrastructure, and executing data-driven asset operations across corporate divisions.
      </motion.p>

      {/* Button Group */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
      >
        <a href="#sectors" className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-sans font-bold text-sm transition-all duration-300 text-center shadow-sm">
          Explore Capabilities
        </a>
        <a href={`${base}/contact`} className="px-6 py-3.5 rounded-xl border border-slate-200 bg-white text-slate-800 font-sans font-semibold text-sm hover:bg-slate-100 transition-colors text-center shadow-sm">
          Partner With Us
        </a>
      </motion.div>
    </div>
  );
}
