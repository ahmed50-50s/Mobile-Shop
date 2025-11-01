import logo from "../../assets/images/remo.png";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full z-50 bg-gradient-to-r from-[#1e3a5f] via-[#2d5a87] to-[#3d7ab8] shadow-lg backdrop-blur-md text-white py-6">
        <img src={logo} alt="logo" width={150} className="mb-4 rounded-full" />

        <div className="flex gap-6 text-2xl">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-400 transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-sky-400 transition-colors"
          >
            <FaTwitter />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red-500 transition-colors"
          >
            <FaYoutube />
          </a>
        </div>

        <p className="mt-4 text-sm text-gray-200">
          © {new Date().getFullYear()} Remo. All rights reserved.
        </p>
      </div>
    </>
  );
}
