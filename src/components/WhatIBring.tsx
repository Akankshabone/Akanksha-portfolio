import React from 'react';
import { 
  Sparkles, 
  Layers, 
  Network, 
  FileSearch, 
  Server, 
  BarChart3, 
  GraduationCap 
} from 'lucide-react';
import { valueProps } from '../data/portfolioData';

export const WhatIBring: React.FC = () => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'Layers':
        return <Layers className="w-5 h-5 text-cyan-400" />;
      case 'Network':
        return <Network className="w-5 h-5 text-indigo-400" />;
      case 'FileSearch':
        return <FileSearch className="w-5 h-5 text-teal-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-purple-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-amber-400" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-emerald-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section className="py-20 relative bg-navy-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/70 border border-cyan-800/60 text-cyan-300 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>06. VALUE TO ENGINEERING TEAMS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            What I Bring as an <span className="text-gradient">AI Engineer</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Grounded skills, hands-on production paradigms, and scientific discipline that allow me to contribute from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {valueProps.map((prop) => (
            <div
              key={prop.title}
              className="glass-panel p-6 sm:p-7 rounded-2xl flex flex-col justify-between glass-panel-hover"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-5 shadow-inner">
                  {getIcon(prop.icon)}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                  {prop.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {prop.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                  Team Impact:
                </span>
                <p className="text-xs text-slate-400 font-medium leading-relaxed">
                  {prop.impact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
