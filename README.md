# Akanksha Bone - AI Engineer Portfolio Website
#LiveURL:https://portfolio-akanksha-eta.vercel.app/

A modern, high-performance, dark-themed personal portfolio website built for **Akanksha Bone**, tailored for applications in **AI Engineering, Generative AI, Machine Learning, RAG, and Agentic AI**.

This website strictly uses Akanksha's verified resume as the single source of truth—grounded in her **Computer Science degree**, **CDAC Kharghar PGCP-AI certification**, **machine learning internship at Anyatam**, and her flagship **AI-Powered Port Land Lease Management Assistant (RAG + Agentic AI)**.

---

## 🚀 Live Preview & Core Features

- **Tailored for AI Recruiters**: Highlights core proficiencies in Retrieval-Augmented Generation (RAG), LangGraph, LangChain, semantic chunking, dense vector search (pgvector & ChromaDB), hybrid retrieval (BM25 + vector search), and supervised ML algorithms.
- **Flagship Project Deep Dive**: Dedicated interactive architecture breakdown detailing multi-format ingestion (PDFs, Word, Excel, Scanned Images via PaddleOCR, SQL databases), semantic chunking, reranking, and citation-backed question answering.
- **Authentic Resume Integration**: Direct one-click download for `Akanksha_Bone_Resume.pdf`, copied directly from your verified CV file.
- **Strict Grounding**: Zero invented metrics, zero fake progress bars, zero generic templates.
- **Interactive Neural Background**: Hardware-accelerated dynamic canvas node constellation reacting subtly to cursor movement.
- **Role & Category Filters**: Recruiters can filter skills and projects by *Generative AI & RAG*, *Machine Learning*, or *Backend & Data*.
- **Contact & Email Integration**: Copy-to-clipboard email with toast feedback, verified phone number, location, and pre-formatted mailto form.

---

## 🛠️ Technology Stack

- **Frontend Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: CSS GPU transitions & HTML5 Canvas API

---

## 📂 Project Structure

```
akanksha-portfolio/
├── public/
│   ├── Akanksha_Bone_Resume.pdf  # Actual verified resume
│   └── favicon.svg               # AI node monogram favicon
├── src/
│   ├── components/
│   │   ├── About.tsx             # Education, CDAC AI, internship, languages & interests
│   │   ├── Contact.tsx           # Email, phone, profiles, copy email, mailto form
│   │   ├── Education.tsx         # CDAC PGCP-AI, B.Tech, Diploma, SSC & Certifications
│   │   ├── Experience.tsx        # Anyatam ML Intern responsibilities and tools
│   │   ├── Footer.tsx            # Footer navigation, copyright, back to top
│   │   ├── Hero.tsx              # Headline, verified bio, target roles, terminal preview
│   │   ├── Icons.tsx             # Clean SVG GitHub and LinkedIn icon components
│   │   ├── Navbar.tsx            # Sticky header, scroll spy, mobile drawer, resume CTA
│   │   ├── NeuralBackground.tsx  # Interactive canvas-based AI node constellation
│   │   ├── ProjectModal.tsx      # RAG architecture deep dive modal
│   │   ├── Projects.tsx          # Flagship Port Lease RAG Assistant + supporting ML projects
│   │   ├── Skills.tsx            # Categorized verified skills with filter pills
│   │   └── WhatIBring.tsx        # 6 core engineering value propositions for recruiters
│   ├── data/
│   │   └── portfolioData.ts      # Centralized typed data source (edit links & info here!)
│   ├── types/
│   │   └── index.ts              # Strict TypeScript interfaces
│   ├── App.tsx                   # Main layout orchestration & scroll spy
│   ├── index.css                 # Tailwind directives, custom scrollbar & glassmorphism
│   └── main.tsx                  # Vite entry point
├── dist/                         # Production-ready build artifacts
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── package.json
```

---

## ⚡ Quick Start (Local Development)

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### 2. Navigate to the project directory
```bash
cd "C:\Users\DELL\.gemini\antigravity\scratch\akanksha-portfolio"
```

### 3. Install dependencies (if not already installed)
```bash
npm install
```

### 4. Start the local development server
```bash
npm run dev
```
Open your browser and visit: `http://localhost:5173`

### 5. Build for production
```bash
npm run build
```
The optimized static production files will be generated in the `dist/` directory.

### 6. Preview the production build locally
```bash
npm run preview
```

---

## ✏️ How to Customize Your Portfolio

All your personal information, links, and project descriptions are cleanly decoupled in:
📁 `src/data/portfolioData.ts`

### Updating Social Links
If your LinkedIn or GitHub username differs, open `src/data/portfolioData.ts` and edit lines 17–18:
```typescript
github: "https://github.com/akankshabone",
linkedin: "https://linkedin.com/in/akanksha-bone",
```

### Updating or Replacing Your Resume
To update your resume, simply place your new PDF into the `public/` directory with the name `Akanksha_Bone_Resume.pdf`.

---

## 🌐 Free One-Click Deployment

### Deploy to Vercel
1. Push this project to your GitHub repository.
2. Sign in to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your `akanksha-portfolio` repository.
4. Framework preset: **Vite**.
5. Click **Deploy**. Vercel will build and host your portfolio with a free global HTTPS URL!

### Deploy to Netlify
1. Run `npm run build`.
2. Drag and drop the generated `dist/` folder into [Netlify Drop](https://app.netlify.com/drop).
3. Your portfolio is live in seconds!

---

## 📄 License
This portfolio is personal property of **Akanksha Bone**. All rights reserved.
