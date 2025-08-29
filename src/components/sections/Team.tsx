'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { User, Phone } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Dr. Meron Tadesse',
      role: 'Clinical Director & Licensed Psychologist',
      image: 'bg-gradient-to-br from-primary-400 to-primary-600'
    },
    {
      name: 'Amanuel Bekele, LMFT',
      role: 'Senior Marriage & Family Therapist',
      image: 'bg-gradient-to-br from-secondary-400 to-secondary-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-neutral-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full filter blur-3xl opacity-20 transform translate-x-1/2" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-br from-accent-100 to-accent-200 rounded-full filter blur-3xl opacity-15 transform -translate-x-1/2" />
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
            <User size={16} />
            <span>Meet Our Team</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Professional Mental Health{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              Experts
            </span>
          </h2>
          
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Our dedicated team of licensed professionals brings years of experience, 
            specialized training, and genuine compassion to support your mental health journey.
          </p>
        </motion.div>

        {/* Team Members Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-100 text-center"
            >
              {/* Avatar */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`w-32 h-32 ${member.image} rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg`}
              >
                <User className="text-white" size={48} />
              </motion.div>

              {/* Name */}
              <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-base font-medium text-primary-600 leading-relaxed">
                {member.role}
              </p>
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
              Ready to Begin Your Journey?
            </h3>
            <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
              Our experienced team is here to support you every step of the way. 
              Contact us today to schedule a consultation with one of our specialists.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
                <Phone size={18} />
                <span>Schedule Consultation</span>
              </button>
              <button className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-200">
                Learn More About Our Services
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
