'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Send } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-primary-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Logo & Brand */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                <Link href="/" className="inline-block">
                  <Image
                    src="/Main_Mella.png"
                    alt="Mella Counseling Center Logo"
                    width={180}
                    height={60}
                    className="h-12 w-auto"
                    priority
                  />
                </Link>
                <p className="text-neutral-300 max-w-sm leading-relaxed">
                  Professional mental health counseling services providing compassionate, 
                  culturally sensitive care to help you thrive.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-accent-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-white font-medium">Address</p>
                    <p className="text-neutral-300">
                      Lebu, Addis Ababa, Ethiopia
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="text-accent-400 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-neutral-300">+251 92 541 9100</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="text-accent-400 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-neutral-300">info@mellacounseling.com.et</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="text-accent-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-white font-medium">Hours</p>
                    <p className="text-neutral-300">
                      Monday - Saturday: 8:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-4">Quick Links</h3>
              <div className="space-y-3">
                {quickLinks.map((link) => (
                  <motion.div
                    key={link.href}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      href={link.href}
                      className="text-neutral-300 hover:text-accent-400 transition-colors duration-200 block py-1 group"
                    >
                      <span className="flex items-center">
                        <span className="w-0 group-hover:w-2 h-0.5 bg-accent-400 mr-0 group-hover:mr-2 transition-all duration-200" />
                        {link.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Newsletter & Social */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-4">Stay Connected</h3>
              
              {/* Newsletter */}
              <div className="space-y-4">
                <p className="text-neutral-300">
                  Subscribe to our newsletter for mental health tips and updates.
                </p>
                <form className="space-y-3">
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 bg-primary-700 border border-primary-600 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-accent-400 transition-colors duration-200"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-accent-500 hover:bg-accent-600 text-primary-900 font-medium px-6 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Send size={18} />
                    <span>Subscribe</span>
                  </motion.button>
                </form>
              </div>

              {/* Social Media */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Follow Us</h4>
                <div className="flex space-x-4">
                  {[
                    { icon: Facebook, href: '#', label: 'Facebook' },
                    { icon: Twitter, href: '#', label: 'Twitter' },
                    { icon: Instagram, href: '#', label: 'Instagram' },
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 bg-primary-700 hover:bg-accent-500 rounded-lg flex items-center justify-center transition-all duration-200 group"
                      aria-label={social.label}
                    >
                      <social.icon
                        size={20}
                        className="text-neutral-300 group-hover:text-primary-900 transition-colors duration-200"
                      />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            variants={itemVariants}
            className="mt-12 pt-8 border-t border-primary-700"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-neutral-300">
                  © {new Date().getFullYear()} Mella Counseling Center. All rights reserved.
                </p>
                <p className="text-neutral-400 text-sm mt-1">
                  Licensed mental health professionals committed to your wellbeing.
                </p>
              </div>
              <div className="text-center md:text-right">
                <p className="text-neutral-400 text-sm">
                  Designed & Developed by{' '}
                  <Link
                    href="https://motech.et"
                    className="text-accent-400 hover:text-accent-300 transition-colors duration-200 font-medium"
                  >
                    MoTech Solutions
                  </Link>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
