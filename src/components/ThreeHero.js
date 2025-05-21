import React, { useRef, useEffect } from 'react';
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
    const iconColors = ['#10b981', '#f59e42', '#3b82f6', '#f43f5e'];
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
    <section id="home" className="relative flex flex-col md:flex-row items-center justify-center min-h-[60vh] bg-gradient-to-b from-blue-100 to-white dark:from-slate-900 dark:to-slate-800 py-10 px-2 md:px-8">
      <div className="flex-shrink-0 mx-auto md:mx-0 md:mr-10" style={{width:'380px',height:'340px',maxWidth:'100%'}}>
        <div ref={ref} aria-hidden="true" className="rounded-xl shadow-xl dark:shadow-blue-900/40 w-full h-full"></div>
      </div>
      <div className="flex-1 flex flex-col items-center md:items-start justify-center mt-8 md:mt-0 z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-800 dark:text-blue-100 mb-4 text-center md:text-left drop-shadow-lg">Insurance, Reinvented in 3D</h1>
        <p className="text-lg md:text-xl text-blue-700 dark:text-blue-200 text-center md:text-left max-w-2xl mb-6">Experience global protection, modern policies, and peace of mind—brought to life with interactive 3D visuals. Discover why we’re the best choice for your future.</p>
        <div className="flex justify-center md:justify-start w-full">
          <a href="/quote" className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 text-white font-bold rounded-lg shadow-lg transition text-lg">Get a Quote</a>
        </div>
      </div>
      {/* IUL and Annuities Section */}
      <div className="w-full bg-gradient-to-r from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-900 py-10 px-4 md:px-12 flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
        <div className="flex-1 max-w-xl bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 flex flex-col items-center md:items-start mb-6 md:mb-0">
          <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-200 mb-2">Indexed Universal Life (IUL)</h2>
          <p className="text-gray-700 dark:text-gray-100 mb-4">Grow your wealth and protect your loved ones with flexible, tax-advantaged life insurance. IUL policies offer market-linked growth, downside protection, and lifelong coverage—perfect for building a secure financial future.</p>
          <a href="/quote" className="inline-block mt-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 text-white font-semibold rounded-lg shadow transition">Learn More & Get a Quote</a>
        </div>
        <div className="flex-1 max-w-xl bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-200 mb-2">Annuities</h2>
          <p className="text-gray-700 dark:text-gray-100 mb-4">Secure guaranteed income for life, supplement your retirement, and enjoy peace of mind. Our annuity solutions are tailored for growth, safety, and flexibility—so you can plan confidently for every stage of life.</p>
          <a href="/quote" className="inline-block mt-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 text-white font-semibold rounded-lg shadow transition">Explore Annuity Options</a>
        </div>
      </div>
    </section>
  );
};

export default ThreeHero;
