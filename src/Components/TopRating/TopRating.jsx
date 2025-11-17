import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { Rating } from "@mui/material";

export default function TopRating() {
  const [data, setData] = useState([]);
  const [topRating, setTopRating] = useState([]);
  const ratingMap = {
    ONE_STAR: 1,
    TWO_STARS: 2,
    THREE_STARS: 3,
    FOUR_STARS: 4,
    FIVE_STARS: 5,
  };

  function fetchData() {
    axios
      .get(`https://api.mobily.cloud/api/v1/mobiles`)
      .then((response) => {
        setData(response.data.content || []);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }

  function fetchTopRating() {
    const sortedData = [...data].sort(
      (a, b) => ratingMap[b.rating] - ratingMap[a.rating]
    );
    setTopRating(sortedData);
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchTopRating();
  }, [data]);

  return (
    <>
      <div>
        <h2
          className="text-3xl font-bold text-center mb-8 mt-10 text-gray-800"
          style={{ fontFamily: "sans-serif" }}
        >
          اعلي التقييمات
          <FontAwesomeIcon icon={faStar} className="ml-2 text-blue-500" />
        </h2>
        {topRating.slice(0, 5).map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 mb-4 p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
          >
            <img
              src={item.mainImage || "https://via.placeholder.com/100"}
              alt={item.name}
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div>
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <div className="flex items-center gap-2">
                <Rating
                  name="mobile-rating"
                  defaultValue={ratingMap[item.rating]}
                  precision={0.5}
                  readOnly
                  sx={{ color: "#fbbf24" }}
                />
                <span className="text-sm text-gray-600">
                  {`(${ratingMap[item.rating]}/5)`}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
