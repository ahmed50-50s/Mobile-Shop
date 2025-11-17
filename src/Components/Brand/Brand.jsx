import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Brand({ mobiles, brand, setMobiles, isSearching }) {
  const brands = [
    "SAMSUNG",
    "APPLE",
    "HUAWEI",
    "XIAOMI",
    "OPPO",
    "VIVO",
    "REALME",
    "ONEPLUS",
    "GOOGLE",
    "HONOR",
    "NOKIA",
    "SONY",
    "LENOVO",
    "MOTOROLA",
    "ASUS",
    "LG",
    "HTC",
    "ZTE",
    "TECNO",
    "INFINIX",
    "MICROSOFT",
    "ALCATEL",
    "MEIZU",
    "NOTHING",
    "UMIDIGI",
    "COOLPAD",
    "OSCAL",
    "SHARP",
    "MICROMAX",
    "ULEFONE",
    "DOOGEE",
    "BLACKVIEW",
    "CUBOT",
    "OUKITEL",
    "ITEL",
    "TCL",
  ];

  const [selectedBrand, setSelectedBrand] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function fetchMobiles() {
    axios
      .get(`http://72.60.188.251:9090/api/v1/mobiles/brand/${selectedBrand}`)
      .then((response) => {
        setMobiles(response.data.content);
        console.log(response.data.content);
        isSearching(true);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  useEffect(() => {
    if (brand) {
      setSelectedBrand(brand);
      fetchMobiles();
    }
  }, [brand, mobiles]);

  useEffect(() => {
    if (selectedBrand) {
      fetchMobiles();
    }
  }, [selectedBrand]);

  return (
    <div className="p-6">
      <div className="flex justify-center  relative">
        <div
          className="relative"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <button className="w-[180px] px-8 py-3 flex items-center justify-between gap-3 text-white font-semibold rounded-lg shadow-lg bg-gradient-to-r from-[#1e3a5f] via-[#2d5a87] to-[#3d7ab8] transition-transform transform hover:scale-105 duration-300">
            {selectedBrand ? selectedBrand : "اختر الماركة"}
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`w-4 h-4 text-white transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isOpen && (
            <div className="absolute left-1/2 -translate-x-1/2  w-64 bg-white border border-gray-200 rounded-xl shadow-xl transition-all duration-300 z-50 max-h-72 overflow-y-auto animate-fadeIn">
              {brands.map((brand) => (
                <div
                  key={brand}
                  onClick={() => {
                    setSelectedBrand(brand);
                    setIsOpen(false);
                  }}
                  className={`px-4 py-2 cursor-pointer text-gray-700 hover:bg-gradient-to-r hover:from-[#2d5a87] hover:to-[#3d7ab8] hover:text-white text-center ${
                    selectedBrand === brand ? "bg-blue-50 font-semibold" : ""
                  }`}
                >
                  {brand}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
