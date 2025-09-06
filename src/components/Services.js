import React, { useState, useRef, useEffect } from 'react';
import Testimonials from './Testimonials';
import { FaShieldAlt, FaCar, FaHome, FaBriefcase, FaMoneyBillWave, FaChartLine, FaBalanceScale, FaChartBar, FaRobot, FaCode } from 'react-icons/fa';
import './services.css';

const policies = [
  { type: 'ai', title: 'AI Engineering Services', desc: 'Transform your business with intelligent automation, machine learning solutions, and AI-powered analytics.', icon: <FaRobot className="animate-icon" /> },
  { type: 'software', title: 'Software Engineering', desc: 'Custom software development, web applications, and system integration solutions built with modern technologies.', icon: <FaCode className="animate-icon" /> },
  { type: 'analytics', title: 'Data Analytics Services', desc: 'Unlock insights from your data to drive smarter business decisions and optimize operations.', icon: <FaChartBar className="animate-icon" /> },
  { type: 'financial', title: 'Financial Planning Services', desc: 'Comprehensive financial planning, wealth management, and retirement solutions.', icon: <FaChartLine className="animate-icon" /> },
  { type: 'risk', title: 'Risk Management Services', desc: 'Expert risk assessment and mitigation strategies for your business and personal needs.', icon: <FaBalanceScale className="animate-icon" /> },
  { type: 'health', title: 'Health Insurance', desc: 'Comprehensive health plans for you and your family.', icon: <FaShieldAlt className="animate-icon" /> },
  { type: 'life', title: 'Life Insurance', desc: 'Secure your family\'s financial future with life insurance protection.', icon: <FaBriefcase className="animate-icon" /> },
  { type: 'annuities', title: 'Annuities', desc: 'Guaranteed income for your retirement and future financial security.', icon: <FaMoneyBillWave className="animate-icon" /> },
  { type: 'auto', title: 'Auto Insurance', desc: 'Drive with confidence and comprehensive protection.', icon: <FaCar className="animate-icon" /> },
  { type: 'home', title: 'Home Insurance', desc: 'Protect your home and valuables from unexpected events.', icon: <FaHome className="animate-icon" /> },
];

const details = {
  ai: {
    title: 'AI Engineering Services',
    content: 'Transform your business operations with cutting-edge artificial intelligence solutions. Our AI engineering services include machine learning model development, intelligent automation, predictive analytics, and AI strategy consulting. We help businesses leverage AI to optimize processes, reduce costs, and drive innovation across all sectors.'
  },
  software: {
    title: 'Software Engineering Solutions',
    content: 'Custom software development tailored to your business needs. We build scalable web applications, mobile apps, enterprise software, and system integrations using modern technologies and best practices. Our development process ensures secure, maintainable, and user-friendly solutions that grow with your business.'
  },
  health: {
    title: 'Why Health Insurance Matters',
    content: 'Health insurance protects you from unexpected medical costs, gives you access to quality care, and provides peace of mind for you and your loved ones. It covers doctor visits, hospital stays, preventive care, and more, helping you stay healthy and financially secure.'
  },
  auto: {
    title: 'Why Auto Insurance Matters',
    content: 'Auto insurance protects you from financial loss due to accidents, theft, or damage. It covers liability, repairs, and medical expenses, ensuring you can drive with confidence and security.'
  },
  home: {
    title: 'Why Home Insurance Matters',
    content: 'Home insurance safeguards your home and possessions from fire, theft, natural disasters, and liability claims. It provides financial protection and peace of mind for homeowners and renters alike.'
  },
  iul: {
    title: 'Indexed Universal Life (IUL)',
    content: 'IUL is a flexible, permanent life insurance policy that offers tax-advantaged cash value growth linked to market indexes, downside protection, and lifelong coverage. It’s ideal for building wealth while protecting your family.'
  },
  life: {
    title: 'Why Life Insurance Matters',
    content: 'Life insurance provides essential financial protection for your loved ones in the event of your passing. It can help cover living expenses, debts, and future needs, ensuring your family’s security and peace of mind.'
  },
  annuities: {
    title: 'About Annuities',
    content: 'Annuities provide guaranteed income for life or a set period, helping you plan for retirement with confidence. They offer safety, growth potential, and peace of mind for your financial future.'
  },
  risk: {
    title: 'Risk Management Services',
    content: 'Our risk management experts help you identify, assess, and mitigate risks—protecting your business and personal interests with tailored strategies and advanced analytics.'
  },
  financial: {
    title: 'Financial Services',
    content: 'From savings planning to retirement solutions, our financial advisors guide you to secure your financial future with personalized, data-driven advice.'
  },
  analytics: {
    title: 'Data Analytics Services',
    content: 'We leverage advanced analytics and AI to transform your data into actionable insights—empowering smarter decisions and better outcomes for your insurance and business needs.'
  }
};

