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
      <h2 className="text-3xl font-bold text-blue-800 mb-8">Contact Us</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-bold text-blue-700">Address</h3>
            <p className="text-gray-600">123 Main Street, Suite 400, City, Country</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-bold text-blue-700">Phone</h3>
            <p className="text-gray-600">+1 234 567 8900</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-bold text-blue-700">Email</h3>
            <p className="text-gray-600">info@nyohaki.com</p>
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
          <iframe title="Google Map" className="rounded-lg mt-4" width="100%" height="200" frameBorder="0" style={{border:0}} src="https://www.google.com/maps/embed/v1/place?key=AIzaSyC-EXAMPLE&q=New+York,NY" allowFullScreen aria-hidden="false" tabIndex="0"></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
