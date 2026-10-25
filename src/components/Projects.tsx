import React, { useState } from 'react';
import { 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  ArrowUpRight,
  ChevronRight,
  Info
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';
import type { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'rag-agentic' | 'generative-ai' | 'machine-learning'>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const flagshipProject = projectsData.find((p) => p.featured);

  const filteredProjects = projectsData.filter((p) => {
    if (selectedCategory === 'all') return true;
    return p.category === selectedCategory;
  });

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/70 border border-cyan-800/60 text-cyan-300 text-xs font-mono mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>03. FEATURED PROJECTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Production-Grade AI & <span className="text-gradient">Intelligent Systems</span>
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
              Real-world implementations spanning enterprise RAG pipelines, generative scheduling, and supervised machine learning models.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 bg-slate-900/80 p-1.5 rounded-xl border border-slate-800 self-start md:self-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Projects ({projectsData.length})
            </button>
            <button
              onClick={() => setSelectedCategory('rag-agentic')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === 'rag-agentic'
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              RAG & Agentic AI
            </button>
            <button
              onClick={() => setSelectedCategory('generative-ai')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === 'generative-ai'
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Generative AI
            </button>
            <button
              onClick={() => setSelectedCategory('machine-learning')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === 'machine-learning'
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Machine Learning
            </button>
          </div>
        </div>

        {flagshipProject && (selectedCategory === 'all' || selectedCategory === 'rag-agentic') && (
          <div className="mb-14 relative group">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/25 via-indigo-500/20 to-purple-600/25 blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>

            <div className="relative rounded-3xl bg-slate-950/90 border border-cyan-500/40 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-6 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 flex items-center gap-1.5 shadow-sm shadow-cyan-500/10">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                    FLAGSHIP PROJECT &bull; RAG & AGENTIC AI
                  </span>
                  <span className="text-xs font-mono text-slate-400 hidden sm:inline">
                    {flagshipProject.duration}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setActiveModalProject(flagshipProject)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 transition-colors"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>View Architecture Specs</span>
                  </button>

                  {flagshipProject.githubUrl && (
                    <a
                      href={flagshipProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-400 hover:text-white transition-colors"
                      title="View GitHub Repository"
                      aria-label="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  {flagshipProject.title}
                </h3>
                <p className="text-slate-300 text-base mt-2 font-medium">
                  {flagshipProject.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80">
                  <div className="text-xs font-mono text-rose-400 uppercase font-semibold mb-2 flex items-center gap-1.5">
                    <span>Problem Statement</span>
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {flagshipProject.problemStatement}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80">
                  <div className="text-xs font-mono text-emerald-400 uppercase font-semibold mb-2 flex items-center gap-1.5">
                    <span>Engineered Solution</span>
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {flagshipProject.solutionObjective}
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  Key Verified Technical Features
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {flagshipProject.keyFeatures.map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/40 border border-slate-800/60 text-xs sm:text-sm text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8 p-5 rounded-2xl bg-slate-900/70 border border-indigo-500/20">
                <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-300 mb-3 font-semibold">
                  My Engineering Contribution:
                </h4>
                <div className="space-y-2">
                  {flagshipProject.myContribution.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0"></span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  {flagshipProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900 text-cyan-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setActiveModalProject(flagshipProject)}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 transition-all shadow-md shadow-cyan-500/20"
                >
                  <span>Explore Architecture Pipeline</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects
            .filter((p) => !p.featured)
            .map((project) => (
              <div
                key={project.id}
                className="glass-panel p-6 sm:p-8 rounded-3xl flex flex-col justify-between glass-panel-hover"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-slate-900 text-indigo-300 border border-slate-800">
                      {project.category === 'generative-ai' ? 'Generative AI' : 'Machine Learning'}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {project.duration}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mb-5">
                    {project.subtitle}
                  </p>

                  <div className="space-y-3.5 mb-6 text-xs sm:text-sm">
                    <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                      <span className="text-slate-400 font-mono text-xs block mb-1">
                        PROBLEM & CONTEXT
                      </span>
                      <p className="text-slate-300 leading-relaxed">
                        {project.problemStatement}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                      <span className="text-slate-400 font-mono text-xs block mb-1">
                        SOLUTION & APPROACH
                      </span>
                      <p className="text-slate-300 leading-relaxed">
                        {project.solutionObjective}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <span className="text-xs font-mono text-slate-400 block mb-2 uppercase">
                      Key Highlights:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {project.keyFeatures.slice(0, 3).map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-cyan-400 mt-0.5">•</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-5 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900/90 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                    >
                      <span>View Full Breakdown</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Source</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
