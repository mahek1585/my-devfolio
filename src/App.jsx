
import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Assignment4/pages/Home/Home";
import About from "./Assignment4/pages/About/About";
import Work from "./Assignment4/pages/Work/Work";
import Contact from "./Assignment4/pages/Contact/Contact";




const App = () => {
  // todo: Add Not Found Page
  const router = createBrowserRouter([
   
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/About",
      element: <About/>,
    },
    {
      path: "/Work",
      element: <Work/>,
    },
     {
      path: "/Contact",
      element: <Contact/>,
    },
   
    
  ]);

  return (
    <div className="max-w-[1900px] mx-auto">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

