




import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import Home from "./portfolio/pages/Home/Home";
import About from "./portfolio/pages/About/About";
import Work from "./portfolio/pages/Work/Work";
import Contact from "./portfolio/pages/Contact/Contact";
import SplashScreen from "./portfolio/SplashScreen";


const App = () => {
  const [splashLoading, setSplashLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashLoading(false);
    }, 3000); // Show splash for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/About",
      element: <About />,
    },
    {
      path: "/Work",
      element: <Work />,
    },
    {
      path: "/Contact",
      element: <Contact />,
    },
  ]);

  return (
    <div className="max-w-[1900px] mx-auto">
     
      <SplashScreen splashLoading={splashLoading} />
      {!splashLoading && <RouterProvider router={router} />}
    </div>
  );
};

export default App;


