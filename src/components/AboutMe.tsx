import React, { useEffect, useRef } from "react";
import { LucideIcon, GraduationCap, Award, Briefcase, Mail, Linkedin, Github, FileDown, MessageSquare, Sparkle, BarChart, Settings, FileText, Users, Star } from "./icons"; // See icons.tsx below

// CSS tokens (see below for .css file)
const styleVars = {
  "--accent": "linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%)",
  "--muted": "#64748b",
  "--card-bg": "#f8fafc",
  "--primary": "#1e293b",
  "--gold": "#facc15",
  "--teal": "#38bdf8"
};

// Helper: IntersectionObserver for scroll-reveal
function useScrollReveal(refs) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new window.IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add("animate");
        });
      },
      { threshold: 0.15 }
    );
    refs.forEach(r => r && observer.observe(r));
    return () => observer.disconnect();
  }, [refs]);
}

// Resume data (from attached file)
const resume = {
  name: "Nithiyananthan M",
  contact: {
    phone: "+91 9788546486",
    email: "mcnithin99@gmail.com",
    linkedin: "https://linkedin.com/in/nithinmc/",
    github: "https://github.com/NITHINMBA",
    portfolio: "#"
  },
  tagline: "I translate user problems into measurable product outcomes — blending product intuition, data, and modern AI to ship fast and scale reliably.",
  heroTitle: "From insights to MVP to growth — practical AI & product solutions",
  chips: ["0→1 MVPs", "Telecom & CX", "RAG & LLMs"],
  education: [
    {
      degree: "MBA (Fulltime) – Operations & HR",
      institution: "University of Madras",
      years: "2022–24",
      location: "Chennai, India"
    },
    {
      degree: "B. TECH – Information Technology",
      institution: "Anna University (UCEV)",
      years: "2016–2020",
      location: "Villupuram, Tamilnadu, India"
    }
  ],
  certifications: [
    "Atlassian Agile Project Management Professional Certificate",
    "Technical Product Management",
    "Business analysis and Process Management",
    "Generative AI for Business Analyst",
    "Agile Product owner",
    "Introduction to SAFe"
  ],
  metrics: [
    {
      metric: "3+ MVPs shipped",
      subtitle: "From concept to client-ready MVPs"
    },
    {
      metric: "50+ user interviews",
      subtitle: "Actionable research & insights"
    },
    {
      metric: "30% faster TAT via automation",
      subtitle: "Operational efficiency improvements"
    }
  ],
  experience: [
    {
      role: "Business Analyst",
      company: "Bahwan Cybertek",
      dates: "Dec'24–Present",
      location: "Chennai",
      highlights: [
        "Conducted market and user research to identify pain points and define product strategy, transforming ideas from 0 to 1 into MVPs.",
        "Collaborated with cross-functional teams to drive Agile execution, stakeholder alignment, and successful product delivery.",
        "Project: Telecom Mobile App, CXM & Bill Automation — delivered AI-powered mobile app with bill automation, ensuring timely delivery and client alignment."
      ]
    },
    {
      role: "Business Analyst Intern",
      company: "Srushty Global Solutions",
      dates: "June'24–Dec'24",
      location: "Chennai",
      highlights: [
        "Collaborated with architects, PM, and hardware/software teams to define requirements and develop the system.",
        "Prepared BRDs, wireframes, and user flows for ML-based catheter defect finding system.",
        "Facilitated Agile ceremonies and documentation."
      ]
    },
    {
      role: "Business Incubator",
      company: "Entrepreneurship Development and Growth Establishment Club, University of Madras",
      dates: "Jan'23–Feb'24",
      location: "Chennai",
      highlights: [
        "Facilitated pitch events for student entrepreneurs, linking them with investors and incubation centers.",
        "Turned ideas into MVPs and launch startups.",
        "Organized workshops and events for leadership development."
      ]
    }
  ],
  skills: [
    {
      title: "Product & Strategy",
      icon: <Sparkle />,
      value: "Driving product lifecycle from concept to launch and scaling for growth.",
      tools: ["SDLC", "Agile", "A/B Testing", "User Research"]
    },
    {
      title: "AI & Automation",
      icon: <BarChart />,
      value: "AI-powered solutions, automation, and process optimization.",
      tools: ["LangChain", "RAG", "n8n", "Agentic AI Architecture"]
    },
    {
      title: "Design & Prototyping",
      icon: <Settings />,
      value: "Wireframes, user flows, and rapid prototyping for MVPs.",
      tools: ["Figma", "Balsamiq", "Draw.io"]
    },
    {
      title: "Data & Analytics",
      icon: <Users />,
      value: "Data analysis, visualization, and actionable insights.",
      tools: ["Excel", "SQL", "Power BI"]
    },
    {
      title: "Documentation & Delivery",
      icon: <FileText />,
      value: "Comprehensive documentation and stakeholder alignment.",
      tools: ["BRD", "FRD", "SRS", "JIRA", "Confluence"]
    }
  ],
  impact: [
    {
      title: "Telecom Mobile App & CRM",
      outcome: "Led requirements and delivered MVP for customer-facing app.",
      link: null
    },
    {
      title: "IoT Catheter Defect System",
      outcome: "Designed ML-based defect detection flows and documentation.",
      link: null
    },
    {
      title: "Business Incubator",
      outcome: "Organized pitch events and MVP launches for startups.",
      link: null
    }
  ],
  brand: "I combine product rigor with empathy — building products people trust and teams can ship."
};

