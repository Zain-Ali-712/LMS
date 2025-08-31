// components/TestimonialsCarousel.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TestimonialsCarousel = () => {
  const testimonials = [
    {
      id: 1,
      quote: "“The workshops were excellent and really helped me get to grips with the assessments and know how to tackle them. The qualification has helped take my experience to the next level.”",
      name: "James Doddrell",
      position: "Account Director",
      company: "STMA Agency",
      stats: "67% Success Rate",
      years: "27+ Years Experience",
      imgSrc: '/james.png',
      color: "from-blue-600 to-blue-800"
    },
    {
      id: 2,
      quote: "“The workshops were excellent and really helped me get to grips with the assessments and know how to tackle them. The qualification has helped take my experience to the next level.”",
      name: "Kat Maddox",
      position: "Brand Manager",
      company: "Precision Healthcare",
      stats: "97% Success Rate",
      years: "5+ Years Experience",
      imgSrc: '/kat.png',
      color: "from-blue-600 to-blue-800"
    },
    {
      id: 3,
      quote: "“I achieved a distinction with the support of Professional Academy and my company. A big thank you to my tutors, Carol and Philip, who were excellent - incredibly knowledgeable and supportive.”",
      name: "Emily Burke",
      position: "Product Manager",
      company: "B Braun",
      stats: "89% Success Rate",
      years: "3+ Years Experience",
      imgSrc: '/emily.png',
      color: "from-blue-600 to-blue-800"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-12 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">What Our Students Say</h2>
          <p className="text-lg text-blue-800 max-w-2xl mx-auto">
            Hear from professionals who have transformed their careers with our programs
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto h-[420px] md:h-[450px]">
          <AnimatePresence mode="wait">
            {testimonials.map((testimonial, index) => (
              currentIndex === index && (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, x: 100, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -100, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <div className={`relative rounded-2xl shadow-xl bg-gradient-to-br ${testimonial.color} p-5 md:p-6 h-full flex flex-col justify-between`}>
                    {/* Profile Card */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-5 flex-1 flex flex-col items-center justify-center relative">
                      <motion.div 
                        className="absolute -top-14 md:-top-16 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center shadow-2xl border-4 border-white/30 overflow-hidden"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                      >
                        <div className="w-full h-full bg-blue-400/30 flex items-center justify-center">
                          <img src={testimonial.imgSrc}></img>
                        </div>
                      </motion.div>
                  
                      <div className="mt-16 md:mt-20 text-center">
                        <h3 className="text-white text-lg md:text-xl font-bold mb-1">{testimonial.name}</h3>
                        <p className="text-blue-200 text-sm mb-1">{testimonial.position}</p>
                        <div className="bg-white/20 rounded-lg px-3 py-1 inline-block mb-3">
                          <p className="text-white text-sm font-semibold">{testimonial.company}</p>
                        </div>
                        
                        <motion.blockquote 
                          className="text-white/95 text-base italic mb-4 px-2 md:px-4 leading-relaxed"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          {testimonial.quote}
                        </motion.blockquote>
                      </div>
                    </div>

                    {/* Stats for desktop */}
                    <div className="hidden md:flex justify-between items-center mt-4 px-4">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="bg-white/15 backdrop-blur-sm rounded-lg p-2 text-center flex-1 mx-2"
                      >
                        <div className="text-white font-bold text-md">{testimonial.stats}</div>
                        <div className="text-blue-200 text-xs mt-1">Success Rate</div>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="bg-white/15 backdrop-blur-sm rounded-lg p-2 text-center flex-1 mx-2"
                      >
                        <div className="text-white font-bold text-md">{testimonial.years}</div>
                        <div className="text-blue-200 text-xs mt-1">Experience</div>
                      </motion.div>
                    </div>

                    {/* Stats for mobile */}
                    <div className="md:hidden flex justify-between items-center mt-3 px-2">
                      <div className="bg-white/15 backdrop-blur-sm rounded-lg p-2 text-center flex-1 mx-1">
                        <div className="text-white font-bold text-sm">{testimonial.stats}</div>
                        <div className="text-blue-200 text-xs mt-1">Success Rate</div>
                      </div>
                      
                      <div className="bg-white/15 backdrop-blur-sm rounded-lg p-2 text-center flex-1 mx-1">
                        <div className="text-white font-bold text-sm">{testimonial.years}</div>
                        <div className="text-blue-200 text-xs mt-1">Experience</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>

          {/* Navigation dots */}
          <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentIndex === index ? "bg-blue-600 scale-125" : "bg-blue-300 scale-100"}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;