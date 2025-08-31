"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import WebsiteNavbar from "@/components/WebsiteNavbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnerSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import { useMediaQuery } from "react-responsive";

// Enhanced Floating particles component
const FloatingParticles = ({ color = "bg-blue-200" }) => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {Array.from({ length: 25 }).map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-2 h-2 ${color} rounded-full opacity-30 blur-sm`}
          initial={{
            x: `${Math.random() * 100}vw`,
            y: `${Math.random() * 100}vh`,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            x: [
              `${Math.random() * 100}vw`,
              `${Math.random() * 100}vw`,
              `${Math.random() * 100}vw`,
              `${Math.random() * 100}vw`,
            ],
            y: [
              `${Math.random() * 100}vh`,
              `${Math.random() * 100}vh`,
              `${Math.random() * 100}vh`,
              `${Math.random() * 100}vh`,
            ],
            rotate: [0, 180, 360, 0],
            scale: [1, 1.2, 1.5, 1],
          }}
          transition={{
            duration: 15 + i * 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

// Enhanced Animated counter component
const AnimatedCounter = ({ target, label, icon }: { target: number; label: string; icon: React.ReactNode }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const increment = target / duration;

          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.ceil(start));
            }
          }, 1);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [target, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.8, rotate: -5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 80, damping: 15 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        y: -10, 
        scale: 1.05,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="stat-item flex flex-col items-center p-4 bg-white/15 backdrop-blur-lg rounded-2xl shadow-lg border-2 border-white/30 hover:border-white/50 transition-all duration-500 relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      
      <motion.div 
        className="mb-3 p-2 bg-white/25 rounded-full"
        whileHover={{ rotate: 360, scale: 1.2 }}
        transition={{ duration: 0.7, type: "spring" }}
      >
        {icon}
      </motion.div>
      
      <motion.div 
        className="text-3xl md:text-4xl font-bold text-white mb-2 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent"
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
      >
        {count}+
      </motion.div>
      
      <motion.p 
        className="text-base md:text-lg text-white/95 text-center font-medium"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {label}
      </motion.p>
    </motion.div>
  );
};

// Enhanced Custom icons for stats
const YearsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const StudentsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const CountriesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const banners = [
  {
    src: "https://assets-eur.mkt.dynamics.com/791aa60e-64f1-4a25-9eb0-8f4bbbaa6f6c/digitalassets/images/fb11c00c-08f5-ef11-be1f-000d3ab4ba51?ts=638762568482201172",
    alt: "Student 1",
    title: "Kat's Success Story",
    description: "From marketing assistant to department head in just 2 years"
  },
  {
    src: "https://assets-eur.mkt.dynamics.com/791aa60e-64f1-4a25-9eb0-8f4bbbaa6f6c/digitalassets/images/5529238c-08f5-ef11-be1f-000d3ab4ba51?ts=638762570590807849",
    alt: "Student 2",
    title: "James's Career Transformation",
    description: "Doubled his salary after completing our leadership program"
  },
  {
    src: "https://assets-eur.mkt.dynamics.com/791aa60e-64f1-4a25-9eb0-8f4bbbaa6f6c/digitalassets/images/9fc30a66-a03f-ef11-8409-002248a11e95?ts=638563111737997305",
    alt: "Student 3",
    title: "Emily's Achievement",
    description: "Built a successful sales team from the ground up"
  },
];

const mobileBanners = [
  {
    src: "https://assets-eur.mkt.dynamics.com/791aa60e-64f1-4a25-9eb0-8f4bbbaa6f6c/digitalassets/images/da7bc31c-6bcf-ef11-b8e8-000d3ab0af42?ts=638721212485928217",
    alt: "Kat",
    title: "Kat's Success Story",
    description: "From marketing assistant to department head in just 2 years"
  },
  {
    src: "https://assets-eur.mkt.dynamics.com/791aa60e-64f1-4a25-9eb0-8f4bbbaa6f6c/digitalassets/images/dc7bc31c-6bcf-ef11-b8e8-000d3ab0af42?ts=638721212485771990",
    alt: "Emily",
    title: "Emily's Achievement",
    description: "Built a successful sales team from the ground up"
  },
  {
    src: "https://assets-eur.mkt.dynamics.com/791aa60e-64f1-4a25-9eb0-8f4bbbaa6f6c/digitalassets/images/db7bc31c-6bcf-ef11-b8e8-000d3ab0af42?ts=638721212486084456",
    alt: "James",
    title: "James's Career Transformation",
    description: "Doubled his salary after completing our leadership program"
  },
];

const stats = [
  { icon: <YearsIcon />, target: 27, label: "years of experience" },
  { icon: <StudentsIcon />, target: 10000, label: "students to date" },
  { icon: <CountriesIcon />, target: 100, label: "countries" },
];

// Enhanced Button component with animations
const AnimatedButton = ({ href, children, className = "", variant = "primary" }) => {
const baseClasses = "inline-block px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg relative overflow-hidden group";
  
  const variantClasses = {
    primary: "bg-white text-blue-600 hover:bg-blue-50",
    secondary: "bg-amber-500 text-white hover:bg-amber-600",
    outline: "bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white"
  };

  return (
    <motion.div 
      whileHover={{ scale: 1.05, y: -3 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Link href={href} 
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
        <span className="relative z-10">{children}</span>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </Link>
    </motion.div>
  );
};

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (isMobile ? mobileBanners.length : banners.length));
    }, 5000);
    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 font-sans overflow-x-hidden">
      <WebsiteNavbar />
      <HeroSection />
      <PartnersSection />

      {/* Info Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-blue-100/50"
          >
            <p className="text-xl text-blue-800 text-center leading-relaxed">
              With a long-standing track record of delivering{" "}
              <Link href="/in-company-training/" className="text-blue-600 hover:text-amber-500 font-semibold transition-colors duration-300">
                in-company training and comprehensive learning & development programmes
              </Link>
              , our{" "}
              <Link href="/professional-qualifications/study-methods/" className="text-blue-600 hover:text-amber-500 font-semibold transition-colors duration-300">
                flexible study options
              </Link>
              {" "}and{" "}
              <Link href="/professional-qualifications/100-percent-pass-guarantee/" className="text-blue-600 hover:text-amber-500 font-semibold transition-colors duration-300">
                100% pass guarantee
              </Link>
              , you can rest assured that you are working with the best and will achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      <TestimonialsCarousel />

      {/* Enhanced Stats Section */}
      <section className="py-12 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white relative overflow-hidden">
        <FloatingParticles color="bg-blue-300/40" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-8"
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              Why Choose Professional Academy?
            </motion.h2>
            <motion.p 
              className="text-xl max-w-2xl mx-auto opacity-90"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              With decades of experience and thousands of successful students, we're the leading provider of professional qualifications.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, staggerChildren: 0.2 }}
          >
            {stats.map((stat, index) => (
              <AnimatedCounter
                key={index}
                target={stat.target}
                label={stat.label}
                icon={stat.icon}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50/50 relative overflow-hidden">
        <FloatingParticles color="bg-purple-300/40" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl relative overflow-hidden border-2 border-white/20"
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready to Transform Your Career?
            </motion.h2>
            
            <motion.p 
              className="text-xl mb-8 max-w-2xl mx-auto opacity-95"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Take the first step towards your professional growth. Explore our courses, speak with an advisor, or get more information today.
            </motion.p>
            
            <motion.div 
              className="flex flex-col md:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, staggerChildren: 0.1 }}
              viewport={{ once: true }}
            >
              <AnimatedButton href="/professional-qualifications/which-qualification-is-right-for-you/" variant="outline">
                Explore Courses
              </AnimatedButton>
              <AnimatedButton href="https://calendly.com/lewis-walker-1" variant="secondary">
                Book a Consultation
              </AnimatedButton>
              <AnimatedButton href="mailto:info@professionalacademy.com" variant="outline">
                Get Information
              </AnimatedButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}