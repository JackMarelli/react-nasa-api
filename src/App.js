import logo from './logo.svg';
import styles from './App.module.scss';
import Home from "./routes/Home/Home.jsx";
import ApiManager from './api/ApiManager';
import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
