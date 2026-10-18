import React from 'react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 px-6 text-center text-xs text-slate-500 border-t border-slate-800 bg-slate-950">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} Abdulrasheed Saidu. All rights reserved.</p>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/saiduabdulrasheed24434-blip"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-300 transition-colors flex items-center gap-1.5"
          >
            <i className="fa-brands fa-github text-sm"></i>
            GitHub Profile
          </a>
          <button
            type="button"
            onClick={scrollToTop}
            className="hover:text-blue-400 transition-colors flex items-center gap-1 cursor-pointer"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <i className="fa-solid fa-arrow-up text-[10px]"></i>
          </button>
        </div>
      </div>
    </footer>
  );
};
