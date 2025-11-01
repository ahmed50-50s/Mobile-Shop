import { useEffect, useState } from "react";
import banner from "../../assets/images/banner.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SearchMobiles from "../../Components/SearchMobiles/SearchMobiles";

export default function AllMobiles() {
  const [mobiles, setMobiles] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [isSearching, setIsSearching] = useState(false);

  const navigate = useNavigate();

  function getMobiles() {
    axios
      .get(
        `http://72.60.188.251:9090/api/v1/mobiles?page=${pageNumber}&size=15`
      )
      .then((response) => {
        setMobiles(response.data.content || []);
        setTotalPages(response.data.totalPages || 0);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    getMobiles();
  }, [pageNumber]);

  const handlePageClick = (page) => {
    if (page >= 0 && page < totalPages) {
      setPageNumber(page);
    }
  };

  // توليد شكل الأرقام 1 2 3 4 ... 22
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 4;
    const lastPage = totalPages - 1;

    if (totalPages <= 6) {
      for (let i = 0; i < totalPages; i++) pages.push(i);
    } else {
      if (pageNumber <= maxVisible) {
        for (let i = 0; i <= maxVisible; i++) pages.push(i);
        pages.push("...");
        pages.push(lastPage);
      } else if (pageNumber >= lastPage - maxVisible) {
        pages.push(0);
        pages.push("...");
        for (let i = lastPage - maxVisible; i <= lastPage; i++) pages.push(i);
      } else {
        pages.push(0);
        pages.push("...");
        for (let i = pageNumber - 1; i <= pageNumber + 1; i++) pages.push(i);
        pages.push("...");
        pages.push(lastPage);
      }
    }
    return pages;
  };

  return (
    <>
      <div className="relative w-full h-[50vh]">
        <img
          src={banner}
          alt="banner"
          className="w-full h-full object-cover brightness-50 rounded-3xl"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            كل اللي محتاجه هتلاقيه عندنا
          </h1>
          <p className="text-lg md:text-2xl font-medium mt-4">
            أحدث الموبايلات بأفضل الأسعار
          </p>
        </div>
      </div>

      <SearchMobiles setMobiles={setMobiles} isSearching={setIsSearching} />

      <div className="px-4 py-8">
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            gap-6
            justify-items-center
            "
        >
          {mobiles.map((item) => (
            <div
              onClick={() => navigate(`/mobile/${item.id}`)}
              key={item.id}
              className="
              border border-gray-200 
              rounded-xl 
              shadow-md 
              p-4 
              hover:shadow-lg 
              hover:scale-105 
              transition-transform 
              duration-300 
              w-full 
              max-w-[250px]
              text-center
              bg-white
              h-auto
              relative
              cursor-pointer
            "
            >
              <img
                src={item.mainImage}
                alt={item.name}
                className="w-full h-48 object-contain mb-4"
              />
              <p className="text-gray-600 text-sm">سعر و مواصفات</p>
              <h2 className="text-lg font-semibold mb-2 text-[#1e3a5f]">
                {item.name}
              </h2>
              <div
                className="absolute top-0 left-0 z-10 bg-gradient-to-r from-[#1e3a5f] via-[#2d5a87] to-[#3d7ab8] shadow-lg text-white w-auto px-2 py-1 text-center"
                style={{
                  borderTopRightRadius: "50%",
                  borderBottomRightRadius: "50%",
                }}
              >
                <p>{item.brand}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-10">
          <button
            onClick={() => handlePageClick(pageNumber - 1)}
            disabled={pageNumber === 0}
            className={`px-3 py-1 rounded-full border ${
              pageNumber === 0
                ? "text-gray-400 border-gray-200 cursor-not-allowed"
                : "text-[#1e3a5f] border-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white transition"
            }`}
          >
            السابق
          </button>

          {!isSearching &&
            getPageNumbers().map((num, index) =>
              num === "..." ? (
                <span key={index} className="px-2 text-gray-500">
                  ...
                </span>
              ) : (
                <button
                  key={index}
                  onClick={() => handlePageClick(num)}
                  className={`px-4 py-2 rounded-full border transition ${
                    pageNumber === num
                      ? "bg-[#1e3a5f] text-white border-[#1e3a5f]"
                      : "border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {num + 1}
                </button>
              )
            )}
          {!isSearching && (
            <button
              onClick={() => handlePageClick(pageNumber + 1)}
              disabled={pageNumber === totalPages - 1}
              className={`px-3 py-1 rounded-full border ${
                pageNumber === totalPages - 1
                  ? "text-gray-400 border-gray-200 cursor-not-allowed"
                  : "text-[#1e3a5f] border-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white transition"
              }`}
            >
              التالي
            </button>
          )}
        </div>
      </div>
    </>
  );
}
