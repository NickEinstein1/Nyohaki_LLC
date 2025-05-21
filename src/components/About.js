import React from 'react';
import FamilyLifeInsuranceStory from './FamilyLifeInsuranceStory';

const About = () => (
  <>
    <FamilyLifeInsuranceStory />
    <section id="about" className="max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-blue-800 mb-6">About Us</h2>
      <p className="text-lg text-gray-700 mb-4"><span className="font-extrabold text-blue-800">NYOHAKI</span> is dedicated to making insurance transparent, accessible, and engaging. Our mission is to empower you with innovative technology, clear policy information, and a seamless digital experience.</p>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="font-bold text-blue-700 mb-2">Our Mission</h3>
          <p className="text-gray-600">To protect your future with innovative digital insurance solutions.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="font-bold text-blue-700 mb-2">Our Values</h3>
          <p className="text-gray-600">Trust, transparency, and technology-driven service for every client.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="font-bold text-blue-700 mb-2">Our History</h3>
          <p className="text-gray-600">A team of diverse professionals, we unite our expertise to deliver financial and data security through rigorous risk assessment—empowering clients with innovative, comprehensive solutions for a secure and prosperous future.</p>
        </div>
      </div>
    </section>
  </>
);

export default About;
