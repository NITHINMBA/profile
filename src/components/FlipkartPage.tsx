import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowLeft, FileText, Clock, Zap, Bell, MonitorSmartphone, Smile, CheckCircle, ThumbsUp, Repeat, DollarSign, Headset, Award } from 'lucide-react';

const FlipkartPage: React.FC = () => {
  const navigateBack = () => {
    window.dispatchEvent(new CustomEvent('navigate', { detail: 'research-works' }));
  };

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const howItWorks = [
    { icon: <FileText size={32} className="text-blue-500" />, title: 'Automatic Document Storage', description: 'Every invoice, warranty card, and service policy gets auto-stored in the app upon purchase.' },
    { icon: <Clock size={32} className="text-blue-500" />, title: 'Warranty Tracker', description: 'See warranty start/end dates, coverage, and status at a glance.' },
    { icon: <Zap size={32} className="text-blue-500" />, title: 'Quick Claim Button', description: 'Raise service requests directly from Flipkart without contacting the brand separately.' },
    { icon: <Bell size={32} className="text-blue-500" />, title: 'Smart Reminders', description: 'Notifications like “Your laptop warranty ends in 15 days — extend now.”' },
    { icon: <MonitorSmartphone size={32} className="text-blue-500" />, title: 'Cross-Device Accessibility', description: 'Access warranty details from desktop, app, or even offline.' },
  ];

  const outcomesForUsers = [
    { icon: <Smile size={24} className="text-green-500" />, title: 'Peace of Mind', description: 'No hunting emails, no lost papers. Everything in one place.' },
    { icon: <CheckCircle size={24} className="text-green-500" />, title: 'Faster Claims', description: 'Quicker warranty redemptions = better customer satisfaction.' },
    { icon: <ThumbsUp size={24} className="text-green-500" />, title: 'Stronger Trust', description: 'Users see Flipkart as a reliable after-sales partner.' },
  ];

  const outcomesForFlipkart = [
    { icon: <Repeat size={24} className="text-indigo-500" />, title: 'Higher Customer Loyalty', description: 'Smooth after-sales keeps customers coming back.' },
    { icon: <DollarSign size={24} className="text-indigo-500" />, title: 'New Revenue Streams', description: 'Upsell extended warranties and protection plans.' },
    { icon: <Headset size={24} className="text-indigo-500" />, title: 'Reduced Support Costs', description: 'Fewer calls asking for invoices or warranty info.' },
    { icon: <Award size={24} className="text-indigo-500" />, title: 'Competitive Differentiation', description: 'Stands out compared to Amazon and offline retailers.' },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Back Button */}
      <button
        onClick={navigateBack}
        className="absolute top-6 left-6 z-20 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
      >
        <ArrowLeft size={20} />
        <span>Back to Research Works</span>
      </button>

      {/* Hero Section */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[60vh] flex items-center justify-center text-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-yellow-400 opacity-80 z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1616587896649-7ccdfd24c7c7?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            From Warranty Hunt to One-Click Access: Improving Flipkart’s After-Sales Journey
          </motion.h1>
        </div>
      </motion.header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* User Pain Point */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">1) A Real-Life Story (User Pain Point)</h2>
          <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg text-lg leading-relaxed text-gray-700">
            <p>
              Recently, a close friend of mine faced this issue: He had bought a smartphone from Flipkart a year ago. One day, his phone suddenly switched off and wouldn’t restart. To claim warranty, he needed to provide the warranty card. But instead of finding it in the Flipkart app, he had to dig through hundreds of old emails and attachments just to locate that single PDF. It took him over an hour, adding unnecessary stress to an already frustrating situation.
            </p>
            <p className="mt-4 font-semibold">
              This showed me how fragmented the after-sales journey is. Flipkart does a great job at the purchase stage, but once the sale is complete, users are largely left on their own to manage warranties and repairs.
            </p>
          </div>
        </motion.section>

        {/* Proposed Change */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">2) One Thing I Wish to Implement in Flipkart</h2>
          <p className="text-xl text-center font-medium text-gray-800 mb-8 bg-gray-100 p-4 rounded-lg">
            👉 Proposed Change: A Unified Warranty & Service Dashboard inside the Flipkart app.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {howItWorks.map((item, index) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all"
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Outcomes */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">3) Possible Outcomes of This Implementation</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* For Users */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">For Users</h3>
              <div className="space-y-6">
                {outcomesForUsers.map((outcome, index) => (
                  <motion.div
                    key={outcome.title}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-green-100">
                      {outcome.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">{outcome.title}</h4>
                      <p className="text-base text-gray-600">{outcome.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            {/* For Flipkart */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">For Flipkart (Business)</h3>
              <div className="space-y-6">
                {outcomesForFlipkart.map((outcome, index) => (
                  <motion.div
                    key={outcome.title}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-indigo-100">
                      {outcome.icon}
                    </div>
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

export default FlipkartPage;
