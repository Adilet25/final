import React, { useState } from "react";
import logo from "../../../assets/white-onair-logo.svg";
import searchicon from "../../../assets/akar-icons_search.svg";
import profileicon from "../../../assets/carbon_user-avatar.svg";
import burgericon from "../../../assets/menu icon.svg";
import closeburgericon from "../../../assets/Group 107.svg";
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
  const [buttonStatus, setButtonStatus] = useState(true);
  return (
    <>
      <div className="flex flex-row justify-between w-[screen]  h-20 bg-ourblack max-[768px]:bg-[rgba(0,0,0,0.91)] px-16 max-[768px]:px-5">
        <div className="flex flex-row items-center justify-between w-1/3 max-[1024px]:w-3/5 max-[768px]:w-full ">
          <img
            src={logo}
            alt="error"
            onClick={() => {
              navigate("/");
            }}
            className="cursor-pointer w-24"
          />
          {navigationButtons.map((item) => (
            <h1
              className="cursor-pointer text-reflect max-[768px]:hidden"
              key={item.id}
              onClick={() => {
                navigate(item.link);
              }}>
              {item.title}
            </h1>
          ))}
          <div>
            {buttonStatus ? (
              <img
                src={burgericon}
                alt="."
                className="md:hidden "
                onClick={() => {
                  setButtonStatus(!buttonStatus);
                }}
              />
            ) : (
              <img
                src={closeburgericon}
                alt="."
                className="md:hidden z-10"
                onClick={() => {
                  setButtonStatus(!buttonStatus);
                }}
              />
            )}
          </div>
        </div>
        <div className="flex flex-row items-center justify-between w-3/12 max-[1024px]:w-5/12 max-[768px]:hidden ">
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
      <div className="absolute z-10 w-screen h-screen  md:hidden ">
        {buttonStatus ? (
          <div></div>
        ) : (
          <div className=" relative bg-[rgba(0,0,0,0.91)] w-full h-screen px-14">
            <div className="mb-10 flex flex-row rounded-xl bg-[#232229] h-14 justify-start pl-4 w-full">
              <img src={searchicon} alt="." className="w-6" />
              <input
                type="search"
                placeholder="Search"
                className="w-full pr-4 bg-transparent placeholder:text-white placeholder:p-1 focus:outline-none pl-3"
              />
            </div>
            <div className="flex flex-col w-full h-[70vh] justify-between">
              {navigationButtons.map((item) => (
                <h1
                  className="cursor-pointer font-medium text-4xl"
                  key={item.id}
                  onClick={() => {
                    navigate(item.link);
                  }}>
                  {item.title}
                </h1>
              ))}
              <div
                className="flex flex-row w-full items-center cursor-pointer"
                onClick={() => {
                  navigate("/login");
                }}>
                <img src={profileicon} alt="." className="w-14" />
                <p className="pl-3 text-4xl">Sign in</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
