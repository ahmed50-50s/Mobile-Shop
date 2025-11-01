import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Pages/Layout/Layout";
import Home from "./Pages/Home/Home";
import MobileDetails from "./Pages/MobileDetails/MobileDetails";
import AllMobiles from "./Pages/AllMobiles/AllMobiles";

function App() {
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
            ],
          },
        ])}
      ></RouterProvider>
    </>
  );
}

export default App;
