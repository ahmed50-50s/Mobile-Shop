import Hero from "../../Components/Hero/Hero";
import Newest from "../../Components/newest/Newest";
import News from "../../Components/News/News";

export default function Home() {
  return (
    <div className="w-full">
      <div className="lg:flex lg:flex-row-reverse md:block gap-6 px-4 w-full">
        <div>
          <Hero />
          <Newest />
          <News />
          <Newest />
        </div>
      </div>
    </div>
  );
}
