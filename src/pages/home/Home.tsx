import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DesOfSection from "./Components/DesOfSection";
import Category from "./Components/Category";
import Products from "./Components/Products";
import MostSold from "./Components/MostSold";
import WhyUs from "./Components/WhyUs";

const Home = () => {
  const list = [
    {
      id: 0,
      title: "Roco Wireless Headphone",
      image: "./product-0.png",
      isActive: true,
    },
    {
      id: 1,
      title: "Smart Digital Watch",
      image: "./product-1.png",
      isActive: false,
    },
    {
      id: 2,
      title: "Roco Wireless Headphone",
      image: "./product-0.png",
      isActive: false,
    },
    {
      id: 3,
      title: "Smart Digital Watch",
      image: "./product-1.png",
      isActive: false,
    },
  ];
  const [index, setIndex] = useState(0);
  const [data, setData] = useState(list);
  const [animations, setAnimation] = useState(true);
  const updateState = (id: number) => {
    const newList = list.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isActive: true,
        };
      }
      return {
        ...item,
        isActive: false,
      };
    });

    setData(newList);
  };
  const runAnimations = () => {
    setAnimation(true);
    setTimeout(() => {
      setAnimation(false);
    }, 501);
  };
  useEffect(() => {
    document.querySelector("body")?.classList.add("style");
    runAnimations();
    return () => {
      document.querySelector("body")?.classList.remove("style");
    };
  }, []);
  return (
    <div className="text-color-black mt-10 md:mt-40">
      <section className="w-full md:max-w-[700px] lg:max-w-[950px] xl:max-w-[1100px] 2xl:max-w-[1440px]  max-w-[600px]  mt-10 p-2 mx-auto   ">
        <div className="flex flex-col md:flex-row items-center justify-between min-h-[350px] gap-10  ">
          <div className="flex-1 ">
            <div className="flex flex-col gap-y-5 items-center text-center md:items-start md:text-left ">
              <div
                className={`flex items-center gap-x-5 ${
                  animations ? "transitionTitle" : ""
                }`}
              >
                <span className="text-color-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#FFFFFF"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 border border-solid rounded-full bg-color-secondary "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
                    />
                  </svg>
                </span>
                <p className="text-color-secondary font-medium ">
                  Hot Deal In This Week
                </p>
              </div>
              <h1
                className={`text-6xl font-semibold ${
                  animations ? "transitionTitle" : ""
                }`}
              >
                {list[index].title}
              </h1>
              <Link
                to={"/shop"}
                className={`bg-color-white shadow-lg w-36 flex items-center justify-center h-12  rounded-md mt-10 font-medium  gap-2 ${
                  animations ? "transitionTitle" : ""
                }`}
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </span>
                <p>Shop now</p>
              </Link>
            </div>
          </div>
          <div className="flex-1 max-w-[300px] max-h-[300px] md:min-w-[300px] md:min-h-[150px] md:max-w-[600px] md:max-h-[600px]  relative">
            <img
              className={`w-full h-full object-contain relative -z-[9]  ${
                animations ? "transitionImage" : ""
              }`}
              src={list[index].image}
              alt=""
            />
            <img
              className="absolute  top-10 -right-10   -z-10  "
              src="./shape-bg.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex gap-x-2 justify-center items-center mt-10 mb-20">
          {data.map((item, i) => (
            <div
              key={item.id}
              className={`w-7 h-1 bg-color-light rounded-md cursor-pointer ${
                item.isActive ? "!bg-color-secondary !w-9" : ""
              }`}
              onClick={() => {
                setIndex(i);
                updateState(i);
                runAnimations();
              }}
            ></div>
          ))}
        </div>
      </section>
      <section className="w-full bg-color-white  ">
        <div className="mx-auto md:max-w-[700px] lg:max-w-[950px] xl:max-w-[1100px] 2xl:max-w-[1440px]  max-w-[600px]   p-2   ">
          <DesOfSection
            color="pink"
            icon={
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
                  d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6h.008v.008H6V6z"
                />
              </svg>
            }
          >
            Categories
          </DesOfSection>
          <Category></Category>
          <DesOfSection
            color="purple"
            icon={
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
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            }
          >
            Our Products
          </DesOfSection>
          <Products></Products>
          <DesOfSection
            color="pink"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
            }
            className="flex items-center justify-center"
          >
            Most Sold
          </DesOfSection>
          <MostSold></MostSold>
        </div>
      </section>
      <section>
        <div className="mx-auto md:max-w-[700px] lg:max-w-[950px] xl:max-w-[1100px] 2xl:max-w-[1440px]  max-w-[600px]   p-2   ">
          <DesOfSection
            color="purple"
            icon={
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
                  d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                />
              </svg>
            }
            className="flex items-center justify-center"
          >
            Why Us
          </DesOfSection>
          <WhyUs></WhyUs>
        </div>
      </section>
    </div>
  );
};

export default Home;
