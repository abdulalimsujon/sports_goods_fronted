import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Home from "../pages/home";
import About from "../pages/about";
import Allproducts from "../pages/allProducts";
import SingleProduct from "../pages/singleProduct";
import Cart from "../pages/cart";

import CheckOut from "../pages/checkOut/CheckOut";
import ManageProduct from "../pages/manageProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "allproducts",
        element: <Allproducts />,
      },

      {
        path: "getSingleProduct/:id",
        element: <SingleProduct />,
      },

      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <CheckOut></CheckOut>,
      },

      {
        path: "manageProducts",
        element: <ManageProduct></ManageProduct>,
      },
      {
        path: "get-products",
        element: <Allproducts />,
      },
      {
        path: "get-products/:category",
        element: <Allproducts />,
      },
    ],
  },
]);

export default router;
