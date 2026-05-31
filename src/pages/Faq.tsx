import React, { useState } from 'react';
import { Search, ThumbsUp, ThumbsDown, ChevronDown, ChevronUp, MessageSquare, Info } from 'lucide-react';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
  category: 'prisma' | 'lrs' | 'tax' | 'gift';
}

export const Faq: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'prisma' | 'lrs' | 'tax' | 'gift'>('all');
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  
  // Rating states (tracked per FAQ item ID)
  const [feedbackGiven, setFeedbackGiven] = useState<Record<number, 'yes' | 'no'>>({});

  const faqData: FaqItem[] = [
    {
      id: 1,
      category: 'prisma',
      question: 'What is a Prisma portfolio and how is it constructed?',
      answer: 'Prisma portfolios are institutional-grade baskets of low-cost, liquid Exchange Traded Funds (ETFs) listed on US exchanges. They are constructed using proprietary quantitative algorithms that weight markets based on macro factors, financial momentum, and currency valuation. Portfolios are automatically rebalanced annually.',
    },
    {
      id: 2,
      category: 'lrs',
      question: 'What is the RBI Liberalised Remittance Scheme (LRS)?',
      answer: 'The Liberalised Remittance Scheme (LRS) is a regulatory framework by the Reserve Bank of India that permits resident Indian individuals to freely remit up to USD 250,000 per financial year (April – March) for any permitted current or capital account transactions, including investing in overseas stocks, ETFs, and mutual funds.',
    },
    {
      id: 3,
      category: 'tax',
      question: 'What is the Tax Collected at Source (TCS) rate on global investments?',
      answer: 'Under current Indian finance laws, remittances under LRS for investing are subject to a Tax Collected at Source (TCS). There is no TCS up to ₹7 Lakhs per financial year. Remittances exceeding ₹7 Lakhs attract a 20% TCS. Note that this TCS is NOT an absolute tax; it can be fully claimed or adjusted against your advance tax liabilities when filing your income tax return (ITR).',
    },
    {
      id: 4,
      category: 'gift',
      question: 'What is GIFT City and can I invest through it?',
      answer: 'GIFT City (Gujarat International Finance Tec-City) is India’s first International Financial Services Centre (IFSC). It acts as an offshore jurisdiction within India, allowing transactions in foreign currencies (like USD). Spring Street supports routing investments through IFSC GIFT City structures to optimize remittance speed and tax compliance details.',
    },
    {
      id: 5,
      category: 'prisma',
      question: 'What is the minimum investment size for Spring Street Prisma?',
      answer: 'To make global investing accessible, the minimum threshold to invest in the Global Growth and Global Core Prisma strategies is set at $500 (approx ₹41,500). For the concentrated Global Advantage Prisma, the minimum threshold is $1,000.',
    },
    {
      id: 6,
      category: 'tax',
      question: 'How are capital gains taxed on US ETF investments for Indians?',
      answer: 'US ETF gains are classified as debt-like instruments for tax purposes in India if held for less than 36 months, taxed at your normal slab rate. If held for more than 36 months, they are taxed as long-term capital gains (LTCG) at 20% with indexation benefits. There is no US capital gains tax for non-US resident aliens; taxes are only payable in India.',
    },
    {
      id: 7,
      category: 'lrs',
      question: 'How long does it take for my money to reach my USD wallet?',
      answer: 'Once you authorize the remittance via your bank portal, the conversion to USD and placement in your DriveWealth/IB account typically takes 24 to 36 business hours. Withdrawals back to your Indian bank account generally take 2 to 3 business days to clear.',
    },
  ];

  // Filtering logic
  const filteredFaqs = faqData.filter((faq) => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleAccordion = (id: number) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const handleFeedback = (id: number, type: 'yes' | 'no') => {
    setFeedbackGiven((prev) => ({
      ...prev,
      [id]: type
    }));
  };

  return (
    <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white tracking-tight mb-4">Frequently Asked Questions</h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Find answers regarding Prisma portfolios, Reserve Bank of India LRS rules, and international tax compliance.
        </p>
      </div>

      {/* Live Search Bar */}
      <div className="relative mb-8">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="w-5 h-5 text-slate-500" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by topic, keyword (e.g. 'TCS', 'LRS', 'fee')..."
          className="w-full bg-slate-950/80 border border-white/10 focus:border-brand-accent/50 rounded-lg pl-12 pr-4 py-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-brand-accent/30 transition-all"
        />
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-8 bg-slate-950 p-1.5 rounded-lg border border-white/5 w-fit mx-auto">
        {(['all', 'prisma', 'lrs', 'tax', 'gift'] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setOpenAccordion(null);
            }}
            className={`px-4 py-2 text-xs font-semibold capitalize rounded-md transition-all ${
              activeCategory === cat 
                ? 'bg-brand-primary text-white shadow-sm' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {cat === 'all' 
              ? 'All Topics' 
              : cat === 'prisma'
              ? 'Prisma Portfolios'
              : cat === 'lrs'
              ? 'LRS Funding'
              : cat === 'tax'
              ? 'Taxes & ITR'
              : 'GIFT City'
            }
          </button>
        ))}
      </div>

      {/* FAQs List Accordion */}
      <div className="space-y-4 text-left">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq) => {
            const isOpen = openAccordion === faq.id;
            const feedback = feedbackGiven[faq.id];

            return (
              <div key={faq.id} className="glass-panel rounded-lg overflow-hidden border border-white/5 transition-all">
                
                {/* Question Row */}
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 hover:bg-slate-900/35 transition-colors focus:outline-none"
                >
                  <span className="text-sm font-bold text-white leading-normal pr-2">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-brand-accent flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-500 flex-shrink-0" />
                  )}
                </button>

                {/* Answer Row (Accordion content) */}
                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-white/5 bg-slate-950/20">
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                      {faq.answer}
                    </p>
                    
                    {/* Helpfulness Feedbacks */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/5 text-[10px] text-slate-500 font-mono font-semibold">
                      <div className="flex items-center gap-1.5">
                        <Info className="w-3.5 h-3.5 text-slate-600" />
                        <span className="uppercase">Category: {faq.category === 'gift' ? 'GIFT City' : faq.category}</span>
                      </div>
                      
                      {feedback ? (
                        <span className="text-brand-success font-semibold">Thank you for your feedback!</span>
                      ) : (
                        <div className="flex items-center gap-3">
                          <span>Was this answer helpful?</span>
                          <button
                            onClick={() => handleFeedback(faq.id, 'yes')}
                            className="flex items-center gap-1 px-2.5 py-1 bg-slate-900 hover:bg-slate-800 border border-white/5 text-slate-400 hover:text-white rounded transition-colors"
                          >
                            <ThumbsUp className="w-3 h-3" />
                            <span>Yes</span>
                          </button>
                          <button
                            onClick={() => handleFeedback(faq.id, 'no')}
                            className="flex items-center gap-1 px-2.5 py-1 bg-slate-900 hover:bg-slate-800 border border-white/5 text-slate-400 hover:text-white rounded transition-colors"
                          >
                            <ThumbsDown className="w-3 h-3" />
                            <span>No</span>
                          </button>
                        </div>
                      )}
                    </div>

                  </div>
                )}

              </div>
            );
          })
        ) : (
          <div className="glass-panel p-8 text-center rounded-lg space-y-4">
            <MessageSquare className="w-8 h-8 text-slate-600 mx-auto" />
            <p className="text-sm text-slate-400">No matching questions found for "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="text-xs text-brand-accent font-semibold hover:underline"
            >
              Clear filters and search
            </button>
          </div>
        )}
      </div>

    </div>
  );
};
