import { FaXTwitter, FaPixiv, FaBluesky } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[rgb(70,73,62)] text-white py-6">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-lg font-semibold text-blue-400">Connect</h3>
        <ul className="mt-2 space-y-1 text-gray-300">
          <li>Tokyo, Japan</li>
          <li>
            <a href="mailto:zzy624872@gmail.com" className="hover:text-blue-200">
              zzy624872@gmail.com
            </a>
          </li>
          <li>
            <a href="tel:+817010705134" className="hover:text-blue-200">
              +81 70 1070 5134
            </a>
          </li>
        </ul>

        <div className="flex justify-center gap-6 mt-4 text-blue-400">
          <a href="https://www.pixiv.net/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">
            <FaPixiv size={28} />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">
            <FaXTwitter size={28} />
          </a>
          <a href="https://bsky.app/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">
            <FaBluesky size={28} />
          </a>
        </div>

        <p className="mt-4 text-gray-400 text-sm">
          © {new Date().getFullYear()} Zhou Zhanyu | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;