import React, { useState } from 'react';
import { 
  Brain, 
  Cpu, 
  Code2, 
  Database, 
  Wrench, 
  Sparkles, 
  Layers
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'genai' | 'ml' | 'dev'>('all');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return <Brain className="w-5 h-5 text-cyan-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-indigo-400" />;
      case 'Code':
        return <Code2 className="w-5 h-5 text-emerald-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-amber-400" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-purple-400" />;
      default:
        return <Layers className="w-5 h-5 text-cyan-400" />;
    }
  };

  const filteredCategories = skillsData.filter((cat) => {
    if (filter === 'all') return true;
    if (filter === 'genai') return cat.category.includes('Generative AI') || cat.category.includes('Databases');
    if (filter === 'ml') return cat.category.includes('Machine Learning') || cat.category.includes('Programming');
    if (filter === 'dev') return cat.category.includes('Frameworks') || cat.category.includes('Tools') || cat.category.includes('Databases');
    return true;
  });

  return (
    <section id="skills" className="py-20 relative bg-navy-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-950/70 border border-indigo-800/60 text-indigo-300 text-xs font-mono mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>02. TECHNICAL SKILLS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Verified Technical <span className="text-gradient">Stack & Competencies</span>
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
              Strictly grounded in my hands-on project work, internship, and CDAC AI curriculum.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 bg-slate-900/80 p-1.5 rounded-xl border border-slate-800 self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                filter === 'all'
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Categories
            </button>
            <button
              onClick={() => setFilter('genai')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                filter === 'genai'
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Generative AI & RAG
            </button>
            <button
              onClick={() => setFilter('ml')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                filter === 'ml'
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Machine Learning & NLP
            </button>
            <button
              onClick={() => setFilter('dev')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                filter === 'dev'
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Data & Backend Tools
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.category}
              className="glass-panel p-6 rounded-2xl flex flex-col justify-between glass-panel-hover"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 shadow-inner">
                    {getIcon(cat.icon)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-100 text-base leading-snug">
                      {cat.category}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {cat.description}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        skill.highlight
                          ? 'bg-slate-900/90 text-cyan-200 border border-cyan-500/40 shadow-sm shadow-cyan-500/10'
                          : 'bg-slate-900/60 text-slate-300 border border-slate-800/80 hover:border-slate-700'
                      }`}
                    >
                      {skill.highlight && (
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                      )}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>Verified in Project/Internship</span>
                <span className="text-cyan-400 font-semibold">
                  {cat.skills.length} skills
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center gap-3 text-xs text-slate-400">
          <div className="w-2 h-2 rounded-full bg-cyan-400 shrink-0"></div>
          <p>
            <strong className="text-slate-300">Technical Integrity Policy:</strong> Every skill, model, and framework listed above has been actively implemented in production projects, my 6-month machine learning internship, or the CDAC AI curriculum. No inflated percentages or simulated bars.
          </p>
        </div>
      </div>
    </section>
  );
};
