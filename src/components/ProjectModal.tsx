import React from 'react';
import { 
  X, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { GithubIcon } from './Icons';
import type { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-navy-950 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 sm:p-8 border-b border-slate-800 bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950/40 relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-lg bg-slate-900/80 border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 focus:outline-none transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/80 border border-cyan-800 text-cyan-300 text-xs font-mono mb-3">
            <Sparkles className="w-3 h-3" />
            <span>DEEP DIVE ARCHITECTURE SPECIFICATION</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {project.title}
          </h3>
          <p className="text-slate-300 text-sm mt-1">
            {project.subtitle} &bull; <span className="text-cyan-400 font-mono">{project.duration}</span>
          </p>
        </div>

        <div className="p-6 sm:p-8 space-y-8 max-h-[72vh] overflow-y-auto">
          {project.architectureDetails && (
            <div>
              <h4 className="text-sm uppercase tracking-wider font-mono text-cyan-400 mb-4 flex items-center gap-2">
                <Layers className="w-4 h-4" />
                End-to-End RAG Ingestion & Retrieval Pipeline
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.architectureDetails.pipelineSteps.map((step, idx) => (
                  <div
                    key={step.title}
                    className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 relative group hover:border-cyan-500/40 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <span className="w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <h5 className="font-semibold text-slate-100 text-sm">
                        {step.title}
                      </h5>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed pl-8">
                      {step.desc}
                    </p>
                    <div className="mt-2.5 pl-8 text-[11px] font-mono text-cyan-400/90 flex items-center gap-1.5">
                      <Cpu className="w-3 h-3" />
                      {step.tech}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div>
                  <span className="text-slate-400">Supported Ingestion: </span>
                  <span className="text-slate-200 font-medium">
                    {project.architectureDetails.dataSources.join(', ')}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400">Retrieval Strategy: </span>
                  <span className="text-cyan-300 font-medium font-mono">
                    {project.architectureDetails.retrievalType}
                  </span>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
              <h5 className="text-xs font-mono uppercase text-rose-400 font-semibold mb-2">
                Problem Statement
              </h5>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
              <h5 className="text-xs font-mono uppercase text-emerald-400 font-semibold mb-2">
                Implemented Solution
              </h5>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.solutionObjective}
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-wider font-mono text-indigo-400 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              Verified Key Features
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feat, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <span className="text-cyan-400 mt-0.5">•</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/80 border border-cyan-500/20">
            <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              My Direct Engineering Contribution
            </h4>
            <div className="space-y-2">
              {project.myContribution.map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider font-mono text-slate-400 mb-2.5">
              Verified Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md text-xs font-mono bg-slate-900 text-cyan-300 border border-slate-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-slate-800 bg-slate-950 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View GitHub Repository</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors"
          >
            Close Specification
          </button>
        </div>
      </div>
    </div>
  );
};
