import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Sparkles, Terminal } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative bg-navy-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-950/70 border border-indigo-800/60 text-indigo-300 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>04. WORK EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Industry & Research <span className="text-gradient">Experience</span>
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
            Hands-on machine learning model development, exploratory data analysis, and feature engineering in a professional environment.
          </p>
        </div>

        <div className="space-y-8">
          {experienceData.map((exp) => (
            <div
              key={exp.company}
              className="glass-panel p-6 sm:p-8 rounded-3xl relative overflow-hidden glass-panel-hover"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <span className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                      <Briefcase className="w-4 h-4" />
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {exp.role}
                    </h3>
                  </div>
                  <p className="text-base font-medium text-cyan-300">
                    {exp.company}
                  </p>
                </div>

                <div className="flex flex-wrap md:flex-col md:items-end gap-2 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-300">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400">
                  Core Responsibilities & Technical Achievements:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {exp.responsibilities.map((resp, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 text-xs sm:text-sm text-slate-300 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-400 mr-2 flex items-center gap-1">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  Stack & Tooling:
                </span>
                {exp.toolsUsed.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900/90 text-cyan-300 border border-slate-800"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
