"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram, 
  FaTiktok, 
  FaYoutube,
  FaMapMarkerAlt,
  FaChevronRight
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Locations", href: "/about-us/locations/" },
    { name: "Trainers, Tutors & Mentors", href: "/about-us/trainers-tutors-mentors/" },
    { name: "International Partners", href: "/about-us/international-partners/" },
    { name: "Our Team", href: "/about-us/our-team/" },
    { name: "About Professional Academy", href: "/about-us/about-professional-academy/" },
    { name: "CIM Marketing Qualifications", href: "/professional-qualifications/cim-marketing-qualifications/" }
  ];

  const policies = [
    { name: "Complaints and Appeals Policy", href: "/about-us/complaints-and-appeals-policy/" },
    { name: "Privacy Policy", href: "/about-us/privacy-policy/" },
    { name: "Professional Development Policy", href: "/about-us/professional-development-policy/" },
    { name: "Apprenticeship Continuity Plan", href: "/about-us/apprenticeship-continuity-plan/" },
    { name: "Terms & Conditions", href: "/about-us/terms-conditions/" },
    { name: "Professional Qualifications", href: "/professional-qualifications/" }
  ];

  const resources = [
    { name: "Equality & Diversity Policy", href: "/about-us/equality-diversity-policy/" },
    { name: "Health & Safety Policy", href: "/about-us/health-safety-policy/" },
    { name: "Safeguarding & PREVENT Policy", href: "/about-us/safeguarding-prevent-policy/" },
    { name: "Assessment Malpractice and Maladministration Policy", href: "/about-us/assessment-malpractice-and-maladministration-policy/" },
    { name: "Apprenticeships", href: "/apprenticeships/" }
  ];

  const socialLinks = [
    { 
      href: "https://www.facebook.com/Cambridgeprofessionalacademy", 
      icon: FaFacebookF, 
      label: "Facebook",
      color: "hover:bg-blue-600"
    },
    { 
      href: "https://twitter.com/ProfAcademy", 
      icon: FaTwitter, 
      label: "Twitter",
      color: "hover:bg-blue-400"
    },
    { 
      href: "https://www.linkedin.com/company/professional-academy/", 
      icon: FaLinkedinIn, 
      label: "LinkedIn",
      color: "hover:bg-blue-700"
    },
    { 
      href: "https://www.instagram.com/professionalacademy6/", 
      icon: FaInstagram, 
      label: "Instagram",
      color: "hover:bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500"
    },
    { 
      href: "https://www.tiktok.com/@professional_academy", 
      icon: FaTiktok, 
      label: "TikTok",
      color: "hover:bg-black"
    },
    { 
      href: "https://www.youtube.com/@ProfessionalAcademy1", 
      icon: FaYoutube, 
      label: "YouTube",
      color: "hover:bg-red-600"
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-800 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <Link href="https://www.professionalacademy.com/" className="inline-block mb-6">
              <img
                src="https://cpawebsiteimages.blob.core.windows.net/publicimages/SVGs/Webp%20Files/Our%20Team/icon.webp"
                alt="Professional Academy logo"
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Award-winning courses designed in partnership with prestigious awarding bodies for globally recognized qualifications.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors flex-shrink-0">
                  <FaPhoneAlt className="text-white text-sm" />
                </div>
                <div>
                  <p className="text-sm text-blue-200">Call us</p>
                  <Link 
                    href="tel:01223365505" 
                    className="text-white font-medium hover:text-orange-300 transition-colors"
                  >
                    01223 365 505
                  </Link>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors flex-shrink-0">
                  <FaMapMarkerAlt className="text-white text-sm" />
                </div>
                <div>
                  <p className="text-sm text-blue-200">Based in</p>
                  <p className="text-white font-medium">Cambridge, UK</p>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 group"
              >
                <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors flex-shrink-0 mt-1">
                  <FaEnvelope className="text-white text-sm" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-blue-200">Email us</p>
                  <Link 
                    href="mailto:enquiries@professionalacademy.com" 
                    className="text-white font-medium hover:text-orange-300 transition-colors break-words"
                  >
                    enquiries@professionalacademy.com
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-blue-700">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    className="flex items-center text-blue-100 hover:text-white transition-colors group"
                  >
                    <FaChevronRight className="text-orange-400 text-xs mr-2 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Policies */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-blue-700">Policies</h3>
            <ul className="space-y-3">
              {policies.map((policy, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={policy.href}
                    className="flex items-center text-blue-100 hover:text-white transition-colors group"
                  >
                    <FaChevronRight className="text-orange-400 text-xs mr-2 group-hover:translate-x-1 transition-transform" />
                    {policy.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-blue-700">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={resource.href}
                    className="flex items-center text-blue-100 hover:text-white transition-colors group"
                  >
                    <FaChevronRight className="text-orange-400 text-xs mr-2 group-hover:translate-x-1 transition-transform" />
                    {resource.name}
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Ofsted Rating */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 p-4 bg-blue-800 rounded-lg border border-blue-700"
            >
              <h4 className="font-semibold mb-2 text-center">Rated Good by Ofsted</h4>
              <Link 
                href="https://www.professionalacademy.com/blogs/cambridge-professional-academy-ofsted-visit-findings-2024/" 
                target="_blank"
                className="block"
              >
                <img
                  src="https://assets-eur.mkt.dynamics.com/791aa60e-64f1-4a25-9eb0-8f4bbbaa6f6c/digitalassets/images/690cf233-44ae-ef11-b8e8-7c1e52215b03?ts=638684761496944739"
                  alt="Ofsted Rating - Good"
                  className="h-16 w-auto mx-auto"
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Social Links & Newsletter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-blue-700 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-center md:text-left">Follow Us</h4>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={social.href}
                      target="_blank"
                      className={`w-12 h-12 rounded-xl bg-blue-700 flex items-center justify-center transition-all duration-300 ${social.color} group`}
                      aria-label={social.label}
                    >
                      <social.icon className="text-white text-lg group-hover:text-white" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="flex-1 max-w-md">
              <h4 className="text-lg font-semibold mb-4 text-center md:text-right">Stay Updated</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 bg-blue-800 border border-blue-700 rounded-xl text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-orange-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-orange-600 transition-colors"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="border-t border-blue-800 py-6 bg-blue-950"
      >
        <div className="container flex justify-center items-center">
            <p className="text-blue-300 text-sm text-center md:text-left">
              © {currentYear} Professional Academy. All rights reserved.
            </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;