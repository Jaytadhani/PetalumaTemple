import { Link } from "react-router-dom"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-[#2B1216] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Working Hours Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Temple Time</h3>
            <div className="space-y-2">
              <p>Mon-Fri: 9 AM – 6 PM</p>
              <p>Saturday: 9 AM – 4 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          {/* Office Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Office</h3>
            <div className="space-y-2">
              <p>California —</p>
              <p>2 Hiil Drive, </p>
              <p>Petaluma, USA-94952</p>
              <p className="mt-4">jayshreesitarama@gmail.com</p>
              <p className="text-lg font-semibold mt-4">+1 503 519 4060</p>
            </div>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <nav className="space-y-2">
              <Link to="/" className="block hover:text-gray-300">
                Home
              </Link>
              <Link to="/donation" className="block hover:text-gray-300">
                Donation
              </Link>
              <Link to="/event" className="block hover:text-gray-300">
                Events
              </Link>
              <Link to="/about" className="block hover:text-gray-300">
                About Us
              </Link>

              <Link to="/contact" className="block hover:text-gray-300">
                Contacts
              </Link>
            </nav>
          </div>

          {/* Get In Touch Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">
                <FaFacebookF className="w-6 h-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="hover:text-gray-300">
                <FaTwitter className="w-6 h-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="hover:text-gray-300">
                <FaInstagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="hover:text-gray-300">
                <FaLinkedinIn className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-400">
            RamDoota.us © 2025. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

