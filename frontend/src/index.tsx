import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './components/Root';
import ReactDOM from "react-dom/client";
import './index.css';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
    ],
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);