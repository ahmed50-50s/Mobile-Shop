import {
  faMobileScreenButton,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function News() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  function NewsData() {
    axios
      .get(`http://72.60.188.251:9090/api/v1/articles/latest`)
      .then((response) => {
        setData(response.data.content || []);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }

  useEffect(() => {
    NewsData();
  }, []);

  const mainArticle = data[0];
  const otherArticles = data.slice(1, 6);

  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <h1
        className="font-bold text-3xl sm:text-4xl md:text-5xl mb-8 text-center"
        style={{ fontFamily: "sans-serif" }}
      >
        احدث اخبار الهواتف{" "}
        <FontAwesomeIcon icon={faNewspaper} className="ml-2 text-blue-500" />
      </h1>

      {mainArticle && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-xl group">
            <img
              src={mainArticle.bannerUrl}
              alt={mainArticle.title}
              className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 flex flex-col justify-end">
              <h3 className="text-white text-3xl font-bold mb-2 line-clamp-2">
                {mainArticle.title}
              </h3>
              <p className="text-gray-200 text-sm line-clamp-3">
                {mainArticle.content}
              </p>
              <button
                onClick={() => {
                  navigate(`/News/${mainArticle.id}`);
                }}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full self-start hover:bg-blue-700 transition"
              >
                اقرأ المزيد
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            {otherArticles.map((item, index) => (
              <div
                key={index}
                className="flex items-center bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
                onClick={() => {
                  navigate(`/News/${item.id}`);
                }}
              >
                <img
                  src={item.bannerUrl}
                  alt={item.title}
                  className="w-32 h-24 object-cover"
                />
                <div className="p-3">
                  <h4 className="text-gray-800 font-semibold text-md mb-1 line-clamp-2 hover:text-blue-600 transition">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
