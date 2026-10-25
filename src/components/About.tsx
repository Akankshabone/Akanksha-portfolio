import React from 'react';
import { 
  Brain, 
  Languages, 
  Heart, 
  CheckCircle,
  Briefcase,
  Sparkles
} from 'lucide-react';
import { personalInfo, languages } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/70 border border-cyan-800/60 text-cyan-300 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>01. ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Engineering Practical & Grounded <span className="text-gradient">AI Systems</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base max-w-2xl">
            A look into my academic background, CDAC AI specialization, industry internship, and core engineering philosophy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none"></div>

              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2.5">
                <Brain className="w-5 h-5 text-cyan-400" />
                Who I Am & What Drives Me
              </h3>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am a <strong className="text-white">Computer Science graduate</strong> and an aspiring AI Engineer who recently completed the intensive <strong className="text-cyan-300">Post Graduate Certificate Programme in AI (PGCP-AI)</strong> from <strong className="text-white">CDAC Kharghar</strong>. My technical journey has been centered on bridging the gap between cutting-edge AI research and real-world software applications.
                </p>
                <p>
                  During my internship at <strong className="text-white">Anyatam (Adhyayan Education Services)</strong>, I worked directly on real datasets—performing data preprocessing, exploratory data analysis (EDA), visualization, and training supervised machine learning classification models such as <strong className="text-indigo-300">Logistic Regression, Support Vector Machines (SVM), and Decision Trees</strong>.
                </p>
                <p>
                  My recent projects focus heavily on <strong className="text-cyan-300">Retrieval-Augmented Generation (RAG)</strong> and <strong className="text-indigo-300">Agentic AI</strong>. In my flagship project—the <em>AI-Powered Port Land Lease Management Assistant</em>—I implemented semantic chunking, dense vector search using <strong className="text-white">PostgreSQL & pgvector</strong>, sparse BM25 retrieval, document OCR via PaddleOCR, and citation-backed answer generation to deliver reliable, factual responses without hallucinations.
                </p>
                <p>
                  I am a quick learner who thrives when working on challenging real-world problems. I am eager to contribute to an engineering team building production-grade LLM applications, intelligent search platforms, or machine learning solutions.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>CDAC Kharghar PGCP-AI Trained</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Enterprise RAG & Hybrid Retrieval</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Supervised ML & Feature Engineering</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>FastAPI, pgvector & LangGraph Stack</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 rounded-2xl space-y-5">
              <div className="flex items-center gap-3.5 pb-4 border-b border-slate-800">
                <img
                  src={personalInfo.photoPath}
                  alt={personalInfo.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-cyan-400/50 shadow-md shadow-cyan-500/10"
                />
                <div>
                  <h4 className="text-white font-bold text-sm">{personalInfo.name}</h4>
                  <p className="text-xs text-cyan-400 font-mono">AI Engineer Fresher</p>
                </div>
              </div>

              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
                Fast Facts for Recruiters
              </h3>

              <div className="space-y-3.5 text-xs sm:text-sm">
                <div className="flex items-start justify-between">
                  <span className="text-slate-400">Education:</span>
                  <span className="text-right text-slate-200 font-medium">
                    B.Tech (71.5%) & CDAC PGCP-AI
                  </span>
                </div>
                <div className="flex items-start justify-between">
                  <span className="text-slate-400">Primary Focus:</span>
                  <span className="text-right text-cyan-300 font-medium">
                    RAG, Generative AI & ML Engineering
                  </span>
                </div>
                <div className="flex items-start justify-between">
                  <span className="text-slate-400">Industry Experience:</span>
                  <span className="text-right text-slate-200 font-medium">
                    6-Month ML Intern at Anyatam
                  </span>
                </div>
                <div className="flex items-start justify-between">
                  <span className="text-slate-400">Location:</span>
                  <span className="text-right text-slate-200 font-medium">
                    Maharashtra, India (Open to Relocation / Remote)
                  </span>
                </div>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl space-y-4">
              <h3 className="text-base font-semibold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
                <Languages className="w-4 h-4 text-cyan-400" />
                Spoken Languages
              </h3>
              <div className="space-y-2.5">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-slate-200 font-medium">{lang.name}</span>
                    <span className="text-slate-400 font-mono text-xs">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl space-y-3">
              <h3 className="text-base font-semibold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
                <Heart className="w-4 h-4 text-rose-400" />
                Interests & Activities
              </h3>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                  Learning New Tech Skills
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                  Participating in Academic Events
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                  Exploring New Places
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                  Dancing
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
