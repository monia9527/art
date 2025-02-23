import { useState } from "react";
import { Link } from "react-router-dom";
import { FaXTwitter, FaPixiv, FaBluesky } from "react-icons/fa6";
import { FaBars } from "react-icons/fa"; 
import { motion } from "framer-motion";

const NavLinks = [
  { id: 1, name: "Major Art Projects", path: "/" },
  { id: 2, name: "Artworks", path: "/artworks" },
  { id: 3, name: "Contact Me", path: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (

    <nav className="sticky top-0 left-0 w-full z-50 bg-gradient-to-r from-[rgb(244,233,219)] to-[#f2dfc5] shadow-md">
      <div className="flex items-center justify-between py-3 max-w-7xl mx-auto px-6">
        
        <div>
          <Link
            to="/"
            className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
          >
            Art Gallery
          </Link>
        </div>

        <ul className="hidden md:flex items-center space-x-8">
          {NavLinks.map((link) => (
            <li key={link.id} className="relative">
              <Link
                to={link.path}
                className="text-gray-800 font-medium py-1 transition-colors duration-300 hover:text-purple-600
                           after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 
                           after:bg-purple-500 hover:after:w-full after:transition-all after:duration-300 after:ease-in-out"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>


        <ul className="hidden md:flex items-center space-x-5">
          <li>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-600 transition-colors duration-300"
            >
              <FaXTwitter size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://www.pixiv.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-600 transition-colors duration-300"
            >
              <FaPixiv size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://bsky.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-600 transition-colors duration-300"
            >
              <FaBluesky size={20} />
            </a>
          </li>
        </ul>

        <button
          className="md:hidden text-gray-800 hover:text-purple-600 transition-colors duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaBars size={24} />
        </button>
      </div>

      <motion.div
        className="md:hidden fixed top-14 left-0 w-full bg-[rgb(244,233,219)] shadow-md"
        initial={{ opacity: 0, y: -20, display: "none" }}
        animate={
          isMenuOpen
            ? { opacity: 1, y: 0, display: "block" }
            : { opacity: 0, y: -20, transitionEnd: { display: "none" } }
        }
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <ul className="flex flex-col space-y-4 p-4">
          {NavLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.path}
                className="text-gray-800 font-medium hover:text-purple-600 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}

          <li className="flex gap-4 pt-2 border-t border-gray-200">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-600 transition-colors duration-300"
            >
              <FaXTwitter size={20} />
            </a>
            <a
              href="https://www.pixiv.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-600 transition-colors duration-300"
            >
              <FaPixiv size={20} />
            </a>
            <a
              href="https://bsky.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-600 transition-colors duration-300"
            >
              <FaBluesky size={20} />
            </a>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
