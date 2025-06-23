import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');
    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus('Message sent!');
        form.reset();
      } else {
        setStatus('Error sending message.');
      }
    } catch {
      setStatus('Network error.');
    }
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-800 mb-4">Get in Touch</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">We're here to help and answer any questions you might have. Reach out to us through any of these channels.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-700 mb-1">Our Location</h3>
                <p className="text-gray-600">Washington, USA</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-700 mb-1">Contact Numbers</h3>
                <div className="space-y-1">
                  <p className="text-gray-600">
                    <span className="font-medium">Landline:</span> +1 (253) 268-0427
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Fax:</span> +1 (253) 268-0541
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-700 mb-1">Email Us</h3>
                <a href="mailto:info@nyohaki.com" className="text-blue-600 hover:underline">info@nyohaki.com</a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4">
          <form className="flex flex-col gap-3" onSubmit={handleSubmit} aria-label="Contact Form">
            <input type="text" name="name" required placeholder="Your Name" className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200" />
            <input type="email" name="email" required placeholder="Your Email" className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200" />
            <textarea name="message" required rows="3" placeholder="Your Message" className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"></textarea>
            <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition font-semibold">Send Message</button>
          </form>
          {status && <div className={status === 'Message sent!' ? 'text-green-600' : 'text-red-600'}>{status}</div>}
          <iframe title="Google Map" className="rounded-lg mt-4" width="100%" height="200" frameBorder="0" style={{border:0}} src="https://www.google.com/maps/embed/v1/place?key=AIzaSyC-EXAMPLE&q=Washington,USA" allowFullScreen aria-hidden="false" tabIndex="0"></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
