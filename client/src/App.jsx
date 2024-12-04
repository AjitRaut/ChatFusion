import React from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" />,
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
    path: "/",
    element: <AppLayout />,
    children: [
      // {
      //   path: "home",
      //   element: <Home />,
      // },
    ],
  },
]);

function App() {
  return <RouterProvider router={AppRouter} />;
}

export default App;
