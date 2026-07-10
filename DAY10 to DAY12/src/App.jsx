import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./components/home";
import Product from "./components/product";
import Footer from "./components/footer";
import About from "./components/about";
import Cart from "./components/cart";
import Orders from "./components/orders";
import animation from "./animation/skate.json";
import Lottie from "lottie-react"
import Signin from "./components/signin";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/product",
          element: <Product />,
        },
         {
          path: "/footer",
          element: <Footer />,
        },
         {
          path: "/about",
          element: <About />,
        },
         {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
         {
          path: "/signin",
          element: <Signin />,
        },
      ],
    },
  ]);

  return<> <RouterProvider router={route} />
 </>;
}

export default App;