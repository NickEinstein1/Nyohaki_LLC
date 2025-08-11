import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function useDarkMode() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });
  useEffect(() => {
    const root = window.document.documentElement;
    if (dark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);
  return [dark, setDark];
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useDarkMode();
  return (
    <nav className={`sticky top-0 z-50 bg-white dark:bg-slate-900 shadow flex items-center justify-between px-6 py-4`}>
      <div className="font-extrabold bg-gradient-to-r from-blue-800 to-purple-600 dark:from-blue-200 dark:to-purple-400 bg-clip-text text-transparent text-2xl tracking-widest">NYOHAKI</div>
      <div className="flex items-center gap-4">
        <button
          className="rounded-full p-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-slate-800 dark:to-purple-900/30 hover:from-blue-200 hover:to-purple-200 dark:hover:from-slate-700 dark:hover:to-purple-800/30 transition"
          aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          onClick={() => setDark(d => !d)}
        >
          {dark ? (
            // Sun icon
            <svg width="22" height="22" fill="currentColor" className="text-yellow-400" viewBox="0 0 24 24"><path d="M12 18a6 6 0 100-12 6 6 0 000 12zm0 4a1 1 0 011-1h0a1 1 0 10-2 0h0a1 1 0 011 1zm0-20a1 1 0 011 1h0a1 1 0 10-2 0h0a1 1 0 011-1zm10 10a1 1 0 01-1 1h0a1 1 0 100-2h0a1 1 0 011 1zm-20 0a1 1 0 011 1h0a1 1 0 100-2h0a1 1 0 01-1 1zm16.95 7.07a1 1 0 01-1.41 0h0a1 1 0 111.41-1.41h0a1 1 0 010 1.41zm-13.9 0a1 1 0 010-1.41h0a1 1 0 111.41 1.41h0a1 1 0 01-1.41 0zm13.9-13.14a1 1 0 010 1.41h0a1 1 0 11-1.41-1.41h0a1 1 0 011.41 0zm-13.9 0a1 1 0 011.41 0h0a1 1 0 11-1.41 1.41h0a1 1 0 010-1.41z"/></svg>
          ) : (
            // Moon icon
            <svg width="22" height="22" fill="currentColor" className="text-slate-800 dark:text-blue-100" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"/></svg>
          )}
        </button>
        <button className="md:hidden ml-2" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          <span className="block w-6 h-1 bg-blue-800 dark:bg-blue-200 mb-1"></span>
          <span className="block w-6 h-1 bg-blue-800 dark:bg-blue-200 mb-1"></span>
          <span className="block w-6 h-1 bg-blue-800 dark:bg-blue-200"></span>
        </button>
      </div>
      <ul className={`md:flex gap-8 font-semibold text-blue-700 dark:text-blue-200 ${open ? 'block' : 'hidden'} md:block`}>
        <li><Link to="/" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors" onClick={()=>setOpen(false)}>Home</Link></li>
        <li><Link to="/services" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors" onClick={()=>setOpen(false)}>Services</Link></li>
        <li><Link to="/quote" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors" onClick={()=>setOpen(false)}>Quote</Link></li>
        <li><Link to="/team" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors" onClick={()=>setOpen(false)}>Our Team</Link></li>
        <li><Link to="/careers" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors" onClick={()=>setOpen(false)}>Careers</Link></li>
        <li><Link to="/blog" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors" onClick={()=>setOpen(false)}>Blog</Link></li>
        <li><Link to="/faq" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors" onClick={()=>setOpen(false)}>FAQ</Link></li>
        <li><Link to="/contact" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors" onClick={()=>setOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
