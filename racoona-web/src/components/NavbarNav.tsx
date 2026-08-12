import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface NavItem {
  name: string;
  href: string;
}

interface Props {
  items: NavItem[];
  currentPath: string;
}

export default function NavbarNav({ items, currentPath }: Props) {
  const [activePath, setActivePath] = useState(currentPath);

  useEffect(() => {
    setActivePath(window.location.pathname);

    const handlePageLoad = () => {
      setActivePath(window.location.pathname);
    };

    document.addEventListener('astro:page-load', handlePageLoad);
    window.addEventListener('popstate', handlePageLoad);

    return () => {
      document.removeEventListener('astro:page-load', handlePageLoad);
      window.removeEventListener('popstate', handlePageLoad);
    };
  }, []);

  return (
    <nav className="hidden md:flex items-center gap-1.5 bg-white/90 border border-slate-200 p-1.5 rounded-full shadow-sm relative">
      {items.map((item) => {
        const isActive =
          activePath === item.href ||
          (item.href !== '/' && activePath.startsWith(item.href));

        return (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setActivePath(item.href)}
            className={`relative px-5 py-2 rounded-full text-sm font-sans font-medium transition-colors duration-200 ${isActive ? 'text-white font-semibold' : 'text-slate-600 hover:text-black'
              }`}
          >
            {isActive && (
              <motion.div
                layoutId="activePill"
                className="absolute inset-0 bg-black rounded-full shadow-sm"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className={`relative z-10 ${isActive ? 'text-white font-bold' : ''}`}>
              {item.name}
            </span>
          </a>
        );
      })}
    </nav>
  );
}

