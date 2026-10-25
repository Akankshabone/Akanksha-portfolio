import React from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail,
  GraduationCap,
  Sparkles
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo, targetRoles } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-28 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium mb-6 shadow-sm shadow-cyan-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>CDAC Kharghar PGCP-AI Graduate</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-300">Open to AI & ML Roles</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4">
              Hi, I'm{' '}
              <span className="text-gradient">
                {personalInfo.name}
              </span>
            </h1>

            <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-slate-200 mb-6 leading-snug">
              Aspiring AI Engineer specializing in{' '}
              <span className="text-cyan-400 font-semibold">Generative AI</span>,{' '}
              <span className="text-indigo-400 font-semibold">RAG Systems</span> &{' '}
              <span className="text-purple-400 font-semibold">Machine Learning</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              Computer Science graduate with specialized <strong className="text-white font-medium">PGCP-AI training from CDAC Kharghar</strong> and practical machine learning internship experience. I build intelligent document search engines, hybrid retrieval pipelines, and agentic workflows using Python, LangChain, LangGraph, FastAPI, and vector databases.
            </p>

            <div className="w-full mb-8">
              <span className="text-xs uppercase font-mono tracking-wider text-slate-400 block mb-2.5">
                Target Roles:
              </span>
              <div className="flex flex-wrap gap-2">
                {targetRoles.map((role) => (
                  <span
                    key={role}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                  >
                    #{role}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Featured Projects</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <a
                href={personalInfo.resumePath}
                download="Akanksha_Bone_Resume.pdf"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900/90 hover:bg-slate-800 text-slate-100 border border-slate-700/80 hover:border-cyan-500/50 shadow-md transition-all duration-200 hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900/60 transition-colors"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact Me</span>
              </a>
            </div>

            <div className="flex items-center gap-5 pt-2 border-t border-slate-800/80 w-full">
              <span className="text-xs font-mono text-slate-400">Connect:</span>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 hover:bg-slate-800 transition-all"
                  aria-label="GitHub Profile"
                  title="View GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800 transition-all"
                  aria-label="LinkedIn Profile"
                  title="View LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-indigo-400 hover:border-cyan-500/40 hover:bg-slate-800 transition-all"
                  aria-label="Send Email"
                  title="Direct Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
              <span className="text-xs text-slate-500 ml-auto hidden sm:inline">
                Dharashiv / Pune, Maharashtra
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[320px] sm:max-w-[360px]">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-cyan-500/25 via-indigo-500/20 to-purple-600/25 blur-2xl opacity-75"></div>
              
              <div className="relative rounded-3xl bg-slate-950/80 border border-slate-700/80 p-3 shadow-2xl backdrop-blur-xl group hover:border-cyan-500/50 transition-all duration-300">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-slate-900 shadow-inner">
                  <img
                    src={personalInfo.photoPath}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent pointer-events-none"></div>
                </div>

                <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-full bg-slate-900/95 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-medium shadow-xl flex items-center gap-1.5 backdrop-blur-md">
                  <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                  <span>CDAC PGCP-AI</span>
                </div>

                <div className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-full bg-slate-900/95 border border-indigo-500/40 text-indigo-300 text-xs font-mono font-medium shadow-xl flex items-center gap-1.5 backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  <span>AI & ML Engineer</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
