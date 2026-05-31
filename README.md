# Spring Street – Frontend Revamp (Wealth Management Platform)

A premium, responsive, and animated revamp of the public-facing experience of **Spring Street**, an institutional-grade global investing platform for Indian investors. 

Built using **React + TypeScript + TailwindCSS** and powered by **Vite** and **Framer Motion** for smooth glassmorphism effects and micro-interactions.

---

## 🚀 Key Features

### 1. Home / Landing Page (`Home.tsx`)
- **Animated SVG Glass Prism:** Interactive vector drawing representing "Prisma" that defracts light upon mouse movements.
- **Interactive LRS Growth Calculator:** Simulates compounding growth over 1 to 15 years for both Monthly SIP and One-Time Lumpsums, comparing Spring Street Prisma (16.85% CAGR) directly against Indian Index Funds (12.50% CAGR) and Indian Fixed Deposits (7.00% CAGR), factoring in historical USD currency appreciation hedging (~3-5% annually).
- **Compliance Timeline Pipeline:** A visual step-by-step clearance architecture tracking funding flows from Indian bank LRS approvals to global custodians.

### 2. Products Page (`Products.tsx`)
- **Interactive SVG Performance Chart:** Multi-line comparative chart plotting hypothetical historical performance of $10,000 across all 3 Prisma strategies since Jan 2020.
- **Currency Return Toggle:** Modifies all displayed returns dynamically between INR (forex hedge) and absolute USD rates.
- **Risk Questionnaire Matcher:** A 3-step interactive questionnaire matching primary objective, risk appetite, and holding horizon to recommend the ideal Prisma strategy.

### 3. Prisma Details Page (`PrismaDetails.tsx`)
- **Dynamic Product Focus:** Displays complete details for **Global Growth Prisma**, **Global Core Prisma**, and **Global Advantage Prisma** dynamically.
- **Interactive Donut Allocation Chart:** Responsive SVG segmented donut chart showing geographic and asset allocation weights. Hovering over slices dynamically displays target ETF descriptions and indices in the center label.
- **Factsheet Data Table:** Monospace tabular layout (`JetBrains Mono`) tracking underlying tickers, weights, categories, and low expense ratios.
- **Digital LRS Remittance Steps:** Guide details for Netbanking connection and OTP A2 Form signing.

### 4. Contact Us Page (`Contact.tsx`)
- **Analyst Slot Booking Scheduler:** Interactive calendar widget allowing users to select days (Monday - Friday) and slots (10 AM - 4:30 PM) to schedule virtual Google Meet consultations.
- **Support Inquiry Form:** Form validations and smooth custom input boxes.

### 5. FAQ Page (`Faq.tsx`)
- **Live Search & Filter Bar:** Instant queries searching both questions and answers.
- **Topic Quick-Tabs:** Filters questions by categorizations (*Prisma, LRS Funding, Tax, GIFT City*).
- **Helpfulness Feedback Widgets:** Interactive voting feedback buttons.

---

## 🛠️ Stack & Technologies
- **Framework:** React 19 (Vite)
- **Language:** TypeScript
- **Styling:** TailwindCSS v3 (Vanilla CSS utility classes, custom scrollbars, and class extensions)
- **Icons:** Lucide React
- **Animations:** Custom CSS Animations (e.g. `@keyframes float`, transitions, glow parameters)

---

## ⚙️ Setup & Local Installation

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18 or higher is recommended).

### Steps
1. **Clone/Navigate to the directory:**
   ```bash
   cd spring-street-revamp
   ```

2. **Install all packages and dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server locally:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173` (or the port specified in terminal outputs).

4. **Compile/Build for production:**
   ```bash
   npm run build
   ```
   The compiled static assets will be outputted to the `dist/` directory, optimized for static hosting providers like Vercel, Netlify, or GitHub Pages.
