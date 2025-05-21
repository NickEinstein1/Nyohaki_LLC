import React, { useState } from 'react';
import { FaQuestionCircle, FaMoneyCheckAlt, FaUserShield, FaSyncAlt, FaPhoneAlt } from 'react-icons/fa';

const faqData = [
  {
    category: 'Insurance',
    icon: <FaUserShield className="text-blue-600 mr-2" />,
    faqs: [
      { q: 'What types of insurance policies do you provide?', a: 'As a licensed insurance agency, we offer auto, home, renters, life, business, and specialty insurance tailored to your unique needs.' },
      { q: 'How do I know which insurance coverage is right for me?', a: 'Our experienced agents will assess your situation and recommend policies that best protect you, your family, or your business.' },
      { q: 'Can I change my coverage after purchasing a policy?', a: 'Yes! You can update your coverage at any time. Contact your agent or log in to your account to discuss changes.' },
      { q: 'What should I do if I need to file a claim?', a: 'Contact us as soon as possible. We’ll guide you through the claims process and advocate on your behalf with the insurer.' },
      { q: 'Do you offer discounts?', a: 'We help you find all eligible discounts, such as bundling, safe driver, loyalty, and more, to ensure you get the best value.' },
      { q: 'How quickly can I get proof of insurance?', a: 'In most cases, you’ll receive digital proof of insurance immediately after your policy is issued.' },
    ],
  },
  {
    category: 'Risk Management',
    icon: <FaSyncAlt className="text-orange-600 mr-2" />,
    faqs: [
      { q: 'What is risk management?', a: 'Risk management involves identifying, assessing, and prioritizing risks followed by coordinated efforts to minimize or control their impact.' },
      { q: 'How can risk management benefit my business?', a: 'Effective risk management protects your assets, ensures business continuity, and helps you comply with regulations.' },
      { q: 'Do you offer customized risk management solutions?', a: 'Yes, we tailor our risk management strategies to meet the unique needs of your business.' },
    ],
  },
  {
    category: 'Financial Services',
    icon: <FaMoneyCheckAlt className="text-teal-600 mr-2" />,
    faqs: [
      { q: 'What financial services do you provide?', a: 'We offer investment planning, retirement solutions, and wealth management services.' },
      { q: 'Can you help with retirement planning?', a: 'Absolutely! Our experts can guide you in building a secure retirement plan.' },
      { q: 'Are your financial advisors certified?', a: 'Yes, our advisors are certified professionals with years of experience.' },
    ],
  },
  {
    category: 'Data Analytics',
    icon: <FaQuestionCircle className="text-pink-600 mr-2" />,
    faqs: [
      { q: 'What is data analytics?', a: 'Data analytics is the process of examining data sets to draw conclusions and support decision-making.' },
      { q: 'How can data analytics improve my business?', a: 'Our analytics services help you uncover trends, improve efficiency, and make data-driven decisions.' },
      { q: 'Do you offer custom analytics dashboards?', a: 'Yes, we build dashboards tailored to your KPIs and business needs.' },
    ],
  },
  {
    category: 'Claims',
    icon: <FaSyncAlt className="text-green-600 mr-2" />,
    faqs: [
      { q: 'How do I file a claim?', a: 'You can file a claim online via our portal or contact our support team for assistance.' },
      { q: 'How long does it take to process a claim?', a: 'Most claims are processed within 3-5 business days.' },
    ],
  },
  {
    category: 'Payments',
    icon: <FaMoneyCheckAlt className="text-yellow-600 mr-2" />,
    faqs: [
      { q: 'What payment methods are accepted?', a: 'We accept credit/debit cards, bank transfers, and online payment gateways.' },
      { q: 'Can I set up automatic payments?', a: 'Yes, you can enable auto-pay in your account settings for hassle-free payments.' },
    ],
  },
  {
    category: 'Account',
    icon: <FaQuestionCircle className="text-purple-600 mr-2" />,
    faqs: [
      { q: 'Can I update my policy online?', a: 'Yes, you can manage and update your policy details through your online account.' },
      { q: 'How do I reset my password?', a: 'Click “Forgot password” on the login page and follow the instructions.' },
    ],
  },
];

const allFaqs = faqData.flatMap(cat => cat.faqs.map(faq => ({ ...faq, category: cat.category })));
const categories = ['All', ...faqData.map(cat => cat.category)];

const FAQ = () => {
  const [open, setOpen] = useState(null);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const filteredFaqs = allFaqs.filter(faq =>
    (filter === 'All' || faq.category === filter) &&
    (faq.q.toLowerCase().includes(search.toLowerCase()) || faq.a.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <section id="faq" className="max-w-3xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Frequently Asked Questions</h2>
      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6 justify-center items-center">
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search FAQs..."
          className="px-4 py-2 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-200 w-full sm:w-80"
        />
        {/* Category Filters */}
        <div className="flex gap-2 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1 rounded-full border font-semibold transition ${filter===cat ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-blue-700 border-blue-200'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      {/* FAQ List */}
      <div className="space-y-4">
        {filteredFaqs.length === 0 && (
          <div className="text-center text-gray-400 py-8">No FAQs found for your search.</div>
        )}
        {filteredFaqs.map((item, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-lg border border-blue-50">
            <button
              className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
              aria-expanded={open===i}
              aria-controls={`faq-body-${i}`}
              onClick={() => setOpen(open===i ? null : i)}
            >
              <span className="flex items-center font-semibold text-blue-700">
                {faqData.find(cat => cat.category === item.category)?.icon}
                {item.q}
              </span>
              <span className={`transition-transform duration-300 text-blue-400 text-xl ${open===i ? 'rotate-180' : ''}`}>▼</span>
            </button>
            <div
              id={`faq-body-${i}`}
              className={`px-6 pb-4 text-gray-600 transition-all duration-300 ${open===i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
            >
              {item.a}
            </div>
          </div>
        ))}
      </div>
      {/* CTA */}
      <div className="mt-12 text-center bg-gradient-to-r from-blue-100 to-blue-50 rounded-2xl p-8 shadow-lg">
        <FaPhoneAlt className="mx-auto text-3xl text-blue-700 mb-2 animate-bounce" />
        <h4 className="text-xl font-bold text-blue-800 mb-2">Still have questions?</h4>
        <p className="text-gray-600 mb-4">Our team is here to help. Reach out for personalized support.</p>
        <a href="/contact" className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 font-bold transition">Contact Us</a>
      </div>
    </section>
  );
};

export default FAQ;
