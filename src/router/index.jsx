import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "../pages/Home/Home";
import Container from "../container/Container";
import AboutUs from "../pages/About/AboutUs";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
    ],
  },
  // {
  //   path: "*",
  //   element: <div>404 Not Found</div>,
  // }
]);

const AppRouter = () => {
  return <RouterProvider router={routes} />;
};

export default AppRouter;