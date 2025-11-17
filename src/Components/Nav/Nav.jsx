import { useState } from "react";
import remo from "../../assets/images/remo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <nav
      className="fixed top-0 w-full z-50 bg-gradient-to-r from-[#1e3a5f] via-[#2d5a87] to-[#3d7ab8] shadow-lg backdrop-blur-md text-white"
      dir="rtl"
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
          <div className="overflow-hidden rounded-full">
            <img
              src={remo}
              alt="Logo"
              className="w-35 h-12 m-4 hover:scale-110 transition-transform duration-300"
            />
          </div>
        </Link>

        {/* Menu Button Mobile */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          menu
        </button>

        {/* Menu */}
        <div
          className={`
        md:flex md:items-center md:gap-4 
        md:static md:h-auto md:w-auto
        fixed top-20 right-0
        w-3/4 h-screen p-6
        bg-[#1e3a5fd9] md:bg-transparent
        rounded-l-lg md:rounded-none
        shadow-lg md:shadow-none
        transform transition-transform duration-500 ease-in-out
        ${menuOpen ? "translate-x-0" : "translate-x-full"}
        md:translate-x-0
      `}
        >
          {/* Links */}
          <ul className="flex flex-col md:flex-row md:items-center gap-4 md:gap-2">
            <li>
              <a className="block px-4 py-2 rounded-full hover:bg-[#6dd5b530] transition">
                الرئيسية
              </a>
            </li>

            <li>
              <a className="block px-4 py-2 rounded-full hover:bg-[#6dd5b530] transition">
                العروض
              </a>
            </li>

            {/* Dropdown */}
            <li className="relative group">
              <button className="block px-4 py-2 rounded-full hover:bg-[#6dd5b530] transition">
                <FontAwesomeIcon icon={faMobileScreenButton} /> أنواع الموبايلات
              </button>

              <ul className="absolute hidden group-hover:block bg-white text-gray-800 rounded-lg shadow-xl min-w-[200px] mt-2 p-2 z-50">
                <li className="px-3 py-2 font-semibold text-[#1e3a5f]">
                  انواع الموبايلات
                </li>
                <li>
                  <a className="block px-3 py-2 hover:bg-gray-100 rounded-md">
                    Samsung
                  </a>
                </li>
                <li>
                  <a className="block px-3 py-2 hover:bg-gray-100 rounded-md">
                    Apple
                  </a>
                </li>
                <li>
                  <a className="block px-3 py-2 hover:bg-gray-100 rounded-md">
                    Oppo
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a className="block px-4 py-2 rounded-full hover:bg-[#6dd5b530] transition">
                تواصل معنا
              </a>
            </li>
          </ul>

          {/* Search */}
          <div className="relative mt-6 md:mt-0 md:ml-3 w-full md:w-64">
            <input
              type="text"
              placeholder="ابحث عن منتج..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setSearchOpen(true);
              }}
              onFocus={() => setSearchOpen(true)}
              onBlur={() => setTimeout(() => setSearchOpen(false), 200)}
              className="bg-white/20 border border-white/40 rounded-full py-2 pr-4 pl-10 text-white placeholder-white/80 focus:outline-none focus:bg-[#6dd5b530] focus:border-[#6dd5b580] transition w-full"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