// Icon map (Lucide, single color, see icons.tsx below)
const icons = {
  graduation: <GraduationCap className="w-6 h-6 text-accent" />,
  award: <Award className="w-6 h-6 text-accent" />,
  briefcase: <Briefcase className="w-6 h-6 text-accent" />,
  mail: <Mail className="w-5 h-5 text-muted" />,
  linkedin: <Linkedin className="w-5 h-5 text-muted" />,
  github: <Github className="w-5 h-5 text-muted" />,
  file: <FileDown className="w-5 h-5 text-accent" />,
  chat: <MessageSquare className="w-5 h-5 text-accent" />,
  sparkle: <Sparkle className="w-6 h-6 text-accent" />,
  barChart: <BarChart className="w-6 h-6 text-accent" />,
  settings: <Settings className="w-6 h-6 text-accent" />,
  fileText: <FileText className="w-6 h-6 text-accent" />,
  users: <Users className="w-6 h-6 text-accent" />,
  star: <Star className="w-6 h-6 text-gold" />
};

// Main About Page
export const AboutMe: React.FC = () => {
  // For scroll-reveal
  const revealRefs = useRef([]);
  useScrollReveal(revealRefs.current);

  return (
    <div
      className="bg-[var(--card-bg)] min-h-screen text-[var(--primary)]"
      style={styleVars}
      aria-label="About Nithiyananthan M"
    >
      {/* Hero */}
      <section className="pt-20 pb-12 px-4 sm:px-8 flex flex-col items-center text-center">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent" style={{ backgroundImage: styleVars["--accent"] }}>
          {resume.heroTitle}
        </h1>
        <p className="text-lg sm:text-xl text-muted mb-6 max-w-2xl">{resume.tagline}</p>
        <div className="flex flex-wrap gap-4 mb-6">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-indigo-500 to-violet-500 shadow hover:translate-y-[-2px] hover:shadow-lg transition"
            aria-label="Download Resume"
          >
            {icons.file} Download Resume
          </a>
          <a
            href={`mailto:${resume.contact.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-indigo-700 bg-white border border-indigo-200 shadow hover:bg-indigo-50 hover:translate-y-[-2px] hover:shadow-lg transition"
            aria-label="Schedule a quick chat"
          >
            {icons.chat} Schedule a quick chat
          </a>
        </div>
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {resume.chips.map((chip, i) => (
            <span key={chip} className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 border border-indigo-200">{chip}</span>
          ))}
        </div>
      </section>

      {/* Two-column core area */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 px-4 sm:px-8 pb-16">
        {/* Left column: Education, Certifications, Metrics */}
        <div className="md:col-span-5 flex flex-col gap-8">
          {/* Education */}
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">{icons.graduation} Education</h2>
            <div className="flex flex-col gap-6">
              {resume.education.map((ed, i) => (
                <div key={ed.degree} className="rounded-xl border bg-white shadow p-6 flex flex-col gap-2 hover:-translate-y-1 hover:shadow-lg transition" ref={el => revealRefs.current[i] = el}>
                  <div className="flex items-center gap-3 mb-2">
                    {icons.graduation}
                    <span className="text-lg font-semibold">{ed.degree}</span>
                  </div>
                  <div className="text-base text-muted">{ed.institution} <span className="text-xs text-muted">({ed.location})</span></div>
                  <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-medium">{ed.years}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Certifications */}
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">{icons.award} Certifications</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-0">
              {resume.certifications.map((cert, i) => (
                <span
                  key={cert}
                  tabIndex={0}
                  className="flex items-center gap-2 px-4 py-3 rounded-lg font-semibold text-base bg-gradient-to-r from-indigo-100 to-violet-100 text-indigo-700 shadow border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  aria-label={cert}
                >
                  {icons.award}
                  {cert}
                </span>
              ))}
            </div>
          </div>
          {/* Metrics */}
          <div className="mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {resume.metrics.map((m, i) => (
                <div key={m.metric} className="rounded-xl border bg-white shadow p-4 flex flex-col gap-1 hover:-translate-y-1 hover:shadow-lg transition">
                  <div className="flex items-center gap-2 font-semibold text-indigo-700">{icons.star} {m.metric}</div>
                  <div className="text-xs text-muted">{m.subtitle}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Right column: Professional Experience */}
        <div className="md:col-span-7 flex flex-col gap-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">{icons.briefcase} Professional Experience</h2>
          <div className="flex flex-col gap-8">
            {resume.experience.map((exp, i) => (
              <div key={exp.role + exp.company} className="rounded-xl border bg-white shadow p-6 hover:-translate-y-1 hover:shadow-lg transition" ref={el => revealRefs.current[10 + i] = el}>
                <div className="flex items-center gap-3 mb-2">
                  {icons.briefcase}
                  <span className="text-lg font-semibold">{exp.role}</span>
                  <span className="text-xs text-muted ml-auto">{exp.dates}</span>
                </div>
                <div className="text-base text-muted mb-2">{exp.company} <span className="text-xs text-muted">({exp.location})</span></div>
                <ul className="list-disc pl-5 text-base text-muted">
                  {exp.highlights.map((h, j) => <li key={j}>{h}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities / Skills */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pb-16">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">{icons.sparkle} Capabilities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {resume.skills.map((tile, i) => (
            <div key={tile.title} className="rounded-xl border bg-white shadow p-6 flex flex-col gap-2 hover:-translate-y-1 hover:shadow-lg transition" tabIndex={0} aria-label={tile.title}>
              <div className="flex items-center gap-3 mb-2">{tile.icon}<span className="font-semibold">{tile.title}</span></div>
              <div className="text-base text-muted mb-1">{tile.value}</div>
              <div className="flex flex-wrap gap-2 text-xs text-muted">
                {tile.tools.map(tool => (
                  <span key={tool} className="px-2 py-1 rounded bg-indigo-50 border border-indigo-100">{tool}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Impact / Projects */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pb-16">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">{icons.barChart} Selected Impact</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {resume.impact.map((item, i) => (
            <div key={item.title} className="rounded-xl border bg-white shadow p-6 flex flex-col gap-2 hover:-translate-y-1 hover:shadow-lg transition">
              <div className="font-semibold text-indigo-700">{item.title}</div>
              <div className="text-base text-muted">{item.outcome}</div>
              {item.link && <a href={item.link} className="text-xs text-indigo-500 underline mt-1">View project</a>}
            </div>
          ))}
        </div>
      </section>

      {/* Brand statement */}
      <section className="max-w-3xl mx-auto px-4 sm:px-8 pb-16">
        <div className="rounded-xl border bg-white shadow p-6 flex items-center gap-3">
          <span className="w-9 h-9 rounded-lg bg-indigo-700 text-white flex items-center justify-center">{icons.chat}</span>
          <span className="text-base text-muted">{resume.brand}</span>
        </div>
      </section>

      {/* Footer CTA / Contact */}
      <footer className="max-w-4xl mx-auto px-4 sm:px-8 pb-24">
        <div className="rounded-xl border bg-white shadow p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Let’s build something real.</h2>
            <p className="text-base text-muted mb-4">Download my resume or reach out to collaborate.</p>
            <div className="flex flex-wrap gap-4">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-indigo-500 to-violet-500 shadow hover:translate-y-[-2px] hover:shadow-lg transition" aria-label="Download full CV">{icons.file} Download full CV</a>
              <a href={`mailto:${resume.contact.email}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-indigo-700 bg-white border border-indigo-200 shadow hover:bg-indigo-50 hover:translate-y-[-2px] hover:shadow-lg transition" aria-label="Schedule a quick chat">{icons.chat} Schedule a quick chat</a>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <a href={resume.contact.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded hover:bg-indigo-50 transition-colors" aria-label="LinkedIn">{icons.linkedin}</a>
            <a href={resume.contact.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded hover:bg-indigo-50 transition-colors" aria-label="GitHub">{icons.github}</a>
            <a href={`mailto:${resume.contact.email}`} className="p-2 rounded hover:bg-indigo-50 transition-colors" aria-label="Email">{icons.mail}</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
