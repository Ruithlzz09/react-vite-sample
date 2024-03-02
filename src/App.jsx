import { RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/appLayout";
import NotFound from "./components/common/NotFound";
import { HomeRouteObj } from "./routes/loaders";
import Error from "./components/common/Error";
import { createBrowserRouter } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";

const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children: [
      { path: "/", Component: Home, ...HomeRouteObj, ErrorBoundary: Error },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App
