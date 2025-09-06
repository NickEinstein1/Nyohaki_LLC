import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { articles } from './BlogArticle';

const topics = Array.from(new Set(articles.flatMap(a => (a.desc || '').match(/\b(AI|Software|Technology|Development|Annuities|IUL|Cyber|Life|Claims|Policy|Insurance|Retirement|Financial|Analytics|Risk|Management|Planning)\b/gi) || [])));
const authors = [
  { name: 'Juliet Kamau', avatar: 'https://randomuser.me/api/portraits/women/43.jpg' }
];
const publishDates = [
  '2025-05-01', '2025-05-03', '2025-05-06', '2025-05-09', '2025-05-11', '2025-05-12', '2025-05-13'
];

function getTopic(article) {
  const match = (article.desc || '').match(/(AI|Software|Technology|Development|Annuities|IUL|Cyber|Life|Claims|Policy|Insurance|Retirement|Financial|Analytics|Risk|Management|Planning)/i);
  return match ? match[0] : 'General';
}

const Blog = () => {
  const [selected, setSelected] = useState('All');
  const [search, setSearch] = useState('');
  const filtered = articles.filter(a => (selected === 'All' || getTopic(a) === selected) && ((a.title || '').toLowerCase().includes(search.toLowerCase()) || (a.desc || '').toLowerCase().includes(search.toLowerCase())));
  const featured = articles[articles.length-1];
  return (
    <section id="blog" className="max-w-7xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-blue-800 mb-8">Professional Insights & Tips</h2>
      {/* Category Filters and Search */}
      <div className="flex flex-wrap gap-2 mb-6 items-center justify-between">
        <div className="flex gap-2 flex-wrap">
          <button onClick={()=>setSelected('All')} className={`px-4 py-1 rounded-full border ${selected==='All'?'bg-blue-600 text-white':'bg-white text-blue-700 border-blue-200'} font-semibold transition`}>All</button>
          {topics.map(topic => (
            <button key={topic} onClick={()=>setSelected(topic)} className={`px-4 py-1 rounded-full border ${selected===topic?'bg-blue-600 text-white':'bg-white text-blue-700 border-blue-200'} font-semibold transition`}>{topic}</button>
          ))}
        </div>
        <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search blog..." className="px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-200" />
      </div>
      {/* Featured Article */}
      <div className="mb-10 animate-fade-in-up">
        <div className="bg-gradient-to-r from-blue-100 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-3xl shadow-xl p-8 flex flex-col md:flex-row gap-8 items-center">
          <img src={featured.img} alt={featured.title} className="rounded-2xl w-full max-w-xs h-56 object-cover shadow-lg" />
          <div className="flex-1">
            <span className="inline-block bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs mb-2 font-bold tracking-wide">Featured</span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-blue-900 mb-2">{featured.title}</h3>
            <p className="text-gray-700 dark:text-blue-100 mb-3">{featured.desc}</p>
            <div className="flex items-center gap-2 mb-2">
              <img src={authors[0].avatar} alt={authors[0].name} className="w-8 h-8 rounded-full border-2 border-blue-400" />
              <span className="font-semibold text-blue-700">Juliet Kamau</span>
              <span className="text-gray-400 text-xs ml-2">{publishDates[articles.length-1]}</span>
            </div>
            <Link to={`/blog/${featured.slug}`} className="inline-block mt-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow font-bold transition-transform">Read More</Link>
          </div>
        </div>
      </div>
      {/* Blog Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {filtered.map((a, i) => (
          <div key={a.slug} className="animate-fade-in-up" style={{animationDelay:`${i*60}ms`}}>
            <Link to={`/blog/${a.slug}`} className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-4 flex flex-col hover:scale-105 hover:shadow-2xl transition-transform cursor-pointer group border border-blue-100 dark:border-slate-700">
              <img src={a.img} alt={a.title} className="rounded-lg h-36 w-full object-cover mb-3 group-hover:opacity-90 transition" />
              <div className="flex items-center gap-2 mb-1">
                <span className="inline-block bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs font-bold">{getTopic(a)}</span>
                <span className="text-gray-400 text-xs">{publishDates[i%publishDates.length]}</span>
              </div>
              <h3 className="text-lg font-bold text-blue-700 mb-1">{a.title}</h3>
              <p className="text-gray-600 dark:text-blue-100 text-sm flex-1">{a.desc}</p>
              <div className="flex items-center gap-2 mt-2">
                <img src={authors[0].avatar} alt={authors[0].name} className="w-7 h-7 rounded-full border-2 border-blue-200" />
                <span className="font-semibold text-blue-700 text-xs">Juliet Kamau</span>
              </div>
              <span className="mt-2 text-xs text-blue-500 font-semibold">Read More &rarr;</span>
            </Link>
          </div>
        ))}
      </div>
      {/* Newsletter Signup CTA */}
      <div className="mt-14 flex flex-col items-center bg-gradient-to-r from-blue-100 via-amber-100/50 to-blue-50 dark:from-slate-900 dark:via-amber-900/20 dark:to-slate-800 rounded-2xl p-8 shadow-lg">
        <h4 className="text-xl font-bold text-blue-800 mb-2">Stay Informed!</h4>
        <p className="text-gray-600 dark:text-blue-100 mb-4 text-center">Subscribe to our newsletter for the latest AI insights, software development trends, financial tips, technology updates, and exclusive offers.</p>
        <form className="flex flex-col sm:flex-row gap-2 w-full max-w-md" onSubmit={e=>{e.preventDefault();alert('Subscribed!')}}>
          <input type="email" required placeholder="Your email" className="flex-1 px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-400" />
          <button type="submit" className="px-6 py-2 bg-gradient-to-r from-blue-600 to-amber-500 hover:from-blue-700 hover:to-amber-600 text-white rounded-lg font-bold shadow transition-all">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default Blog;
