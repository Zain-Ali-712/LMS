// app/page.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import WebsiteNavbar from "@/components/WebsiteNavbar"; 
import Footer from "@/components/Footer";
import { FaPhoneAlt, FaEnvelope, FaChevronRight } from "react-icons/fa";
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
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
            y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
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

// Animated counter component
const AnimatedCounter = ({ target, label, icon }: { target: number; label: string; icon: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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
  }, [target]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="stat-item flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg"
    >
      <img src={icon} alt={`${label} Icon`} width={80} height={80} className="mb-4" />
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">{count}+</div>
      <p className="text-lg text-white/90">{label}</p>
    </motion.div>
  );
};

const banners = [
  {
    src: "https://assets-eur.mkt.dynamics.com/791aa60e-64f1-4a25-9eb0-8f4bbbaa6f6c/digitalassets/images/fb11c00c-08f5-ef11-be1f-000d3ab4ba51?ts=638762568482201172",
    alt: "Student 1",
  },
  {
    src: "https://assets-eur.mkt.dynamics.com/791aa60e-64f1-4a25-9eb0-8f4bbbaa6f6c/digitalassets/images/5529238c-08f5-ef11-be1f-000d3ab4ba51?ts=638762570590807849",
    alt: "Student 2",
  },
  {
    src: "https://assets-eur.mkt.dynamics.com/791aa60e-64f1-4a25-9eb0-8f4bbbaa6f6c/digitalassets/images/9fc30a66-a03f-ef11-8409-002248a11e95?ts=638563111737997305",
    alt: "Student 3",
  },
];

const mobileBanners = [
  {
    src: "https://assets-eur.mkt.dynamics.com/791aa60e-64f1-4a25-9eb0-8f4bbbaa6f6c/digitalassets/images/da7bc31c-6bcf-ef11-b8e8-000d3ab0af42?ts=638721212485928217",
    alt: "Kat",
  },
  {
    src: "https://assets-eur.mkt.dynamics.com/791aa60e-64f1-4a25-9eb0-8f4bbbaa6f6c/digitalassets/images/dc7bc31c-6bcf-ef11-b8e8-000d3ab0af42?ts=638721212485771990",
    alt: "Emily",
  },
  {
    src: "https://assets-eur.mkt.dynamics.com/791aa60e-64f1-4a25-9eb0-8f4bbbaa6f6c/digitalassets/images/db7bc31c-6bcf-ef11-b8e8-000d3ab0af42?ts=638721212486084456",
    alt: "James",
  },
];

const exploreItems = [
  { name: "In-company Training", href: "/in-company-training/" },
  { name: "Short Courses", href: "/professional-qualifications/elearning-short-courses/" },
];

const stats = [
  { icon: "https://assets-eur.mkt.dynamics.com/791aa60e-64f1-4a25-9eb0-8f4bbbaa6f6c/digitalassets/images/f64226cd-953f-ef11-8409-002248a11e95?ts=638563066164258945", target: 27, label: "years of experience" },
  { icon: "https://assets-eur.mkt.dynamics.com/791aa60e-64f1-4a25-9eb0-8f4bbbaa6f6c/digitalassets/images/f44226cd-953f-ef11-8409-002248a11e95?ts=638563066164258945", target: 10000, label: "students to date" },
  { icon: "https://assets-eur.mkt.dynamics.com/791aa60e-64f1-4a25-9eb0-8f4bbbaa6f6c/digitalassets/images/0fea8a1e-0a76-ef11-a670-000d3a699da8?ts=638622939383758599", target: 100, label: "countries" },
];

