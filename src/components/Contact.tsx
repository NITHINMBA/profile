import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';
import { personalInfo } from '../utils/constants';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-blue-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-blue-900/80 max-w-2xl mx-auto">
            Ready to transform your business requirements into innovative solutions? 
            Let's discuss how I can help drive your next project to success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-blue-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center space-x-4 p-4 bg-white rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="p-3 bg-blue-600/10 rounded-full">
                    <Mail size={20} className="text-blue-700" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-900/70">Email</p>
                    <p className="text-blue-900 font-medium">{personalInfo.email}</p>
                  </div>
                </a>

                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center space-x-4 p-4 bg-white rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="p-3 bg-blue-600/10 rounded-full">
                    <Phone size={20} className="text-blue-700" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-900/70">Phone</p>
                    <p className="text-blue-900 font-medium">{personalInfo.phone}</p>
                  </div>
                </a>

                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg border border-blue-100 shadow-sm">
                  <div className="p-3 bg-blue-600/10 rounded-full">
                    <MapPin size={20} className="text-blue-700" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-900/70">Location</p>
                    <p className="text-blue-900 font-medium">{personalInfo.location}</p>
                  </div>
                </div>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-white rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="p-3 bg-blue-600/10 rounded-full">
                    <Linkedin size={20} className="text-blue-700" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-900/70">LinkedIn</p>
                    <p className="text-blue-900 font-medium">Connect with me</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-blue-100 shadow-sm">
              <h4 className="text-lg font-semibold text-blue-900 mb-4">
                Availability
              </h4>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
                <span className="text-blue-900/80">
                  Open to new opportunities
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl border border-blue-100 shadow-sm">
            <h3 className="text-xl font-semibold text-blue-900 mb-6">
              Send a Message
            </h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-blue-900 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white text-blue-900 placeholder-blue-400 transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-blue-900 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white text-blue-900 placeholder-blue-400 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-blue-900 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white text-blue-900 placeholder-blue-400 transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-blue-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white text-blue-900 placeholder-blue-400 transition-colors resize-none"
                  placeholder="Tell me about your project or how I can help..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};