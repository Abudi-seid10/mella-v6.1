'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  User, 
  Palette, 
  Video,
  Heart,
  Baby,
  Clock,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Play
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const ServicesPage = () => {
  const services = [
    {
      id: 'family-counseling',
      icon: Users,
      title: 'Family Counseling',
      description: 'Collaborative therapy sessions designed to improve communication, resolve conflicts, and strengthen family bonds.',
      approaches: [
        'Systemic Family Therapy',
        'Narrative Family Therapy', 
        'Structural Family Therapy',
        'Communication-Based Interventions',
        'Attachment-Based Family Therapy'
      ],
      outcomes: [
        'Improved family communication',
        'Conflict resolution skills',
        'Enhanced mutual understanding',
        'Healthier relationship dynamics',
        'Supportive family environment'
      ],
      sessionInfo: 'Sessions typically last 60-90 minutes and can include various family members, with frequency tailored to family needs.',
      color: 'blue'
    },
    {
      id: 'adolescent-counseling', 
      icon: User,
      title: 'Adolescent Counseling',
      description: 'Specialized support for adolescents to navigate emotional, social, and developmental challenges with confidence.',
      approaches: [
        'Cognitive Behavioral Therapy (CBT)',
        'Family Systems Therapy',
        'Behavioral Interventions',
        'Mindfulness-Based Techniques'
      ],
      outcomes: [
        'Enhanced emotional regulation',
        'Improved self-esteem and confidence',
        'Better communication skills',
        'Support for academic and personal growth',
        'Healthier peer and family relationships'
      ],
      sessionInfo: 'Sessions are 50 minutes long and customized to meet the needs of adolescents and their families.',
      color: 'green'
    },
    {
      id: 'play-therapy',
      icon: Play,
      title: 'Play Therapy', 
      description: 'Therapeutic play techniques that allow children to express emotions, build coping strategies, and thrive in a nurturing environment.',
      approaches: [
        'Child-Centered Play Therapy',
        'Directive Play Therapy',
        'Sand Tray Therapy',
        'Expressive Arts Therapy'
      ],
      outcomes: [
        'Improved emotional expression',
        'Reduced anxiety and behavioral concerns',
        'Enhanced problem-solving skills',
        'Development of healthy coping mechanisms',
        'Stronger family relationships'
      ],
      sessionInfo: 'Sessions are adapted for children ages 3-12, lasting 45-50 minutes, with parental involvement as needed.',
      color: 'pink'
    },
    {
      id: 'art-therapy',
      icon: Palette,
      title: 'Art Therapy',
      description: 'Creative art sessions that provide a non-verbal, empowering outlet for self-expression, growth, and emotional healing.',
      approaches: [
        'Expressive Arts Therapy',
        'Gestalt Art Therapy',
        'Cognitive Behavioral Art Therapy',
        'Jungian Art-Based Interventions'
      ],
      outcomes: [
        'Enhanced self-expression',
        'Reduced stress and anxiety',
        'Improved emotional clarity',
        'Increased self-awareness and confidence',
        'Support for trauma processing and healing'
      ],
      sessionInfo: 'Sessions are 50-60 minutes and tailored to individual emotional needs and artistic preferences.',
      color: 'purple'
    },
    {
      id: 'online-counseling',
      icon: Video,
      title: 'Online Counseling',
      description: 'Flexible and secure virtual counseling options to receive professional support from the comfort of your home.',
      approaches: [
        'Video-Based Therapy',
        'Phone Counseling',
        'Text-Based Support'
      ],
      outcomes: [
        'Increased accessibility to therapy',
        'Convenient scheduling',
        'Continuity of care from home',
        'Comfort and privacy assurance',
        'Access to a wider range of therapists'
      ],
      sessionInfo: 'Sessions are conducted via secure platforms and typically last 50 minutes.',
      color: 'indigo'
    },
    {
      id: 'perinatal-wellness',
      icon: Baby,
      title: 'Mental Wellness During and After Pregnancy',
      description: 'Guidance and support for emotional well-being before, during, and after pregnancy to ensure a smooth transition into motherhood.',
      approaches: [
        'Perinatal Cognitive Behavioral Therapy (CBT)',
        'Mindfulness-Based Stress Reduction (MBSR)',
        'Supportive Parenting Interventions',
        'Trauma-Informed Care'
      ],
      outcomes: [
        'Reduced stress and anxiety',
        'Support for postnatal depression',
        'Improved emotional well-being',
        'Stronger maternal-infant bonding',
        'Enhanced parenting confidence'
      ],
      sessionInfo: 'Sessions are tailored to individual needs, typically 50 minutes, with family involvement as desired.',
      color: 'teal'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        icon: 'bg-blue-100 text-blue-600',
        accent: 'bg-blue-500'
      },
      green: {
        bg: 'bg-green-50',
        border: 'border-green-200', 
        icon: 'bg-green-100 text-green-600',
        accent: 'bg-green-500'
      },
      pink: {
        bg: 'bg-pink-50',
        border: 'border-pink-200',
        icon: 'bg-pink-100 text-pink-600', 
        accent: 'bg-pink-500'
      },
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        icon: 'bg-purple-100 text-purple-600',
        accent: 'bg-purple-500'
      },
      indigo: {
        bg: 'bg-indigo-50',
        border: 'border-indigo-200',
        icon: 'bg-indigo-100 text-indigo-600',
        accent: 'bg-indigo-500'
      },
      teal: {
        bg: 'bg-teal-50', 
        border: 'border-teal-200',
        icon: 'bg-teal-100 text-teal-600',
        accent: 'bg-teal-500'
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-medium text-sm mb-6">
              <Heart size={16} />
              <span>Our Services</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional Mental Health Services
            </h1>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Comprehensive therapeutic support tailored to meet your unique needs and help you achieve lasting wellness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const colors = getColorClasses(service.color);
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-white rounded-2xl border ${colors.border} hover:shadow-xl transition-all duration-300 group cursor-pointer`}
                >
                  {/* Card Header */}
                  <div className={`${colors.bg} p-6 rounded-t-2xl`}>
                    <div className={`w-12 h-12 ${colors.icon} rounded-xl flex items-center justify-center mb-4`}>
                      <service.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-6">
                    {/* Session Info */}
                    <div>
                      <div className="flex items-center mb-2">
                        <Clock size={16} className="text-gray-500 mr-2" />
                        <h4 className="font-semibold text-gray-900 text-sm">Session Details</h4>
                      </div>
                      <p className="text-sm text-gray-600">{service.sessionInfo}</p>
                    </div>

                    {/* Treatment Approaches */}
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm mb-3">Treatment Approaches</h4>
                      <div className="space-y-2">
                        {service.approaches.slice(0, 3).map((approach, i) => (
                          <div key={i} className="flex items-center text-sm text-gray-600">
                            <div className={`w-1.5 h-1.5 ${colors.accent} rounded-full mr-2`} />
                            {approach}
                          </div>
                        ))}
                        {service.approaches.length > 3 && (
                          <div className="text-xs text-gray-500">
                            +{service.approaches.length - 3} more approaches
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Expected Outcomes */}
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm mb-3">Expected Outcomes</h4>
                      <div className="space-y-2">
                        {service.outcomes.slice(0, 3).map((outcome, i) => (
                          <div key={i} className="flex items-center text-sm text-gray-600">
                            <CheckCircle size={12} className="text-green-500 mr-2 flex-shrink-0" />
                            {outcome}
                          </div>
                        ))}
                        {service.outcomes.length > 3 && (
                          <div className="text-xs text-gray-500">
                            +{service.outcomes.length - 3} more benefits
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Take the first step toward better mental health. Our compassionate professionals 
              are here to support you every step of the way.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-white text-primary-600 hover:text-primary-700 font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <span>Schedule Consultation</span>
                <ArrowRight size={20} />
              </motion.a>
              
              <div className="flex items-center space-x-6 text-white">
                <a href="tel:+251925419100" className="flex items-center space-x-2 hover:text-blue-200 transition-colors">
                  <Phone size={20} />
                  <span>+251 92 541 9100</span>
                </a>
                <a href="mailto:info@mellacounseling.com.et" className="flex items-center space-x-2 hover:text-blue-200 transition-colors">
                  <Mail size={20} />
                  <span>Contact Us</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
