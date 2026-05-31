import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShieldCheck, FileText, Download, Landmark, ArrowRight, RefreshCw, Layers } from 'lucide-react';

interface ETFDetail {
  ticker: string;
  name: string;
  category: string;
  weight: string;
}

interface ProductDetails {
  id: string;
  name: string;
  cagr: string;
  ytd: string;
  benchmark: string;
  inception: string;
  risk: string;
  minVal: string;
  fee: string;
  custodian: string;
  description: string;
  allocations: { name: string; pct: number; color: string; desc: string; etf: string }[];
  etfs: ETFDetail[];
}

export const PrismaDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activePortfolioId, setActivePortfolioId] = useState<string>(id || 'global-growth-prisma');
  const [hoveredSector, setHoveredSector] = useState<number | null>(null);

  const productData: Record<string, ProductDetails> = {
    'global-growth-prisma': {
      id: 'global-growth-prisma',
      name: 'Global Growth Prisma',
      cagr: '16.85%',
      ytd: '+11.1%',
      benchmark: 'MSCI World Index (INR)',
      inception: 'Jan 2020',
      risk: 'Medium-High',
      minVal: '$500',
      fee: '0.15% per annum',
      custodian: 'DriveWealth LLC / SIPC Insured',
      description: 'The flagship Flexi-Cap portfolio targeting compounding equity returns. It weights markets based on underlying economic strength, providing structured exposure to developed and emerging markets while hedging against local rupee devaluation.',
      allocations: [
        { name: 'North America', pct: 40, color: '#2e6db4', desc: 'Focuses on US mega-caps, high innovation growth nodes, and defensive dividend companies.', etf: 'VOO, QQQ, VTI' },
        { name: 'Asia-Pacific', pct: 30, color: '#22d3ee', desc: 'Captures manufacturing nodes, tech hardware (Taiwan, Korea), and emerging retail consumer growth.', etf: 'EWY, INDY, EWJ' },
        { name: 'Europe Equity', pct: 15, color: '#10b981', desc: 'Invests in developed European giants, industrial automation, and consumer luxury brands.', etf: 'VGK, IEUR' },
        { name: 'South America', pct: 15, color: '#eab308', desc: 'Captures resource production, agricultural compounding, and high-beta emerging innovators.', etf: 'ILF, EWZ' },
      ],
      etfs: [
        { ticker: 'VOO', name: 'Vanguard S&P 500 ETF', category: 'US Large Cap Equities', weight: '30.0%' },
        { ticker: 'QQQM', name: 'Invesco NASDAQ 100 Index ETF', category: 'US Technology & Innovation', weight: '10.0%' },
        { ticker: 'EWJ', name: 'iShares MSCI Japan ETF', category: 'Japan Equities', weight: '15.0%' },
        { ticker: 'EWY', name: 'iShares MSCI South Korea ETF', category: 'South Korea Equities', weight: '15.0%' },
        { ticker: 'VGK', name: 'Vanguard FTSE Europe ETF', category: 'European Developed Equities', weight: '15.0%' },
        { ticker: 'ILF', name: 'iShares Latin America 40 ETF', category: 'Latin American Equities', weight: '15.0%' },
      ]
    },
    'global-core-prisma': {
      id: 'global-core-prisma',
      name: 'Global Core Prisma',
      cagr: '16.68%',
      ytd: '+10.4%',
      benchmark: '60/40 Global Balanced Index (INR)',
      inception: 'Jan 2020',
      risk: 'Medium-Low',
      minVal: '$500',
      fee: '0.15% per annum',
      custodian: 'Interactive Brokers LLC / SIPC Insured',
      description: 'A multi-asset, risk-managed strategy designed to capture capital appreciation while maintaining a solid protective cushion. The portfolio systematically shifts weightings to buffer against equity downturns.',
      allocations: [
        { name: 'Global Equities', pct: 45, color: '#2e6db4', desc: 'Provides global equity capture across developed and major developing markets.', etf: 'VT, URTH' },
        { name: 'Fixed Income', pct: 35, color: '#22d3ee', desc: 'Sovereign and investment-grade corporate bonds yielding steady distributions.', etf: 'BNDX, AGG, TLT' },
        { name: 'Commodities/Gold', pct: 15, color: '#10b981', desc: 'Physical gold backing and liquid commodity funds to act as inflation hedges.', etf: 'GLD, IAU' },
        { name: 'Cash Reserves', pct: 5, color: '#eab308', desc: 'Short-duration yield bearing Treasury bills for drawdown safety.', etf: 'BIL, SHV' },
      ],
      etfs: [
        { ticker: 'VT', name: 'Vanguard Total World Stock ETF', category: 'Global Equities', weight: '45.0%' },
        { ticker: 'BNDX', name: 'Vanguard Total International Bond ETF', category: 'Global Fixed Income', weight: '20.0%' },
        { ticker: 'TLT', name: 'iShares 20+ Year Treasury Bond ETF', category: 'US Long Treasury Debt', weight: '15.0%' },
        { ticker: 'GLD', name: 'SPDR Gold Shares', category: 'Physical Gold Holdings', weight: '15.0%' },
        { ticker: 'BIL', name: 'SPDR Bloomberg 1-3 Month T-Bill ETF', category: 'Cash Equivalents / Yield', weight: '5.0%' },
      ]
    },
    'global-advantage-prisma': {
      id: 'global-advantage-prisma',
      name: 'Global Advantage Prisma',
      cagr: '21.50%',
      ytd: '+27.1%',
      benchmark: 'NASDAQ 100 Index (INR)',
      inception: 'Jan 2026',
      risk: 'High',
      minVal: '$1,000',
      fee: '0.20% per annum',
      custodian: 'DriveWealth LLC / SIPC Insured',
      description: 'An aggressive, growth-tilted portfolio focused on technological breakthroughs, semiconductor clusters, and innovative leaders. Ideal for high risk-appetite investors seeking outsized global momentum growth.',
      allocations: [
        { name: 'US Mega-Cap Tech', pct: 60, color: '#2e6db4', desc: 'Direct concentration in leading AI, cloud computing, and hardware corporations.', etf: 'XLK, QQQM' },
        { name: 'European Innovation', pct: 15, color: '#22d3ee', desc: 'Europe innovation leaders, specifically ASML, luxury groups, and healthcare nodes.', etf: 'IEUR, VGK' },
        { name: 'APAC Tech Nodes', pct: 15, color: '#10b981', desc: 'Advanced semiconductor foundries and component nodes in Taiwan and Japan.', etf: 'AAXJ, EWY' },
        { name: 'Tactical Sectors / Metals', pct: 10, color: '#eab308', desc: 'Tactical gold and growth commodities to add portfolio momentum buffers.', etf: 'GLDM' },
      ],
      etfs: [
        { ticker: 'XLK', name: 'Technology Select Sector SPDR Fund', category: 'US Tech Equities', weight: '40.0%' },
        { ticker: 'QQQM', name: 'Invesco NASDAQ 100 Index ETF', category: 'US Mega Cap Tech', weight: '20.0%' },
        { ticker: 'IEUR', name: 'iShares Core MSCI Europe ETF', category: 'European Large Caps', weight: '15.0%' },
        { ticker: 'AAXJ', name: 'iShares MSCI All Country Asia ex Japan ETF', category: 'Asia Pac ex-Japan Tech', weight: '15.0%' },
        { ticker: 'GLDM', name: 'SPDR Gold MiniShares', category: 'Tactical Precious Metals', weight: '10.0%' },
      ]
    }
  };

  const activeDetails = productData[activePortfolioId] || productData['global-growth-prisma'];
  let cumulativePercentage = 0;

  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Portfolio Selector Tabs */}
      <div className="flex bg-slate-950 p-1.5 rounded-lg border border-white/5 w-fit mx-auto mb-12">
        {Object.values(productData).map((p) => (
          <button
            key={p.id}
            onClick={() => {
              setActivePortfolioId(p.id);
              setHoveredSector(null);
            }}
            className={`px-6 py-2.5 text-xs font-semibold rounded-md transition-all ${
              activePortfolioId === p.id 
                ? 'bg-brand-primary text-white shadow' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>

      {/* Hero Panel */}
      <section className="glass-panel p-8 sm:p-12 rounded-xl text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 relative overflow-hidden">
        {/* Glow corner */}
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-primary/10 rounded-full blur-3xl"></div>

        {/* Hero Left info */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[10px] uppercase font-bold tracking-widest text-brand-accent px-3 py-1 bg-brand-accent/15 border border-brand-accent/30 rounded-full">
              {activeDetails.risk} Strategy
            </span>
            <span className="text-xs text-slate-400 font-mono">Inception: {activeDetails.inception}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">{activeDetails.name}</h2>
          <p className="text-sm text-slate-300 leading-relaxed">{activeDetails.description}</p>
          
          {/* Key Quick Facts Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-white/5">
            <div>
              <span className="text-[10px] text-slate-500 uppercase tracking-wider font-mono">CAGR (INR)</span>
              <div className="text-lg font-bold text-brand-success font-mono mt-0.5">{activeDetails.cagr}</div>
            </div>
            <div>
              <span className="text-[10px] text-slate-500 uppercase tracking-wider font-mono">YTD Return</span>
              <div className="text-lg font-bold text-brand-success font-mono mt-0.5">{activeDetails.ytd}</div>
            </div>
            <div>
              <span className="text-[10px] text-slate-500 uppercase tracking-wider font-mono">Benchmark</span>
              <div className="text-xs font-semibold text-slate-300 truncate mt-1 max-w-[130px]" title={activeDetails.benchmark}>
                {activeDetails.benchmark}
              </div>
            </div>
            <div>
              <span className="text-[10px] text-slate-500 uppercase tracking-wider font-mono">Management Fee</span>
              <div className="text-xs font-semibold text-slate-300 mt-1">{activeDetails.fee}</div>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-brand-primary hover:bg-brand-primary/95 text-white font-semibold text-xs rounded-md shadow-lg shadow-brand-primary/25 transition-all">
              Invest In Strategy
            </button>
            <button className="flex items-center gap-1.5 px-6 py-3 border border-white/10 hover:border-white/20 text-slate-300 font-semibold text-xs rounded-md bg-slate-900/50 hover:bg-slate-900 transition-all">
              <Download className="w-4 h-4" />
              <span>Download Factsheet PDF</span>
            </button>
          </div>
        </div>

        {/* Hero Right: Interactive Donut Allocation */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative w-64 h-64">
            {/* SVG Ring Donut */}
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="38" fill="transparent" stroke="rgba(255,255,255,0.02)" strokeWidth="8" />
              {activeDetails.allocations.map((alloc, idx) => {
                const strokeDashValue = alloc.pct;
                const strokeOffset = 100 - cumulativePercentage;
                cumulativePercentage += strokeDashValue;

                // Radius 38 -> Circumference = 2 * pi * r = 238.76
                // Dasharray length matches percentage out of 100
                const circ = 238.76;
                const dashArray = `${(strokeDashValue * circ) / 100} ${circ}`;
                const dashOffset = `${circ - ((strokeOffset * circ) / 100)}`;

                return (
                  <circle
                    key={idx}
                    cx="50"
                    cy="50"
                    r="38"
                    fill="transparent"
                    stroke={alloc.color}
                    strokeWidth={hoveredSector === idx ? '11' : '8'}
                    strokeDasharray={dashArray}
                    strokeDashoffset={dashOffset}
                    strokeLinecap="round"
                    className="cursor-pointer transition-all duration-300"
                    onMouseEnter={() => setHoveredSector(idx)}
                    onMouseLeave={() => setHoveredSector(null)}
                  />
                );
              })}
            </svg>
            
            {/* Center Label */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              {hoveredSector !== null ? (
                <>
                  <span className="text-xl font-bold font-mono text-white" style={{ color: activeDetails.allocations[hoveredSector].color }}>
                    {activeDetails.allocations[hoveredSector].pct}%
                  </span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest text-center px-4 font-semibold truncate max-w-[150px]">
                    {activeDetails.allocations[hoveredSector].name}
                  </span>
                </>
              ) : (
                <>
                  <Layers className="w-6 h-6 text-brand-accent mb-1 animate-pulse-slow" />
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Asset Mix</span>
                </>
              )}
            </div>
          </div>

          {/* Allocation Legend */}
          <div className="grid grid-cols-2 gap-4 mt-6 w-full px-4 text-xs">
            {activeDetails.allocations.map((alloc, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredSector(idx)}
                onMouseLeave={() => setHoveredSector(null)}
                className={`flex items-start gap-2 p-1.5 rounded cursor-pointer transition-all ${
                  hoveredSector === idx ? 'bg-slate-900 border border-white/5' : 'border border-transparent'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full mt-1 flex-shrink-0" style={{ backgroundColor: alloc.color }}></span>
                <div className="text-left">
                  <span className="font-semibold text-white block">{alloc.name} ({alloc.pct}%)</span>
                  <span className="text-[10px] text-slate-400 leading-tight block truncate max-w-[140px]" title={alloc.desc}>
                    {alloc.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factsheet Details Table */}
      <section className="glass-panel p-8 rounded-xl text-left mb-16">
        <div className="flex items-center gap-2 mb-6">
          <FileText className="w-5 h-5 text-brand-accent" />
          <h3 className="text-lg font-bold text-white">Underlying ETF Holdings</h3>
        </div>
        <p className="text-xs text-slate-400 leading-relaxed mb-8">
          Prisma portfolios purchase liquid, institutional ETFs listed on major global exchanges. This provides dual liquidity and absolute custody protections.
        </p>

        {/* Tabular factsheet in Monospace */}
        <div className="overflow-x-auto">
          <table className="w-full text-xs font-mono text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-slate-500 pb-3">
                <th className="py-3 font-semibold uppercase tracking-wider">Ticker</th>
                <th className="py-3 font-semibold uppercase tracking-wider">Fund Name</th>
                <th className="py-3 font-semibold uppercase tracking-wider">Asset Class</th>
                <th className="py-3 font-semibold uppercase tracking-wider text-right">Target Weight</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-300">
              {activeDetails.etfs.map((etf) => (
                <tr key={etf.ticker} className="hover:bg-slate-900/30 transition-colors">
                  <td className="py-3.5 font-bold text-brand-accent">{etf.ticker}</td>
                  <td className="py-3.5 text-white font-sans">{etf.name}</td>
                  <td className="py-3.5 text-slate-400">{etf.category}</td>
                  <td className="py-3.5 text-right font-bold text-brand-success">{etf.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Rebalancing Note */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-400 leading-relaxed">
          <div className="flex items-center gap-2">
            <RefreshCw className="w-4 h-4 text-brand-accent animate-spin-slow" />
            <span><strong>Systematic Rebalancing:</strong> The portfolio is auto-rebalanced annually to prevent deviation from target allocations.</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-brand-success" />
            <span>Custody: Fully cleared and isolated.</span>
          </div>
        </div>
      </section>

      {/* LRS Funding Steps */}
      <section className="glass-panel p-8 sm:p-12 rounded-xl text-left bg-gradient-to-br from-brand-bg to-brand-dark relative overflow-hidden">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <Landmark className="w-5 h-5 text-brand-accent animate-pulse-slow" />
            <span className="text-xs uppercase font-bold tracking-wider text-brand-accent">Funding Process</span>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-6">How do I fund my USD Wallet?</h3>
          <p className="text-sm text-slate-300 leading-relaxed mb-8">
            Under the Reserve Bank of India’s Liberalised Remittance Scheme (LRS), resident Indians can remit up to $250,000 per financial year for foreign assets. We make this remittance completely digital and frictionless.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-full bg-slate-900 border border-brand-accent text-xs font-mono font-bold text-brand-accent">
                1
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Connect Indian Bank Account</h4>
                <p className="text-xs text-slate-400 leading-relaxed mt-1">
                  Securely link your net banking portal. We support direct digital LRS remittance with HDFC, ICICI, IDFC First, Axis, and SBI.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-full bg-slate-900 border border-brand-accent text-xs font-mono font-bold text-brand-accent">
                2
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Request Digital A2 Form Verification</h4>
                <p className="text-xs text-slate-400 leading-relaxed mt-1">
                  We pre-fill the mandatory FEMA A2 declaration forms on your behalf. Sign securely with OTP authentication.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-full bg-slate-900 border border-brand-accent text-xs font-mono font-bold text-brand-accent">
                3
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Automated Clearing & Placement</h4>
                <p className="text-xs text-slate-400 leading-relaxed mt-1">
                  Your funds are cleared into our partner global custodian’s nodal USD wallet, and auto-allocated to your chosen Prisma portfolio within 36 hours.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-wrap gap-4 mt-4">
            <Link
              to="/faq"
              className="px-6 py-3 bg-slate-900 hover:bg-slate-800 border border-white/10 hover:border-brand-accent/40 text-slate-200 font-semibold text-xs rounded transition-all"
            >
              Read LRS Tax FAQ
            </Link>
            <Link
              to="/contact"
              className="flex items-center gap-1.5 text-brand-accent font-semibold text-xs hover:underline"
            >
              <span>Talk to LRS Desk expert</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
