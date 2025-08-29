// app/components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaBars, FaChevronDown } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

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

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    const handleResize = () => setNavOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="https://www.professionalacademy.com/">
          <motion.img
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            src="https://cpawebsiteimages.blob.core.windows.net/publicimages/SVGs/Webp%20Files/Our%20Team/icon.webp"
            alt="Professional Academy logo"
            className="h-12 w-auto md:h-16"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              {item.subItems ? (
                <>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center text-blue-800 font-medium hover:text-orange-500 transition-colors duration-300"
                  >
                    {item.name}
                    <FaChevronDown className="ml-1 text-sm" />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
                      >
                        {item.subItems.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block px-6 py-3 text-blue-800 hover:bg-blue-50 transition-colors duration-200 border-b border-gray-100 last:border-b-0"
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
                  className="text-blue-800 font-medium hover:text-orange-500 transition-colors duration-300"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            <FaPhoneAlt className="text-orange-500" />
            <Link href="tel:01223365505" className="text-blue-800 hover:text-orange-500 transition-colors duration-300">
              01223 365 505
            </Link>
          </div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="https://calendly.com/lewis-walker-1"
              className="bg-orange-500 text-white px-4 py-2 rounded-xl font-medium hover:bg-orange-600 transition-colors duration-300 shadow-md"
            >
              Book a Call
            </Link>
          </motion.div>

          <Link href="https://refinery.professionalacademy.com/login/index.php" className="text-blue-800 hover:text-orange-500 transition-colors duration-300">
            <FaEnvelope className="w-6 h-6" />
          </Link>

          <button
            className="lg:hidden text-2xl text-blue-800"
            onClick={() => setNavOpen(!navOpen)}
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="container mx-auto px-4 py-4">
              {navItems.map((item) => (
                <div key={item.name} className="mb-3 last:mb-0">
                  {item.subItems ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center justify-between w-full text-blue-800 font-medium py-2"
                      >
                        {item.name}
                        <FaChevronDown className={`transform transition-transform ${activeDropdown === item.name ? "rotate-180" : ""}`} />
                      </button>

                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 mt-2 space-y-2"
                          >
                            {item.subItems.map((sub) => (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                className="block py-2 text-blue-700 hover:text-orange-500"
                                onClick={() => setNavOpen(false)}
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
                      className="block text-blue-800 font-medium py-2"
                      onClick={() => setNavOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              <div className="pt-4 border-t border-gray-200 mt-4">
                <div className="flex items-center gap-2 mb-3">
                  <FaPhoneAlt className="text-orange-500" />
                  <Link href="tel:01223365505" className="text-blue-800">
                    01223 365 505
                  </Link>
                </div>
                <Link
                  href="mailto:info@professionalacademy.com"
                  className="text-blue-800 hover:text-orange-500"
                >
                  info@professionalacademy.com
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;