'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Compass, Heart } from 'lucide-react';

const Mission = () => {
  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We approach every client with empathy, understanding, and genuine care for their wellbeing.',
      gradient: 'from-primary-500 to-primary-600',
      iconBg: 'bg-primary-100',
      iconColor: 'text-primary-600',
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We maintain the highest standards of professional practice and continuous improvement.',
      gradient: 'from-secondary-500 to-secondary-600',
      iconBg: 'bg-secondary-100',
      iconColor: 'text-secondary-600',
    },
    {
      icon: Compass,
      title: 'Cultural Sensitivity',
      description: 'We honor and respect the diverse cultural backgrounds and values of our Ethiopian community.',
      gradient: 'from-accent-500 to-accent-600',
      iconBg: 'bg-accent-100',
      iconColor: 'text-accent-700',
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
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full filter blur-3xl opacity-20" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-accent-100 to-accent-200 rounded-full filter blur-3xl opacity-15" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Mission & Vision */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            {/* Mission */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <Target className="text-primary-600" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-neutral-900">Our Mission</h2>
              </div>
              <p className="text-lg text-neutral-600 leading-relaxed">
                To provide accessible, high-quality mental health services that empower individuals and families 
                to achieve emotional wellness, personal growth, and resilience. We are committed to creating a 
                safe, supportive environment where healing can flourish.
              </p>
            </div>

            {/* Vision */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center">
                  <Eye className="text-secondary-600" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-neutral-900">Our Vision</h2>
              </div>
              <p className="text-lg text-neutral-600 leading-relaxed">
                To be the leading mental health center in Ethiopia, recognized for our innovative approaches, 
                compassionate care, and positive impact on community wellness. We envision a future where 
                mental health support is accessible to all and free from stigma.
              </p>
            </div>
          </motion.div>

          {/* Right Content - Values */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center lg:text-left">
                Our Core Values
              </h2>
            </motion.div>

            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                whileHover={{ x: 5, scale: 1.02 }}
                className="group bg-gradient-to-r from-white to-neutral-50 rounded-2xl p-6 border border-neutral-100 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${value.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="absolute inset-[1px] bg-white rounded-2xl" />
                
                {/* Content */}
                <div className="relative z-10 flex items-start space-x-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-14 h-14 ${value.iconBg} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <value.icon className={`${value.iconColor} group-hover:text-white transition-colors duration-300`} size={24} />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary-700 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
