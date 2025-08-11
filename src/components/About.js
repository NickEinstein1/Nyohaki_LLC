import React from 'react';

const About = () => (
  <>
    <section id="about" className="max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-blue-800 mb-6">About Us</h2>
      <p className="text-lg text-gray-700 mb-4"><span className="font-extrabold text-blue-800">NYOHAKI</span> is a comprehensive professional services firm specializing in insurance, financial planning, risk management, and data analytics. Our mission is to empower individuals and businesses with innovative solutions, expert guidance, and cutting-edge technology for a secure and prosperous future.</p>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg border border-blue-100 p-6 hover:shadow-xl transition-shadow">
          <h3 className="font-bold text-blue-700 mb-2">Our Mission</h3>
          <p className="text-gray-600">To deliver comprehensive professional services that secure and enhance our clients' financial well-being through innovative solutions and expert guidance.</p>
        </div>
        <div className="bg-gradient-to-br from-white to-purple-50 rounded-xl shadow-lg border border-purple-100 p-6 hover:shadow-xl transition-shadow">
          <h3 className="font-bold text-purple-700 mb-2">Our Values</h3>
          <p className="text-gray-600">Integrity, excellence, innovation, and client-focused solutions across all our professional service areas.</p>
        </div>
        <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg border border-blue-100 p-6 hover:shadow-xl transition-shadow">
          <h3 className="font-bold text-blue-700 mb-2">Our History</h3>
          <p className="text-gray-600">A team of diverse professionals, we unite our expertise to deliver financial and data security through rigorous risk assessment—empowering clients with innovative, comprehensive solutions for a secure and prosperous future.</p>
        </div>
      </div>
    </section>
  </>
);

export default About;
