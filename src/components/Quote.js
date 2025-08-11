import React, { useState } from 'react';

const Quote = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    hobby: '',
    address: '',
    state: '',
    age: '',
    bestTime: '',
    policy: '',
    contribution: '',
    ira401k: '',
    comments: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  const [error, setError] = useState("");

  function validate(form) {
    if (!form.firstName || !form.lastName || !form.email || !form.hobby || !form.address || !form.state || !form.age || !form.bestTime || !form.policy || !form.comments) {
      return "All required fields must be filled.";
    }
    // Email regex
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      return "Please enter a valid email address.";
    }
    // Age validation
    const age = parseInt(form.age, 10);
    if (isNaN(age) || age < 18 || age > 120) {
      return "Age must be between 18 and 120.";
    }
    // Conditional required fields
    if ((form.policy === 'annuities' || form.policy === 'iul')) {
      if (!form.contribution || !form.ira401k) {
        return "Contribution method and IRA/401K selection are required for this policy type.";
      }
    }
    return "";
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const errMsg = validate(form);
    if (errMsg) {
      setError(errMsg);
      return;
    }
    setLoading(true);
    setSuccess(false);
    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (!response.ok || !data.success) {
        setError(data.error || "Submission failed. Please try again.");
        setLoading(false);
        return;
      }
      setSuccess(true);
      setForm({
        firstName: '', lastName: '', email: '', hobby: '', address: '', state: '', age: '', bestTime: '', policy: '', contribution: '', ira401k: '', comments: '',
      });
    } catch (e) {
      setError("Network error. Please try again later.");
    }
    setLoading(false);
  }

  return (
    <section id="quote" className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-extrabold text-blue-900 mb-2 text-center">Request Your Personalized Service Quote</h1>
      <p className="text-lg text-blue-700 mb-8 text-center">Fill out the secure form below to receive a customized quote for our professional services including insurance, financial planning, risk management, or data analytics. Our team will review your information and get back to you promptly.</p>
      <form className="bg-white rounded-xl shadow-lg p-8 flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="font-bold text-blue-900 dark:text-black font-bold tracking-wide text-lg mb-2 mt-2 uppercase">First Name <span className="text-red-500">*</span></label>
            <input name="firstName" value={form.firstName} onChange={handleChange} required placeholder="First Name" className="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-200" />
          </div>
          <div className="flex flex-col">
            <label className="font-bold text-blue-900 dark:text-black font-bold tracking-wide text-lg mb-2 mt-2 uppercase">Last Name <span className="text-red-500">*</span></label>
            <input name="lastName" value={form.lastName} onChange={handleChange} required placeholder="Last Name" className="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-200" />
          </div>
          <div className="flex flex-col">
            <label className="font-bold text-blue-900 dark:text-black font-bold tracking-wide text-lg mb-2 mt-2 uppercase">Email <span className="text-red-500">*</span></label>
            <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="Email Address" className="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-200" />
          </div>
          <div className="flex flex-col">
            <label className="font-bold text-blue-900 dark:text-black font-bold tracking-wide text-lg mb-2 mt-2 uppercase">Hobby <span className="text-red-500">*</span></label>
            <input name="hobby" value={form.hobby} onChange={handleChange} required placeholder="Hobby" className="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-200" />
          </div>
          <div className="flex flex-col md:col-span-2">
            <label className="font-bold text-blue-900 dark:text-black font-bold tracking-wide text-lg mb-2 mt-2 uppercase">Address <span className="text-red-500">*</span></label>
            <input name="address" value={form.address} onChange={handleChange} required placeholder="Address" className="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-200" />
          </div>
          <div className="flex flex-col">
            <label className="font-bold text-blue-900 dark:text-black font-bold tracking-wide text-lg mb-2 mt-2 uppercase">State <span className="text-red-500">*</span></label>
            <input name="state" value={form.state} onChange={handleChange} required placeholder="State" className="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-200" />
          </div>
          <div className="flex flex-col">
            <label className="font-bold text-blue-900 dark:text-black font-bold tracking-wide text-lg mb-2 mt-2 uppercase">Age <span className="text-red-500">*</span></label>
            <input name="age" type="number" min="0" max="120" value={form.age} onChange={handleChange} required placeholder="Age" className="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-200" />
          </div>
        </div>

        <div className="flex flex-col mt-4">
          <label className="font-bold text-blue-900 dark:text-black font-bold tracking-wide text-lg mb-2 mt-2 uppercase">Best Time to Contact You <span className="text-red-500">*</span></label>
          <select name="bestTime" value={form.bestTime} onChange={handleChange} required className="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-200 dark:bg-slate-700 dark:text-white">
            <option value="">Select a Time</option>
            {Array.from({length: 52}, (_, i) => {
              const minutes = 8*60 + i*15;
              const hour = Math.floor(minutes/60);
              const min = minutes%60;
              const ampm = hour >= 12 ? 'pm' : 'am';
              const displayHour = hour > 12 ? hour-12 : hour;
              const time = `${displayHour}:${min.toString().padStart(2,'0')} ${ampm}`;
              return <option key={time} value={time}>{time}</option>;
            })}
          </select>
        </div>

        <div className="flex flex-col mt-4">
          <label className="font-bold text-blue-900 dark:text-black font-bold tracking-wide text-lg mb-2 mt-2 uppercase">Type of Service <span className="text-red-500">*</span></label>
          <select name="policy" value={form.policy} onChange={handleChange} required className="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-200 dark:bg-slate-700 dark:text-white">
            <option value="">Select Service Type</option>
            <option value="annuities">Annuities</option>
            <option value="iul">Indexed Universal Life (IUL)</option>
            <option value="health">Health Insurance</option>
            <option value="auto">Auto Insurance</option>
            <option value="home">Home Insurance</option>
            <option value="life">Life Insurance</option>
            <option value="financial">Financial Planning</option>
            <option value="risk">Risk Management</option>
            <option value="analytics">Data Analytics</option>
          </select>
        </div>

        {(form.policy === 'annuities' || form.policy === 'iul') && (
          <>
            <div className="flex flex-col mt-4">
              <label className="font-bold text-blue-900 dark:text-black font-bold tracking-wide text-lg mb-2 mt-2 uppercase">How to Make Your Contributions <span className="text-red-500">*</span></label>
              <select name="contribution" value={form.contribution} onChange={handleChange} required className="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-200 dark:bg-slate-700 dark:text-white">
                <option value="">Select Contribution Method</option>
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
                <option value="annually">Annually</option>
                <option value="lump-sum">Lump Sum</option>
              </select>
            </div>
            <div className="flex flex-col mt-4">
              <label className="font-bold text-blue-900 dark:text-black font-bold tracking-wide text-lg mb-2 mt-2 uppercase">Do you have an IRA/401K? <span className="text-red-500">*</span></label>
              <select name="ira401k" value={form.ira401k} onChange={handleChange} required className="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-200 dark:bg-slate-700 dark:text-white">
                <option value="">Select an Option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="ria-only">RIA Only</option>
                <option value="401k-only">401k Only</option>
              </select>
            </div>
          </>
        )}

        <div className="flex flex-col mt-4">
          <label className="font-bold text-blue-900 dark:text-black font-bold tracking-wide text-lg mb-2 mt-2 uppercase">Comments <span className="text-red-500">*</span></label>
          <textarea name="comments" value={form.comments} onChange={handleChange} rows="3" required placeholder="Please enter any additional information or questions here" className="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-200"></textarea>
        </div>

        <button type="submit" className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow hover:from-blue-700 hover:to-purple-700 transition-all font-semibold mt-2" disabled={loading}>{loading ? 'Processing...' : 'Request Quote'}</button>
        {loading && <div className="flex justify-center mt-2"><span className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></span></div>}
        {success && <div className="text-green-600 font-semibold text-center">Quote request sent!</div>}
      </form>
    </section>
  );
};

export default Quote;
