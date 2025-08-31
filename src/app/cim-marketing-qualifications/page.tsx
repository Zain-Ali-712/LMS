// app/cim-marketing-qualifications/page.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaCheckCircle, FaArrowRight, FaDownload, FaCalendarAlt, FaChevronRight, FaPlayCircle, FaQuoteLeft, FaTimes, FaGraduationCap } from "react-icons/fa";
import WebsiteNavbar from "@/components/WebsiteNavbar";
import Footer from "@/components/Footer";

// Floating particles component
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
            "radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.4) 0%, transparent 350%)",
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

// CIM Quote Component
const CIMQuote = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 1.2 }}
      className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/20 mt-6 md:mt-8"
    >
      <FaQuoteLeft className="text-blue-200 text-lg md:text-xl mb-2 md:mb-3" />
      <p className="text-white/90 text-base md:text-lg italic mb-3 md:mb-4">
        "The CIM is synonymous with marketing excellence and employers recognize these prestigious qualifications as the gold standard for marketing professionals."
      </p>
    </motion.div>
  );
};

// Brochure Download Card Component
const BrochureDownloadCard = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  return (
    <motion.section 
      id="brochure-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-3xl p-8 mb-12 shadow-2xl overflow-hidden relative"
    >
      <AnimatedBackground />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
        {/* Left Content - Stays the same after submission */}
        <div className="text-white">
          <h2 className="text-3xl font-bold mb-4">Download Your Course Brochure and FREE Study Blueprint!</h2>
          <p className="text-lg mb-6 opacity-90">
            Discover detailed information about our courses and how our unique blend of resources will equip you to successfully complete your qualification and achieve your career goals.
          </p>
          <p className="text-lg mb-6 opacity-90">
            Unlock your full potential with our FREE resource, packed with top tips to enhance every study session. Whether you're juggling work, family, or other commitments, these invaluable insights will empower you to study smarter, not harder.
          </p>
          <div className="flex items-center mt-8">
            <div className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center mr-4">
              <FaGraduationCap className="text-xl text-blue-200" />
            </div>
            <div>
              <h3 className="font-bold text-blue-200">Enroll in Your Future</h3>
              <p className="text-sm opacity-80">Start your journey to marketing excellence today</p>
            </div>
          </div>
          <button className="mt-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center">
            <FaGraduationCap className="mr-2" />
            Enroll me in this course
          </button>
        </div>

        {/* Right Content - Form or Success Message */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
          {!isSubmitted ? (
            <>
              <h3 className="text-xl font-bold text-white mb-6 text-center">Get Your Brochure Now</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-blue-100 mb-1">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="First"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-blue-100 mb-1">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Last"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-blue-100 mb-1">E-mail *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-blue-100 mb-1">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Phone"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 px-4 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center mt-4"
                >
                  <FaDownload className="mr-2" />
                  Send me the Brochure now
                </button>
              </form>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
              <p className="text-blue-100 mb-6">
                Your brochure and study blueprint are on their way to your inbox. Check your email to download them.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-blue-300 hover:text-white flex items-center justify-center mx-auto text-sm"
              >
                <FaTimes className="mr-1" /> Close
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

const CIMHeroSection = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = [
    "Marketing Excellence",
    "Digital Marketing", 
    "Professional Development",
    "Career Advancement",
    "Industry Recognition"
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
                  CIM Marketing Qualifications
                </span>
              </h2>
              
              <div className="text-base md:text-xl lg:text-2xl mb-4 md:mb-6 h-10 md:h-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start">
                <span className="font-light text-white text-center sm:text-left">Achieve excellence in </span>
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
              The Chartered Institute of Marketing (CIM) qualifications are the gold standard for marketing professionals worldwide, recognized by employers across all industries.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start"
            >
              <Link
                href="#courses"
                className="group bg-white text-blue-900 px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center text-sm md:text-base"
              >
                Explore CIM Courses
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

          {/* Right Content - CIM Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative mb-8 lg:mb-0"
          >
            <div className="relative rounded-2xl md:rounded-3xl shadow-2xl bg-gradient-to-br from-blue-800 to-purple-800 p-6 md:p-8 h-[400px] sm:h-[450px] md:h-[500px] flex flex-col justify-between">
              {/* CIM Profile Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 flex-1 flex flex-col items-center justify-center relative">
                <motion.div 
                  className="absolute -top-12 md:-top-16 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center shadow-xl border-4 border-white/20 overflow-hidden"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.7 }}
                >
                  <div className="w-full h-full bg-white/20 flex items-center justify-center">
                    <img 
                      src="/sian.png"
                      alt="CIM Marketing Qualifications" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
            
                <div className="mt-20 md:mt-28 text-center">
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-1">Sian Price</h3>
                  <p className="text-blue-200 mb-3 md:mb-4 text-sm md:text-base">Chartered Institute of Marketing</p>
                  <div className="hidden md:block">
                    <CIMQuote />
                  </div>
                </div>
              </div>

              {/* Mobile CIM Quote */}
              <div className="md:hidden">
                <CIMQuote />
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
                  <span className="text-xs font-bold">20+ Years Experience</span>
                </div>
              </motion.div>
            </div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full shadow-lg">
              <span className="text-sm font-semibold">CIM Certified</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Enhanced Level Checker Component
const EnhancedLevelChecker = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-blue-600 to-purple-700 text-white rounded-3xl p-8 mb-12 shadow-xl relative overflow-hidden"
    >
      <AnimatedBackground />
      <div className="relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Find Your Perfect CIM Qualification</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Not sure which course is right for you? Take our quick assessment to discover the ideal CIM qualification for your career goals.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
          <div data-tf-live="01HZ2GWYED4JYSHZVSBSZ8GAVC" className="level-checker-box flex justify-center items-center flex-wrap min-h-[300px]"></div>
        </div>

        <div className="text-center mt-8">
          <p className="text-lg mb-6">
            Prefer to speak with someone?{" "}
            <Link href="https://calendly.com/lewis-walker-1/" className="text-amber-300 hover:text-amber-200 font-semibold underline">
              Book a call with our advisor
            </Link>
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default function CIMMarketingQualifications() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  if (!isMounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 font-sans overflow-x-hidden">
      <WebsiteNavbar />
      
      {/* Hero Section */}
      <CIMHeroSection />
      
      {/* Brochure Download Section */}
      <div className="container mx-auto px-4 py-8">
        <BrochureDownloadCard />
      </div>
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* First Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 mb-12 shadow-xl border border-blue-100"
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Elevate Your Marketing Career</h2>
          <div className="space-y-4 text-lg text-blue-800">
            <p>
              The CIM is synonymous with marketing excellence and employers recognise these prestigious qualifications as the gold standard for marketing professionals. By achieving a CIM certification, you'll gain a competitive edge in the job market and elevate your career.
            </p>
            <p>
              As a Strategic Partner and Accredited Training Provider with CIM, we deliver an unparalleled learning experience tailored to your professional journey. With over 20 years of experience, we have a deep understanding of how to help marketing professionals succeed.
            </p>
          </div>
          
          <h3 className="text-2xl font-bold text-blue-700 mt-8 mb-4">How marketing courses benefit you?</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Gain knowledge and skills you won't learn 'on-the-job'",
              "Demonstrate your commitment to performing at the highest level to your employer",
              "Set yourself up for the next step in your career",
              "Have the satisfaction of achieving something worthwhile"
            ].map((benefit, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start p-4 bg-blue-50 rounded-xl"
              >
                <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span>{benefit}</span>
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* Benefits Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 30 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl p-8 mb-12 shadow-xl relative overflow-hidden"
        >
          <AnimatedBackground />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <img
                src="https://assets-eur.mkt.dynamics.com/791aa60e-64f1-4a25-9eb0-8f4bbbaa6f6c/digitalassets/images/407d5597-d53d-ef11-8409-0022489ec139?ts=638561141148537431"
                alt="Benefits Image"
                className="rounded-full w-64 h-64 md:w-96 md:h-96 object-cover border-4 border-white/30 shadow-2xl"
              />
            </motion.div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Study With Professional Academy?</h2>
              <ul className="space-y-4">
                {[
                  "Access our comprehensive, structured online learning system designed to fit around your schedule",
                  "Participate in interactive sessions with industry experts and receive one-on-one guidance",
                  "Attend live revision seminars and mock multiple-choice exams",
                  "Engage in monthly online drop-in sessions with fellow students",
                  "Premium study method offers bite-sized workshops with marketing specialists"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <FaCheckCircle className="text-green-300 mt-1 mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Courses Section */}
        <motion.section 
          id="courses"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 mb-12 shadow-xl border border-blue-100"
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Our CIM Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: "Level 3 Foundation in Professional & Digital Marketing",
                color: "from-blue-500 to-blue-700",
                description: "Perfect for those starting their marketing career or moving into a marketing role"
              },
              {
                title: "Level 4 Certificate in Professional & Digital Marketing",
                color: "from-purple-500 to-purple-700",
                description: "Ideal for marketing executives looking to develop their strategic skills"
              },
              {
                title: "Level 6 Diploma in Professional & Digital Marketing",
                color: "from-teal-500 to-teal-700",
                description: "For marketing managers wanting to enhance their strategic capabilities"
              },
              {
                title: "Level 7 Marketing Leadership Programme",
                color: "from-amber-500 to-amber-700",
                description: "Designed for senior marketers leading marketing strategy"
              },
              {
                title: "Level 7 Postgraduate Diploma",
                color: "from-indigo-500 to-indigo-700",
                description: "For experienced marketers seeking Chartered Marketer status"
              },
            ].map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-blue-200 relative overflow-hidden group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${course.color} flex items-center justify-center mb-4`}>
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-4 min-h-[60px]">{course.title}</h3>
                  <p className="text-blue-600 mb-4 text-sm">{course.description}</p>
                  <Link
                    href={`https://www.professionalacademy.com/${course.title.toLowerCase().replace(/ /g, "-").replace(/&/g, "")}/`}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm inline-flex items-center"
                  >
                    Learn more <FaArrowRight className="ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="#brochure-section"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-8 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl"
            >
              <FaDownload className="mr-2" />
              Download All Course Brochures
            </Link>
          </div>
        </motion.section>

        {/* Enhanced Level Checker Section */}
        <EnhancedLevelChecker />

        {/* Payment Options Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-amber-500 to bg-amber-600 text-white rounded-3xl p-8 mb-12 shadow-xl"
        >
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Flexible Payment Options</h2>
            <p className="text-xl mb-6">We offer finance options up to 12 months interest-free, making it easier to invest in your future.</p>
            
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 mb-6">
              <span className="text-2xl font-bold block mb-2">Starting from</span>
              <span className="text-4xl font-bold block">£70/month</span>
              <span className="text-sm opacity-80">interest-free for 12 months</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/payment-options" 
                  className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center text-sm"
                >
                  View Payment Plans
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="https://calendly.com/lewis-walker-1/" 
                  className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center text-sm"
                >
                  Speak to Advisor
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Contact Information Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl p-8 shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-6">Any Questions?</h2>
          <p className="text-xl mb-8">Contact us today and we'll be happy to answer your questions and provide any additional information you may need.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="https://calendly.com/lewis-walker-1/" 
                className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                <FaCalendarAlt className="mr-2" /> Book a Call
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/professional-qualifications/syllabus-download/" 
                className="bg-amber-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                <FaDownload className="mr-2" /> Download Syllabus
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </div>

      <Footer />
    </div>
  );
}