import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              TechStore
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your premium destination for the latest tech gadgets and
              electronics.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <div className="space-y-2">
              <Link
                to="/"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                to="/products"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Products
              </Link>
              <Link
                to="/cart"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Cart
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Categories</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>Laptops</p>
              <p>Smartphones</p>
              <p>Audio</p>
              <p>Gaming</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Connect</h4>
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/mehran-chaudhary"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.2, y: -3 }}
              >
                <FaGithub className="text-2xl" />
              </motion.a>
              <motion.a
                href="mailto:mehran.dev.au@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.2, y: -3 }}
              >
                <FaEnvelope className="text-2xl" />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
            Built with <FaHeart className="text-red-500" /> by Mehran Akhtar •
            BSCS 5th Semester • Air University, Islamabad
          </p>
          <p className="text-gray-500 text-xs mt-2">
            © 2024 TechStore • React Lab Task • All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
