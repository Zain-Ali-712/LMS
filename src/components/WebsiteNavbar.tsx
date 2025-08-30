"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaBars, 
  FaChevronDown, 
  FaTimes,
  FaUserCircle
} from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import { usePathname } from "next/navigation";

interface NavItem {
  name: string;
  href: string;
  subItems?: { name: string; href: string }[];
}

const navItems: NavItem[] = [
  {
    name: "Courses",
    href: "#",
    subItems: [
      { name: "Qualifications", href: "/professional-qualifications/" },
      { name: "Which Qualification is right for you?", href: "/professional-qualifications/which-qualification-is-right-for-you/" },
      { name: "CIM Marketing Qualifications", href: "/professional-qualifications/cim-marketing-qualifications/" },
      { name: "Sales Qualifications", href: "/sales-qualifications/" },
      { name: "Management & Leadership Qualifications", href: "/professional-qualifications/management-qualifications/" },
      { name: "CIM Specialists Awards", href: "/cim-specialist-awards/" },
      { name: "Study Methods", href: "/professional-qualifications/study-methods/" },
      { name: "100% Pass Guarantee", href: "/professional-qualifications/100-percent-pass-guarantee/" },
      { name: "Our Pass Rates", href: "/professional-qualifications/our-pass-rates/" },
      { name: "Download our brochure", href: "/professional-qualifications/prospectus-download/" },
      { name: "Workshop Dates", href: "/professional-qualifications/workshop-dates/" },
    ],
  },
  {
    name: "Apprenticeships",
    href: "#",
    subItems: [
      { name: "Apprenticeships", href: "/apprenticeships/" },
      { name: "Marketing Apprenticeships", href: "/marketing-apprenticeships/" },
      { name: "Sales Apprenticeships", href: "/sales-apprenticeships/" },
      { name: "Management Apprenticeships", href: "/management-apprenticeships/" },
      { name: "Digital Marketing Apprenticeships", href: "/apprenticeships/multichannel-marketer/" },
      { name: "Benefits of Apprenticeships", href: "/apprenticeships/benefits-of-apprenticeships/" },
      { name: "Contact us", href: "/apprenticeships/contact-us/" },
    ],
  },
  { name: "In-Company training", href: "/in-company-training/" },
  { name: "Blog", href: "/blogs/" },
];

const ModernNavbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeAll = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <>
      {/* Main Navbar */}
      <header className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white shadow-xl py-2' : 'bg-white py-3'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 z-50">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img
                  src="https://cpawebsiteimages.blob.core.windows.net/publicimages/SVGs/Webp%20Files/Our%20Team/icon.webp"
                  alt="Professional Academy logo"
                  className="h-10 w-auto md:h-12 transition-all duration-300"
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {navItems.map((item) => {
                const isActive = item.subItems
                  ? item.subItems.some((sub) => pathname.startsWith(sub.href))
                  : pathname === item.href;

                return (
                  <div key={item.name} className="relative group">
                    {item.subItems ? (
                      <>
                        <button
                          onClick={() => toggleDropdown(item.name)}
                          className={`relative px-5 py-3 font-medium transition-all duration-300 flex items-center rounded-xl ${
                            isActive || activeDropdown === item.name
                              ? 'text-blue-700 bg-blue-100 shadow-lg'
                              : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
                          }`}
                        >
                          <span>{item.name}</span>
                          <motion.span
                            animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-2"
                          >
                            <FaChevronDown className="text-xs" />
                          </motion.span>
                        </button>

                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, y: 10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.95 }}
                              transition={{ duration: 0.2 }}
                              className="absolute left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                            >
                              <div className="p-3">
                                {item.subItems.map((sub, index) => (
                                  <motion.div
                                    key={sub.name}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                  >
                                    <Link
                                      href={sub.href}
                                      className="block px-4 py-3 text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-200 group/subitem"
                                      onClick={closeAll}
                                    >
                                      <div className="font-medium flex items-center justify-between">
                                        <span className="text-sm">{sub.name}</span>
                                        <motion.span 
                                          className="opacity-0 group-hover/subitem:opacity-100 transition-opacity"
                                          initial={{ x: -5 }}
                                          whileHover={{ x: 0 }}
                                        >
                                          <FaChevronDown className="text-xs text-blue-500 rotate-90" />
                                        </motion.span>
                                      </div>
                                    </Link>
                                  </motion.div>
                                ))}
                              </div>
                              
                              {/* Enhanced dropdown footer */}
                              <div className="bg-blue-50 p-3 border-t border-blue-100">
                                <Link
                                  href="/professional-qualifications/"
                                  className="text-blue-700 font-medium text-sm hover:text-blue-800 flex items-center justify-center"
                                  onClick={closeAll}
                                >
                                  View all courses
                                  <FaChevronDown className="ml-1 text-xs rotate-90" />
                                </Link>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className={`relative px-5 py-3 font-medium transition-all duration-300 rounded-xl ${
                          isActive
                            ? 'text-blue-700 bg-blue-100 shadow-lg'
                            : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center gap-3">
              {/* Phone */}
              <div className="hidden md:flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2">
                <FaPhoneAlt className="text-blue-600 text-sm" />
                <Link href="tel:01223365505" className="text-blue-700 text-sm font-medium hover:text-blue-800 transition-colors">
                  01223 365 505
                </Link>
              </div>

              {/* Book a Call */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="hidden md:block">
                <Link
                  href="https://calendly.com/lewis-walker-1"
                  className="bg-orange-500 text-white px-4 py-2 rounded-full font-medium hover:bg-orange-600 transition-colors duration-300 shadow-md flex items-center gap-2"
                >
                  <span>Book a Call</span>
                </Link>
              </motion.div>

              {/* Login */}
              <Link 
                href="https://refinery.professionalacademy.com/login/index.php" 
                className="p-2 text-gray-600 hover:text-blue-700 transition-colors duration-200 hidden md:flex items-center gap-2 bg-gray-100 rounded-full"
              >
                <FaUserCircle className="w-5 h-5" />
                <span className="text-sm font-medium">Login</span>
              </Link>

              {/* Mobile menu button */}
              <button
                className="lg:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => setIsMenuOpen(true)}
                aria-label="Toggle menu"
              >
                <FaBars className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation - Always visible when menu is open */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden z-40"
                onClick={closeAll}
              />
              
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
              >
                <div className="p-5 border-b border-gray-200 flex justify-between items-center bg-blue-700 text-white">
                  <Link href="/" onClick={closeAll}>
                    <img
                      src="https://cpawebsiteimages.blob.core.windows.net/publicimages/SVGs/Webp%20Files/Our%20Team/icon.webp"
                      alt="Professional Academy logo"
                      className="h-8 w-auto"
                    />
                  </Link>
                  <button
                    onClick={closeAll}
                    className="p-2 text-white hover:bg-blue-600 rounded-lg"
                  >
                    <FaTimes className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-5">
                  {/* Contact Info */}
                  <div className="mb-6 bg-blue-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <FaPhoneAlt className="text-blue-600" />
                      <Link href="tel:01223365505" className="text-blue-700 font-medium" onClick={closeAll}>
                        01223 365 505
                      </Link>
                    </div>
                    <Link 
                      href="mailto:info@professionalacademy.com" 
                      className="text-blue-700 font-medium flex items-center gap-2"
                      onClick={closeAll}
                    >
                      <FaEnvelope className="w-4 h-4" />
                      info@professionalacademy.com
                    </Link>
                  </div>

                  {/* Navigation Links */}
                  <div className="space-y-2">
                    {navItems.map((item) => (
                      <div key={item.name} className="border-b border-gray-100 last:border-b-0">
                        {item.subItems ? (
                          <>
                            <button
                              onClick={() => toggleDropdown(item.name)}
                              className="flex items-center justify-between w-full py-4 text-left font-medium text-gray-800 hover:text-blue-700 rounded-lg px-3 hover:bg-blue-50 transition-colors"
                            >
                              <span>{item.name}</span>
                              <motion.span
                                animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <FaChevronDown className="text-xs" />
                              </motion.span>
                            </button>

                            <AnimatePresence>
                              {activeDropdown === item.name && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="pl-6 pb-2 space-y-2"
                                >
                                  {item.subItems.map((sub) => (
                                    <Link
                                      key={sub.name}
                                      href={sub.href}
                                      className="block py-2 text-gray-600 hover:text-blue-700 text-sm rounded-lg px-3 hover:bg-blue-50 transition-colors"
                                      onClick={closeAll}
                                    >
                                      {sub.name}
                                    </Link>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
                          <Link
                            href={item.href}
                            className="block py-4 font-medium text-gray-800 hover:text-blue-700 rounded-lg px-3 hover:bg-blue-50 transition-colors"
                            onClick={closeAll}
                          >
                            {item.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-8 space-y-3">
                    <motion.div whileTap={{ scale: 0.95 }} className="w-full">
                      <Link
                        href="https://calendly.com/lewis-walker-1"
                        className="block w-full bg-orange-500 text-white text-center py-3 rounded-xl font-medium hover:bg-orange-600 transition-colors"
                        onClick={closeAll}
                      >
                        Book a Call
                      </Link>
                    </motion.div>
                    
                    <motion.div whileTap={{ scale: 0.95 }} className="w-full">
                      <Link
                        href="https://refinery.professionalacademy.com/login/index.php"
                        className="block w-full border border-gray-300 text-gray-700 text-center py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                        onClick={closeAll}
                      >
                        <FaUserCircle className="w-5 h-5" />
                        Student Login
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default ModernNavbar;