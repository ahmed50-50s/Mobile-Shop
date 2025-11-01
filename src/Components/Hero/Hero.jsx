import news from "../../assets/images/news.jpg";

export default function Hero() {
  return (
    <header
      className="relative flex items-end h-[70vh] w-full bg-cover bg-center rounded-xl mt-5 mx-auto overflow-hidden"
      style={{ backgroundImage: `url(${news})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-xl" />

      <article className="relative z-10 max-w-3xl w-full p-6 m-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          كيف يهدد الذكاء الاصطناعى مبيعات هواتف أيفون 17؟
        </h2>
        <p className="text-sm md:text-base text-gray-200/90 line-clamp-3 mb-4">
          المشكلة الكبرى التي تواجه آبل هي تأخر قسم الذكاء الاصطناعي لديها، إذ
          يوصف بأنه "متأخر بسنوات". فمساعدها الذكي سيري لم يشهد التحسينات
        </p>

        <div className="flex gap-3">
          <a
            href="#"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition"
          >
            اقرأ المقال
          </a>
          <a
            href="#"
            className="inline-block border border-white/20 text-white px-4 py-2 rounded-md hover:bg-white/10 transition"
          >
            مشاركة
          </a>
        </div>
      </article>
    </header>
  );
}
