import React from "react";
import { product } from "../../../types/product";
import { Link } from "react-router-dom";

const Products = () => {
  const product: product = [
    {
      id: 1,
      name: "Laptop Dell Inspiron 15 3520",
      price: "$12.00",
      image: "./dell2.jpg",
    },
    {
      id: 2,
      name: "Laptop Lenovo Ideapad Slim 5 Light",
      price: "$12.00",
      image: "./lenovo.jpg",
    },
  ];
  return (
    <>
      <h1 className="text-4xl font-bold mt-5 mb-20">Browse by Category</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-8 cursor-pointer mb-20">
        {product.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-5  w-full h-[400px] scaleImage "
          >
            <div className="w-full h-[300px] relative overflow-hidden imgdiv rounded-lg ">
              <img
                className="w-full h-full object-cover"
                src={item.image}
                alt="image product"
              />
              <div className="flex gap-3 items-center justify-center absolute  w-full productOption ">
                <div className="bg-color-white p-3  rounded-md  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <button className="bg-color-secondary text-color-white p-2 rounded-md ">
                  Add to Card
                </button>
                <div className="bg-color-white rounded-md  p-3 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div>
                <span className="flex gap-1 text-[#ffa800]">
                  {Array(5)
                    .fill(0)
                    .map(() => (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={1}
                        stroke="currentColor"
                        className="w-5 h-5 opacity-50"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    ))}
                </span>
              </div>
              <h3 className="text-color-midgray hover:text-color-primary">
                {item.name}
              </h3>
              <div className="flex gap-x-2 font-semibold text-2xl">
                <p>{item.price}</p>
                {item.oldPrice && (
                  <div className="relative">
                    <p className="text-color-gray">{item.oldPrice}</p>
                    <div className="absolute left-0 right-0 top-2/4 h-[3px] bg-color-gray -translate-y-2/4"></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mb-10">
      <Link to={"/"} className="bg-color-lighter text-color-midgray px-5 py-4 rounded-md hover:bg-color-primary hover:text-color-white">View All Products</Link>           
      </div>
    </>
  );
};

export default Products;
