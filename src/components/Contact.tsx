import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [senderName, setSenderName] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(subject || `ICT Inquiry from ${senderName || 'Client'}`);
    const mailtoBody = encodeURIComponent(
      `Hello Abdulrasheed,\n\n${message}\n\nBest regards,\n${senderName || 'Client'}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact" className="py-20 px-6 bg-slate-950/50 border-t border-slate-800/60 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Get In Touch</h2>
        <p className="text-slate-400 mb-8 leading-relaxed">
          Feel free to reach out for ICT consultations, web development projects, or professional opportunities.
        </p>
        
        {/* Contact direct link buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10 text-sm">
          <a 
            href={`mailto:${personalInfo.email}`} 
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition shadow-lg shadow-blue-500/25"
          >
            <i className="fa-solid fa-envelope"></i>
            {personalInfo.email}
          </a>
          <a 
            href={`tel:${personalInfo.phone}`} 
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium px-6 py-3 rounded-lg transition"
          >
            <i className="fa-solid fa-phone"></i>
            {personalInfo.phone}
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-800/60 hover:bg-slate-800 text-slate-300 border border-slate-700/80 px-4 py-3 rounded-lg text-xs font-semibold transition cursor-pointer"
            title="Copy email to clipboard"
          >
            <i className={`fa-solid ${copied ? 'fa-check text-emerald-400' : 'fa-copy'}`}></i>
            {copied ? 'Email Copied!' : 'Copy Email'}
          </button>
        </div>

        {/* Quick Message Form */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-6 text-left shadow-xl">
          <h3 className="text-base font-semibold text-white mb-2 flex items-center gap-2">
            <i className="fa-solid fa-paper-plane text-blue-400 text-sm"></i>
            Quick Inquiry Composer
          </h3>
          <p className="text-xs text-slate-400 mb-4">
            Send an inquiry directly to Abdulrasheed's inbox for hardware repairs, networking, or website development.
          </p>

          <form onSubmit={handleSendMessage} className="space-y-4 text-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-slate-300 mb-1">Your Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="e.g. Adebayo Kunle"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-xs font-medium text-slate-300 mb-1">Subject / Service Needed</label>
                <input
                  id="subject"
                  type="text"
                  placeholder="e.g. Hardware Maintenance Consultation"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-medium text-slate-300 mb-1">Message</label>
              <textarea
                id="message"
                rows={3}
                placeholder="Describe your system requirements or project scope..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full px-3.5 py-2 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer"
            >
              <i className="fa-solid fa-envelope"></i>
              Open in Email Client
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
