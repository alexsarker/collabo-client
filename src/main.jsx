import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Controller/Root";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import CreatePage from "./Pages/CreatePage";
import UpdatePage from "./Pages/UpdatePage";
import SubmitPage from "./Pages/SubmitPage";
import GradingPage from "./Pages/GradingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/createPage",
        element: <CreatePage />,
      },
      {
        path: "/updatePage",
        element: <UpdatePage />,
      },
      {
        path: "/submitPage",
        element: <SubmitPage />,
      },
      {
        path: "/gradePage",
        element: <GradingPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
