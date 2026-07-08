import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./components/home";
import Product from "./components/product";

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
      ],
    },
  ]);

  return <RouterProvider router={route} />;
}

export default App;