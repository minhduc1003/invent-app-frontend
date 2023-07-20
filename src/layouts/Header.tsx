import { Link, Outlet } from "react-router-dom";
import OptionHeader from "../components/OptionHeader";
import { useState } from "react";
import Cart from "../components/Cart";
import Favorite from "../components/Favorite";
import User from "../components/User";
import Search from "../components/Search";

const Header = () => {
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);
  const links = [
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

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      document.querySelector(".header")?.classList.add("sticky");
    } else {
      document.querySelector(".header")?.classList.remove("sticky");
    }
  });
  return (
    <>
      <header className="md:max-w-[700px] lg:max-w-[950px] xl:max-w-[1100px] 2xl:max-w-[1440px]  max-w-[600px] mx-auto">
        <div className="flex items-center justify-between p-2 text-sm">
          <div className="flex gap-4 ">
            <div
              onClick={() => {
                if (isOpen2) {
                  setIsOpen2(false);
                }
                setIsOpen1(true);
              }}
            >
              <OptionHeader link={isOpen1} type="language">
                English
              </OptionHeader>
            </div>
            <div
              onClick={() => {
                if (isOpen1) {
                  setIsOpen1(false);
                }
                setIsOpen2(true);
              }}
            >
              <OptionHeader link={isOpen2} type="currency">
                USD
              </OptionHeader>
            </div>
          </div>
          <div className="flex gap-4">
            <Link to={"/signup"}>Sign Up</Link>
            <Link to={"/signin"}>Sign In</Link>
          </div>
        </div>
        <div className="header -z-10 ">
          <div className="p-2 md:max-w-[700px] lg:max-w-[950px] xl:max-w-[1100px] 2xl:max-w-[1440px]  max-w-[600px] mx-auto">
            <div className="flex justify-between p-7 bg-color-white rounded-lg ">
              <div>a</div>
              <ul className="flex gap-5 ">
                {links.map((link, index) => (
                  <li key={index} className="navLink relative">
                    <Link to={link.link}>{link.name}</Link>
                  </li>
                ))}
              </ul>
              <div className="flex gap-5">
                <Search></Search>
                <Favorite></Favorite>
                <Cart></Cart>
                <User></User>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
