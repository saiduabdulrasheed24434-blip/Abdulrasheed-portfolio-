import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Hardware', 'Development', 'Systems', 'Education', 'Certifications'];

  const filteredSkills = selectedCategory === 'All'
    ? skillsData
    : skillsData.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white text-center">Core Competencies</h2>
      <p className="text-slate-400 text-sm sm:text-base text-center max-w-xl mx-auto mb-8">
        Proven capabilities spanning physical IT infrastructure, systems engineering, modern web technologies, and technical training.
      </p>

      {/* Category filter tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
              selectedCategory === cat
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-slate-800/60 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-700/50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredSkills.map((skill) => (
          <div
            key={skill.id}
            className="bg-slate-800/50 border border-slate-700/60 p-6 rounded-xl hover:border-blue-500/50 transition-all duration-200 group hover:-translate-y-0.5"
          >
            <div className="text-blue-400 text-3xl mb-4 group-hover:scale-105 transition-transform duration-200 inline-block">
              <i className={`fa-solid ${skill.icon}`}></i>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">{skill.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};