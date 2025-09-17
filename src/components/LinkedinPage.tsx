import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ArrowLeft, Network, Briefcase, BookOpen, User, Sliders, Smile, Repeat, BarChart2, Star, ThumbsUp, Award } from 'lucide-react';

const LinkedinPage: React.FC = () => {
  const navigateBack = () => {
    window.dispatchEvent(new CustomEvent('navigate', { detail: 'research-works' }));
  };

  const [feedType, setFeedType] = useState('default');

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.2 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const strengths = [
    { icon: <Network size={32} />, title: 'Networking Powerhouse', description: 'The strongest bridge between talent and opportunity.' },
    { icon: <Briefcase size={32} />, title: 'Career Growth', description: 'Opens doors for career transitions and recruiter outreach.' },
    { icon: <BookOpen size={32} />, title: 'Knowledge Hub', description: 'Industry leaders share insights that feel like mini-masterclasses.' },
    { icon: <User size={32} />, title: 'Personal Branding', description: 'Showcase projects, achievements, and thought leadership.' },
  ];

  const outcomes = {
    users: [
      { icon: <Smile />, title: 'Less Noise, More Value', description: 'A focused feed enhances user experience.' },
      { icon: <Repeat />, title: 'Higher Engagement', description: 'Relevant content keeps users coming back.' },
      { icon: <ThumbsUp />, title: 'Greater Trust & Satisfaction', description: 'Users feel in control of their experience.' },
    ],
    linkedin: [
      { icon: <BarChart2 />, title: 'Increased Retention & DAU/MAU', description: 'A valuable feed is a sticky feed.' },
      { icon: <Star />, title: 'More Premium Conversions', description: 'Users who see value are more likely to upgrade.' },
      { icon: <Award />, title: 'Stronger Differentiation', description: 'A truly productive feed stands out from other platforms.' },
    ],
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      <button
        onClick={navigateBack}
        className="fixed top-8 left-8 z-50 flex items-center gap-2 text-gray-200 hover:text-white transition-colors bg-black/20 hover:bg-black/40 px-3 py-2 rounded-lg"
      >
        <ArrowLeft size={20} />
        <span>Back to Research Works</span>
      </button>

      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[70vh] flex items-center justify-center text-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-teal-400 opacity-90 z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            From Clutter to Clarity: My Take on Improving LinkedIn’s User Experience
          </motion.h1>
        </div>
      </motion.header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">1) Why I Love LinkedIn</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            LinkedIn is my go-to platform for professional networking, learning, and exploring opportunities. Unlike other social platforms, it creates real-world impact: connecting people with jobs, enabling knowledge-sharing, and helping professionals build a personal brand. This unique blend of network + content + opportunity is what makes LinkedIn stand apart.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {strengths.map((strength) => (
              <motion.div
                key={strength.title}
                variants={itemVariants}
                className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl border border-gray-200 hover:bg-white hover:shadow-lg transition-all"
              >
                <div className="text-blue-600 flex-shrink-0 mt-1">{strength.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{strength.title}</h3>
                  <p className="text-base text-gray-600">{strength.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl font-semibold text-gray-900 mb-2">2) One Thing I Wish to Implement in LinkedIn</h2>
          <p className="text-lg text-gray-700 mb-4"><span className="font-bold text-red-600">Problem:</span> The feed feels cluttered with promotional content, viral but irrelevant posts, and low-signal updates.</p>
          <p className="text-xl text-center font-medium text-gray-800 mb-8 bg-blue-50 p-4 rounded-lg border border-blue-200">
            👉 Proposed Change: User-Controlled Feed Personalization
          </p>
          
          <div className="bg-white p-6 rounded-2xl border-2 border-gray-200 shadow-xl">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Sliders size={24} className="text-gray-600" />
              <h3 className="text-lg font-bold text-gray-800">Content Filter Slider</h3>
            </div>
            <div className="flex justify-between items-center bg-gray-100 p-2 rounded-full">
              {['Default', 'Job-Focused', 'Knowledge'].map(type => (
                <button
                  key={type}
                  onClick={() => setFeedType(type.toLowerCase())}
                  className={`relative w-1/3 py-2 text-sm font-semibold rounded-full transition-colors ${
                    feedType === type.toLowerCase() ? 'text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {feedType === type.toLowerCase() && (
                    <motion.div layoutId="slider-bg" className="absolute inset-0 bg-blue-600 rounded-full" />
                  )}
                  <span className="relative z-10">{type}</span>
                </button>
              ))}
            </div>
            <div className="mt-6 h-48 bg-gray-50 rounded-lg p-4 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={feedType}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-center text-gray-600"
                >
                  {feedType === 'default' && 'Showing a mix of all updates...'}
                  {feedType === 'job-focused' && 'Filtering for job postings, hiring news, and career advice...'}
                  {feedType === 'knowledge' && 'Surfacing case studies, thought leadership, and industry insights...'}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.section>

        <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">3) Possible Outcomes of This Implementation</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">For Users</h3>
              <div className="space-y-6">
                {outcomes.users.map((outcome) => (
                  <motion.div key={outcome.title} variants={itemVariants} className="flex items-start gap-4">
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-green-100 text-green-600">{outcome.icon}</div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">{outcome.title}</h4>
                      <p className="text-base text-gray-600">{outcome.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">For LinkedIn (Business)</h3>
              <div className="space-y-6">
                {outcomes.linkedin.map((outcome) => (
                  <motion.div key={outcome.title} variants={itemVariants} className="flex items-start gap-4">
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600">{outcome.icon}</div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">{outcome.title}</h4>
                      <p className="text-base text-gray-600">{outcome.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default LinkedinPage;
