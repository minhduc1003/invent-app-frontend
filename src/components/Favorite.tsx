import React from "react";

const Favorite = () => {
  return (
    <div className="relative cursor-pointer">
      <div className="absolute w-5 h-5 bg-color-primary rounded-full top-0 right-0 -translate-y-2/4 translate-x-2/4 text-color-white flex items-center justify-center text-xs z-10 ">
        1
      </div>
      <div className="p-1 transition-all hoverHeaderAnimation">
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
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Favorite;
