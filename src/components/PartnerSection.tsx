// components/PartnersSection.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const PartnersSection = () => {
  const partners = [
    {
      name: "Marketing",
      href: "/professional-qualifications/cim-marketing-qualifications/",
      img: "https://assets-eur.mkt.dynamics.com/791aa60e-64f1-4a25-9eb0-8f4bbbaa6f6c/digitalassets/images/338cea8b-793f-ef11-8409-002248a11e95?ts=638562944790905907",
      accreditation: "CIM Strategic Partner",
      color: "from-blue-600 to-blue-800",
      hoverColor: "hover:from-blue-700 hover:to-blue-900",
      delay: 0.1
    },
    {
      name: "Sales",
      href: "/sales-qualifications/",
      img: "https://assets-eur.mkt.dynamics.com/791aa60e-64f1-4a25-9eb0-8f4bbbaa6f6c/digitalassets/images/318cea8b-793f-ef11-8409-002248a11e95?ts=638562944790905907",
      accreditation: "ISP Accredited Centre",
      color: "from-sky-300 to-sky-500",
      hoverColor: "hover:from-sky-400 hover:to-sky-600",
      delay: 0.2
    },
    {
      name: "Leadership & Management",
      href: "/professional-qualifications/management-qualifications/",
      img: ["https://assets-eur.mkt.dynamics.com/791aa60e-64f1-4a25-9eb0-8f4bbbaa6f6c/digitalassets/images/418cea8b-793f-ef11-8409-002248a11e95?ts=638562944797312288", "https://assets-eur.mkt.dynamics.com/791aa60e-64f1-4a25-9eb0-8f4bbbaa6f6c/digitalassets/images/68158d4d-4ef8-ef11-bae2-000d3ab090ad?ts=638766168726504263"],
      accreditation: "ILM & CMI Approved Centre",
      color: "from-purple-600 to-purple-800",
      hoverColor: "hover:from-purple-700 hover:to-purple-900",
      delay: 0.3
    },
    {
      name: "Apprenticeships",
      href: "/apprenticeships/",
      img: ["https://assets-eur.mkt.dynamics.com/791aa60e-64f1-4a25-9eb0-8f4bbbaa6f6c/digitalassets/images/328cea8b-793f-ef11-8409-002248a11e95?ts=638562944790905907", "https://assets-eur.mkt.dynamics.com/791aa60e-64f1-4a25-9eb0-8f4bbbaa6f6c/digitalassets/images/c91321af-4df8-ef11-bae2-000d3ab090ad?ts=638766166114094976"],
      accreditation: "Ofsted Good Provider",
      color: "from-teal-600 to-teal-800",
      hoverColor: "hover:from-teal-700 hover:to-teal-900",
      delay: 0.4
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };


  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-900/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Accrediting Partners</h2>
          <p className="text-lg text-blue-800 max-w-3xl mx-auto mb-6">
            Our award-winning courses are designed in partnership with prestigious awarding bodies, 
            so your qualification will be globally recognized and respected.
          </p>
          
          <motion.div 
            className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-5 border border-blue-100 shadow-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <p className="text-base text-blue-800 text-center">
              Strategic Partner of the{" "}
              <Link href="https://www.cim.co.uk/" className="text-blue-700 hover:text-amber-500 font-semibold transition-colors duration-200">
                Chartered Institute of Marketing (CIM)
              </Link>
              , Accredited Study Centre for the{" "}
              <Link href="https://www.institutelm.com/" className="text-blue-700 hover:text-amber-500 font-semibold transition-colors duration-200">
                Institute of Leadership and Management (ILM)
              </Link>
              , the{" "}
              <Link href="https://www.theisp.co.uk/" className="text-blue-700 hover:text-amber-500 font-semibold transition-colors duration-200">
                Institute of Sales Professionals (ISP)
              </Link>
              , and{" "}
              <Link href="https://www.managers.org.uk/" className="text-blue-700 hover:text-amber-500 font-semibold transition-colors duration-200">
                Chartered Management Institute (CMI)
              </Link>{" "}
              with{" "}
              <Link href="https://www.gov.uk/government/organisations/ofsted" className="text-blue-700 hover:text-amber-500 font-semibold transition-colors duration-200">
                Ofsted
              </Link>{" "}
              Good Provider status as registered Apprenticeship Training Provider.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1,
                y: 0,
                transition: {
                    duration: 0.6,
                    ease: "easeOut"
                }}}              
              className="group relative h-full"
            >
              <Link href={partner.href} className="h-full flex flex-col">
                <motion.div 
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className={`bg-gradient-to-br from-slate-500 to-slate-400 ${partner.hoverColor} rounded-2xl p-6 h-full flex flex-col items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 border border-white/20 overflow-hidden relative`}
                >
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
                  
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  
                  <motion.h3 
                    className="text-lg font-semibold text-white mb-4 text-center z-10"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {partner.name}
                  </motion.h3>
                  
                  <div className="flex justify-center items-center gap-3 z-10 h-48">
                    {Array.isArray(partner.img) ? (
                      partner.img.map((img, i) => (
                        <motion.img 
                          key={i} 
                          src={img} 
                          alt={`${partner.name} Logo ${i + 1}`} 
                          className="h-24 object-contain transition-all duration-300 group-hover:h-32"
                          whileHover={{ scale: 1.1 }}
                        />
                      ))
                    ) : (
                      <motion.img 
                        src={partner.img} 
                        alt={`${partner.name} Logo`} 
                        className="h-32 object-contain transition-all duration-300 group-hover:h-48"
                        whileHover={{ scale: 1.1 }}
                      />
                    )}
                  </div>
                  
                  <motion.p 
                    className="text-white/90 text-sm mt-4 text-center z-10 font-medium"
                    initial={{ opacity: 0.9 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {partner.accreditation}
                  </motion.p>
                  
                  {/* Animated arrow on hover */}
                  <motion.div 
                    className="absolute bottom-6 right-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: 10 }}
                    whileHover={{ x: 0 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;