const courses = [
  { name: "Marketing", href: "/professional-qualifications/cim-marketing-qualifications/", img: "https://assets-eur.mkt.dynamics.com/791aa60e-64f1-4a25-9eb0-8f4bbbaa6f6c/digitalassets/images/338cea8b-793f-ef11-8409-002248a11e95?ts=638562944790905907" },
  { name: "Sales", href: "/sales-qualifications/", img: "https://assets-eur.mkt.dynamics.com/791aa60e-64f1-4a25-9eb0-8f4bbbaa6f6c/digitalassets/images/318cea8b-793f-ef11-8409-002248a11e95?ts=638562944790905907" },
  {
    name: "Leadership & Management",
    href: "/professional-qualifications/management-qualifications/",
    img: ["https://assets-eur.mkt.dynamics.com/791aa60e-64f1-4a25-9eb0-8f4bbbaa6f6c/digitalassets/images/418cea8b-793f-ef11-8409-002248a11e95?ts=638562944797312288", "https://assets-eur.mkt.dynamics.com/791aa60e-64f1-4a25-9eb0-8f4bbbaa6f6c/digitalassets/images/68158d4d-4ef8-ef11-bae2-000d3ab090ad?ts=638766168726504263"],
  },
  {
    name: "Apprenticeships",
    href: "/apprenticeships/",
    img: ["https://assets-eur.mkt.dynamics.com/791aa60e-64f1-4a25-9eb0-8f4bbbaa6f6c/digitalassets/images/328cea8b-793f-ef11-8409-002248a11e95?ts=638562944790905907", "https://assets-eur.mkt.dynamics.com/791aa60e-64f1-4a25-9eb0-8f4bbbaa6f6c/digitalassets/images/c91321af-4df8-ef11-bae2-000d3ab090ad?ts=638766166114094976"],
  },
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
      
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <FloatingParticles />
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="md:w-1/2 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-6">
              Transform Your Career with Professional Academy
            </h1>
            <p className="text-lg md:text-xl text-blue-800 mb-8">
              Award-winning courses designed in partnership with prestigious awarding bodies for globally recognized qualifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/professional-qualifications/"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors duration-300 shadow-lg"
                >
                  Explore Courses
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="https://calendly.com/lewis-walker-1"
                  className="inline-block bg-orange-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-orange-600 transition-colors duration-300 shadow-lg"
                >
                  Book a Consultation
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:w-1/2"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://assets-eur.mkt.dynamics.com/791aa60e-64f1-4a25-9eb0-8f4bbbaa6f6c/digitalassets/images/076b6682-00f5-ef11-be1f-000d3ab4ba51?ts=638762536145204700"
                alt="Cambridge Professional Academy"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Accrediting Partners</h2>
            <p className="text-lg text-blue-800 max-w-3xl mx-auto">
              Strategic Partner of the Chartered Institute of Marketing (CIM), and accredited by leading professional bodies.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100"
              >
                <Link href={course.href} className="flex flex-col items-center">
                  <h3 className="text-lg font-semibold text-blue-900 mb-4 text-center">{course.name}</h3>
                  <div className="flex justify-center items-center gap-3">
                    {Array.isArray(course.img) ? (
                      course.img.map((img, i) => (
                        <img key={i} src={img} alt={`${course.name} Logo ${i + 1}`} className="h-12 object-contain" />
                      ))
                    ) : (
                      <img src={course.img} alt={`${course.name} Logo`} className="h-12 object-contain" />
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-lg"
          >
            <p className="text-lg text-blue-800 text-center">
              With a long-standing track record of delivering{" "}
              <Link href="/in-company-training/" className="text-blue-600 hover:text-orange-500 font-medium">
                in-company training and comprehensive learning & development programmes
              </Link>
              , our{" "}
              <Link href="/professional-qualifications/study-methods/" className="text-blue-600 hover:text-orange-500 font-medium">
                flexible study options
              </Link>
              {" "}and{" "}
              <Link href="/professional-qualifications/100-percent-pass-guarantee/" className="text-blue-600 hover:text-orange-500 font-medium">
                100% pass guarantee
              </Link>
              , you can rest assured that you are working with the best and will achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Banner Carousel Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-xl"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <img
                  src={(isMobile ? mobileBanners : banners)[currentIndex].src}
                  alt={(isMobile ? mobileBanners : banners)[currentIndex].alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl md:text-2xl font-bold mb-2">Success Stories</h3>
                    <p className="text-sm md:text-base">Hear from our students who have transformed their careers</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {(isMobile ? mobileBanners : banners).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-white" : "bg-white/50"}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden">
        <FloatingParticles />
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Professional Academy?</h2>
            <p className="text-lg max-w-2xl mx-auto">With decades of experience and thousands of successful students, we're the leading provider of professional qualifications.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center shadow-xl relative overflow-hidden"
          >
            <FloatingParticles />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Not Sure Which Course is Right for You?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Try our quick and easy Qualifications Navigator to see which Level is best, book a call with a qualifications advisor to discuss, or send us a message today.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/professional-qualifications/which-qualification-is-right-for-you/"
                  className="inline-block bg-white text-blue-600 px-6 py-3 rounded-xl font-medium hover:bg-gray-100 transition-colors duration-300 shadow-md"
                >
                  Qualifications Navigator
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="https://calendly.com/lewis-walker-1"
                  className="inline-block bg-orange-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-orange-600 transition-colors duration-300 shadow-md"
                >
                  Book a Call
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="mailto:info@professionalacademy.com"
                  className="inline-block bg-white text-blue-600 px-6 py-3 rounded-xl font-medium hover:bg-gray-100 transition-colors duration-300 shadow-md"
                >
                  Email Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}