'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, MessageSquare, Calendar, Heart, Sparkles } from 'lucide-react';

const CTA = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our team',
      action: '+251 911 123456',
      href: 'tel:+251911123456',
      color: 'from-primary-500 to-primary-600',
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us your questions',
      action: 'info@mellacounseling.com',
      href: 'mailto:info@mellacounseling.com',
      color: 'from-secondary-500 to-secondary-600',
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Chat with our support team',
      action: 'Start Chat',
      href: '#chat',
      color: 'from-accent-500 to-accent-600',
    },
  ];

  const floatingElements = [
    { icon: Heart, delay: 0, x: '10%', y: '20%', size: 'w-8 h-8' },
    { icon: Sparkles, delay: 1, x: '85%', y: '30%', size: 'w-6 h-6' },
    { icon: Heart, delay: 2, x: '15%', y: '80%', size: 'w-10 h-10' },
    { icon: Sparkles, delay: 1.5, x: '90%', y: '70%', size: 'w-7 h-7' },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-primary-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main gradient orbs */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-br from-primary-100/30 via-secondary-100/20 to-accent-100/30 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-accent-200/40 to-primary-200/30 rounded-full filter blur-3xl transform translate-x-1/3 translate-y-1/3" />
        
        {/* Floating animated icons */}
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className={`absolute ${element.size} opacity-10`}
            style={{ left: element.x, top: element.y }}
            animate={{
              y: [-10, 10, -10],
              rotate: [0, 180, 360],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 6 + element.delay,
              repeat: Infinity,
              ease: "easeInOut",
              delay: element.delay,
            }}
          >
            <element.icon className="w-full h-full text-primary-400" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl border border-neutral-100 overflow-hidden relative"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-accent-400 to-primary-400 rounded-full filter blur-3xl transform -translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="relative z-10 p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-medium text-sm mb-6"
                >
                  <Calendar size={16} />
                  <span>Ready to Get Started?</span>
                </motion.div>

                {/* Headline */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6"
                >
                  Ready to Begin Your{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                    Healing Journey?
                  </span>
                </motion.h2>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-xl text-neutral-600 mb-8 leading-relaxed"
                >
                  Taking the first step toward mental wellness shows incredible strength. 
                  Our compassionate professionals are here to support you every step of the way.
                </motion.p>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8"
                >
                  <Link
                    href="tel:+251911123456"
                    className="group bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-2xl transform hover:scale-105"
                  >
                    <Phone size={20} />
                    <span>Contact Us Today</span>
                    <ArrowRight
                      size={20}
                      className="group-hover:translate-x-1 transition-transform duration-200"
                    />
                  </Link>
                  
                  <Link
                    href="#services"
                    className="group border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Explore Our Services</span>
                    <ArrowRight
                      size={20}
                      className="group-hover:translate-x-1 transition-transform duration-200"
                    />
                  </Link>
                </motion.div>

                {/* Reassurance Text */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-sm text-neutral-500 flex items-center justify-center lg:justify-start space-x-2"
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span>Available Monday - Saturday, 8:00 AM - 6:00 PM</span>
                </motion.div>
              </div>

              {/* Right Content - Contact Methods */}
              <div className="space-y-6">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-2xl font-bold text-neutral-900 mb-6 text-center lg:text-left"
                >
                  Get in Touch
                </motion.h3>

                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <motion.div
                      key={method.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="group"
                    >
                      <Link
                        href={method.href}
                        className="flex items-center space-x-4 p-6 bg-neutral-50 hover:bg-white rounded-2xl border border-neutral-100 hover:border-primary-200 transition-all duration-300 hover:shadow-lg"
                      >
                        <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <method.icon className="text-white" size={24} />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-neutral-900 mb-1">
                            {method.title}
                          </h4>
                          <p className="text-sm text-neutral-600 mb-1">
                            {method.description}
                          </p>
                          <p className="text-primary-600 font-medium">
                            {method.action}
                          </p>
                        </div>
                        <ArrowRight
                          size={20}
                          className="text-neutral-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all duration-200"
                        />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Reassurance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Confidential & Safe',
                  description: 'Your privacy is our priority with HIPAA compliant services',
                  icon: '🔒',
                },
                {
                  title: 'Licensed Professionals',
                  description: 'Work with experienced, certified mental health experts',
                  icon: '👥',
                },
                {
                  title: 'Flexible Scheduling',
                  description: 'Book appointments that fit your lifestyle and needs',
                  icon: '📅',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h4 className="text-lg font-semibold text-neutral-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
