"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaChevronRight, FaPlayCircle, FaQuoteLeft } from "react-icons/fa";

// Floating particles component - Fixed animation
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full opacity-40"
          initial={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            scale: Math.random() * 0.8 + 0.2,
          }}
          animate={{
            x: [
              `${Math.random() * 100}%`,
              `${Math.random() * 100}%`,
              `${Math.random() * 100}%`
            ],
            y: [
              `${Math.random() * 100}%`,
              `${Math.random() * 100}%`,
              `${Math.random() * 100}%`
            ],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

// Animated background gradient
const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      <motion.div 
        className="absolute -inset-40 opacity-20"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.4) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.4) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 80%, rgba(14, 165, 233, 0.4) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.4) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};

// CEO Quote Component
const CEOQuote = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 1.2 }}
      className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/20 mt-6 md:mt-8"
    >
      <FaQuoteLeft className="text-blue-200 text-lg md:text-xl mb-2 md:mb-3" />
      <p className="text-white/90 text-base md:text-lg italic mb-3 md:mb-4">
        "Developing the people that power your business and effectively connecting you to the knowledge you need to succeed in your career."
      </p>
    </motion.div>
  );
};

const HeroSection = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = [
    "Marketing",
    "Sales", 
    "Management",
    "Leadership",
    "Development"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-purple-950 text-white">
      <AnimatedBackground />
      <FloatingParticles />
      
      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-4 md:mb-6"
            >
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-normal mb-1 md:mb-2 text-blue-200">
                Welcome to
              </h1>
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Professional Academy
                </span>
              </h2>
              
              <div className="text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6 h-10 md:h-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start">
                <span className="font-light text-white text-center sm:text-left">We develop excellence in </span>
                <motion.span 
                  className="font-bold ml-0 sm:ml-2 mt-1 sm:mt-0 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent text-center sm:text-left"
                  key={currentTextIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {texts[currentTextIndex]}
                </motion.span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-lg md:text-xl text-blue-100 mb-6 md:mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              We are the world's leading provider in Marketing, Sales and Management skills development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/courses"
                className="group bg-white text-blue-900 px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center text-sm md:text-base"
              >
                Explore Our Courses
                <FaChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="https://calendly.com/lewis-walker-1"
                className="group border-2 border-white text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center text-sm md:text-base"
              >
                <FaPlayCircle className="mr-2" />
                Watch Video
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative mb-8 lg:mb-0"
          >
            <div className="relative rounded-2xl md:rounded-3xl shadow-2xl bg-gradient-to-br from-blue-800 to-purple-800 p-6 md:p-8 h-[400px] sm:h-[450px] md:h-[500px] flex flex-col justify-between">
              {/* Profile Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 flex-1 flex flex-col items-center justify-center relative">
                <motion.div 
                  className="absolute -top-12 md:-top-16 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center shadow-xl border-4 border-white/20 overflow-hidden"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.7 }}
                >
                  <img 
                    src="/ceo.png" 
                    alt="Martin Hutchins" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
            
                <div className="mt-20 md:mt-24 text-center">
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-1">Martin Hutchins</h3>
                  <p className="text-blue-200 mb-3 md:mb-4 text-sm md:text-base">CEO, Professional Academy</p>
                  <div className="hidden md:block">
                    <CEOQuote />
                  </div>
                </div>
              </div>

              {/* Mobile CEO Quote */}
              <div className="md:hidden">
                <CEOQuote />
              </div>

              {/* Floating info cards with improved styling */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.5 }}
                className="hidden md:block absolute top-4 md:top-6 right-4 md:right-6 bg-gradient-to-r from-green-500/60 to-green-600/60 text-white rounded-xl p-2 md:p-3 shadow-lg"
              >
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full mr-1.5 md:mr-2"></div>
                  <span className="text-xs font-bold">97% Success Rate</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.8 }}
                className="hidden md:block absolute bottom-3 md:bottom-4 left-3 md:left-4 bg-gradient-to-r from-orange-500/60 to-orange-600/60 text-white rounded-xl p-2 md:p-3 shadow-lg"
              >
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full mr-1.5 md:mr-2"></div>
                  <span className="text-xs font-bold">27+ Years Experience</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;