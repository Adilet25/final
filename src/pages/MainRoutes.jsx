import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../components/Home/HomePage";
import Login from "../components/auth/login/Login";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/login",
      element: <Login />,
      id: 2,
    },
    // {
    //   link: "/register",
    //   element: <RegisterPage />,
    //   id: 3,
    // },
    // {
    //   link: "/admin",
    //   element: <AdminPage />,
    //   id: 4,
    // },
    // {
    //   link: "/favorite",
    //   element: <FavoritePage />,
    //   id: 5,
    // },
    // {
    //   link: "/cart",
    //   element: <CartPage />,
    //   id: 6,
    // },
    // {
    //   link: "/details/:id",
    //   element: <DetailsPage />,
    //   id: 7,
    // },
    // {
    //   link: "/product",
    //   element: <ProductPage />,
    //   id: 8,
    // },
    // {
    //   link: "*",
    //   element: <ErrorPage />,
    //   id: 9,
    // },
  ];
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
