import { faTags, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Price({ details }) {
  return (
    <div className="bg-white border border-gray-200 shadow-lg rounded-2xl px-6 py-8 max-w-4xl mx-auto mt-10 text-gray-800">
      <h2 className="text-3xl font-extrabold text-[#1e3a5f] text-center mb-8 border-b-4 border-[#3d7ab8] pb-3 inline-block">
        <FontAwesomeIcon icon={faTags} className="ml-2 text-[#3d7ab8]" />
        الأسعار
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
        {details.prices?.map((item, index) => (
          <div
            key={item.id}
            className="bg-gray-50 border border-gray-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all"
          >
            <h3 className="text-xl font-bold text-[#2d5a87] mb-2">
              {item.countryAr}
            </h3>

            <p className="text-2xl font-extrabold text-[#1e3a5f] mb-1">
              {item.amount.toLocaleString()} {item.currency}
            </p>

            <p className="text-sm text-gray-600 mb-4">
              السعة: {item.storageCapacity.replace("GB", "")} جيجابايت
            </p>

            <Link
              to={details.linksForBuy[index]}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#3d7ab8] text-white font-medium py-2 px-4 rounded-lg hover:bg-[#2d5a87] transition"
            >
              <FontAwesomeIcon icon={faShoppingCart} />
              اشترِ الآن
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
