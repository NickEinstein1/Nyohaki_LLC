import React from 'react';

// This could be a local video file (placed in public/videos/) or a YouTube/Vimeo embed
// For demo: use a royalty-free family/life-insurance themed animation from Pexels or similar
// Replace the src with your own video for production

const FamilyLifeInsuranceStory = () => (
  <section className="w-full flex flex-col md:flex-row items-center justify-center py-12 px-4 md:px-12 bg-white dark:bg-slate-800">
    <div className="flex-1 flex flex-col items-center md:items-start mb-8 md:mb-0">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-800 dark:text-blue-100 mb-4 text-center md:text-left">
        How Life Insurance Changed Their Lives
      </h2>
      <p className="text-lg text-blue-700 dark:text-blue-200 max-w-xl mb-6 text-center md:text-left">
        Watch this short story of a family whose future was secured by a wise decision. See how life insurance brought peace of mind, stability, and hope to their lives.
      </p>
    </div>
    <div className="flex-1 flex justify-center">
      <div className="w-full max-w-lg aspect-video rounded-xl overflow-hidden shadow-lg border-4 border-blue-200 dark:border-blue-800 bg-black">
        {/* Replace with your own video file or embed. Example uses a Pexels stock animation. */}
        <video controls poster="/videos/family-insurance-poster.jpg" className="w-full h-full object-cover" preload="none">
          <source src="https://player.vimeo.com/external/372543952.sd.mp4?s=5b4d2e0c0c4d7f6c5b4c2a2f7c7e4e7b9e6f7c5b&profile_id=164" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </section>
);

export default FamilyLifeInsuranceStory;
