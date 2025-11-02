import { faSearch, faTags } from "@fortawesome/free-solid-svg-icons";
import { faStore } from "@fortawesome/free-solid-svg-icons/faStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import TopRating from "../TopRating/TopRating";

export default function BrandsGallery() {
  const [NumOfbrands, setNumOfBrands] = useState(15);
  const [search, setSearch] = useState("");
  const [brands, setBrands] = useState([]);

  function getBrands() {
    axios.get(`https://api.mobily.cloud/api/v1/brands`).then((response) => {
      setBrands(response.data.content || []);
    });
  }

  useEffect(() => {
    getBrands();
  }, []);
  function showMore() {
    NumOfbrands == 15 ? setNumOfBrands(100) : setNumOfBrands(15);
  }

  return (
    <section className="px-6 py-10 bg-[#f3fdff]">
      <h2
        className="text-3xl font-bold text-center mb-8 text-gray-800"
        style={{ fontFamily: "sans-serif" }}
      >
        اشهر الماركات
        <FontAwesomeIcon icon={faTags} className="ml-2 text-blue-500" />
      </h2>

      <div
        className="
         flex flex-wrap
         justify-center
         gap-2
        "
      >
        {brands.slice(0, NumOfbrands).map((brand, index) => (
          <div
            className="
              text-center 
              text-lg 
              font-semibold 
              text-gray-700

              transition-all 
              duration-300
              cursor-pointer
              py-1 px-2
              justify-center
              w-1/4
              h-auto

              flex flex-col items-center
            "
          >
            <div
              key={index}
              className="
              border border-gray-200 
              rounded-lg 
              shadow-md 
              text-center 
              text-lg 
              font-semibold 
              text-gray-700
              bg-white 
              hover:bg-blue-50 
              hover:text-blue-600
              hover:shadow-lg 
              hover:scale-105 
              transition-all 
              duration-300
              cursor-pointer
              py-4 px-2
              w-[80px]
              h-[70px]
              rounded-full
              flex items-center justify-center
            "
            >
              <img
                src={brand.logoUrl}
                alt={brand.brand}
                className="w-full rounded-full"
              />
            </div>
            <h3 className="m-3">{brand.brand}</h3>
          </div>
        ))}

        <button
          onClick={showMore}
          className=" w-full py-2 px-4 mt-4 z-2 bg-gradient-to-r from-[#1e3a5f] via-[#2d5a87] to-[#3d7ab8] shadow-lg backdrop-blur-md text-white rounded-xl"
        >
          {NumOfbrands == 15 ? " شاهد المزيد" : " شاهد اقل"}
        </button>
      </div>

      <div className="mt-12">
        <h2
          className="text-3xl font-bold text-center mb-8 text-gray-800"
          style={{ fontFamily: "sans-serif" }}
        >
          البحث عن جهاز
          <FontAwesomeIcon icon={faSearch} className="ml-2 text-blue-500" />
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const value = e.target.search.value;
            setSearch(value);
            console.log(value);
          }}
          className="flex justify-center items-center gap-3"
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
              className="w-full bg-white border border-gray-300 rounded-full py-2 pl-10 pr-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
            />
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:scale-105 transition"
          >
            بحث
          </button>
        </form>
      </div>
      <TopRating />
    </section>
  );
}
