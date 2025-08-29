'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Users, Lock, Star, Award, Heart } from 'lucide-react';

const Hero = () => {
  const [particlePositions, setParticlePositions] = useState<Array<{left: number, top: number, duration: number, delay: number}>>([]);

  useEffect(() => {
    // Generate particle positions on client side only
    const positions = [...Array(8)].map(() => ({
      left: 20 + Math.random() * 60,
      top: 20 + Math.random() * 60,
      duration: 4 + Math.random() * 2,
      delay: Math.random() * 2,
    }));
    setParticlePositions(positions);
  }, []);

  const trustIndicators = [
    { icon: Shield, text: 'Licensed Professionals', count: '100%' },
    { icon: Users, text: 'Happy Clients', count: '500+' },
    { icon: Lock, text: 'Confidential', count: '100%' },
    { icon: Star, text: 'Client Rating', count: '4.9/5' },
  ];

  const floatingElements = [
    { delay: 0, x: 50, y: 30, size: 'w-16 h-16' },
    { delay: 1, x: -30, y: 60, size: 'w-12 h-12' },
    { delay: 2, x: 80, y: -20, size: 'w-20 h-20' },
    { delay: 1.5, x: -60, y: -40, size: 'w-14 h-14' },
    { delay: 0.5, x: 120, y: 80, size: 'w-10 h-10' },
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-neutral-50 via-primary-50 to-secondary-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full filter blur-3xl opacity-30 animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-accent-200 to-accent-300 rounded-full filter blur-3xl opacity-20 animate-pulse-slow" />
        
        {/* Floating Abstract Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {floatingElements.map((element, index) => (
            <motion.div
              key={index}
              className={`absolute ${element.size} opacity-10`}
              style={{
                left: `${20 + element.x}%`,
                top: `${30 + element.y}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8 + element.delay,
                repeat: Infinity,
                ease: "easeInOut",
                delay: element.delay,
              }}
            >
              <div className="w-full h-full bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Professional Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-primary-200 rounded-full px-4 py-2 mb-8 shadow-lg"
            >
              <Award className="text-primary-600" size={16} />
              <span className="text-primary-700 font-medium text-sm">
                Professional Mental Health Care
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight"
            >
              Your Path to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600">
                Mental Wellness
              </span>{' '}
              Starts Here
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-xl text-neutral-600 mb-8 leading-relaxed max-w-2xl"
            >
              Compassionate, professional counseling services tailored to your unique journey. 
              Take the first step towards healing and personal growth with our licensed therapists.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12"
            >
              <Link
                href="#contact"
                className="group bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Start Your Journey</span>
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </Link>
              <Link
                href="#services"
                className="group border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Our Services</span>
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {trustIndicators.map((indicator, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-primary-100 shadow-sm"
                >
                  <indicator.icon className="text-primary-600 mx-auto mb-2" size={24} />
                  <div className="text-2xl font-bold text-primary-700 mb-1">
                    {indicator.count}
                  </div>
                  <div className="text-sm text-neutral-600">{indicator.text}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Abstract Visual */}
          <div className="relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative w-full max-w-lg h-96"
            >
              {/* Central Heart Element */}
              <motion.div
                animate={{
                  scale: [3, 2.1, 3],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center shadow-2xl"
              >
                <img
                  src="/mella_white.png"
                  alt="Mella Logo"
                  className="w-30 h-30 object-contain"
                />
              </motion.div>

              {/* Orbiting Elements */}
              {[...Array(6)].map((_, index) => (
                <motion.div
                  key={index}
                  className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-accent-400 to-accent-600 opacity-80 shadow-lg"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 12 + index * 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <motion.div
                    className="w-full h-full rounded-full bg-gradient-to-br from-accent-300 to-accent-500 flex items-center justify-center"
                    style={{
                      transformOrigin: `0px ${(80 + index * 20)}px`,
                      transform: `translate(${80 + index * 20}px, 0px)`,
                    }}
                    animate={{
                      rotate: [360, 0],
                    }}
                    transition={{
                      duration: 12 + index * 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </motion.div>
                </motion.div>
              ))}

              {/* Floating Particles */}
              {particlePositions.map((particle, index) => (
                <motion.div
                  key={`particle-${index}`}
                  className="absolute w-2 h-2 bg-primary-400 rounded-full"
                  style={{
                    left: `${particle.left}%`,
                    top: `${particle.top}%`,
                  }}
                  animate={{
                    y: [-20, 20, -20],
                    x: [-10, 10, -10],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: particle.duration,
                    repeat: Infinity,
                    delay: particle.delay,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
