import React, { useState } from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const category = [
    {
      id: 0,
      type: "Phone",
      image: "./phone.png",
    },
    {
      id: 1,
      type: "computer",
      image: "./computer.png",
    },
    {
      id: 2,
      type: "laptop",
      image: "./laptop.png",
    },
    {
      id: 3,
      type: "monitor",
      image: "./monitor.png",
    },
    {
      id: 4,
      type: "PC Gaming",
      image: "./pcgaming.png",
    },
    {
      id: 5,
      type: "headphone",
      image: "./headphone.png",
    },
    {
      id: 6,
      type: "smartwatch",
      image: "./smartwatch.png",
    },
  ];
  const [next, setNext] = useState(false);
  const [previous, setPrevious] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between mt-7">
        <h1 className="text-4xl font-bold">Browse by Category</h1>
        <div className="flex gap-4 text-color-extra01">
          <div
            className="p-3 rounded-md bg-color-border-light flex items-center justify-center bg-opacity-50 cursor-pointer hover:bg-color-secondary hover:text-color-white "
            onClick={() => {
              setPrevious(true);
              setNext(false);
            }}
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
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </div>
          <div
            className="p-3 rounded-md bg-color-border-light flex items-center justify-center bg-opacity-50 cursor-pointer hover:bg-color-secondary hover:text-color-white"
            onClick={() => {
              setNext(true);
              setPrevious(false);
            }}
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
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className=" mt-10 p-4  w-full overflow-hidden ">
        <div
          className={`flex items-center gap-x-5 justify-between w-full ${
            next
              ? "-translate-x-[101.5%] sliderNext"
              : previous
              ? "silderPrev translate-x-0"
              : ""
          }`}
        >
          {category.map((item, i) => (
            <Link
              key={item.id}
              to={"/"}
              className="w-[183px] h-[157px]  flex flex-col items-center justify-center border border-solid border-color-light gap-y-2 border-opacity-50 flex-grow-[0] flex-shrink-[0] basis-[15.5%] hover:scale-110 hover:border-color-secondary shadow-sm"
            >
              <img src={item.image} alt="" />
              <p className="font-semibold">{item.type}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
