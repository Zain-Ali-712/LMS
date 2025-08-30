"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import WebsiteNavbar from "@/components/WebsiteNavbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnerSection";
import { useMediaQuery } from "react-responsive";

// Floating particles component
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-200 rounded-full opacity-30 blur-sm"
          initial={{
            x: `${Math.random() * 100}vw`,
            y: `${Math.random() * 100}vh`,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            x: [0, `${Math.random() * 100}vw`, `${Math.random() * 100}vw`, 0],
            y: [0, `${Math.random() * 100}vh`, `${Math.random() * 100}vh`, 0],
            rotate: 360,
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

// Animated counter component with one-time animation
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
      { threshold: 0.5 }
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
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
      viewport={{ once: true }}
      className="stat-item flex flex-col items-center p-4 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 hover:bg-white/15 transition-all duration-300"
    >
      <motion.div 
        className="mb-4 p-2 bg-white/20 rounded-full"
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.7 }}
      >
        {icon}
      </motion.div>
      <div className="text-3xl md:text-4xl font-bold text-white mb-2 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
        {count}+
      </div>
      <p className="text-base md:text-lg text-white/90 text-center font-medium">{label}</p>
    </motion.div>
  );
};

// Custom icons for stats
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

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 768 });

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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-blue-100"
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

      {/* Success Stories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Success Stories</h2>
            <p className="text-xl text-blue-800 max-w-3xl mx-auto">
              Discover how our students have transformed their careers and achieved remarkable success 
              through our professional development programs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-64 md:h-96 rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0"
              >
                <img
                  src={(isMobile ? mobileBanners : banners)[currentIndex].src}
                  alt={(isMobile ? mobileBanners : banners)[currentIndex].alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl md:text-2xl font-bold mb-2">{(isMobile ? mobileBanners : banners)[currentIndex].title}</h3>
                    <p className="text-sm md:text-base opacity-90">{(isMobile ? mobileBanners : banners)[currentIndex].description}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel indicators */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3">
              {(isMobile ? mobileBanners : banners).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? "bg-amber-400 scale-125" : "bg-white/70 scale-100"}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white relative overflow-hidden">
        <FloatingParticles />
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Professional Academy?</h2>
            <p className="text-lg max-w-2xl mx-auto opacity-90">
              With decades of experience and thousands of successful students, we're the leading provider of professional qualifications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <AnimatedCounter
                key={index}
                target={stat.target}
                label={stat.label}
                icon={stat.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-10 md:p-14 text-white text-center shadow-2xl relative overflow-hidden border-2 border-white/20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700/30 to-purple-700/30"></div>
            <FloatingParticles />
            
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Not Sure Which Course is Right for You?
            </motion.h2>
            
            <motion.p 
              className="text-xl mb-10 max-w-2xl mx-auto relative z-10 opacity-95"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Try our quick and easy Qualifications Navigator to see which Level is best, book a call with a qualifications advisor to discuss, or send us a message today.
            </motion.p>
            
            <motion.div 
              className="flex flex-col md:flex-row gap-6 justify-center relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/professional-qualifications/which-qualification-is-right-for-you/"
                  className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Qualifications Navigator
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="https://calendly.com/lewis-walker-1"
                  className="inline-block bg-amber-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Book a Call
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="mailto:info@professionalacademy.com"
                  className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Email Us
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}