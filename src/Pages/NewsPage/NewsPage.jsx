import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function NewsPage() {
  const [data, setData] = useState(null);
  const { id } = useParams();

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    arrows: false,
  };

  function GetNews() {
    axios
      .get(`http://72.60.188.251:9090/api/v1/articles/${id}`)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  }

  useEffect(() => {
    GetNews();
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-semibold">
        جاري التحميل...
      </div>
    );
  }

  return (
    <div dir="rtl" className="max-w-5xl mx-auto px-4 py-10 text-right">
      <div className="relative mb-10">
        <img
          src={data.bannerUrl}
          alt={data.title}
          className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
        />
        <div className="absolute inset-0 bg-black/40 rounded-2xl flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center px-4">
            {data.title}
          </h1>
        </div>
      </div>
      <div className="text-gray-500 text-sm border-t pt-4">
        <span>تاريخ النشر: </span>
        {new Date(data.createdAt).toLocaleDateString("ar-EG")}
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-3 text-gray-800">
          وصف المنتج
        </h2>
        <p className="text-gray-700 leading-relaxed">{data.description}</p>
      </div>

      {data.specificationsSection && (
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            المواصفات
          </h2>
          <ul className="bg-gray-50 rounded-xl shadow-sm p-5 space-y-2 text-gray-700">
            {data.specificationsSection.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-green-600 mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {data.photo && data.photo.length > 0 && (
        <div className="mb-8">
          <Slider {...settings}>
            {data.photo.map((imgUrl, index) => (
              <div key={index}>
                <img
                  src={imgUrl}
                  alt={`News Image ${index + 1}`}
                  className="w-full h-[400px] object-contain bg-gray-50 rounded-xl shadow-md"
                />
              </div>
            ))}
          </Slider>
        </div>
      )}

      {data.priceSection && (
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">الأسعار</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {data.priceSection.map((price, index) => (
              <div
                key={index}
                className="p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <p className="text-gray-800 font-medium">{price}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
