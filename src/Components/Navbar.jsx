import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiPhone, HiChevronDown, HiX } from "react-icons/hi";
import Logo from "../assets/Logo1.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false); 
  const navRef = useRef();
  const location =useLocation()

  useGSAP(() => {
    gsap.from(".anim", {
      duration: 1,
      y: -100,
      opacity: 0,
      filter: "blur(10px)",
      stagger: 0.05,
    });
  });

// scrool to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]); // Run this effect whenever the location changes



  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "Donation",
      path: "#",
      dropdown: [
        { name: "Donation", path: "/donation" },
        { name: "Donation Causes", path: "/donation-causes" },
        { name: "Direct Donation", path: "/direct-donation" },
      ],
    },
    { name: "Our Vision", path: "/vision" },
    { name: "Event", path: "/event" },
    { name: "About Us", path: "/about" },
    { name: "Contacts", path: "/contact" },
  ];

  return (
    <nav
      ref={navRef}
      className="fixed top-0 font-bold left-0 right-0 z-50 anim bg-white shadow-md h-18"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={Logo} alt="Shakti Logo" className="h-16 anim w-16" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navLinks.map((link, index) => (
              <div
                key={link.name}
                className="relative anim"
                onMouseEnter={() => setDropdownOpen(index)}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                {link.dropdown ? (
                  <>
                    <button className="text-gray-800 hover:text-orange-600 flex items-center space-x-1">
                      <span>{link.name}</span>
                      <HiChevronDown className="h-4 w-4" />
                    </button>
                    {dropdownOpen === index && (
                      <div className="absolute top-full left-0 w-48 bg-white rounded-md shadow-lg py-2">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className="text-gray-800 hover:text-orange-600"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Contact and Donate */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <a
              href="tel:+1 503 519 4060"
              className="text-gray-800 flex items-center anim space-x-2"
            >
              <HiPhone className="h-5 w-5" />
              <span>+1 503 519 4060</span>
            </a>
            <Link
              to="/donate"
              className="bg-yellow-500 text-black px-6 py-2 rounded-md font-medium anim hover:bg-yellow-400 transition-colors"
            >
              DONATE
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-800"
          >
            {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name} className="space-y-1">
                  {/* Click to open dropdown */}
                  <button
                    className="text-gray-800 px-3 py-2 font-medium w-full text-left flex justify-between items-center"
                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                  >
                    {link.name}
                    <HiChevronDown
                      className={`h-4 w-4 transition-transform ${
                        mobileDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {/* Show dropdown when clicked */}
                  {mobileDropdownOpen && (
                    <div className="pl-4 space-y-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="text-gray-600 hover:text-gray-800 block px-3 py-2"
                          onClick={() => {
                            setIsOpen(false);
                            setMobileDropdownOpen(false);
                          }}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-gray-800 hover:text-yellow-500 block px-3 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              )
            )}
            <div className="px-3 py-2">
              <Link
                to="/donate"
                className="block w-full text-center bg-yellow-500 text-black px-6 py-2 rounded-md font-medium hover:bg-yellow-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                DONATE
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
