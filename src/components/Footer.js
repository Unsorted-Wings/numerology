import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#026d02] text-white py-6 px-10">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <p className="text-left text-white text-sm sm:text-base">
          &copy; 2024 Numerologist. All Rights Reserved.
        </p>
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-white hover:text-[#FFD700] transition-colors duration-300"
          >
            <FaFacebook className="h-8 w-8" />
          </a>
          <a
            href="#"
            className="text-white hover:text-[#FFD700] transition-colors duration-300"
          >
            <FaTwitter className="h-8 w-8" />
          </a>
          <a
            href="#"
            className="text-white hover:text-[#FFD700] transition-colors duration-300"
          >
            <FaInstagram className="h-8 w-8" />
          </a>
        </div>
      </div>
    </footer>
  );
}
