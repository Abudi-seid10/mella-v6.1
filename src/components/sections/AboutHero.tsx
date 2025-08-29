'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, Shield, Users, Award } from 'lucide-react';

const AboutHero = () => {
  const stats = [
    { icon: Users, label: 'Happy Clients', value: '500+' },
    { icon: Award, label: 'Years Experience', value: '10+' },
    { icon: Shield, label: 'Licensed Professionals', value: '100%' },
    { icon: Heart, label: 'Success Stories', value: '1000+' },
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
    <section className="pt-20 pb-16 bg-gradient-to-br from-neutral-50 via-primary-50 to-secondary-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full filter blur-3xl opacity-30 transform translate-x-1/2" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-br from-accent-100 to-accent-200 rounded-full filter blur-3xl opacity-25 transform -translate-x-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Logo */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <Image
              src="/Main_Mella.png"
              alt="Mella Counseling Center Logo"
              width={300}
              height={100}
              className="h-20 w-auto mx-auto"
              priority
            />
          </motion.div>

          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-medium text-sm mb-6"
          >
            <Heart size={16} />
            <span>About Mella Counseling</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight"
          >
            Dedicated to Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              Mental Wellness
            </span>{' '}
            Journey
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-xl text-neutral-600 mb-12 leading-relaxed max-w-4xl mx-auto"
          >
            At Mella Counseling Center, we believe that mental health is the foundation of a fulfilling life. 
            Our team of licensed professionals is committed to providing compassionate, culturally sensitive 
            care that empowers individuals and families to overcome challenges and thrive.
          </motion.p>

          {/* Stats Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-primary-100 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="text-primary-600" size={28} />
                  </div>
                  <div className="text-3xl font-bold text-primary-700 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-neutral-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
