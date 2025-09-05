import React from 'react';
import { Link } from 'react-router-dom';

const Footer3D = () => (
  <footer className="bg-gradient-to-r from-blue-900 via-amber-800 to-blue-900 text-white py-10 w-full">
    <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
      <div>
        <h3 className="font-extrabold text-2xl mb-2 tracking-widest text-white">NYOHAKI</h3>
        <p className="text-blue-100 mb-3">Professional services for your secure future.</p>
        <div className="flex gap-3 mt-2">
          <a href="#" aria-label="X (Twitter)" className="hover:text-blue-400"><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M17.53 2.47a2.5 2.5 0 0 1 3.54 3.54L15.54 11l5.53 5.53a2.5 2.5 0 0 1-3.54 3.54L12 15.54l-5.53 5.53a2.5 2.5 0 0 1-3.54-3.54L8.46 13 2.93 7.47a2.5 2.5 0 0 1 3.54-3.54L12 8.46l5.53-5.99z"/></svg></a>
          <a href="#" aria-label="Facebook" className="hover:text-blue-400"><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.597 0 0 .592 0 1.326v21.348C0 23.406.597 24 1.326 24H12.82v-9.294H9.692V11.01h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.696h-3.12V24h6.116C23.403 24 24 23.406 24 22.674V1.326C24 .592 23.403 0 22.675 0"/></svg></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-blue-400"><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452H17.21v-5.569c0-1.327-.025-3.037-1.849-3.037-1.851 0-2.132 1.445-2.132 2.939v5.667h-3.238V9h3.105v1.561h.044c.434-.82 1.494-1.684 3.073-1.684 3.287 0 3.892 2.164 3.892 4.977v6.598zM5.337 7.433a1.87 1.87 0 1 1 0-3.738 1.87 1.87 0 0 1 0 3.738zm1.619 13.019H3.719V9h3.237v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.549C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.271V1.723C24 .771 23.2 0 22.225 0z"/></svg></a>
        </div>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Quick Links</h4>
        <ul className="space-y-1">
          <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-300">About</Link></li>
          <li><Link to="/services" className="hover:text-blue-300">Services</Link></li>
          <li><Link to="/quote" className="hover:text-blue-300">Get a Quote</Link></li>
          <li><Link to="/blog" className="hover:text-blue-300">Blog</Link></li>
          <li><Link to="/faq" className="hover:text-blue-300">FAQ</Link></li>
          <li><Link to="/contact" className="hover:text-blue-300">Contact</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Newsletter</h4>
        <form className="flex flex-col gap-2" onSubmit={e=>{e.preventDefault();alert('Subscribed!')}}>
          <input type="email" required placeholder="Your email" className="px-3 py-2 rounded-lg text-dark focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <button type="submit" className="mt-1 px-5 py-2 bg-gradient-to-r from-blue-600 via-amber-500 to-blue-400 text-white font-bold rounded-lg shadow hover:scale-105 transition-transform">Subscribe</button>
        </form>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Contact</h4>
        <p className="text-blue-100">Washington, USA</p>
        <p className="text-blue-100 mt-2">info@nyohaki.com</p>
        <p className="text-blue-100 mt-1">+1 (253) 268-0427</p>
      </div>
    </div>
    <div className="text-center text-blue-200 mt-8">&copy; {new Date().getFullYear()} <span className="font-extrabold tracking-widest">NYOHAKI</span>. All rights reserved.</div>
  </footer>
);

export default Footer3D;
