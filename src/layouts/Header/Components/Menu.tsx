import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeMenuOpen } from "../../../redux/globleSlice";

const Menu = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div
        className="p-1 transition-all hoverHeaderAnimation md:hidden block"
        onClick={() => dispatch(changeMenuOpen(true))}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
    </>
  );
};

export default Menu;
