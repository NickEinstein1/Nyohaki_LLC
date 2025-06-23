import React from 'react';

const Team = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-800 dark:text-blue-200 mb-4">Our Team</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Meet the talented professionals behind Nyohaki's success. Our diverse team brings together expertise in insurance, technology, and customer service.
          </p>
        </div>
        
        {/* Executive Leadership */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-8 text-center">Executive Leadership</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* CEO - Just a reference link back to homepage */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/images/ceo-placeholder.jpg" 
                  alt="Juliet Wambui Kamau - CEO" 
                  className="w-full h-80 object-cover object-top"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/500x600?text=CEO+Photo';
                    e.target.onerror = null;
                  }}
                />
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 m-2 rounded-full text-sm font-medium">
                  Founder & CEO
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-1">Juliet Wambui Kamau</h4>
                <p className="text-blue-600 dark:text-blue-400 mb-4">Chief Executive Officer</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Visionary leader who founded Nyohaki with a mission to reinvent insurance for happiness and security.
                </p>
                <div className="flex space-x-3 pt-2">
                  <a href="#" className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.237v-5.569c0-1.327-.025-3.037-1.849-3.037-1.851 0-2.132 1.445-2.132 2.939v5.667h-3.238V9h3.105v1.561h.044c.434-.82 1.494-1.684 3.073-1.684 3.287 0 3.892 2.164 3.892 4.977v6.598zM5.337 7.433a1.87 1.87 0 110-3.738 1.87 1.87 0 010 3.738zm1.619 13.019H3.719V9h3.237v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.549C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.271V1.723C24 .771 23.2 0 22.225 0z"/>
                    </svg>
                  </a>
                  <a href="/" className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-300 ml-auto">
                    <span className="text-sm underline">View Full Profile</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Director 1 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://via.placeholder.com/500x600?text=Reverend+Geoffrey+Wanyoike" 
                  alt="Reverend Geoffrey Wanyoike" 
                  className="w-full h-80 object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-1">Reverend Geoffrey Wanyoike </h4>
                <p className="text-blue-600 dark:text-blue-400 mb-4">Chief Operations Officer & Co-Director</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  With extensive experience in mentorship and business, Reverend Wanyoike leads operational excellence initiatives, ensuring smooth service delivery across all channels.
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
            
            {/* Team Member 2 */}
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
        
        {/* Join Our Team Section */}
        <div className="bg-blue-100 dark:bg-blue-900/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-200 mb-4">Join Our Team</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals who are passionate about transforming the insurance industry and creating exceptional experiences for our clients.
          </p>
          <a href="/contact" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition font-semibold">
            Contact Us About Opportunities
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;
