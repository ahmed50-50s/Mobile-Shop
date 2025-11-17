import { useEffect } from "react";
import Hero from "../../Components/Hero/Hero";
import Newest from "../../Components/newest/Newest";
import News from "../../Components/News/News";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full">
      <div className="lg:flex lg:flex-row-reverse md:block gap-6 px-4 w-full">
        <div>
          <div data-aos="fade-up">
            <Hero />
          </div>

          <div data-aos="zoom-in">
            <Newest />
          </div>

          <div data-aos="fade-up">
            <News />
          </div>

          <div data-aos="fade-up">
            <Newest />
          </div>
        </div>
      </div>
    </div>
  );
}
