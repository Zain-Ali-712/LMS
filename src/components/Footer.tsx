// app/components/Footer.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Locations", "Trainers, Tutors & Mentors", "International Partners", "Our Team", "About Professional Academy", "CIM Marketing Qualifications"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/about-us/${item.toLowerCase().replace(/,|&/g, "").replace(/ /g, "-")}/`}
                    className="text-blue-200 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Policies</h3>
            <ul className="space-y-2">
              {["Complaints and Appeals Policy", "Privacy Policy", "Professional Development Policy", "Apprenticeship Continuity Plan", "Terms & Conditions", "Professional Qualifications"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/about-us/${item.toLowerCase().replace(/,|&/g, "").replace(/ /g, "-")}/`}
                    className="text-blue-200 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {["Equality & Diversity Policy", "Health & Safety Policy", "Safeguarding & PREVENT Policy", "Assessment Malpractice and Maladministration Policy", "Apprenticeships"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/about-us/${item.toLowerCase().replace(/,|&/g, "").replace(/ /g, "-")}/`}
                    className="text-blue-200 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="mb-1">
              Call:{" "}
              <Link href="tel:01223365505" className="text-white font-medium underline">
                01223 365 505
              </Link>
            </p>
            <p>
              Email:{" "}
              <Link href="mailto:enquiries@professionalacademy.com" className="text-white font-medium underline">
                enquiries@professionalacademy.com
              </Link>
            </p>
          </div>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Link href="https://www.professionalacademy.com/blogs/cambridge-professional-academy-ofsted-visit-findings-2024/" target="_blank">
              <img
                src="https://assets-eur.mkt.dynamics.com/791aa60e-64f1-4a25-9eb0-8f4bbbaa6f6c/digitalassets/images/690cf233-44ae-ef11-b8e8-7c1e52215b03?ts=638684761496944739"
                alt="Ofsted Rating"
                className="h-16 w-auto"
              />
            </Link>
          </motion.div>
        </div>

        <div className="mt-8 flex justify-center gap-6">
          {[
            { href: "https://www.facebook.com/Cambridgeprofessionalacademy", icon: "facebook", color: "blue-600" },
            { href: "https://twitter.com/ProfAcademy", icon: "twitter", color: "black" },
            { href: "https://www.linkedin.com/company/professional-academy/", icon: "linkedin", color: "blue-700" },
            { href: "https://www.instagram.com/professionalacademy6/", icon: "instagram", color: "gradient" },
            { href: "https://www.tiktok.com/@professional_academy", icon: "tiktok", color: "gradient" },
            { href: "https://www.youtube.com/@ProfessionalAcademy1", icon: "youtube", color: "red-600" },
          ].map((social, index) => (
            <motion.div key={index} whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={social.href}
                target="_blank"
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  social.color === "gradient"
                    ? "bg-gradient-to-r from-purple-500 to-pink-500"
                    : `bg-${social.color}`
                } text-white`}
                aria-label={social.icon}
              >
                <span className="font-semibold text-sm">{social.icon[0].toUpperCase()}</span>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center text-blue-200">
          <p>Copyright © {new Date().getFullYear()} Professional Academy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;