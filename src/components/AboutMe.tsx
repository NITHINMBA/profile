import React, { useEffect, useRef } from 'react';
import { personalInfo } from '../utils/constants';

export const AboutMe: React.FC = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    observerRef.current = observer;
    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const addRef = (el: HTMLElement | null, index: number) => {
    sectionRefs.current[index] = el;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Skip link */}
      <a href="#about-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:bg-white focus:border focus:border-gray-300 focus:px-3 focus:py-2 focus:rounded-md focus:shadow">Skip to content</a>

      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <h1 
            ref={(el) => addRef(el, 0)}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 fade-in-up bg-gradient-to-r from-blue-700 via-indigo-600 to-violet-600 bg-clip-text text-transparent"
          >
            From insights to MVP to growth—practical AI & product solutions
          </h1>
          <p 
            ref={(el) => addRef(el, 1)}
            className="text-base sm:text-lg lg:text-xl max-w-3xl text-gray-600 fade-in-up"
          >
            I translate user problems into measurable product outcomes — blending product intuition, data, and modern AI to ship fast and scale reliably.
          </p>

          {/* Top CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4 fade-in-up" ref={(el) => addRef(el, 14)}>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors"
              aria-label="Download Resume"
            >
              {/* document-text */}
              <svg aria-hidden="true" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Zm0 2.5L18.5 9H14V4.5ZM7 13h10v2H7v-2Zm0 4h10v2H7v-2ZM7 9h6v2H7V9Z"/></svg>
              Download Resume
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-300 text-gray-900 text-sm font-medium hover:border-gray-400 hover:bg-gray-50 transition-colors"
              aria-label="Let's talk"
            >
              {/* mail */}
              <svg aria-hidden="true" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2v.01L12 12 4 6.01V6h16ZM4 18V8l8 6 8-6v10H4Z"/></svg>
              Let’s talk
            </a>
          </div>
        </div>
      </section>

      {/* Career Highlights chips */}
      <section className="px-4 sm:px-6 lg:px-8" aria-label="Career highlights">
        <div className="max-w-6xl mx-auto fade-in-up" ref={(el) => addRef(el, 15)}>
          <div className="flex flex-wrap items-center gap-3">
            {[
              { label: '0→1 MVPs • Telecom & CX', icon: '⚡' },
              { label: 'AI + Automation • RAG & LLMs', icon: '🤖' },
              { label: 'Figma → Prod-ready wireframes', icon: '🧩' },
              { label: 'Data-led decisions • PowerBI & SQL', icon: '📊' },
            ].map((c) => (
              <span key={c.label} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs bg-gray-100 text-gray-700 border border-gray-200">
                <span aria-hidden="true">{c.icon}</span>
                {c.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Two Column Storytelling Layout */}
      <section id="about-content" className="px-4 sm:px-6 lg:px-8 pb-24 mt-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left: Education & Certifications (emphasized) */}
          <div className="md:col-span-5 order-1 md:order-none">
            <div className="space-y-6">
              {/* Education Title */}
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 fade-in-up" ref={(el) => addRef(el, 19)}>
                <span className="inline-flex items-center gap-2">
                  <span className="w-9 h-9 rounded-lg bg-gray-900 text-white flex items-center justify-center">🎓</span>
                  Education
                </span>
              </h2>
              {/* Education cards */}
              <article ref={(el) => addRef(el, 20)} className="fade-in-up p-5 rounded-2xl border border-gray-200 bg-white shadow-[0_10px_40px_-20px_rgba(0,0,0,0.2)] transition-transform hover:-translate-y-0.5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-900 text-white flex items-center justify-center">🎓</div>
                  <div>
                    <p className="text-xs text-gray-500">2022–2024</p>
                    <h3 className="text-lg font-semibold text-gray-900">MBA (Operations & HR)</h3>
                    <p className="text-sm text-gray-600">University of Madras</p>
                  </div>
                </div>
              </article>
              <article ref={(el) => addRef(el, 21)} className="fade-in-up p-5 rounded-2xl border border-gray-200 bg-white shadow-[0_10px_40px_-20px_rgba(0,0,0,0.2)] transition-transform hover:-translate-y-0.5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-900 text-white flex items-center justify-center">🎓</div>
                  <div>
                    <p className="text-xs text-gray-500">2016–2020</p>
                    <h3 className="text-lg font-semibold text-gray-900">B.Tech (Information Technology)</h3>
                    <p className="text-sm text-gray-600">Anna University</p>
                  </div>
                </div>
              </article>
              {/* Certifications Title */}
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 fade-in-up" ref={(el) => addRef(el, 22)}>
                <span className="inline-flex items-center gap-2">
                  <span className="w-9 h-9 rounded-lg bg-gray-900 text-white flex items-center justify-center">🏅</span>
                  Certifications
                </span>
          </h2>
              {/* Certifications */}
              <article ref={(el) => addRef(el, 23)} className="fade-in-up p-5 rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.2)] transition-transform hover:-translate-y-0.5" aria-labelledby="cert-list">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-900 text-white flex items-center justify-center">🏅</div>
                  <div>
                    <ul id="cert-list" className="mt-1 grid grid-cols-1 gap-2 text-sm text-gray-700">
                      <li className="inline-flex items-center gap-2"><span>🏆</span> Atlassian Agile PM</li>
                      <li className="inline-flex items-center gap-2"><span>🏆</span> Technical PM</li>
                      <li className="inline-flex items-center gap-2"><span>🏆</span> Agile Product Owner</li>
                      <li className="inline-flex items-center gap-2"><span>🏆</span> SAFe</li>
                      <li className="inline-flex items-center gap-2"><span>🏆</span> Generative AI for BAs</li>
                    </ul>
                  </div>
                </div>
              </article>

              {/* Metrics removed as requested */}
            </div>
          </div>

          {/* Right: Remaining content (Timeline, Skills, etc.) */}
          <div className="md:col-span-7">
            {/* Professional Experience */}
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 fade-in-up">Professional Experience</h2>
            <div className="relative pl-6">
              <div className="absolute left-3 top-0 bottom-0 w-px bg-gray-200" />

              {/* 2024–Present */}
              <div ref={(el) => addRef(el, 2)} className="relative mb-10 fade-in-up">
                <div className="absolute -left-1.5 top-1 w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                  <span className="text-[15px]">💼</span>
                </div>
                <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.25)]">
                  <p className="text-xs tracking-wide text-gray-500">2024–Present</p>
                  <h3 className="mt-1 text-base font-semibold text-gray-900">Business Analyst – Bahwan CyberTek</h3>
                  <p className="mt-2 text-sm text-gray-700 leading-6">
                    Led market research, AI-powered telecom solutions, and MVP delivery for enterprise tools like dtWorks and Bill Automation.
                  </p>
                </div>
              </div>

              {/* 2024 Intern */}
              <div ref={(el) => addRef(el, 3)} className="relative mb-10 fade-in-up">
                <div className="absolute -left-1.5 top-1 w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                  <span className="text-[15px]">🧠</span>
                </div>
                <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.25)]">
                  <p className="text-xs tracking-wide text-gray-500">2024</p>
                  <h3 className="mt-1 text-base font-semibold text-gray-900">Business Analyst Intern – Srushty Global Solutions</h3>
                  <p className="mt-2 text-sm text-gray-700 leading-6">
                    Designed BRDs, wireframes, and user flows for an ML-based catheter defect detection system.
                  </p>
                </div>
              </div>

              {/* 2023–2024 Incubator */}
              <div ref={(el) => addRef(el, 4)} className="relative mb-2 fade-in-up">
                <div className="absolute -left-1.5 top-1 w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                  <span className="text-[15px]">🎓</span>
                </div>
                <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.25)]">
                  <p className="text-xs tracking-wide text-gray-500">2023–2024</p>
                  <h3 className="mt-1 text-base font-semibold text-gray-900">Business Incubator – University of Madras</h3>
                  <p className="mt-2 text-sm text-gray-700 leading-6">
                    Organized pitch events linking students with investors for MVP development and startup launches.
                  </p>
                </div>
              </div>
            </div>

            {/* Skills / Highlight Board */}
            <h2 className="mt-10 text-xl sm:text-2xl font-bold text-gray-900 mb-4 fade-in-up">Skills & Tools</h2>
            <div ref={(el) => addRef(el, 5)} className="grid grid-cols-1 sm:grid-cols-2 gap-6 fade-in-up">
              {/* Business Analysis & PM */}
              <div className="p-6 rounded-2xl border border-gray-200 bg-white/70 backdrop-blur shadow-[0_10px_40px_-20px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_60px_-25px_rgba(0,0,0,0.3)] transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gray-900 text-white flex items-center justify-center">📊</div>
                  <h4 className="text-sm font-semibold tracking-wide text-gray-900">Business Analysis & PM</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Requirements','Agile Scrum','SDLC','A/B Testing','UAT'].map((t) => (
                    <span key={t} className="px-3 py-1.5 rounded-full text-xs bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-900 hover:text-white transition-colors">{t}</span>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div className="p-6 rounded-2xl border border-gray-200 bg-white/70 backdrop-blur shadow-[0_10px_40px_-20px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_60px_-25px_rgba(0,0,0,0.3)] transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gray-900 text-white flex items-center justify-center">🧰</div>
                  <h4 className="text-sm font-semibold tracking-wide text-gray-900">Tools</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Excel','SQL','Power BI','JIRA','Confluence','Figma','Balsamiq','Draw.io'].map((t) => (
                    <span key={t} className="px-3 py-1.5 rounded-full text-xs bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-900 hover:text-white transition-colors">{t}</span>
                  ))}
                </div>
              </div>

              {/* AI & Automation */}
              <div className="p-6 rounded-2xl border border-gray-200 bg-white/70 backdrop-blur shadow-[0_10px_40px_-20px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_60px_-25px_rgba(0,0,0,0.3)] transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gray-900 text-white flex items-center justify-center">🤖</div>
                  <h4 className="text-sm font-semibold tracking-wide text-gray-900">AI & Automation</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['LangChain','RAG','LLMs','n8n','Agentic AI Architecture','No-Code Platforms'].map((t) => (
                    <span key={t} className="px-3 py-1.5 rounded-full text-xs bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-900 hover:text-white transition-colors">{t}</span>
                  ))}
                </div>
              </div>

              {/* Documentation */}
              <div className="p-6 rounded-2xl border border-gray-200 bg-white/70 backdrop-blur shadow-[0_10px_40px_-20px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_60px_-25px_rgba(0,0,0,0.3)] transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gray-900 text-white flex items-center justify-center">📄</div>
                  <h4 className="text-sm font-semibold tracking-wide text-gray-900">Documentation</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['BRD','PRD','FRD','SRS','Wireframes','BPMN','Prototypes'].map((t) => (
                    <span key={t} className="px-3 py-1.5 rounded-full text-xs bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-900 hover:text-white transition-colors">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Education/Certifications moved to left column */}

            {/* Selected Impact metrics */}
            <div ref={(el) => addRef(el, 16)} className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 fade-in-up">
              {[
                { metric: '3+ MVPs shipped', note: 'From concept to client demo.' },
                { metric: '50+ user interviews', note: 'Actionable pain points surfaced.' },
                { metric: '−30% TAT via automations', note: 'Operational efficiency gains.' },
              ].map((m) => (
                <div key={m.metric} className="p-6 rounded-2xl border border-gray-200 bg-white/70 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_60px_-25px_rgba(0,0,0,0.3)] transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-lg bg-gray-900 text-white flex items-center justify-center">📈</div>
                    <p className="text-sm font-semibold text-gray-900">{m.metric}</p>
                  </div>
                  <p className="text-xs text-gray-600">{m.note}</p>
                </div>
              ))}
            </div>

            {/* Voice & Tone */}
            <div ref={(el) => addRef(el, 17)} className="mt-8 p-6 rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 fade-in-up">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-gray-900 text-white flex items-center justify-center">❝</div>
                <p className="text-sm text-gray-800">I combine product rigor with empathy — building products people trust and teams can ship.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24" aria-label="Contact and resume">
        <div className="max-w-6xl mx-auto fade-in-up" ref={(el) => addRef(el, 18)}>
          <div className="rounded-2xl border border-gray-200 bg-white/70 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.2)]">
            <div>
              <p className="text-base sm:text-lg font-semibold tracking-tight text-gray-900">Let’s build something real.</p>
              <p className="text-sm text-gray-600 mt-1">Download my resume or reach out to collaborate.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors" aria-label="Download full CV">
                <svg aria-hidden="true" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Zm0 2.5L18.5 9H14V4.5ZM7 13h10v2H7v-2Zm0 4h10v2H7v-2ZM7 9h6v2H7V9Z"/></svg>
                Download full CV
              </a>
              <a href={`mailto:${personalInfo.email}`} className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-gray-300 text-gray-900 text-sm font-medium hover:border-gray-400 hover:bg-gray-50 transition-colors" aria-label="Schedule a quick chat">
                <svg aria-hidden="true" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2v.01L12 12 4 6.01V6h16ZM4 18V8l8 6 8-6v10H4Z"/></svg>
                Schedule a quick chat
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-4" aria-label="Social links">
            <a href="https://github.com/NITHINMBA" target="_blank" rel="noopener noreferrer" className="p-2 rounded hover:bg-gray-50 transition-colors" aria-label="GitHub">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2.16c-3.23.7-3.91-1.4-3.91-1.4-.53-1.35-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.75-1.56-2.58-.29-5.29-1.29-5.29-5.75 0-1.27.46-2.31 1.2-3.13-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.2a11.08 11.08 0 0 1 5.83 0c2.22-1.51 3.2-1.2 3.2-1.2.63 1.59.23 2.76.11 3.05.75.82 1.2 1.86 1.2 3.13 0 4.47-2.72 5.46-5.31 5.74.43.37.81 1.1.81 2.22v3.29c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"/></svg>
            </a>
            <a href={"https://www.linkedin.com/in/nithinmc"} target="_blank" rel="noopener noreferrer" className="p-2 rounded hover:bg-gray-50 transition-colors" aria-label="LinkedIn">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zm7.5 0h3.8v2h.05c.53-1 1.82-2.05 3.75-2.05 4 0 4.75 2.63 4.75 6.06V23h-4v-5.9c0-1.41-.03-3.22-1.96-3.22-1.96 0-2.26 1.53-2.26 3.12V23h-4V8.5z"/></svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
