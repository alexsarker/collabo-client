import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Controller/Root";
import PrivatePage from "./Controller/PrivatePage";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import CreatePage from "./Pages/CreatePage";
import UpdatePage from "./Pages/UpdatePage";
import SubmitPage from "./Pages/SubmitPage";
import GradingPage from "./Pages/GradingPage";
import Assignments from "./Pages/Assignments";
import AssignmentDetail from "./Pages/AssignmentDetail";
import AboutUs from "./Pages/AboutUs";
import MySubmit from "./Pages/MySubmit";
import Pending from "./Pages/Pending";
import AuthProvider from "./Controller/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage/>,
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
        element: (
          <PrivatePage>
            <CreatePage />
          </PrivatePage>
        ),
      },
      {
        path: "/updatePage/:id",
        element: <UpdatePage />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/data/${params.id}`),
      },
      {
        path: "/submitPage/:id",
        element: <SubmitPage />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/data/${params.id}`),
      },
      {
        path: "/gradePage/:id",
        element: <GradingPage />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/answers/${params.id}`),
      },
      {
        path: "/assignments",
        element: <Assignments />,
      },
      {
        path: "/data/:id",
        element: (
          <PrivatePage>
            <AssignmentDetail />
          </PrivatePage>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/data/${params.id}`),
      },
      {
        path: "/mySubmit",
        element: (
          <PrivatePage>
            <MySubmit />
          </PrivatePage>
        ),
      },
      {
        path: "/pending",
        element: (
          <PrivatePage>
            <Pending />
          </PrivatePage>
        ),
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
