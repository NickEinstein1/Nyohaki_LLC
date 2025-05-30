import React from 'react';
import { useParams, Link } from 'react-router-dom';

export const articles = [
  {
    slug: 'digital-insurance-rise',
    title: 'The Rise of Digital Insurance: What It Means for Policyholders',
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
    content: (
      <>
        <p className="mb-4 text-gray-800 dark:text-blue-100">
          The insurance industry is undergoing a digital revolution, making it easier and faster for policyholders to access, manage, and understand their coverage. Digital insurance platforms offer seamless online applications, instant quotes, and real-time claims tracking, all from the comfort of your home or office.
        </p>
        <ul className="list-disc pl-5 mb-4 text-gray-800 dark:text-blue-100">
          <li><b>Convenience:</b> Purchase and manage policies online, 24/7.</li>
          <li><b>Transparency:</b> Compare plans, prices, and coverage at a glance.</li>
          <li><b>Speed:</b> Faster approvals and claims processing using AI and automation.</li>
        </ul>
        <p className="mb-2 text-gray-800 dark:text-blue-100">
          For policyholders, this means more control, better customer experience, and quicker resolutions. As digital tools become standard, insurers who embrace technology will offer even more value and peace of mind.
        </p>
        <div className="mt-4 text-xs text-gray-500">By Juliet Kamau • Industry News & Trends</div>
      </>
    )
  },
  {
    slug: 'risk-management-savings',
    title: 'Why More Businesses Are Saving with Risk Management Services',
    img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
    content: (
      <>
        <p className="mb-4 text-gray-800 dark:text-blue-100">
          In today’s unpredictable environment, businesses face a growing array of risks—from cyber threats to natural disasters. As a result, more organizations are turning to professional risk management services to safeguard their assets, reputation, and bottom line.
        </p>
        <ul className="list-disc pl-5 mb-4 text-gray-800 dark:text-blue-100">
          <li><b>Proactive Protection:</b> Identify and address potential risks before they become costly problems.</li>
          <li><b>Regulatory Compliance:</b> Stay ahead of changing laws and industry standards.</li>
          <li><b>Business Continuity:</b> Develop robust plans to keep operations running during disruptions.</li>
        </ul>
        <p className="mb-2 text-gray-800 dark:text-blue-100">
          Saving with risk management isn't just about avoiding losses—it's about building resilience and gaining a competitive edge. Businesses that prioritize risk management are better prepared for whatever the future holds.
        </p>
        <div className="mt-4 text-xs text-gray-500">By Juliet Kamau • Industry News & Trends</div>
      </>
    )
  },

  {
    slug: 'understanding-annuities',
    title: 'Understanding Annuities: Secure Your Retirement',
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    content: (
      <>
        <p className="mb-4 text-gray-800 dark:text-blue-100">Annuities can be a powerful tool for retirement planning. Here’s what you need to know:</p>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-gray-800 dark:text-blue-100">
          <li><b className="text-blue-900 dark:text-blue-300">What is an Annuity?</b> An annuity is a contract that provides regular payments in exchange for a lump sum or series of contributions.</li>
          <li><b className="text-blue-900 dark:text-blue-300">Types:</b> Fixed, variable, and indexed annuities offer different risk and growth profiles.</li>
          <li><b className="text-blue-900 dark:text-blue-300">Benefits:</b> Guaranteed income, tax-deferred growth, and protection against outliving your savings.</li>
          <li><b className="text-blue-900 dark:text-blue-300">Considerations:</b> Always review fees, surrender charges, and payout options before buying.</li>
        </ul>
        <p>Consult a financial advisor to see if an annuity fits your long-term strategy.</p>
      </>
    )
  },
  {
    slug: 'intro-to-iul',
    title: 'Indexed Universal Life (IUL): Flexible Protection & Growth',
    img: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80',
    content: (
      <>
        <p className="mb-4 text-gray-800 dark:text-blue-100">Indexed Universal Life (IUL) insurance combines lifelong protection with flexible premiums and the potential for market-linked growth.</p>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-gray-800 dark:text-blue-100">
          <li><b className="text-blue-900 dark:text-blue-300">Flexible Premiums:</b> Adjust payments and coverage as your needs change.</li>
          <li><b className="text-blue-900 dark:text-blue-300">Market-Linked Growth:</b> Earn interest based on a market index, with downside protection.</li>
          <li><b className="text-blue-900 dark:text-blue-300">Tax Advantages:</b> Tax-deferred growth and potentially tax-free withdrawals for certain uses.</li>
          <li><b className="text-blue-900 dark:text-blue-300">Lifelong Coverage:</b> IULs can provide protection for your entire life.</li>
        </ul>
        <p>Work with a licensed agent to understand if an IUL is right for your goals.</p>
      </>
    )
  },
  {
    slug: 'cyber-risk-insurance',
    title: 'Cyber Risk Insurance: Protecting Your Digital World',
    img: 'https://images.unsplash.com/photo-1510511233900-0089f3bdf7c4?auto=format&fit=crop&w=400&q=80',
    content: (
      <>
        <p className="mb-4 text-gray-800 dark:text-blue-100">Cyber insurance helps protect businesses and individuals from the financial impact of cyber threats. Here’s why it matters:</p>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-gray-800 dark:text-blue-100">
          <li><b className="text-blue-900 dark:text-blue-300">What Does It Cover?</b> Losses from data breaches, ransomware, business interruption, and legal costs.</li>
          <li><b className="text-blue-900 dark:text-blue-300">Who Needs It?</b> Any business or individual handling sensitive data online.</li>
          <li><b className="text-blue-900 dark:text-blue-300">Benefits:</b> Financial protection, expert response teams, and peace of mind in case of a cyber incident.</li>
          <li><b className="text-blue-900 dark:text-blue-300">Prevention:</b> Many insurers provide risk assessments and resources to help prevent attacks.</li>
        </ul>
        <p>Cyber insurance is a must-have for modern risk management.</p>
      </>
    )
  },
  {
    slug: 'top-5-insurance-myths',
    title: 'Top 5 Insurance Myths',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    content: (
      <>
        <p className="mb-4 text-gray-800 dark:text-blue-100">Insurance is often misunderstood, leading to costly mistakes or missed opportunities for protection. Here, we debunk the top five myths that prevent people from making smart insurance decisions:</p>
        <ol className="list-decimal pl-5 space-y-2 mb-4 text-gray-800 dark:text-blue-100">
          <li><b className="text-blue-900 dark:text-blue-300">"Insurance is too expensive."</b> Many affordable plans exist for all budgets. Comparing options and understanding your needs can help you find a policy that fits.</li>
          <li><b className="text-blue-900 dark:text-blue-300">"I’m young and healthy, I don’t need insurance."</b> Accidents and illnesses can happen at any age. Early coverage is often cheaper and provides peace of mind.</li>
          <li><b className="text-blue-900 dark:text-blue-300">"All insurance policies are the same."</b> Every policy has unique terms, coverage, and exclusions. Always read the fine print and ask questions.</li>
          <li><b className="text-blue-900 dark:text-blue-300">"The claims process is always a hassle."</b> Modern insurers offer digital claims and fast, transparent service. Choose a company with a strong reputation for customer care.</li>
          <li><b className="text-blue-900 dark:text-blue-300">"Insurance companies never pay out."</b> Most reputable insurers pay valid claims promptly. Understanding your policy and keeping documents in order ensures a smooth process.</li>
        </ol>
        <p>Understanding the truth about insurance helps you make informed choices and ensures you and your loved ones are truly protected.</p>
      </>
    )
  },
  {
    slug: 'choose-the-right-policy',
    title: 'How to Choose the Right Policy',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    content: (
      <>
        <p className="mb-4 text-gray-800 dark:text-blue-100">Choosing the right insurance policy can feel overwhelming, but it doesn’t have to be. Here are five steps to help you select the best coverage for your needs:</p>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-gray-800 dark:text-blue-100">
          <li><b className="text-blue-900 dark:text-blue-300">Assess Your Needs:</b> Consider your family, assets, health, and lifestyle. Do you need life, health, auto, or home insurance?</li>
          <li><b className="text-blue-900 dark:text-blue-300">Compare Plans:</b> Look at coverage, premiums, deductibles, and exclusions. Use comparison tools or consult an agent.</li>
          <li><b className="text-blue-900 dark:text-blue-300">Check Insurer Reputation:</b> Read reviews and check ratings for claim satisfaction and customer service.</li>
          <li><b className="text-blue-900 dark:text-blue-300">Understand the Fine Print:</b> Know what’s covered, what’s not, and how the claims process works.</li>
          <li><b className="text-blue-900 dark:text-blue-300">Ask Questions:</b> Don’t hesitate to clarify terms, riders, and benefits before buying.</li>
        </ul>
        <p>Taking these steps ensures you’re well-informed and confident in your insurance choices.</p>
      </>
    )
  },
  {
    slug: 'understanding-claims',
    title: 'Understanding Claims',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    content: (
      <>
        <p className="mb-4 text-gray-800 dark:text-blue-100">Filing an insurance claim can seem daunting, but it’s a straightforward process when you know what to expect. Here’s a step-by-step guide:</p>
        <ol className="list-decimal pl-5 space-y-2 mb-4 text-gray-800 dark:text-blue-100">
          <li><b className="text-blue-900 dark:text-blue-300">Notify Your Insurer:</b> As soon as an incident occurs, contact your insurance provider to start the claim process.</li>
          <li><b className="text-blue-900 dark:text-blue-300">Gather Documentation:</b> Collect all necessary documents: policy details, receipts, photos, police reports, or medical records as needed.</li>
          <li><b className="text-blue-900 dark:text-blue-300">Submit Your Claim:</b> File online or via your agent. Double-check all information for accuracy.</li>
          <li><b className="text-blue-900 dark:text-blue-300">Follow Up:</b> Track your claim’s progress and respond promptly to any requests for additional information.</li>
          <li><b className="text-blue-900 dark:text-blue-300">Receive Payment:</b> Once approved, you’ll receive your payout or service. If denied, ask for a detailed explanation and appeal if necessary.</li>
        </ol>
        <p>Staying organized and proactive makes the claims process smoother and less stressful.</p>
      </>
    )
  },
  {
    slug: 'importance-of-life-insurance',
    title: 'The Importance of Life Insurance',
    img: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=400&q=80',
    content: (
      <>
        <p className="mb-4 text-gray-800 dark:text-blue-100">Life insurance is more than just a policy—it’s a promise to your loved ones that they’ll be cared for, no matter what. Here’s why it matters:</p>
        <div className="space-y-2 mb-4">
          <p><b className="text-blue-900 dark:text-blue-300">Financial Security:</b> Life insurance provides your loved ones with financial support for living expenses, education, and debts if you’re no longer there.</p>
          <p><b className="text-blue-900 dark:text-blue-300">Peace of Mind:</b> Knowing your family is protected brings comfort and confidence for the future.</p>
          <p><b className="text-blue-900 dark:text-blue-300">Legacy Planning:</b> Life insurance can help you leave a legacy, support charities, or fund future generations.</p>
          <p><b className="text-blue-900 dark:text-blue-300">Affordable Protection:</b> Many options exist for every budget. The earlier you start, the better the rates.</p>
        </div>
        <p>Saving with life insurance today ensures your family's tomorrow is secure and full of opportunity.</p>
      </>
    )
  },
];

const BlogArticle = () => {
  const { slug } = useParams();
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return <div className="py-16 text-center text-xl text-red-600">Blog article not found.</div>;
  }

  return (
    <section className="max-w-2xl mx-auto py-16 px-4">
      <Link to="/blog" className="text-blue-600 hover:underline mb-4 inline-block">← Back to Blog</Link>
      <img src={article.img} alt={article.title} className="rounded-lg w-full h-60 object-cover mb-6" />
      <h1 className="text-3xl font-bold text-blue-800 mb-4">{article.title}</h1>
      <div className="prose max-w-none text-gray-800 dark:text-gray-100">{article.content}</div>
    </section>
  );
};

export default BlogArticle;
