import React from 'react';
import { Link } from 'react-router-dom';

const Team = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-amber-50/30 to-blue-50 dark:from-slate-900 dark:via-amber-900/10 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-800 to-amber-600 dark:from-blue-200 dark:to-amber-400 bg-clip-text text-transparent mb-4">Our Team</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Meet the talented professionals behind Nyohaki's success. Our diverse team brings together expertise in insurance, technology, and customer service.
          </p>
        </div>
        
        {/* Executive Leadership */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-blue-700 dark:text-blue-300 mb-12 text-center">Executive Leadership</h3>

          {/* CEO - Enhanced Profile */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-white to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl shadow-2xl overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/3">
                  <div className="relative">
                    <img
                      src="/images/ceo-placeholder.jpg"
                      alt="Juliet Wambui Kamau - CEO"
                      className="w-full h-80 lg:h-full object-cover object-center"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x500?text=Juliet+Kamau';
                        e.target.onerror = null;
                      }}
                    />
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-amber-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      Founder & CEO
                    </div>
                  </div>
                </div>
                <div className="lg:w-2/3 p-8 lg:p-12">
                  <div className="mb-6">
                    <h4 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-2">Juliet Wambui Kamau</h4>
                    <p className="text-xl text-amber-600 dark:text-amber-400 font-semibold mb-4">Chief Executive Officer & Founder</p>
                  </div>

                  <div className="space-y-4 text-gray-700 dark:text-gray-300">
                    <p>
                      Visionary leader driving innovation in professional services and technology. Juliet founded NYOHAKI with a mission to transform how businesses leverage AI, software development, and comprehensive professional services for accelerated growth and success.
                    </p>
                    <p>
                      With extensive experience in business strategy, technology implementation, and organizational leadership, she guides NYOHAKI in delivering cutting-edge solutions that bridge traditional professional services with modern technological advancements.
                    </p>
                    <p>
                      Under her leadership, NYOHAKI has evolved into a technology-forward firm specializing in AI engineering, custom software development, data analytics, financial planning, and comprehensive business solutions.
                    </p>
                  </div>

                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                        <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-semibold text-blue-700 dark:text-blue-300">Innovation Leader</h5>
                        <p className="text-sm text-gray-600 dark:text-gray-400">AI & Technology Pioneer</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center">
                        <svg className="w-5 h-5 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-semibold text-amber-700 dark:text-amber-300">Strategic Visionary</h5>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Business Growth Expert</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex gap-4">
                    <a href="#" className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.237v-5.569c0-1.327-.025-3.037-1.849-3.037-1.851 0-2.132 1.445-2.132 2.939v5.667h-3.238V9h3.105v1.561h.044c.434-.82 1.494-1.684 3.073-1.684 3.287 0 3.892 2.164 3.892 4.977v6.598zM5.337 7.433a1.87 1.87 0 110-3.738 1.87 1.87 0 010 3.738zm1.619 13.019H3.719V9h3.237v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.549C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.271V1.723C24 .771 23.2 0 22.225 0z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 00-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.009-.857 3.17 0 2.188 1.115 4.117 2.823 5.253a4.904 4.904 0 01-2.228-.616c-.053 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.627 1.956 2.444 3.377 4.6 3.417A9.868 9.868 0 010 21.543a13.94 13.94 0 007.548 2.209c9.058 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A10.025 10.025 0 0024 4.557z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Department Leads */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-blue-700 dark:text-blue-300 mb-12 text-center">Department Leads</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Director 1 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://via.placeholder.com/500x600?text=Geoffrey+Wanyoike" 
                  alt="Geoffrey Wanyoike" 
                  className="w-full h-80 object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-1">Geoffrey Wanyoike </h4>
                <p className="text-blue-600 dark:text-blue-400 mb-4">Director</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  With extensive experience in mentorship and business, Geoffrey Wanyoike leads operational excellence initiatives, ensuring smooth service delivery across all channels.
                </p>
                <div className="flex space-x-3 pt-2">
                  <a href="#" className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.237v-5.569c0-1.327-.025-3.037-1.849-3.037-1.851 0-2.132 1.445-2.132 2.939v5.667h-3.238V9h3.105v1.561h.044c.434-.82 1.494-1.684 3.073-1.684 3.287 0 3.892 2.164 3.892 4.977v6.598zM5.337 7.433a1.87 1.87 0 110-3.738 1.87 1.87 0 010 3.738zm1.619 13.019H3.719V9h3.237v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.549C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.271V1.723C24 .771 23.2 0 22.225 0z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Director 2 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/images/cfo-placeholder.jpg" 
                  alt="Director Photo" 
                  className="w-full h-80 object-cover object-top"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/500x600?text=Director+Photo';
                    e.target.onerror = null;
                  }}
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-1">Andrew Victor</h4>
                <p className="text-blue-600 dark:text-blue-400 mb-4">Chief Financial Officer</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Guiding our financial strategy with precision and foresight, our CFO ensures Nyohaki's financial health and sustainable growth in a competitive market.
                </p>
                <div className="flex space-x-3 pt-2">
                  <a href="#" className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.237v-5.569c0-1.327-.025-3.037-1.849-3.037-1.851 0-2.132 1.445-2.132 2.939v5.667h-3.238V9h3.105v1.561h.044c.434-.82 1.494-1.684 3.073-1.684 3.287 0 3.892 2.164 3.892 4.977v6.598zM5.337 7.433a1.87 1.87 0 110-3.738 1.87 1.87 0 010 3.738zm1.619 13.019H3.719V9h3.237v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.549C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.271V1.723C24 .771 23.2 0 22.225 0z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Department Leads */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-8 text-center">Department Leads</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Team Member 1 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/images/DataEngineer-placeholder.jpg" 
                  alt="Samuel Wanyoike - Data Engineering Head" 
                  className="w-full h-64 object-cover object-top"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x500?text=Samuel+Wanyoike';
                    e.target.onerror = null;
                  }}
                />
              </div>
              <div className="p-5">
                <h4 className="text-lg font-bold text-blue-700 dark:text-blue-300 mb-1">Samuel Wanyoike</h4>
                <p className="text-blue-600 dark:text-blue-400 mb-3">Head of Data Engineering,Research and Development</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Samuel is a seasoned data engineer with expertise in building scalable data pipelines and optimizing data processing workflows.
                </p>
              </div>
            </div>
            
            {/* Team Member 2 - Nick Mwaura - TO BE ADDED LATER
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src="https://via.placeholder.com/400x500?text=Nick+Mwaura"
                  alt="Nick Mwaura"
                  className="w-full h-48 object-cover object-center"
                />
              </div>
              <div className="p-5">
                <h4 className="text-lg font-bold text-blue-700 dark:text-blue-300 mb-1">Nick Mwaura</h4>
                <p className="text-blue-600 dark:text-blue-400 mb-3">Head of Technology, and Risk Management</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Leading our technological innovations to create seamless digital insurance solutions.
                </p>
              </div>
            </div>
            */}
            
            {/* Team Member 3 - TO BE ADDED LATER
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src="https://via.placeholder.com/400x500?text=Reverend+Geoffrey+Wanyoike" 
                  alt="Reverend Geoffrey Wanyoike" 
                  className="w-full h-48 object-cover object-center"
                />
              </div>
              <div className="p-5">
                <h4 className="text-lg font-bold text-blue-700 dark:text-blue-300 mb-1">[Team Member]</h4>
                <p className="text-blue-600 dark:text-blue-400 mb-3">Head of Claims</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Ensuring fast, fair, and hassle-free claims processing for all our clients.
                </p>
              </div>
            </div>
            */}
            
            {/* Team Member 4 - TO BE ADDED LATER
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src="/images/team4-placeholder.jpg" 
                  alt="Team Member Photo" 
                  className="w-full h-48 object-cover object-center"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x300?text=Team+Member';
                    e.target.onerror = null;
                  }}
                />
              </div>
              <div className="p-5">
                <h4 className="text-lg font-bold text-blue-700 dark:text-blue-300 mb-1">[Team Member]</h4>
                <p className="text-blue-600 dark:text-blue-400 mb-3">Head of Marketing</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Crafting our brand story and connecting our services with those who need them most.
                </p>
              </div>
            </div>
            */}
            </div>
          </div>
        </div>
        
        {/* Join Our Team Section */}
        <div className="bg-blue-100 dark:bg-blue-900/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-200 mb-4">Join Our Team</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals who are passionate about transforming the insurance industry and creating exceptional experiences for our clients.
          </p>
          <Link to="/careers" className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-amber-500 text-white rounded-lg shadow hover:from-blue-700 hover:to-amber-600 transition-all font-semibold">
            Explore Career Opportunities
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Team;
