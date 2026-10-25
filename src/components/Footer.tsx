import React from 'react';
import { Mail, Download, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-navy-950 pt-16 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/60">
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300 font-mono font-bold text-sm">
                AB
              </div>
              <span className="font-bold text-white text-base tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Aspiring AI Engineer specializing in Generative AI, RAG architectures, LangGraph orchestration, and applied machine learning.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-indigo-400 hover:border-cyan-500/40 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase text-slate-300 font-semibold tracking-wider">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#about" className="text-slate-400 hover:text-cyan-300 transition-colors">
                About Me
              </a>
              <a href="#skills" className="text-slate-400 hover:text-cyan-300 transition-colors">
                Technical Skills
              </a>
              <a href="#projects" className="text-slate-400 hover:text-cyan-300 transition-colors">
                Featured Projects
              </a>
              <a href="#experience" className="text-slate-400 hover:text-cyan-300 transition-colors">
                Work Experience
              </a>
              <a href="#education" className="text-slate-400 hover:text-cyan-300 transition-colors">
                Education & Certifications
              </a>
              <a href="#contact" className="text-slate-400 hover:text-cyan-300 transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase text-slate-300 font-semibold tracking-wider">
              Credentials
            </h4>
            <p className="text-xs text-slate-400">
              Download the complete verified curriculum vitae directly.
            </p>
            <a
              href={personalInfo.resumePath}
              download="Akanksha_Bone_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-cyan-500/30 hover:border-cyan-500/60 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume (PDF)</span>
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {personalInfo.name}. All verified credentials grounded in curriculum & projects.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-300 transition-colors font-mono"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
