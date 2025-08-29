'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star, MessageCircle } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      text: "The counselors at Mella helped me navigate through one of the most difficult periods in my life. Their compassionate approach and professional expertise gave me the tools I needed to heal and grow.",
      name: "Anonymous Client",
      role: "Individual Therapy Client",
      rating: 5,
      service: "Individual Counseling"
    },
    {
      id: 2,
      text: "Virtual counseling was exactly what I needed. The convenience of receiving professional help from home while maintaining the same quality of care was incredible. Highly recommend their services.",
      name: "Anonymous Client",
      role: "Virtual Therapy Client",
      rating: 5,
      service: "Virtual Counseling"
    },
    {
      id: 3,
      text: "Art therapy opened up a whole new way for me to express my emotions. The creative process combined with professional guidance helped me understand myself better than traditional talk therapy alone.",
      name: "Anonymous Client",
      role: "Art Therapy Client",
      rating: 5,
      service: "Art Therapy"
    },
    {
      id: 4,
      text: "Our relationship was on the brink of ending, but couples counseling at Mella saved our marriage. We learned to communicate effectively and rebuild trust. We're stronger than ever now.",
      name: "Anonymous Couple",
      role: "Couples Therapy Clients",
      rating: 5,
      service: "Couples Counseling"
    },
    {
      id: 5,
      text: "Group therapy provided me with a supportive community I never knew I needed. Sharing experiences with others who understood my struggles was healing in ways I couldn't have imagined.",
      name: "Anonymous Client",
      role: "Group Therapy Client",
      rating: 5,
      service: "Group Therapy"
    },
    {
      id: 6,
      text: "The safe and welcoming environment at Mella made it easy to open up about my mental health concerns. The therapist was patient, understanding, and provided practical strategies that really work.",
      name: "Anonymous Client",
      role: "Individual Therapy Client",
      rating: 5,
      service: "Individual Counseling"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-secondary-100 to-accent-100 rounded-full filter blur-3xl opacity-20 transform -translate-x-1/2" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full filter blur-3xl opacity-25 transform translate-x-1/2" />
        
        {/* Floating Quote Icons */}
        <div className="absolute top-20 right-20 opacity-10">
          <Quote size={60} className="text-primary-400" />
        </div>
        <div className="absolute bottom-20 left-20 opacity-10 transform rotate-180">
          <Quote size={40} className="text-secondary-400" />
        </div>
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
            <MessageCircle size={16} />
            <span>Client Stories</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            What Our Clients{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              Say About Us
            </span>
          </h2>
          
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Real stories from real people who have found healing, growth, and hope through our 
            professional mental health services.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Testimonial Card */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-12 shadow-2xl border border-neutral-100 relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full filter blur-3xl transform translate-x-1/3 -translate-y-1/3" />
            </div>

            <div className="relative z-10">
              {/* Quote Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mb-8 mx-auto"
              >
                <Quote className="text-white" size={28} />
              </motion.div>

              {/* Rating Stars */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex justify-center mb-6"
              >
                {[...Array(currentTestimonial.rating)].map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.1, type: "spring", stiffness: 300 }}
                  >
                    <Star className="text-accent-500 fill-current" size={24} />
                  </motion.div>
                ))}
              </motion.div>

              {/* Testimonial Text */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentTestimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4 }}
                  className="text-xl text-neutral-700 leading-relaxed mb-8 text-center font-medium"
                >
                  &ldquo;{currentTestimonial.text}&rdquo;
                </motion.p>
              </AnimatePresence>

              {/* Client Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="text-2xl font-bold text-primary-600">
                    {currentTestimonial.name.charAt(0)}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-neutral-900 mb-1">
                  {currentTestimonial.name}
                </h4>
                <p className="text-neutral-600">{currentTestimonial.role}</p>
                <div className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium mt-3">
                  {currentTestimonial.service}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white hover:bg-primary-50 border-2 border-primary-200 hover:border-primary-400 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft 
              className="text-primary-600 group-hover:text-primary-700 group-hover:-translate-x-0.5 transition-all duration-200" 
              size={20} 
            />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white hover:bg-primary-50 border-2 border-primary-200 hover:border-primary-400 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl group"
            aria-label="Next testimonial"
          >
            <ChevronRight 
              className="text-primary-600 group-hover:text-primary-700 group-hover:translate-x-0.5 transition-all duration-200" 
              size={20} 
            />
          </button>
        </div>

        {/* Dot Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex justify-center space-x-3 mt-12"
        >
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary-600 w-8'
                  : 'bg-primary-300 hover:bg-primary-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </motion.div>

        {/* Auto-play Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-8"
        >
          <div className="inline-flex items-center space-x-2 text-sm text-neutral-500">
            <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-400 animate-pulse' : 'bg-neutral-300'}`} />
            <span>{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
