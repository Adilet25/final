import React from "react";
import logo from "../../../assets/white-onair-logo.svg";
import searchicon from "../../../assets/akar-icons_search.svg";
import profileicon from "../../../assets/carbon_user-avatar.svg";
import { Navigate, useNavigate } from "react-router-dom";

const navigationButtons = [
  {
    title: "Movies",
    link: "/movies",
    id: 1,
  },
  {
    title: "Series",
    link: "/Series",
    id: 2,
  },
  {
    title: "Channels",
    link: "/channels",
    id: 3,
  },
  {
    title: "Music",
    link: "/music",
    id: 4,
  },
];
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row justify-between w-full h-20 bg-ourblack px-16">
      <div className="flex flex-row items-center justify-between w-1/3">
        <img
          src={logo}
          alt="error"
          onClick={() => {
            navigate("/");
          }}
          className="cursor-pointer"
        />
        {navigationButtons.map((item) => (
          <h1
            className="cursor-pointer text-reflect"
            key={item.id}
            onClick={() => {
              navigate(item.link);
            }}>
            {item.title}
          </h1>
        ))}
      </div>
      <div className="flex flex-row items-center justify-between w-3/12 ">
        <div className="flex flex-row w-1/2 justify-end  items-center">
          <img src={searchicon} alt="." />
          <input
            type="search"
            placeholder="Search"
            className="w-1/2 bg-transparent placeholder:text-white placeholder:p-1 focus:outline-none pl-3"
          />
        </div>
        <div
          className="flex flex-row w-1/2 justify-center items-center cursor-pointer"
          onClick={() => {
            navigate("/login");
          }}>
          <img src={profileicon} alt="." />
          <p className="pl-3">Sign in</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
