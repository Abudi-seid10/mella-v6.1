'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, User, Video, Palette, Users, Heart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Users,
      title: 'Family Counseling',
      description: 'Collaborative therapy sessions designed to improve communication, resolve conflicts, and strengthen family bonds.',
      features: ['Improved Communication', 'Conflict Resolution', 'Family Harmony', 'Stronger Bonds'],
      gradient: 'from-blue-500 to-blue-600',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      icon: User,
      title: 'Adolescent Counseling',
      description: 'Specialized support for adolescents to navigate emotional, social, and developmental challenges with confidence.',
      features: ['Emotional Regulation', 'Self-Esteem', 'Communication Skills', 'Personal Growth'],
      gradient: 'from-green-500 to-green-600',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
    },
    {
      icon: Heart,
      title: 'Play Therapy',
      description: 'Therapeutic play techniques that allow children to express emotions, build coping strategies, and thrive in a nurturing environment.',
      features: ['Emotional Expression', 'Anxiety Reduction', 'Problem-Solving', 'Coping Skills'],
      gradient: 'from-pink-500 to-pink-600',
      iconBg: 'bg-pink-100',
      iconColor: 'text-pink-600',
    },
    {
      icon: Palette,
      title: 'Art Therapy',
      description: 'Creative art sessions that provide a non-verbal, empowering outlet for self-expression, growth, and emotional healing.',
      features: ['Self-Expression', 'Stress Relief', 'Emotional Clarity', 'Trauma Processing'],
      gradient: 'from-purple-500 to-purple-600',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
    },
    {
      icon: Video,
      title: 'Online Counseling',
      description: 'Flexible and secure virtual counseling options to receive professional support from the comfort of your home.',
      features: ['Convenient Access', 'Flexible Scheduling', 'Privacy & Comfort', 'Same Quality Care'],
      gradient: 'from-indigo-500 to-indigo-600',
      iconBg: 'bg-indigo-100',
      iconColor: 'text-indigo-600',
    },
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
    <section id="services" className="py-20 bg-gradient-to-b from-white to-neutral-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full filter blur-3xl opacity-30 transform translate-x-1/2" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-br from-accent-100 to-accent-200 rounded-full filter blur-3xl opacity-25 transform -translate-x-1/2" />
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
            <Heart size={16} />
            <span>Our Services</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Comprehensive Mental Health{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              Solutions
            </span>
          </h2>
          
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            We offer a range of professional mental health services designed to meet you wherever you are 
            in your journey toward wellness and personal growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-100 relative overflow-hidden"
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="absolute inset-[1px] bg-white rounded-2xl" />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className={`w-16 h-16 ${service.iconBg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className={`${service.iconColor} group-hover:text-white transition-colors duration-300`} size={28} />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-neutral-900 mb-4 group-hover:text-primary-700 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * featureIndex }}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                      <span className="text-sm text-neutral-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Learn More Link */}
                <Link
                  href={`/services`}
                  className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-500 font-semibold group-hover:text-blue-500 transition-colors duration-300"
                >
                  <span>Learn More</span>
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 border border-primary-100">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Not sure which service is right for you?
            </h3>
            <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
              Our experienced professionals are here to help you find the perfect approach for your unique needs. 
              Schedule a consultation to discuss your goals and get personalized recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/services"
                className="inline-flex items-center space-x-2 bg-white border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>View All Services</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Schedule Consultation</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
