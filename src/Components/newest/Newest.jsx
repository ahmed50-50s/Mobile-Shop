import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Newest() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://72.60.188.251:9090/api/v1/mobiles/latest")
      .then((response) => {
        setData(response.data.content || []);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <div className="px-4 py-8">
      <h1
        className="font-bold text-3xl sm:text-4xl md:text-5xl mb-8 text-center"
        style={{ fontFamily: "sans-serif" }}
      >
        أحدث الموبايلات{" "}
        <FontAwesomeIcon
          icon={faMobileScreenButton}
          className="ml-2 text-blue-500"
        />
      </h1>

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
        {data.map((item) => (
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

      {/* زرار شاهد المزيد */}
      <div className="flex justify-center mt-10">
        <button
          className="
            py-3 
            px-8 
            bg-gradient-to-r from-[#1e3a5f] via-[#2d5a87] to-[#3d7ab8] 
            text-white 
            font-bold 
            text-lg 
            rounded-full 
            shadow-lg 
            hover:opacity-90 
            hover:scale-105 
            transition-all 
            duration-300
          "
          onClick={() => navigate("/Allmobiles")}
        >
          شاهد المزيد
        </button>
      </div>
    </div>
  );
}
