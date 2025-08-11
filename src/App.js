import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer3D from './components/Footer3D';
import PageTransition from './components/PageTransition';
import './pageTransition.css';

const Home = lazy(() => import('./components/Home'));
const ThreeHero = lazy(() => import('./components/ThreeHero'));
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Quote = lazy(() => import('./components/Quote'));
const Contact = lazy(() => import('./components/Contact'));
const Blog = lazy(() => import('./components/Blog'));
const BlogArticle = lazy(() => import('./components/BlogArticle'));
const FAQ = lazy(() => import('./components/FAQ'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Team = lazy(() => import('./components/Team'));
const Careers = lazy(() => import('./components/Careers'));
const NotFound = lazy(() => import('./components/NotFound'));

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <PageTransition locationKey={location.pathname}>
      <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogArticle />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/team" element={<Team />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </PageTransition>
  );
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <AnimatedRoutes />
        </main>
        <Footer3D />
      </div>
    </Router>
  );
}

export default App;
