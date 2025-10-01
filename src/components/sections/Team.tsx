'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { User } from 'lucide-react';

const teamMembers = [
  {
    name: 'Selamawit Mosisa',
    role: 'Health Professional and Psychotherapist',
    image: '/selamawit_mosisa3.png',
    description: 'Specialized in cognitive behavioral therapy and trauma recovery with over 8 years of experience.'
  },
  {
    name: 'Liham Kinfe',
    role: 'Psychologist, Health Professional',
    image: '/lihams_profile2.png',
    description: 'Expert in behavioral therapy and anxiety management with 6+ years of clinical experience.'
  }
];

export default function Team() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
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
            className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium text-sm mb-4"
          >
            <User size={16} />
            <span>Meet Our Team</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional Mental Health{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-700">
              Experts
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our dedicated team of licensed professionals brings years of experience,
            specialized training, and genuine compassion to support your mental health journey.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              {/* Large Image */}
              <div className="mb-6">
                <div className="w-64 h-90 mx-auto rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={256}
                    height={256}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-lg text-green-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Simple CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to get started?
          </h3>
          <p className="text-gray-600 mb-8">
            Schedule a consultation with our team today
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-green-900 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg text-lg"
          >
            Book Appointment
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
