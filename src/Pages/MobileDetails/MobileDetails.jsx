import {
  faMicrochip,
  faCamera,
  faBatteryHalf,
  faMemory,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Specifications from "../../Components/specifications/specifications";
import AdvAndDisAdv from "../../Components/AdvAndDisAdv/AdvAndDisAdv";
import Price from "../../Components/Price/Price";
import Prices from "../../Components/Price/Price";

export default function MobileDetails() {
  const { id } = useParams();
  const [details, setDetails] = useState(null);

  function fetchMobileDetails() {
    axios
      .get(`http://72.60.188.251:9090/api/v1/mobiles/${id}`)
      .then((response) => {
        setDetails(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetchMobileDetails();
  }, [id]);

  if (!details) {
    return (
      <div className="text-center text-gray-500 mt-10 text-xl font-semibold animate-pulse">
        جاري تحميل البيانات...
      </div>
    );
  }

  return (
    <div className=" bg-[#f3fdff] rounded-3xl min-h-screen py-12 px-4 flex flex-col items-center">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-[#1e3a5f] mt-10 m-5 text-center">
        {details.name} <span className="text-[#3d7ab8]">سعر و مواصفات</span>
      </h1>

      <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start gap-12 w-full bg-white p-8 rounded-3xl shadow-2xl border border-gray-200">
        {/* Image Section */}
        <div className="flex-shrink-0 lg:w-1/3 md:w-full flex flex-col items-center gap-4">
          <img
            src={details.mainImage}
            alt={details.name}
            className="w-[350px] h-auto rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 border border-gray-200"
          />
          <div className="bg-white border border-gray-200 shadow-md rounded-2xl px-6 py-4 lg:w-auto md:w-full leading-relaxed mt-4 text-gray-700">
            <h2 className="text-xl font-bold text-[#1e3a5f] mb-2 border-b border-[#3d7ab8] pb-1 text-center">
              نظرة سريعة
            </h2>
            <p className="text-lg font-medium text-gray-700 text-start">
              {details.shortReviewAr || "لا توجد مراجعة قصيرة متاحة حالياً."}
            </p>
          </div>
        </div>

        {/* Details Section */}
        <div className="flex flex-col items-end gap-6 w-full">
          <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-[#3d7ab8] pb-2 w-fit">
            أبرز المواصفات
          </h2>

          {/* Processor */}
          <div className="flex flex-row-reverse items-center gap-4 bg-gradient-to-r from-[#1e3a5f] to-[#3d7ab8] text-white p-2 rounded-xl shadow-md w-full">
            <FontAwesomeIcon icon={faMicrochip} className="text-3xl" />
            <div className="flex flex-col items-end">
              <h3 className="font-semibold text-lg">المعالج</h3>
              <p className="text-sm">
                {details?.processor?.nameAr || "غير متوفر"}
                {""}
                {details?.processor?.cores
                  ? ` - ${details.processor.cores} نواه`
                  : ""}
                {""}
                {details?.processor?.processSize
                  ? ` - تكنولوجيا ${details.processor.processSize} نانو`
                  : ""}
              </p>
            </div>
          </div>

          {/* RAM */}
          <div className="flex flex-row-reverse items-center gap-4 bg-gradient-to-r from-[#2d5a87] to-[#3d7ab8] text-white p-3 rounded-xl shadow-md w-full">
            <FontAwesomeIcon icon={faMemory} className="text-3xl" />
            <div className="flex flex-col items-end">
              <h3 className="font-semibold text-lg">الذاكرة (RAM)</h3>
              {details?.rams && details.rams.length > 0 ? (
                <p className="text-sm">
                  {details.rams.map((ram) => ram.size).join(" / ")} جيجابايت
                </p>
              ) : (
                <p className="text-sm">غير متوفر</p>
              )}
            </div>
          </div>

          {/* Camera */}
          <div className="flex flex-row-reverse items-center gap-4 bg-gradient-to-r from-[#3d7ab8] to-[#2d5a87] text-white p-2 rounded-xl shadow-md w-full">
            <FontAwesomeIcon icon={faCamera} className="text-3xl" />
            <div className="flex flex-col items-end">
              <h3 className="font-semibold text-lg">الكاميرا</h3>
              <p className="text-sm">
                {details?.cameraDetailsAR[0] || "غير متوفر"}
              </p>
            </div>
          </div>

          {/* Battery */}
          <div className="flex flex-row-reverse items-center gap-4 bg-gradient-to-r from-[#1e3a5f] to-[#3d7ab8] text-white p-3 rounded-xl shadow-md w-full">
            <FontAwesomeIcon icon={faBatteryHalf} className="text-3xl" />
            <div className="flex flex-col items-end">
              <h3 className="font-semibold text-lg mb-1">البطارية</h3>
              {details?.battery ? (
                <div className="flex gap-2 text-sm leading-relaxed text-right">
                  <p>النوع: {details.battery.type || "غير متوفر"}</p>
                  <p>
                    السعة: {details.battery.capacityMah || "غير متوفر"} ملّي
                    أمبير
                  </p>
                </div>
              ) : (
                <p className="text-sm">غير متوفر</p>
              )}
            </div>
          </div>

          {/* Screen */}
          <div className="flex flex-row-reverse items-center gap-4 bg-gradient-to-r from-[#2d5a87] to-[#1e3a5f] text-white p-3 rounded-xl shadow-md w-full">
            <FontAwesomeIcon icon={faMobileAlt} className="text-3xl" />
            <div className="flex flex-col items-end">
              <h3 className="font-semibold text-lg">الشاشة</h3>
              <p className="text-sm text-right">
                {details?.screen?.type || "غير متوفر"} •{" "}
                {details?.screen?.size || "غير متوفر"} بوصة •{" "}
                {details?.screen?.resolutionAr || "غير متوفر"} •{" "}
                {details?.screen?.refreshRate
                  ? `${details.screen.refreshRate}Hz`
                  : "غير متوفر"}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Specifications details={details} />
      <AdvAndDisAdv details={details} />
      <Price details={details} />
    </div>
  );
}
