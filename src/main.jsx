import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./layout/App.jsx";
import "./index.css";
import One from "./page/One.jsx";
import Two from "./page/Two.jsx";
import Three from "./page/Three.jsx";
import Home from "./page/Home.jsx";
import Login from "./layout/Login.jsx";
import Register from "./layout/Register.jsx";

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
        path: "/one",
        element: <One />,
      },
      {
        path: "/two",
        element: <Two />,
      },
      {
        path: "/three",
        element: <Three />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  // </StrictMode>
);
