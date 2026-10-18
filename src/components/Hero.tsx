import React from 'react';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-[85vh] flex items-center justify-center px-6 text-center relative overflow-hidden">
      {/* Subtle ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl relative z-10 py-12">
        <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-wide uppercase mb-4 border border-blue-500/20">
          {personalInfo.title}
        </span>
        
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 text-white leading-tight">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">{personalInfo.name}</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          {personalInfo.tagline}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#projects" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
          >
            <i className="fa-solid fa-layer-group text-sm"></i>
            View Featured Work
          </a>
          <a 
            href="#contact" 
            className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium px-6 py-3 rounded-lg transition flex items-center justify-center gap-2"
          >
            <i className="fa-solid fa-envelope text-sm text-blue-400"></i>
            Get In Touch
          </a>
        </div>

        {/* Quick highlight pillars */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-12 pt-8 border-t border-slate-800/80 text-left">
          <div className="p-3 bg-slate-800/30 rounded-lg border border-slate-800/60">
            <span className="text-xs text-blue-400 font-semibold uppercase tracking-wider block">Background</span>
            <span className="text-sm text-white font-medium">Computer Science HND</span>
          </div>
          <div className="p-3 bg-slate-800/30 rounded-lg border border-slate-800/60">
            <span className="text-xs text-blue-400 font-semibold uppercase tracking-wider block">Specialization</span>
            <span className="text-sm text-white font-medium">Hardware & Networking</span>
          </div>
          <div className="col-span-2 sm:col-span-1 p-3 bg-slate-800/30 rounded-lg border border-slate-800/60">
            <span className="text-xs text-blue-400 font-semibold uppercase tracking-wider block">Status</span>
            <span className="text-sm text-emerald-400 font-medium flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Available for ICT Ops
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
