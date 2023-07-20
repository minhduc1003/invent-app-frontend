import React, { useState, useRef } from "react";
import Button from "./Button";

const User = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative ">
      <div
        className={`p-1 transition-all hoverHeaderAnimation ${
          isOpen && "text-color-secondary"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
          onClick={() => setIsOpen(!isOpen)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
      </div>
      {isOpen && (
        <ul className="absolute -translate-x-[80%] translate-y-5 p-4 shadow-xl  rounded-lg bg-color-white ">
          <li className="py-4">
            <div className="flex gap-5 items-center">
              <div className="w-10 h-10 rounded-full">
                <img
                  className=" w-full h-full object-cover rounded-full"
                  src="https://www.catholicjonesboro.com/files/images/sample-img.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-y-1  ">
                <h3>Minh Duc</h3>
                <p className="text-sm text-color-gray  ">
                  vuminhduc231003@gmail.com
                </p>
              </div>
            </div>
          </li>
          <li>
            <Button type="button">Sign Out</Button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default User;
