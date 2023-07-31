import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { changeMenuOpen } from "../../../redux/globleSlice";
import useOnClickOutside from "../../../hooks/useOnClickOutSide";

const SideBar = () => {
  let links = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "Shop",
      link: "/shop",
    },
    {
      id: 2,
      name: "About",
      link: "/about",
    },
    {
      id: 3,
      name: "Contact",
      link: "/contact",
    },
  ];
  const dispatch = useDispatch();
  const { isMenuOpen } = useSelector((state: any) => state.global);
  const divRef = useRef(null);
  useOnClickOutside(divRef, () => {
    if (isMenuOpen) {
      dispatch(changeMenuOpen(false));
    }
  });
  return ReactDOM.createPortal(
    <div
      className={`absolute z-50 inset-0 bg-color-dark bg-opacity-50 ${
        isMenuOpen ? "" : "hidden"
      }`}
    >
      <div
        className="fixed top-0 right-0 h-[100vh] bg-color-white p-5 sideBar"
        ref={divRef}
      >
        <div className="flex items-center justify-between">
          <div className="w-[157px] h-[40px]">
            <img
              className="w-full h-full object-cover"
              src="./logo.png"
              alt=""
            />
          </div>
          <div
            className="flex items-center justify-center p-2 rounded-full bg-color-light text-color-black bg-opacity-50 cursor-pointer"
            onClick={() => dispatch(changeMenuOpen(false))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        <div className="mt-10">
          {links.map((link, index) => (
            <div
              className="py-4 font-semibold "
              key={index}
              onClick={() => dispatch(changeMenuOpen(false))}
            >
              <NavLink to={link.link}>{link.name}</NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>,
    document.querySelector("body") as HTMLElement
  );
};

export default SideBar;
