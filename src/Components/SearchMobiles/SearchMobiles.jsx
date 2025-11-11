import axios from "axios";
import { useState } from "react";

export default function SearchMobiles({ setMobiles, isSearching }) {
  const [search, setSearch] = useState("");

  function SearchData(e) {
    e.preventDefault();

    if (!search.trim()) return; // لو البحث فاضي متعملش حاجة

    axios
      .get(`https://api.mobily.cloud/api/v1/mobiles/search?keyword=${search}`)
      .then((response) => {
        setMobiles(response.data.content || []);
        isSearching(true);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }

  return (
    <div className="w-full flex justify-center px-4">
      <form
        onSubmit={SearchData}
        className="w-full max-w-md flex items-center bg-white rounded-full shadow-md border border-gray-200 overflow-hidden"
      >
        <input
          type="text"
          placeholder="ابحث عن الموبايل الذي تريده..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-5 py-3 text-gray-700 focus:outline-none text-sm sm:text-base"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 font-medium hover:bg-blue-700 transition-all duration-200"
        >
          بحث
        </button>
      </form>
    </div>
  );
}
