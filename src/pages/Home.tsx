import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, DollarSign, TrendingUp, Compass, ChevronRight, Zap } from 'lucide-react';

export const Home: React.FC = () => {
  // LRS Calculator State
  const [calcAmount, setCalcAmount] = useState<number>(25000);
  const [calcYears, setCalcYears] = useState<number>(10);
  const [calcType, setCalcType] = useState<'monthly' | 'onetime'>('monthly');

  // Rates (CAGR in INR)
  const SS_PRISMA_RATE = 0.1685; // 16.85% (Includes global equity + USD hedge)
  const INDIA_MF_RATE = 0.1250;  // 12.5% (Nifty Index Average)
  const INDIA_FD_RATE = 0.0700;  // 7% (Indian Bank Fixed Deposit)

  const [ssValue, setSsValue] = useState<number>(0);
  const [mfValue, setMfValue] = useState<number>(0);
  const [fdValue, setFdValue] = useState<number>(0);

  // Recalculate compound interest
  useEffect(() => {
    const calculateGrowth = (rate: number) => {
      if (calcType === 'onetime') {
        return calcAmount * Math.pow(1 + rate, calcYears);
      } else {
        // Monthly SIP Formula
        const monthlyRate = rate / 12;
        const totalMonths = calcYears * 12;
        if (monthlyRate === 0) return calcAmount * totalMonths;
        return calcAmount * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * (1 + monthlyRate);
      }
    };

    setSsValue(Math.round(calculateGrowth(SS_PRISMA_RATE)));
    setMfValue(Math.round(calculateGrowth(INDIA_MF_RATE)));
    setFdValue(Math.round(calculateGrowth(INDIA_FD_RATE)));
  }, [calcAmount, calcYears, calcType]);

  const totalInvested = calcType === 'onetime' ? calcAmount : calcAmount * calcYears * 12;

  return (
    <div className="relative overflow-hidden pb-24">
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 md:pt-24 md:pb-36 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 flex flex-col text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-primary/10 border border-brand-primary/30 rounded-full w-fit mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
                <span className="text-xs font-semibold text-brand-accent uppercase tracking-wider">Spring Street 2.0 has Launched</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-none mb-6"
              >
                Indian Wealth now has a <br />
                <span className="bg-gradient-to-r from-brand-accent via-cyan-400 to-brand-primary bg-clip-text text-transparent text-glow">
                  Global Benchmark
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mb-8"
              >
                Diversify beyond domestic markets. Access institutional-grade global investing products built on quantitative research, optimized for long-term compounding.
              </p>

              <div className="flex flex-wrap gap-4"
              >
                <Link
                  to="/products"
                  className="flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-brand-primary to-brand-primary/95 text-white font-semibold rounded-md shadow-lg shadow-brand-primary/25 hover:shadow-brand-accent/20 hover:scale-[1.02] transition-all duration-300"
                >
                  <span>Explore Portfolios</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="flex items-center gap-2 px-6 py-3.5 bg-slate-900 border border-white/10 hover:border-brand-accent/40 text-slate-200 font-semibold rounded-md hover:bg-slate-800/80 transition-all duration-300"
                >
                  Book Consultation
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap gap-8 text-xs text-slate-400"
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-brand-accent" />
                  <span>SIPC Insured Custody up to $500k</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-brand-success" />
                  <span>Transparent 0.15% expense ratio</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-brand-accent" />
                  <span>CAGR 16.85% (since 2020)</span>
                </div>
              </div>
            </div>

            {/* Right Hero Visual: Animated SVG Prism */}
            <div className="lg:col-span-5 flex justify-center relative mt-10 lg:mt-0"
            >
              {/* Glow Behind */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/30 to-brand-accent/10 rounded-full blur-3xl opacity-60"></div>
              
              {/* Dynamic SVG Drawing */}
              <svg className="w-72 h-72 sm:w-96 sm:h-96 relative animate-float" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Outermost Ring */}
                <circle cx="250" cy="250" r="180" stroke="rgba(34, 211, 238, 0.15)" strokeWidth="1" strokeDasharray="5 5" />
                <circle cx="250" cy="250" r="210" stroke="rgba(46, 109, 180, 0.1)" strokeWidth="2" />
                
                {/* Defracted Light Streaks */}
                <path d="M 50,250 L 220,250" stroke="rgba(255,255,255,0.7)" strokeWidth="3" strokeDasharray="10 5" />
                
                {/* Prisma Triangle Body (Glass effect) */}
                <polygon points="250,110 370,330 130,330" fill="rgba(11, 18, 38, 0.6)" stroke="rgba(34, 211, 238, 0.4)" strokeWidth="3" style={{ backdropFilter: 'blur(10px)' }} />
                
                {/* Interior Refraction Path */}
                <polygon points="250,150 330,300 170,300" fill="rgba(34, 211, 238, 0.05)" stroke="rgba(34, 211, 238, 0.2)" strokeWidth="1.5" />
                
                {/* Defracted Outward Light Rays (Color Gradients) */}
                <path d="M 230,250 L 450,180" stroke="url(#paint0_linear)" strokeWidth="5" strokeLinecap="round" />
                <path d="M 240,255 L 460,240" stroke="url(#paint1_linear)" strokeWidth="4.5" strokeLinecap="round" />
                <path d="M 245,260 L 440,310" stroke="url(#paint2_linear)" strokeWidth="4" strokeLinecap="round" />
                
                {/* Hot spots / particles */}
                <circle cx="220" cy="250" r="4" fill="#22d3ee" className="animate-ping" />
                <circle cx="250" cy="110" r="3" fill="#ffffff" />
                <circle cx="370" cy="330" r="3" fill="#ffffff" />
                <circle cx="130" cy="330" r="3" fill="#ffffff" />

                {/* Definitions */}
                <defs>
                  <linearGradient id="paint0_linear" x1="230" y1="250" x2="450" y2="180" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#22d3ee" />
                    <stop offset="1" stopColor="#22d3ee" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="paint1_linear" x1="240" y1="255" x2="460" y2="240" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#10b981" />
                    <stop offset="1" stopColor="#10b981" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="paint2_linear" x1="245" y1="260" x2="440" y2="310" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#eab308" />
                    <stop offset="1" stopColor="#eab308" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

          </div>
        </div>
      </section>

      {/* Why Invest Globally Grid */}
      <section className="py-20 relative border-y border-white/5 bg-[#030610]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white tracking-tight mb-4">
              Why Invest Internationally?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              India produces less than 3% of global capital markets. By neglecting international allocation, you miss the growth of the world's most dominant technological and consumer titans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="glass-panel glass-panel-hover p-8 rounded-xl flex flex-col text-left">
              <div className="w-12 h-12 flex items-center justify-center bg-brand-primary/20 text-brand-accent rounded-lg mb-6 border border-brand-accent/20">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">True Diversification</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Reduce geographic vulnerability. Indian equities are highly correlated to domestic policies. Spreading investments globally balances risk cycles.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="glass-panel glass-panel-hover p-8 rounded-xl flex flex-col text-left">
              <div className="w-12 h-12 flex items-center justify-center bg-brand-success/20 text-brand-success rounded-lg mb-6 border border-brand-success/20">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Currency Depreciation Hedge</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                The Indian Rupee (INR) has historically depreciated against the US Dollar (USD) by ~3% to 5% annually. Holding assets in USD protects your global purchasing power.
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="glass-panel glass-panel-hover p-8 rounded-xl flex flex-col text-left">
              <div className="w-12 h-12 flex items-center justify-center bg-brand-accent/15 text-yellow-400 rounded-lg mb-6 border border-yellow-400/20">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Access Global Titans</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Own the leaders driving the future of artificial intelligence, semiconductors, luxury, and biotechnology—companies listed on the NASDAQ, NYSE, and European exchanges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Growth Simulator */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Text & Inputs */}
            <div className="lg:col-span-5 text-left flex flex-col">
              <h2 className="text-3xl font-bold text-white tracking-tight mb-4">
                Watch Your Capital Compound
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Simulate how globally diversified equity portfolios (rebalanced annually) perform relative to local mutual funds or fixed deposits in India over time.
              </p>

              {/* Calculator Panel */}
              <div className="glass-panel p-6 rounded-xl space-y-6">
                
                {/* Toggle Type */}
                <div className="flex bg-slate-950 p-1 rounded-md border border-white/5">
                  <button
                    onClick={() => setCalcType('monthly')}
                    className={`flex-1 py-2 text-xs font-semibold rounded ${
                      calcType === 'monthly' ? 'bg-brand-primary text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Monthly SIP (INR)
                  </button>
                  <button
                    onClick={() => setCalcType('onetime')}
                    className={`flex-1 py-2 text-xs font-semibold rounded ${
                      calcType === 'onetime' ? 'bg-brand-primary text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    One-Time Lumpsum (INR)
                  </button>
                </div>

                {/* Amount Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Investment Amount</span>
                    <span className="font-mono text-brand-accent text-sm font-semibold">
                      ₹{calcAmount.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={calcType === 'monthly' ? 5000 : 50000}
                    max={calcType === 'monthly' ? 100000 : 2500000}
                    step={calcType === 'monthly' ? 5000 : 50000}
                    value={calcAmount}
                    onChange={(e) => setCalcAmount(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-brand-accent"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                    <span>{calcType === 'monthly' ? '₹5k' : '₹50k'}</span>
                    <span>{calcType === 'monthly' ? '₹100k' : '₹25L'}</span>
                  </div>
                </div>

                {/* Years Selector */}
                <div className="space-y-2">
                  <span className="text-xs text-slate-400">Time Horizon</span>
                  <div className="grid grid-cols-4 gap-2">
                    {[3, 5, 10, 15].map((year) => (
                      <button
                        key={year}
                        onClick={() => setCalcYears(year)}
                        className={`py-2 text-xs font-mono font-semibold rounded border ${
                          calcYears === year
                            ? 'bg-brand-accent/15 border-brand-accent text-brand-accent'
                            : 'border-white/5 hover:border-white/20 text-slate-300'
                        }`}
                      >
                        {year} Yrs
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Comparative Charts/Meters */}
            <div className="lg:col-span-7">
              <div className="glass-panel p-8 rounded-xl space-y-8 flex flex-col justify-between">
                
                <div className="flex justify-between items-center pb-4 border-b border-white/5">
                  <div className="text-left">
                    <span className="text-xs text-slate-400">Total Invested</span>
                    <h4 className="text-lg font-bold text-white font-mono">₹{totalInvested.toLocaleString('en-IN')}</h4>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400">Estimated SS Returns</span>
                    <h4 className="text-lg font-bold text-brand-success font-mono">₹{ssValue.toLocaleString('en-IN')}</h4>
                  </div>
                </div>

                {/* Meter Visualizations */}
                <div className="space-y-6 text-left">
                  
                  {/* Spring Street Prisma Meter */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-semibold">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-brand-accent"></span>
                        <span>Spring Street Prisma (16.85% CAGR)</span>
                      </div>
                      <span className="font-mono text-brand-accent">₹{ssValue.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="w-full bg-slate-950 h-5 rounded-full overflow-hidden border border-white/5 p-0.5">
                      <div 
                        className="bg-gradient-to-r from-brand-primary to-brand-accent h-full rounded-full transition-all duration-500 ease-out"
                        style={{ width: '100%' }}
                      ></div>
                    </div>
                  </div>

                  {/* Indian Mutual Fund Meter */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-semibold">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-600"></span>
                        <span>Indian Index/Mutual Fund (12.50% CAGR)</span>
                      </div>
                      <span className="font-mono text-slate-300">₹{mfValue.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="w-full bg-slate-950 h-5 rounded-full overflow-hidden border border-white/5 p-0.5">
                      <div 
                        className="bg-slate-600 h-full rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${Math.max(10, Math.round((mfValue / ssValue) * 100))}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Fixed Deposit Meter */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-semibold">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-950"></span>
                        <span>Indian Fixed Deposit (7.00% CAGR)</span>
                      </div>
                      <span className="font-mono text-slate-400">₹{fdValue.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="w-full bg-slate-950 h-5 rounded-full overflow-hidden border border-white/5 p-0.5">
                      <div 
                        className="bg-red-950 border border-red-500/20 h-full rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${Math.max(10, Math.round((fdValue / ssValue) * 100))}%` }}
                      ></div>
                    </div>
                  </div>

                </div>

                <div className="bg-brand-primary/10 border border-brand-primary/20 p-4 rounded-lg text-left mt-6">
                  <p className="text-xs text-brand-accent leading-relaxed">
                    💡 <strong>Insight:</strong> Global investing offers twin drivers of growth. You benefit from the performance of the world's best ETFs, combined with the dollar compounding value against INR depreciation.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* LRS Safe Pipeline Flow */}
      <section className="py-20 relative bg-[#030610] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white tracking-tight mb-4">
              Institutional-grade Safety Architecture
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Your money moves through secure, bank-level rails directly to fully regulated global custodians.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 text-left relative">
            
            {/* Step 1 */}
            <div className="glass-panel p-6 rounded-lg relative">
              <div className="absolute top-4 right-4 text-xs font-mono text-brand-accent font-bold">01</div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Fund Wallet</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Initiate a local bank transfer. Funds are remitted securely under the Liberalised Remittance Scheme (LRS).
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="glass-panel p-6 rounded-lg relative">
              <div className="absolute top-4 right-4 text-xs font-mono text-brand-accent font-bold">02</div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Conversion</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Funds are converted to USD at low-cost, institutional forex rates (typically 75% cheaper than retail banks).
              </p>
            </div>

            {/* Step 3 */}
            <div className="glass-panel p-6 rounded-lg relative">
              <div className="absolute top-4 right-4 text-xs font-mono text-brand-accent font-bold">03</div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Custodian Deposit</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Funds arrive at DriveWealth LLC or Interactive Brokers. All accounts are FDIC/SIPC-insured.
              </p>
            </div>

            {/* Step 4 */}
            <div className="glass-panel p-6 rounded-lg relative">
              <div className="absolute top-4 right-4 text-xs font-mono text-brand-accent font-bold">04</div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Auto-Allocation</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Our algorithmic engine divides your USD wallet into the target Prisma ETF allocation.
              </p>
            </div>

          </div>

          <div className="mt-12 flex justify-center">
            <Link
              to="/products/prisma/global-growth-prisma"
              className="inline-flex items-center gap-1.5 text-brand-accent text-sm font-semibold hover:underline"
            >
              <span>See Global Growth Prisma details</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
};
