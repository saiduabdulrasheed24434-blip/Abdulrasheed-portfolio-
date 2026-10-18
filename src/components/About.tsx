import React from 'react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 bg-slate-950/50 border-y border-slate-800/60">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">About Me</h2>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
          {personalInfo.aboutPrimary}
        </p>
        <p className="text-slate-400 text-base leading-relaxed">
          {personalInfo.aboutSecondary}
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {['Hardware Diagnostics', 'System Deployment', 'Computer Science', 'Frontend Web', 'Technical Instruction', 'Safety & Operations'].map((tag) => (
            <span key={tag} className="px-3 py-1 rounded-md text-xs font-medium bg-slate-800/70 text-slate-300 border border-slate-700/60">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
