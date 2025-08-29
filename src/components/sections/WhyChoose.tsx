'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, Shield, Users, CheckCircle } from 'lucide-react';

const WhyChoose = () => {
  const differentiators = [
    {
      icon: Award,
      title: 'Professional Mental Health Services',
      description: 'Our licensed and experienced professionals bring years of expertise in various therapeutic approaches, ensuring you receive the highest quality care.',
      points: [
        'Licensed clinical therapists',
        'Specialized training in evidence-based practices',
        'Continuous professional development',
        'Adherence to ethical guidelines'
      ],
      gradient: 'from-primary-500 to-primary-600',
      glowColor: 'shadow-primary-500/20',
    },
    {
      icon: Heart,
      title: 'Personalized Care Approach',
      description: 'We understand that every individual is unique. Our therapeutic approaches are tailored to your specific needs, goals, and preferences.',
      points: [
        'Individualized treatment plans',
        'Flexible therapy modalities',
        'Cultural sensitivity and awareness',
        'Collaborative goal setting'
      ],
      gradient: 'from-secondary-500 to-secondary-600',
      glowColor: 'shadow-secondary-500/20',
    },
    {
      icon: Shield,
      title: 'Comfortable & Safe Environment',
      description: 'Your safety and comfort are our top priorities. We provide a welcoming, confidential space where you can explore and heal.',
      points: [
        'HIPAA compliant privacy protection',
        'Comfortable, welcoming spaces',
        'Non-judgmental atmosphere',
        'Trauma-informed care approach'
      ],
      gradient: 'from-accent-500 to-accent-600',
      glowColor: 'shadow-accent-500/20',
    },
    {
      icon: Users,
      title: 'Experienced Counselors',
      description: 'Our team consists of highly qualified mental health professionals with diverse specializations and extensive experience.',
      points: [
        'Masters and doctoral level therapists',
        'Specialized areas of expertise',
        'Years of clinical experience',
        'Ongoing supervision and consultation'
      ],
      gradient: 'from-primary-600 to-secondary-500',
      glowColor: 'shadow-primary-600/20',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    },
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-neutral-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-br from-primary-100/50 to-secondary-100/50 rounded-full filter blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-accent-100/50 to-accent-200/50 rounded-full filter blur-3xl opacity-25 transform translate-x-1/3" />
        
        {/* Floating Shapes */}
        <div className="absolute top-20 left-20 w-20 h-20 bg-primary-200/30 rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-secondary-200/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-32 w-12 h-12 bg-accent-200/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-medium text-sm mb-4"
          >
            <CheckCircle size={16} />
            <span>Why Choose Mella</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Your Trusted Partner in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              Mental Wellness
            </span>
          </h2>
          
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            We&apos;re committed to providing exceptional mental health care that empowers you to achieve
            lasting wellness and personal growth through compassionate, professional support.
          </p>
        </motion.div>

        {/* Differentiators Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {differentiators.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className={`group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl ${item.glowColor} transition-all duration-500 border border-neutral-100 relative overflow-hidden`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />
              
              {/* Animated Border */}
              <motion.div
                className={`absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                style={{ padding: '2px' }}
              >
                <div className="w-full h-full rounded-3xl bg-white" />
              </motion.div>

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.5 }
                  }}
                  className={`w-20 h-20 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                >
                  <item.icon className="text-white" size={32} />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-neutral-900 mb-4 group-hover:text-primary-700 transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Points */}
                <div className="space-y-3">
                  {item.points.map((point, pointIndex) => (
                    <motion.div
                      key={point}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: 0.1 * pointIndex,
                        type: "spring",
                        stiffness: 200,
                        damping: 20
                      }}
                      className="flex items-center space-x-3"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className={`w-2 h-2 bg-gradient-to-r ${item.gradient} rounded-full flex-shrink-0`}
                      />
                      <span className="text-neutral-700 text-sm leading-relaxed">{point}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 via-white to-secondary-50 rounded-3xl p-12 border border-primary-100 shadow-lg">
            <h3 className="text-3xl font-bold text-neutral-900 mb-8">
              Trusted by the Community
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { number: '500+', label: 'Clients Served', icon: Users },
                { number: '5+', label: 'Years Experience', icon: Award },
                { number: '100%', label: 'Confidential', icon: Shield },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-center group"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow duration-300"
                  >
                    <stat.icon className="text-white" size={24} />
                  </motion.div>
                  <div className="text-4xl font-bold text-primary-600 mb-2">{stat.number}</div>
                  <div className="text-neutral-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;
