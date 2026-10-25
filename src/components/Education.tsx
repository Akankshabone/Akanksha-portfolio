import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  BookOpen, 
  BadgeCheck 
} from 'lucide-react';
import { educationData, certificationsData } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/70 border border-cyan-800/60 text-cyan-300 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>05. EDUCATION & CERTIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Academic Foundation & <span className="text-gradient">Specialized Credentials</span>
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
            A solid progression from foundational engineering diploma and B.Tech to specialized AI certification from CDAC Kharghar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5 text-cyan-400" />
              Academic Degrees & Post Graduate Diploma
            </h3>

            <div className="relative pl-6 space-y-8 before:absolute before:left-2 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-800">
              {educationData.map((edu) => (
                <div key={edu.degree} className="relative group">
                  <div className="absolute -left-[27px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-900 border-2 border-cyan-400 group-hover:scale-125 transition-transform shadow-sm shadow-cyan-400/50"></div>

                  <div className="glass-panel p-5 sm:p-6 rounded-2xl glass-panel-hover">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {edu.degree}
                      </h4>
                      {edu.score && (
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-cyan-950/80 text-cyan-300 border border-cyan-800/60">
                          {edu.score}
                        </span>
                      )}
                      {edu.status && (
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-800/60">
                          {edu.status}
                        </span>
                      )}
                    </div>

                    <p className="text-sm font-medium text-slate-300 mb-2">
                      {edu.institution}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        {edu.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {edu.location}
                      </span>
                    </div>

                    {edu.highlights && (
                      <div className="space-y-1.5 pt-3 border-t border-slate-800 text-xs text-slate-300">
                        {edu.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-0.5">•</span>
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-indigo-400" />
              Verified Industry Certifications
            </h3>

            <div className="space-y-4">
              {certificationsData.map((cert) => (
                <div
                  key={cert.title}
                  className="glass-panel p-6 rounded-2xl relative overflow-hidden glass-panel-hover"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 shrink-0">
                      <BadgeCheck className="w-6 h-6" />
                    </div>

                    <div className="flex-1">
                      <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                        {cert.category}
                      </span>
                      <h4 className="text-base font-bold text-white leading-snug mb-1">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-slate-300 font-medium mb-3">
                        {cert.issuer}
                      </p>

                      {cert.badge && (
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                          <span>{cert.badge}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950/30 to-slate-900 border border-indigo-500/30 space-y-3">
              <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono font-semibold">
                <BookOpen className="w-4 h-4" />
                <span>CDAC KHARGHAR PGCP-AI VALUE</span>
              </div>
              <h4 className="text-base font-bold text-white">
                Specialized AI Engineering Rigor
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                The PGCP-AI program at CDAC Kharghar equips engineers with practical system building capabilities: implementing transformer models, vector search, RAG pipelines, fine-tuning, and scalable inference backends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
