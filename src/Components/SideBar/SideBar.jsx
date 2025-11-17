import { faSearch, faTags } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import TopRating from "../TopRating/TopRating";
import { useNavigate } from "react-router-dom";

export default function BrandsGallery() {
  const [brands, setBrands] = useState([]);
  const navigate = useNavigate();

  function getBrands() {
    axios.get(`https://api.mobily.cloud/api/v1/brands`).then((response) => {
      setBrands(response.data.content || []);
    });
  }

  useEffect(() => {
    axios
      .get(`http://72.60.188.251:9090/api/v1/brands`)
      .then((response) => setBrands(response.data.content || []));
  }, []);

  return (
    <section className="px-6 py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-gray-800 flex items-center justify-center gap-2 mb-8">
        <FontAwesomeIcon icon={faTags} className="text-blue-500 text-2xl" />
        <span>أشهر الماركات</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center transition-transform duration-200 hover:scale-105"
            onClick={() => {
              navigate(`/Allmobiles`, { state: { brand: brand.brand } });
            }}
          >
            <div className="w-[70px] h-[70px] rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center overflow-hidden hover:shadow-md transition-all">
              <img
                src={brand.logoUrl}
                alt={brand.brand}
                className="object-contain w-[80%] h-[80%] rounded-full"
              />
            </div>
            <p className="text-xs font-semibold text-gray-700 mt-2">
              {brand.brand}
            </p>
          </div>
        ))}
      </div>

      {/* البحث */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 flex items-center justify-center gap-2">
          <FontAwesomeIcon icon={faSearch} className="text-blue-500" />
          <span>البحث عن جهاز</span>
        </h2>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex justify-center items-center gap-2"
        >
          <div className="relative w-full max-w-md">
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              name="search"
              type="text"
              placeholder="ابحث عن منتج..."
              className="w-full bg-white border border-gray-300 rounded-full py-2 pl-10 pr-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-700 transition-all"
          >
            بحث
          </button>
        </form>
      </div>

      <TopRating />
    </section>
  );
}
