import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as THREE from 'three';

function hasWebGL() {
  try {
    const canvas = document.createElement('canvas');
    return !!window.WebGLRenderingContext && (
      canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    );
  } catch (e) { return false; }
}

const ThreeHero = () => {
  const ref = useRef();
  useEffect(() => {
    if (!hasWebGL()) return;
    let renderer, scene, camera, globe, shield, icons = [], particles = [], animationId;
    const width = ref.current.clientWidth || 480, height = ref.current.clientHeight || 420;
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    ref.current.appendChild(renderer.domElement);
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(70, width/height, 0.1, 1000);
    camera.position.z = 4.2;
    // Globe
    const geometry = new THREE.SphereGeometry(1, 48, 48);
    const material = new THREE.MeshPhysicalMaterial({ color: '#2563eb', metalness: 0.25, roughness: 0.5, clearcoat: 1, clearcoatRoughness: 0.1 });
    globe = new THREE.Mesh(geometry, material);
    globe.position.set(0, 0.2, 0);
    scene.add(globe);
    // Glowing Shield (protection)
    const shieldGeom = new THREE.TorusGeometry(1.3, 0.08, 24, 100);
    const shieldMat = new THREE.MeshBasicMaterial({ color: '#0ea5e9', transparent: true, opacity: 0.7 });
    shield = new THREE.Mesh(shieldGeom, shieldMat);
    shield.position.set(0, 0.2, 0);
    scene.add(shield);
    // Floating 3D Icons (insurance types)
    const iconColors = ['#10b981', '#d4af37', '#3b82f6', '#f59e0b'];
    const iconShapes = [
      new THREE.SphereGeometry(0.18, 24, 24),    // Health (green)
      new THREE.BoxGeometry(0.22, 0.22, 0.22),   // Home (orange)
      new THREE.ConeGeometry(0.18, 0.32, 24),    // Auto (blue)
      new THREE.TorusGeometry(0.16, 0.06, 16, 32) // Life (pink)
    ];
    for (let i = 0; i < 4; i++) {
      const mat = new THREE.MeshStandardMaterial({ color: iconColors[i], metalness: 0.5, roughness: 0.3 });
      const mesh = new THREE.Mesh(iconShapes[i], mat);
      mesh.position.set(Math.cos(i * Math.PI/2) * 1.8, 0.6 + Math.sin(i * Math.PI/2) * 1.1, 0.3);
      scene.add(mesh);
      icons.push(mesh);
    }
    // Subtle Particles
    for (let i = 0; i < 40; i++) {
      const geo = new THREE.SphereGeometry(Math.random()*0.04+0.01, 8, 8);
      const mat = new THREE.MeshBasicMaterial({ color: '#fff', transparent: true, opacity: 0.25 });
      const particle = new THREE.Mesh(geo, mat);
      const phi = Math.random()*2*Math.PI;
      const theta = Math.random()*Math.PI;
      const r = 2.2 + Math.random()*0.5;
      particle.position.set(
        r * Math.sin(theta) * Math.cos(phi),
        r * Math.sin(theta) * Math.sin(phi),
        r * Math.cos(theta)
      );
      scene.add(particle);
      particles.push(particle);
    }
    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 1.1));
    const blueLight = new THREE.PointLight('#2563eb', 0.7, 8);
    blueLight.position.set(2, 2, 2);
    scene.add(blueLight);
    // Animation
    function animate() {
      globe.rotation.y += 0.006;
      shield.rotation.z += 0.012;
      // Icons bobbing
      icons.forEach((icon, i) => {
        icon.position.y = 0.6 + Math.sin(Date.now()/600 + i * Math.PI/2) * 0.18;
        icon.rotation.y += 0.02;
      });
      // Particles float
      particles.forEach((p, i) => {
        p.position.x += Math.sin(Date.now()/1000 + i) * 0.0005;
        p.position.y += Math.cos(Date.now()/1200 + i) * 0.0005;
      });
      renderer.setClearColor(document.documentElement.classList.contains('dark') ? 0x0f172a : 0xf1f5f9, 0);
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    }
    animate();
    return () => {
      cancelAnimationFrame(animationId);
      renderer.dispose();
      if (ref.current) {
        while (ref.current.firstChild) ref.current.removeChild(ref.current.firstChild);
      }
    };
  }, []);
  return (
    <section id="home" className="relative flex flex-col md:flex-row items-center justify-center min-h-[60vh] bg-gradient-to-br from-blue-100 via-amber-50 to-white dark:from-slate-900 dark:via-amber-900/20 dark:to-slate-800 py-10 px-2 md:px-8">
      <div className="flex-shrink-0 mx-auto md:mx-0 md:mr-10" style={{width:'380px',height:'340px',maxWidth:'100%'}}>
        <div ref={ref} aria-hidden="true" className="rounded-xl shadow-xl dark:shadow-blue-900/40 w-full h-full"></div>
      </div>
      <div className="flex-1 flex flex-col items-center md:items-start justify-center mt-8 md:mt-0 z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-800 dark:text-blue-100 mb-4 text-center md:text-left drop-shadow-lg">Professional Services, <span className="text-amber-600 dark:text-amber-400">Reimagined</span></h1>
        <p className="text-lg md:text-xl text-blue-700 dark:text-blue-200 text-center md:text-left max-w-2xl mb-6">AI-powered solutions, custom software development, financial planning, and comprehensive business services. Experience cutting-edge technology and expert guidance tailored to accelerate your business growth and success—brought to life through our interactive customer based service. Discover why we’re the best choice for your future.</p>
        <div className="flex justify-center md:justify-start w-full">
          <Link to="/quote" className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-amber-500 hover:from-blue-700 hover:to-amber-600 text-white font-bold rounded-lg shadow-lg transition-all text-lg">Get Started</Link>
        </div>
      </div>
      {/* Featured Services Section */}
      <div className="w-full bg-gradient-to-r from-blue-50 via-amber-50 to-blue-100 dark:from-slate-800 dark:via-amber-900/10 dark:to-slate-900 py-10 px-4 md:px-12 flex flex-col lg:flex-row items-center justify-center gap-8 mt-8">
        <div className="flex-1 max-w-sm bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 flex flex-col items-center md:items-start mb-6 lg:mb-0">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-amber-500 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-200 mb-2">AI Engineering</h2>
          <p className="text-gray-700 dark:text-gray-100 mb-4">Transform your business with intelligent automation, machine learning solutions, and AI-powered analytics. We help you harness artificial intelligence to optimize operations and drive innovation.</p>
          <Link to="/services" className="inline-block mt-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-amber-500 hover:from-blue-700 hover:to-amber-600 text-white font-semibold rounded-lg shadow transition-all">Explore AI Solutions</Link>
        </div>
        <div className="flex-1 max-w-sm bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 flex flex-col items-center md:items-start mb-6 lg:mb-0">
          <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-amber-700 dark:text-amber-300 mb-2">Software Engineering</h2>
          <p className="text-gray-700 dark:text-gray-100 mb-4">Custom software development, web applications, and system integration solutions. We build scalable, secure, and user-friendly applications tailored to your specific business requirements.</p>
          <Link to="/services" className="inline-block mt-2 px-6 py-2 bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-semibold rounded-lg shadow transition-all">View Development Services</Link>
        </div>
        <div className="flex-1 max-w-sm bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 flex flex-col items-center md:items-start">
          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-green-700 dark:text-green-300 mb-2">Financial Planning</h2>
          <p className="text-gray-700 dark:text-gray-100 mb-4">Build wealth and secure your financial future with personalized planning strategies. From retirement planning to investment management, our certified advisors provide comprehensive solutions.</p>
          <Link to="/services" className="inline-block mt-2 px-6 py-2 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-semibold rounded-lg shadow transition-all">Start Planning Today</Link>
        </div>
      </div>
    </section>
  );
};

export default ThreeHero;
