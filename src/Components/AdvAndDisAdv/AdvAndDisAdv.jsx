export default function AdvAndDisAdv({ details }) {
  return (
    <div className="bg-white border border-gray-200 shadow-md rounded-2xl px-6 py-5 max-w-3xl mx-auto mt-6 text-gray-800">
      <h2 className="text-2xl font-bold text-center text-[#1e3a5f] mb-6 border-b-2 border-[#3d7ab8] pb-2 w-fit mx-auto">
        المميزات و العيوب
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* ✅ المميزات */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 shadow-sm">
          <h3 className="text-xl font-semibold text-green-700 mb-3 flex items-center gap-2">
            ✅ المميزات
          </h3>
          {details.advantageAR?.length > 0 ? (
            <ul className="list-disc list-inside space-y-2">
              {details.advantageAR.map((item, index) => (
                <li key={index} className="text-gray-700 leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 text-sm">
              لا توجد مميزات متاحة حالياً.
            </p>
          )}
        </div>

        {/* ❌ العيوب */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 shadow-sm">
          <h3 className="text-xl font-semibold text-red-700 mb-3 flex items-center gap-2">
            ❌ العيوب
          </h3>
          {details.disadvantageAR?.length > 0 ? (
            <ul className="list-disc list-inside space-y-2">
              {details.disadvantageAR.map((item, index) => (
                <li key={index} className="text-gray-700 leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 text-sm">لا توجد عيوب متاحة حالياً.</p>
          )}
        </div>
      </div>
    </div>
  );
}
