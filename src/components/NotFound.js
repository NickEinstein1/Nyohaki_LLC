import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <section className="flex flex-col items-center justify-center min-h-[60vh] text-center">
    <h1 className="text-6xl font-bold text-blue-800 mb-4">404</h1>
    <p className="text-xl text-blue-600 mb-6">Sorry, the page you are looking for does not exist.</p>
    <Link to="/" className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition font-semibold">Go Home</Link>
  </section>
);

export default NotFound;
