import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import Error from "./pages/Error";
import ProductDetail from "./pages/ProductDetail";
//https://example.com/[Path]
// defines the path and component that should be rendered in that particular path
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <Error></Error>,
    children: [
      // if we have the child route that shoud be rendered when parent route is rendered  like Home page below alternatively we can use index property
      // { path: "", element: <Home></Home> },
      { index: true, element: <Home></Home> },

      { path: "products", element: <ProductsPage /> },
      { path: "products/:productId", element: <ProductDetail /> },
      // the path starting with : is a dynamic path and its value is productId which is set by program
    ],
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