const Service3D = ({icon, title, desc, onLearn, gradient, shadow, border, children}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className={`relative bg-white dark:bg-slate-900 rounded-3xl p-8 flex flex-col items-center shadow-2xl ${shadow} border-2 ${border} hover:scale-105 transition-all duration-300 group cursor-pointer min-h-[270px]`}
      style={{background: gradient}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`text-6xl mb-4 drop-shadow-lg text-blue-600 dark:text-blue-400 transition-all duration-500 ${isHovered ? 'scale-125 rotate-12' : ''}`} 
        aria-hidden="true"
      >
        {icon}
      </div>
      <h3 className="text-2xl font-extrabold text-black text-center mb-4 mt-2 drop-shadow-lg" style={{textShadow: '0 2px 8px rgba(0,0,0,0.18)'}}>{title}</h3>
      <p className="text-gray-700 dark:text-black font-semibold text-center mb-4">{desc}</p>
      <button
        className="mt-auto px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold rounded-lg shadow hover:scale-110 hover:from-blue-700 hover:to-blue-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
        onClick={onLearn}
        tabIndex={0}
        aria-label={`Learn more about ${title}`}
        type="button"
      >
        Learn More
      </button>
      {children}
    </div>
  );
};

function Modal({open, onClose, title, children}) {
  const modalRef = useRef();
  useEffect(() => {
    if (!open) return;
    function handleKey(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open, onClose]);
  useEffect(() => {
    if (open && modalRef.current) modalRef.current.focus();
  }, [open]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-all">
      <div
        ref={modalRef}
        tabIndex={-1}
        className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl p-8 max-w-md w-full relative animate-fadeIn"
        role="dialog"
        aria-modal="true"
      >
        <button
          className="absolute top-4 right-4 text-2xl text-blue-700 dark:text-blue-200 hover:text-blue-900 focus:outline-none"
          onClick={onClose}
          aria-label="Close dialog"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-100 mb-3 text-center">{title}</h2>
        <div className="text-gray-700 dark:text-gray-100 text-center text-lg">{children}</div>
      </div>
    </div>
  );
}

const Services = () => {
  const [modal, setModal] = useState(null);

  const gradients = [
    'linear-gradient(135deg, #e0e7ff 0%, #f0f9ff 100%)',
    'linear-gradient(135deg, #f0fdfa 0%, #e0f2fe 100%)',
    'linear-gradient(135deg, #fef9c3 0%, #f0fdf4 100%)',
    'linear-gradient(135deg, #fef7e0 0%, #fbbf24 100%)',
    'linear-gradient(135deg, #f1f5f9 0%, #fef7e0 100%)',
  ];
  const shadows = [
    'shadow-blue-200/80',
    'shadow-blue-100/80',
    'shadow-yellow-100/80',
    'shadow-amber-300/80',
    'shadow-amber-100/80',
  ];
  const borders = [
    'border-blue-200',
    'border-blue-100',
    'border-yellow-200',
    'border-amber-300',
    'border-amber-100',
  ];

  return (
    <section id="services" className="relative flex flex-col justify-center items-center min-h-[90vh] w-full py-16 px-4 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Background image overlay */}
      <div aria-hidden="true" className="pointer-events-none select-none absolute inset-0 w-full h-full z-0" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.18}} />
      {/* Professional intro */}
      <div className="relative z-10 max-w-3xl text-center mb-8">
        <h2 className="text-4xl font-extrabold text-blue-900 dark:text-white mb-4 tracking-tight drop-shadow-lg">Our Services</h2>
        <p className="text-lg text-blue-800 dark:text-blue-200 font-medium mb-4">NYOHAKI delivers cutting-edge AI engineering, custom software development, data analytics, financial planning, risk management, and comprehensive insurance solutions to accelerate your business growth and success.</p>
      </div>

      {/* Services grid */}
      <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-10 w-full max-w-7xl justify-center mb-12">
        {policies.map((p, i) => (
          <Service3D
            key={p.type}
            icon={p.icon}
            title={p.title}
            desc={p.desc}
            onLearn={e => { e.stopPropagation(); setModal(p.type); }}
            gradient={gradients[i % gradients.length]}
            shadow={shadows[i % shadows.length]}
            border={borders[i % borders.length]}
          />
        ))}
      </div>
      {/* Why Choose Us highlights - Enhanced */}
      <div className="relative z-10 mb-16">
        <h2 className="text-3xl font-bold text-blue-900 dark:text-white mb-8 text-center">Why Choose NYOHAKI</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl mx-auto">
          <div className="flex flex-col items-center bg-white/90 dark:bg-slate-800/90 rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl border-t-4 border-blue-500">
            <div className="text-4xl mb-4 text-blue-600 dark:text-blue-400 animate-bounce">
              <FaShieldAlt />
            </div>
            <h3 className="font-bold text-xl text-blue-800 dark:text-blue-200 mb-2">Certified Experts</h3>
            <p className="text-gray-600 dark:text-gray-200 text-center">Our team is composed of industry-certified professionals in insurance, finance, and analytics with decades of combined experience.</p>
          </div>
          <div className="flex flex-col items-center bg-white/90 dark:bg-slate-800/90 rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl border-t-4 border-blue-500">
            <div className="text-4xl mb-4 text-blue-600 dark:text-blue-400 animate-pulse">
              <FaChartLine />
            </div>
            <h3 className="font-bold text-xl text-blue-800 dark:text-blue-200 mb-2">Cutting-edge Analytics</h3>
            <p className="text-gray-600 dark:text-gray-200 text-center">We use AI and advanced analytics to deliver actionable insights and smarter solutions that keep you ahead of the curve.</p>
          </div>
          <div className="flex flex-col items-center bg-white/90 dark:bg-slate-800/90 rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl border-t-4 border-blue-500">
            <div className="text-4xl mb-4 text-blue-600 dark:text-blue-400 animate-pulse">
              <FaBriefcase />
            </div>
            <h3 className="font-bold text-xl text-blue-800 dark:text-blue-200 mb-2">Personalized Solutions</h3>
            <p className="text-gray-600 dark:text-gray-200 text-center">Every client receives tailored advice and services to fit their unique needs, ensuring optimal coverage and value.</p>
          </div>
          <div className="flex flex-col items-center bg-white/90 dark:bg-slate-800/90 rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl border-t-4 border-blue-500">
            <div className="text-4xl mb-4 text-blue-600 dark:text-blue-400 animate-spin-slow">
              <FaBalanceScale />
            </div>
            <h3 className="font-bold text-xl text-blue-800 dark:text-blue-200 mb-2">24/7 Support</h3>
            <p className="text-gray-600 dark:text-gray-200 text-center">We're here for you—anytime you need help or advice, with dedicated support teams ready to assist you around the clock.</p>
          </div>
        </div>
      </div>
      {/* Testimonials component integration */}
      <Testimonials />
      {/* Enhanced Call to Action */}
      <div className="relative z-10 py-12 px-4 bg-gradient-to-r from-blue-900 via-amber-700 to-blue-700 rounded-3xl shadow-2xl max-w-5xl mx-auto mb-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white max-w-xl">
            <h2 className="text-3xl font-extrabold mb-4">Ready to Secure Your Future?</h2>
            <p className="text-blue-100 text-lg mb-6">Our experts are standing by to provide personalized solutions for your insurance, financial planning, and risk management needs.</p>
            <ul className="mb-6">
              <li className="flex items-center mb-2">
                <span className="text-green-400 mr-2">✓</span> Free initial consultation
              </li>
              <li className="flex items-center mb-2">
                <span className="text-green-400 mr-2">✓</span> Customized service packages
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span> 30-day satisfaction guarantee
              </li>
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-inner w-full max-w-md">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Schedule Your Consultation</h3>
            <div className="flex flex-col gap-4">
              <button 
                className="px-8 py-4 bg-gradient-to-r from-green-500 via-amber-500 to-blue-500 text-white font-extrabold rounded-xl shadow-lg text-lg tracking-wide hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-300 animate-pulse"
              >
                Request a Consultation
              </button>
              <button className="px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-bold rounded-xl shadow-lg text-lg tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300">
                Call Us Now: (253) 268-NYOHAKI
              </button>
            </div>
            <p className="mt-4 text-blue-100 text-sm text-center">Your journey to financial security starts with a conversation.</p>
          </div>
        </div>
      </div>
      {/* Modal for details */}
      <Modal
        open={!!modal}
        onClose={() => setModal(null)}
        title={details[modal === 'life' ? 'life' : modal === 'iul' ? 'iul' : modal]?.title}
      >
        {modal === 'life' && (
          <>
            <div className="mb-4">{details.life.content}</div>
            <button
              className="underline text-blue-600 hover:text-blue-800 font-semibold mt-2"
              onClick={e => {e.stopPropagation(); setModal('iul');}}
            >
              Learn about IUL
            </button>
          </>
        )}
        {modal && modal !== 'life' && <div>{details[modal]?.content}</div>}
      </Modal>
    </section>
  );
};

export default Services;
