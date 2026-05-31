import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, TrendingUp, HelpCircle, ArrowRight, Sparkles } from 'lucide-react';

interface PortfolioData {
  id: string;
  name: string;
  tagline: string;
  risk: 'Medium-High' | 'Medium-Low' | 'High';
  inrCagr: string;
  inrYtd: string;
  usdCagr: string;
  usdYtd: string;
  minInvestment: string;
  description: string;
  allocation: { name: string; pct: number }[];
  focus: string[];
}

export const Products: React.FC = () => {
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
  const [activeChart, setActiveChart] = useState<'all' | 'growth' | 'core' | 'advantage'>('all');
  
  // Questionnaire State
  const [qStep, setQStep] = useState<number>(0);
  const [qGoal, setQGoal] = useState<string>('');
  const [qRisk, setQRisk] = useState<string>('');
  const [qHorizon, setQHorizon] = useState<string>('');
  const [recommendation, setRecommendation] = useState<string>('');

  const portfolios: PortfolioData[] = [
    {
      id: 'global-growth-prisma',
      name: 'Global Growth Prisma',
      tagline: 'Global Equity Flexi-Cap Allocation',
      risk: 'Medium-High',
      inrCagr: '16.85%',
      inrYtd: '+11.1%',
      usdCagr: '12.45%',
      usdYtd: '+8.3%',
      minInvestment: '$500',
      description: 'A globally diversified equity allocation across developed and emerging markets designed to compound steadily across market cycles.',
      allocation: [
        { name: 'North America', pct: 40 },
        { name: 'Asia-Pacific', pct: 30 },
        { name: 'Europe', pct: 15 },
        { name: 'South America', pct: 15 },
      ],
      focus: ['Broad developed markets', 'Emerging market compounding', 'Systematic annual rebalancing'],
    },
    {
      id: 'global-core-prisma',
      name: 'Global Core Prisma',
      tagline: 'Multi-Asset Risk-Optimized Portfolio',
      risk: 'Medium-Low',
      inrCagr: '16.68%',
      inrYtd: '+10.4%',
      usdCagr: '12.28%',
      usdYtd: '+7.6%',
      minInvestment: '$500',
      description: 'A risk-balanced allocation combining global equities, corporate/sovereign bonds, and commodities (gold) to absorb drawdown spikes.',
      allocation: [
        { name: 'Global Equities', pct: 45 },
        { name: 'Fixed Income (Bonds)', pct: 35 },
        { name: 'Commodities/Gold', pct: 15 },
        { name: 'Cash Reserves', pct: 5 },
      ],
      focus: ['Fixed income yield cushions', 'Drawdown defense', 'Inflation-hedging commodities'],
    },
    {
      id: 'global-advantage-prisma',
      name: 'Global Advantage Prisma',
      tagline: 'Aggressive Global Growth & Mega-Caps',
      risk: 'High',
      inrCagr: '21.50%',
      inrYtd: '+27.1%',
      usdCagr: '17.10%',
      usdYtd: '+23.8%',
      minInvestment: '$1,000',
      description: 'A high-conviction, concentrated strategy heavily anchored in US mega-caps, high-growth European tech, and emerging tactical sectors.',
      allocation: [
        { name: 'US Mega-Cap Tech', pct: 60 },
        { name: 'European Innovation', pct: 15 },
        { name: 'APAC Tech Nodes', pct: 15 },
        { name: 'Tactical Sectors / Metals', pct: 10 },
      ],
      focus: ['AI and Semi-conductors', 'High concentration giants', 'Tactical momentum boosts'],
    },
  ];

  // Process questionnaire recommendations
  const handleNextStep = (answer: string, type: 'goal' | 'risk' | 'horizon') => {
    if (type === 'goal') setQGoal(answer);
    if (type === 'risk') setQRisk(answer);
    if (type === 'horizon') {
      setQHorizon(answer);
      
      // Compute recommendation
      // If low horizon (<3) or conservative risk -> Core Prisma
      // If aggressive risk or long horizon + tech focus -> Advantage Prisma
      // Else -> Growth Prisma
      if (qRisk === 'conservative' || answer === 'short') {
        setRecommendation('Global Core Prisma');
      } else if (qRisk === 'aggressive' || qGoal === 'tech') {
        setRecommendation('Global Advantage Prisma');
      } else {
        setRecommendation('Global Growth Prisma');
      }
    }
    setQStep(qStep + 1);
  };

  const resetQuestionnaire = () => {
    setQStep(0);
    setQGoal('');
    setQRisk('');
    setQHorizon('');
    setRecommendation('');
  };

  // Render historical performance chart

  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Page Header */}
      <div className="text-left mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-bold text-white tracking-tight mb-4">Prisma Portfolio Suites</h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            Algorithmic, low-cost ETF strategies curated based on global markets quantitative insights. Choose a strategy matching your risk parameters.
          </p>
        </div>

        {/* Currency Toggle */}
        <div className="flex bg-slate-950 p-1.5 rounded-lg border border-white/10 w-fit self-start md:self-auto">
          <button
            onClick={() => setCurrency('INR')}
            className={`px-4 py-2 text-xs font-bold rounded-md transition-all ${
              currency === 'INR' ? 'bg-brand-primary text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            INR Returns (with USD Hedging)
          </button>
          <button
            onClick={() => setCurrency('USD')}
            className={`px-4 py-2 text-xs font-bold rounded-md transition-all ${
              currency === 'USD' ? 'bg-brand-primary text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            USD Absolute Returns
          </button>
        </div>
      </div>

      {/* Portfolios Product Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
        {portfolios.map((port) => (
          <div key={port.id} className="glass-panel rounded-xl overflow-hidden border border-white/10 flex flex-col justify-between group hover:border-brand-accent/30 transition-all duration-300">
            {/* Header section */}
            <div className="p-8 pb-4 text-left">
              <div className="flex justify-between items-start mb-4">
                <span className={`text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full ${
                  port.risk === 'High' 
                    ? 'bg-red-500/10 text-red-400 border border-red-500/20' 
                    : port.risk === 'Medium-High'
                    ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20'
                    : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                }`}>
                  {port.risk} Risk
                </span>
                <span className="text-xs text-slate-500 font-mono">Min. {port.minInvestment}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-brand-accent transition-colors">{port.name}</h3>
              <p className="text-xs text-brand-accent font-medium tracking-wide mb-4">{port.tagline}</p>
              <p className="text-xs text-slate-400 leading-relaxed mb-6 h-16 overflow-hidden">
                {port.description}
              </p>
            </div>

            {/* Performance Bar (Tabular data) */}
            <div className="bg-slate-950/60 border-y border-white/5 py-4 px-8 text-left grid grid-cols-2 gap-4">
              <div>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest">CAGR</span>
                <div className="text-lg font-bold font-mono text-brand-success mt-0.5">
                  {currency === 'INR' ? port.inrCagr : port.usdCagr}
                </div>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest">YTD Return</span>
                <div className="text-lg font-bold font-mono text-brand-success mt-0.5">
                  {currency === 'INR' ? port.inrYtd : port.usdYtd}
                </div>
              </div>
            </div>

            {/* Focus Items & Action */}
            <div className="p-8 text-left flex-grow flex flex-col justify-between">
              <ul className="space-y-3 mb-8">
                {port.focus.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              
              <div className="space-y-3">
                <Link
                  to={`/products/prisma/${port.id}`}
                  className="w-full text-center py-2.5 bg-slate-900 hover:bg-slate-800 border border-white/10 hover:border-brand-accent/40 text-slate-200 text-xs font-semibold rounded-md flex items-center justify-center gap-2 transition-all"
                >
                  <span>View Factsheet Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <button className="w-full text-center py-2.5 bg-brand-primary text-white text-xs font-semibold rounded-md hover:bg-brand-primary/90 transition-all">
                  Invest Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Historical Performance SVG Chart */}
      <section className="glass-panel p-8 rounded-xl text-left mb-20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-brand-accent" />
              <h3 className="text-lg font-bold text-white">Hypothetical Historical Performance</h3>
            </div>
            <p className="text-xs text-slate-400">
              Growth of ₹10,000 invested since January 2020. Factoring index growth + actual dividends + USD appreciation.
            </p>
          </div>

          {/* Chart Toggles */}
          <div className="flex bg-slate-950 p-1 rounded border border-white/5 w-fit">
            {(['all', 'growth', 'core', 'advantage'] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setActiveChart(mode)}
                className={`px-3 py-1.5 text-xs font-semibold capitalize rounded ${
                  activeChart === mode ? 'bg-brand-primary text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {mode === 'all' ? 'All Portfolios' : mode}
              </button>
            ))}
          </div>
        </div>

        {/* SVG Drawing Canvas */}
        <div className="relative w-full h-80 bg-slate-950/40 rounded-lg p-4 border border-white/5">
          <svg className="w-full h-full" viewBox="0 0 700 300" fill="none" preserveAspectRatio="none">
            {/* Grid Lines */}
            <line x1="0" y1="250" x2="700" y2="250" stroke="rgba(255,255,255,0.05)" />
            <line x1="0" y1="180" x2="700" y2="180" stroke="rgba(255,255,255,0.05)" />
            <line x1="0" y1="110" x2="700" y2="110" stroke="rgba(255,255,255,0.05)" />
            <line x1="0" y1="40" x2="700" y2="40" stroke="rgba(255,255,255,0.05)" />
            
            {/* Time labels */}
            <text x="5" y="280" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="monospace">2020</text>
            <text x="120" y="280" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="monospace">2021</text>
            <text x="240" y="280" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="monospace">2022</text>
            <text x="360" y="280" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="monospace">2023</text>
            <text x="480" y="280" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="monospace">2024</text>
            <text x="600" y="280" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="monospace">2025</text>
            <text x="660" y="280" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="monospace">2026</text>

            {/* Growth Prisma (Blue Line) */}
            {(activeChart === 'all' || activeChart === 'growth') && (
              <polyline
                fill="none"
                stroke="#2e6db4"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                points="10,250 120,210 240,195 360,165 480,120 600,75 690,62"
              />
            )}
            
            {/* Core Prisma (Teal Line) */}
            {(activeChart === 'all' || activeChart === 'core') && (
              <polyline
                fill="none"
                stroke="#22d3ee"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                points="10,250 120,215 240,200 360,180 480,140 600,100 690,92"
              />
            )}

            {/* Advantage Prisma (Gold Line) */}
            {(activeChart === 'all' || activeChart === 'advantage') && (
              <polyline
                fill="none"
                stroke="#eab308"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                points="10,250 120,185 240,175 360,140 480,85 600,45 690,20"
              />
            )}
          </svg>

          {/* Map Legends */}
          <div className="absolute top-4 right-4 flex flex-wrap gap-4 bg-slate-900/90 border border-white/5 p-2.5 rounded text-[10px] font-mono">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-0.5 bg-brand-primary inline-block"></span>
              <span className="text-slate-300">Growth (₹24.5k)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-0.5 bg-brand-accent inline-block"></span>
              <span className="text-slate-300">Core (₹21.8k)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-0.5 bg-yellow-500 inline-block"></span>
              <span className="text-slate-300">Advantage (₹32.1k)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Matcher Questionnaire */}
      <section className="glass-panel p-8 rounded-xl text-left bg-gradient-to-r from-brand-bg via-brand-dark to-brand-bg relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 text-brand-accent/5 pointer-events-none">
          <HelpCircle className="w-48 h-48" />
        </div>

        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-brand-accent animate-pulse" />
            <span className="text-xs uppercase font-bold tracking-wider text-brand-accent">Prisma Matchmaker</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-6">Find Your Ideal Asset Mix</h3>
          
          {qStep === 0 && (
            <div className="space-y-4">
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Answer 3 quick questions about your global investing intent to match with a dedicated institutional-grade strategy.
              </p>
              <button
                onClick={() => setQStep(1)}
                className="px-6 py-3 bg-brand-primary text-white font-semibold text-xs rounded hover:bg-brand-primary/95 transition-all"
              >
                Start Matching
              </button>
            </div>
          )}

          {qStep === 1 && (
            <div className="space-y-4">
              <p className="text-sm font-semibold text-white">Q1: What is your primary objective with international assets?</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button 
                  onClick={() => handleNextStep('compounding', 'goal')}
                  className="p-4 border border-white/5 hover:border-brand-accent rounded-lg bg-slate-950/60 hover:bg-slate-900 text-xs font-semibold text-left transition-all"
                >
                  Steady Long-term Compounding
                </button>
                <button 
                  onClick={() => handleNextStep('preservation', 'goal')}
                  className="p-4 border border-white/5 hover:border-brand-accent rounded-lg bg-slate-950/60 hover:bg-slate-900 text-xs font-semibold text-left transition-all"
                >
                  Capital Preservation & Lower Drawdowns
                </button>
                <button 
                  onClick={() => handleNextStep('tech', 'goal')}
                  className="p-4 border border-white/5 hover:border-brand-accent rounded-lg bg-slate-950/60 hover:bg-slate-900 text-xs font-semibold text-left transition-all"
                >
                  High Tech Concentration (e.g. AI plays)
                </button>
              </div>
            </div>
          )}

          {qStep === 2 && (
            <div className="space-y-4">
              <p className="text-sm font-semibold text-white">Q2: How would you describe your risk tolerance for global volatility?</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button 
                  onClick={() => handleNextStep('conservative', 'risk')}
                  className="p-4 border border-white/5 hover:border-brand-accent rounded-lg bg-slate-950/60 hover:bg-slate-900 text-xs font-semibold text-left transition-all"
                >
                  Conservative: Prefers cushioning bonds
                </button>
                <button 
                  onClick={() => handleNextStep('moderate', 'risk')}
                  className="p-4 border border-white/5 hover:border-brand-accent rounded-lg bg-slate-950/60 hover:bg-slate-900 text-xs font-semibold text-left transition-all"
                >
                  Moderate: Accepts regular market moves
                </button>
                <button 
                  onClick={() => handleNextStep('aggressive', 'risk')}
                  className="p-4 border border-white/5 hover:border-brand-accent rounded-lg bg-slate-950/60 hover:bg-slate-900 text-xs font-semibold text-left transition-all"
                >
                  Aggressive: Seeks max returns
                </button>
              </div>
            </div>
          )}

          {qStep === 3 && (
            <div className="space-y-4">
              <p className="text-sm font-semibold text-white">Q3: What is your target holding horizon for this portfolio?</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button 
                  onClick={() => handleNextStep('short', 'horizon')}
                  className="p-4 border border-white/5 hover:border-brand-accent rounded-lg bg-slate-950/60 hover:bg-slate-900 text-xs font-semibold text-left transition-all"
                >
                  Short-Term (Less than 3 years)
                </button>
                <button 
                  onClick={() => handleNextStep('medium', 'horizon')}
                  className="p-4 border border-white/5 hover:border-brand-accent rounded-lg bg-slate-950/60 hover:bg-slate-900 text-xs font-semibold text-left transition-all"
                >
                  Medium-Term (3 to 7 years)
                </button>
                <button 
                  onClick={() => handleNextStep('long', 'horizon')}
                  className="p-4 border border-white/5 hover:border-brand-accent rounded-lg bg-slate-950/60 hover:bg-slate-900 text-xs font-semibold text-left transition-all"
                >
                  Long-Term (7+ years)
                </button>
              </div>
            </div>
          )}

          {qStep === 4 && (
            <div className="space-y-6">
              <div className="p-6 bg-brand-primary/10 border border-brand-primary/30 rounded-lg">
                <span className="text-[10px] uppercase font-bold tracking-widest text-brand-accent font-mono">Recommended Portfolio</span>
                <h4 className="text-xl font-bold text-white mt-1 mb-2">{recommendation}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Based on your goal, risk level, and holding horizon of {qHorizon === 'short' ? 'under 3 years' : qHorizon === 'medium' ? '3 to 7 years' : 'over 7 years'}, this allocation provides the optimum return-to-drawdown ratio.
                </p>
              </div>
              <div className="flex gap-4">
                <Link
                  to={recommendation === 'Global Growth Prisma' ? '/products/prisma/global-growth-prisma' : '/products'}
                  className="px-6 py-2.5 bg-brand-primary text-white font-semibold text-xs rounded hover:bg-brand-primary/95 transition-all"
                >
                  Explore Portfolio Info
                </Link>
                <button
                  onClick={resetQuestionnaire}
                  className="px-6 py-2.5 border border-white/10 hover:border-white/20 text-slate-300 font-semibold text-xs rounded transition-all"
                >
                  Reset Matcher
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

    </div>
  );
};
