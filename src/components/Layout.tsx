import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ShieldCheck, Mail, Globe, Wallet } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolios', path: '/products' },
    { name: 'Global Growth Prisma', path: '/products/prisma/global-growth-prisma' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg text-slate-100 selection:bg-brand-primary selection:text-white">
      {/* Top Banner for Trust/Compliance announcement */}
      <div className="bg-gradient-to-r from-brand-primary/20 via-brand-accent/25 to-brand-primary/20 text-center py-2 px-4 text-xs font-medium tracking-wide text-brand-accent border-b border-brand-border/30 flex items-center justify-center gap-2">
        <ShieldCheck className="w-4 h-4 text-brand-accent animate-pulse-slow" />
        <span>Institutional-grade investing under RBI LRS framework. Seamless and Compliant.</span>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 glass-panel border-b border-white/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-brand-primary to-brand-accent rounded-lg shadow-[0_0_15px_rgba(34,211,238,0.2)] overflow-hidden">
              <span className="font-bold text-white text-xl tracking-tighter">S</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white text-lg tracking-wide leading-none">SPRING</span>
              <span className="font-medium text-brand-accent text-xs tracking-[0.2em] leading-none mt-1">STREET</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide transition-colors duration-200 hover:text-brand-accent ${
                    isActive ? 'text-brand-accent border-b-2 border-brand-accent pb-1' : 'text-slate-300'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-semibold hover:text-white text-slate-300 transition-colors">
              Log In
            </button>
            <button className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-brand-primary to-brand-primary/80 hover:from-brand-primary/90 hover:to-brand-primary hover:shadow-[0_0_20px_rgba(46,109,180,0.3)] text-white text-sm font-semibold rounded-md transition-all duration-300 transform hover:-translate-y-0.5">
              <span>Access Wallet</span>
              <Wallet className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-panel border-b border-white/10 px-4 pt-4 pb-6 space-y-4 animate-fade-in">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-base font-medium py-2 border-b border-white/5 transition-colors ${
                    location.pathname === link.path ? 'text-brand-accent' : 'text-slate-300'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3 pt-3">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center py-2 text-sm font-semibold border border-white/15 text-slate-200 rounded-md hover:bg-white/5 transition-all"
              >
                Log In
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-brand-primary text-white text-sm font-semibold rounded-md hover:bg-brand-primary/95 transition-all"
              >
                <span>Access Wallet</span>
                <Wallet className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#02050d] border-t border-white/10 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            {/* Branding Column */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-brand-primary to-brand-accent rounded-md shadow-sm">
                  <span className="font-bold text-white text-base tracking-tighter">S</span>
                </div>
                <span className="font-bold text-white text-lg tracking-wider">SPRING STREET</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Spring Street is a global wealth management platform. We combine quantitative research with thoughtful design to build trusted, intuitive global investing experiences.
              </p>
              <div className="flex items-center gap-4 mt-2">
                <a href="https://x.com/SpringStreetHQ" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-accent transition-colors" aria-label="X (Twitter)">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/spring-street-wealth" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-accent transition-colors" aria-label="LinkedIn">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="mailto:contact@springstreet.in" className="text-slate-400 hover:text-brand-accent transition-colors" aria-label="Email">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links Column */}
            <div>
              <h3 className="text-sm font-semibold text-white tracking-widest uppercase mb-4">Platform</h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-xs text-slate-400 hover:text-brand-accent transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prisma Portfolios Column */}
            <div>
              <h3 className="text-sm font-semibold text-white tracking-widest uppercase mb-4">Prisma Series</h3>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link to="/products/prisma/global-growth-prisma" className="text-slate-400 hover:text-brand-accent transition-colors flex items-center gap-1">
                    <span>Global Growth Prisma</span>
                    <span className="text-[10px] bg-brand-success/15 text-brand-success px-1.5 py-0.5 rounded font-mono">16.85% CAGR</span>
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="text-slate-400 hover:text-brand-accent transition-colors flex items-center gap-1">
                    <span>Global Core Prisma</span>
                    <span className="text-[10px] bg-brand-success/15 text-brand-success px-1.5 py-0.5 rounded font-mono">16.68% CAGR</span>
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="text-slate-400 hover:text-brand-accent transition-colors flex items-center gap-1">
                    <span>Global Advantage Prisma</span>
                    <span className="text-[10px] bg-brand-success/15 text-brand-success px-1.5 py-0.5 rounded font-mono">+27.1% YTD</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Regulatory & Contact Info Column */}
            <div>
              <h3 className="text-sm font-semibold text-white tracking-widest uppercase mb-4">Regulatory Address</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-3">
                Spring Street Wealth Private Limited<br />
                VIOS Tower, Wadala, Mumbai 400037,<br />
                Maharashtra, India
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Globe className="w-3.5 h-3.5 text-brand-accent" />
                <span>SEBI Registration: Mock-Pending</span>
              </div>
            </div>
          </div>

          {/* Compliance Disclosure Section */}
          <div className="border-t border-white/5 pt-8 text-[10px] text-slate-500 leading-relaxed">
            <p className="mb-4">
              <strong>Risk Warning:</strong> Investing in international financial markets involves significant risks. Returns are subject to currency fluctuations, regulatory changes, and international market volatility. Past performance does not guarantee future results.
            </p>
            <p className="mb-4">
              All investments are placed with licensed global custodians (e.g. DriveWealth LLC or Interactive Brokers LLC, SIPC-insured) under the Reserve Bank of India’s Liberalised Remittance Scheme (LRS) regulations. Spring Street provides algorithmic advisory and routing services; it is not a bank.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[10px] text-slate-500">
              <span>© {new Date().getFullYear()} Spring Street Wealth. All rights reserved.</span>
              <div className="flex gap-4">
                <a href="#privacy" className="hover:underline">Privacy Policy</a>
                <a href="#terms" className="hover:underline">Terms of Service</a>
                <a href="#disclosure" className="hover:underline">Factsheet Disclosures</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
