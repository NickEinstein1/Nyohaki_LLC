import React, { useState, useEffect, useCallback } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    text: "NYOHAKI's analytics and risk management transformed our business. We feel secure and empowered with their comprehensive solutions.",
    author: "Jane D.",
    position: "Business Owner",
    image: "/images/jane.jpg",
    rating: 5
  },
  {
    id: 2,
    text: "The financial advisors at NYOHAKI helped us plan for retirement with confidence. Their personalized approach made all the difference.",
    author: "Daniel K.",
    position: "Retiree",
    image: "/images/daniel.jpg",
    rating: 5
  },
  {
    id: 3,
    text: "Their team is always available and truly cares about our needs. The customer service is exceptional and responsive.",
    author: "Maria S.",
    position: "Client",
    image: "/images/maria.jpg",
    rating: 5
  },
  {
    id: 4,
    text: "I've been with NYOHAKI for over 5 years, and they consistently exceed my expectations with their innovative solutions and attentive service.",
    author: "Robert J.",
    position: "Small Business Owner",
    image: "/images/robert.jpg",
    rating: 5
  },
  {
    id: 5,
    text: "The data analytics services provided valuable insights that helped us make informed decisions about our insurance coverage and risk management.",
    author: "Sophia L.",
    position: "Corporate Client",
    image: "/images/sophia.jpg",
    rating: 5
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const length = testimonials.length;

  const nextSlide = useCallback(() => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }, [current, length]);

  const prevSlide = useCallback(() => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }, [current, length]);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const renderStars = (rating) => {
    return Array(rating).fill(0).map((_, i) => (
      <span key={i} className="text-yellow-400">★</span>
    ));
  };

  return (
    <section 
      id="testimonials" 
      className="relative py-16 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-blue-900 dark:text-white mb-4 tracking-tight drop-shadow-lg">What Our Clients Say</h2>
          <p className="text-lg text-blue-800 dark:text-blue-200 font-medium">Hear from our satisfied clients about their experience with NYOHAKI's services.</p>
        </div>
        
        <div className="relative flex justify-center items-center">
          <button 
            className="absolute left-0 z-10 bg-white/80 dark:bg-slate-800/80 rounded-full p-3 shadow-lg text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-slate-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <FaChevronLeft size={24} />
          </button>
          
          <div className="overflow-hidden w-full max-w-4xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className={`w-full flex-shrink-0 px-4 ${index === current ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
                >
                  <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 flex flex-col md:flex-row items-center gap-8 transform transition-all duration-500 hover:shadow-2xl">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="absolute -top-2 -left-2 text-blue-600 dark:text-blue-400">
                          <FaQuoteLeft size={28} className="opacity-70" />
                        </div>
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.author}
                          className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-blue-100 dark:border-blue-900 shadow-lg"
                        />
                      </div>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <p className="text-gray-700 dark:text-gray-100 text-lg italic mb-4">{testimonial.text}</p>
                      <div className="mb-2">{renderStars(testimonial.rating)}</div>
                      <h3 className="font-bold text-xl text-blue-800 dark:text-blue-200">{testimonial.author}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            className="absolute right-0 z-10 bg-white/80 dark:bg-slate-800/80 rounded-full p-3 shadow-lg text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-slate-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <FaChevronRight size={24} />
          </button>
        </div>
        
        <div className="flex justify-center mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 mx-1 rounded-full focus:outline-none ${index === current ? 'bg-blue-600' : 'bg-blue-200 dark:bg-slate-600'}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
