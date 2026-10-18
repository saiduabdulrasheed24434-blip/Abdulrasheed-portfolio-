import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white text-center">Featured Projects</h2>
      <p className="text-slate-400 text-sm sm:text-base text-center max-w-xl mx-auto mb-12">
        Key technical initiatives demonstrating modern web deployment and production hardware maintenance procedures.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project) => {
          const isExpanded = expandedId === project.id;
          return (
            <div
              key={project.id}
              className="bg-slate-800/40 border border-slate-700/60 rounded-xl overflow-hidden flex flex-col justify-between p-6 hover:border-slate-600 transition"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <div className="text-blue-400 text-2xl">
                    <i className={`fa-solid ${project.icon}`}></i>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                
                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-blue-500/10 text-blue-400 px-2.5 py-1 rounded border border-blue-500/20 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Optional expandable highlights */}
                {project.highlights && (
                  <div className="mb-4">
                    <button
                      type="button"
                      onClick={() => toggleExpand(project.id)}
                      className="text-xs text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1 focus:outline-none cursor-pointer"
                    >
                      <i className={`fa-solid ${isExpanded ? 'fa-chevron-up' : 'fa-chevron-down'} text-[10px]`}></i>
                      {isExpanded ? 'Hide Specifications' : 'View Specifications & Deliverables'}
                    </button>
                    {isExpanded && (
                      <ul className="mt-3 space-y-1.5 pl-4 border-l-2 border-blue-500/30 text-xs text-slate-300">
                        {project.highlights.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-slate-800 flex justify-between items-center text-sm mt-2">
                <span className="text-slate-400 text-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                  Status: {project.status}
                </span>
                {project.repoUrl ? (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 hover:underline flex items-center gap-1.5 text-xs font-semibold"
                  >
                    <i className="fa-brands fa-github text-sm"></i>
                    Repository
                  </a>
                ) : (
                  <span className="text-slate-400 text-xs">Documentation & Systems</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
