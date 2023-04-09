import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import Admin from "./Components/Layout/Admin";
import OrderReview from "./Components/OrderReview/OrderReview";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";

const routerApp = createBrowserRouter(
  [
    {
      path: '/',
      element: <Admin></Admin>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('t-shirts.json'),
        },
        {
          path: '/review',
          element: <OrderReview></OrderReview>
        },
        {
          path: '/about',
          element: <About></About>,
          loader: () => fetch('t-shirts.json'),
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
      ]
    }
  ]
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}

    <RouterProvider router={routerApp}></RouterProvider>
  </React.StrictMode>
);
