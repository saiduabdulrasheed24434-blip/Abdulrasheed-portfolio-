import React from 'react';
import { educationData, certificationsData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-slate-950/50 border-t border-slate-800/60">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white text-center">Education & Background</h2>
        <p className="text-slate-400 text-sm sm:text-base text-center max-w-xl mx-auto mb-12">
          Academic foundations in computer science paired with specialized technical training and operations certifications.
        </p>
        
        <div className="space-y-8">
          {/* Education items */}
          {educationData.map((item) => (
            <div 
              key={item.id} 
              className="bg-slate-800/40 border border-slate-700/60 p-6 rounded-xl hover:border-slate-600 transition"
            >
              <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <i className="fa-solid fa-graduation-cap text-blue-400 text-base"></i>
                  {item.institution}
                </h3>
                <span className="text-xs bg-blue-500/10 text-blue-400 px-2.5 py-1 rounded border border-blue-500/20 font-medium">
                  {item.period}
                </span>
              </div>
              <p className="text-sm font-semibold text-slate-300">{item.title}</p>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">{item.details}</p>
            </div>
          ))}

          {/* Training & Certifications card */}
          <div className="bg-slate-800/40 border border-slate-700/60 p-6 rounded-xl hover:border-slate-600 transition">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <i className="fa-solid fa-award text-blue-400 text-base"></i>
              Professional Certifications & Training
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              {certificationsData.map((cert) => (
                <li key={cert.name} className="flex items-start gap-2.5">
                  <i className="fa-solid fa-check text-blue-400 text-xs mt-1 shrink-0"></i>
                  <div>
                    <strong className="text-white">{cert.name}:</strong>{' '}
                    <span className="text-slate-300">{cert.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
