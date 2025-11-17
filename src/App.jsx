import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Pages/Layout/Layout";
import Home from "./Pages/Home/Home";
import MobileDetails from "./Pages/MobileDetails/MobileDetails";
import AllMobiles from "./Pages/AllMobiles/AllMobiles";
import NewsPage from "./Pages/NewsPage/NewsPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      delay: 300,
    });
  }, []);

  return (
    <>
      <RouterProvider
        router={createBrowserRouter([
          {
            path: "",
            element: <Layout />,
            children: [
              { index: true, element: <Home /> },
              { path: "mobile/:id", element: <MobileDetails /> },
              { path: "Allmobiles", element: <AllMobiles /> },
              { path: "News/:id", element: <NewsPage /> },
            ],
          },
        ])}
      ></RouterProvider>
    </>
  );
}

export default App;
