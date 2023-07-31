import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Favorite from "./Components/Favorite";
import useLocalStorage from "../../hooks/useLocalStrorage";
import OptionHeader from "./Components/OptionHeader";
import Search from "./Components/Search";
import Cart from "./Components/Cart";
import User from "./Components/User";
import Menu from "./Components/Menu";

const Header = () => {
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);
  const [location, saveLocation] = useLocalStorage("path", []);
  let links = [
    {
      id: 1,
      name: "Home",
      link: "/",
      isActive: true,
    },
    {
      id: 2,
      name: "Shop",
      link: "/shop",
      isActive: false,
    },
    {
      id: 2,
      name: "About",
      link: "/about",
      isActive: false,
    },
    {
      id: 3,
      name: "Contact",
      link: "/contact",
      isActive: false,
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
        <div className="header z-50  ">
          <div className="p-2 md:max-w-[700px] lg:max-w-[950px] xl:max-w-[1100px] 2xl:max-w-[1440px]  max-w-[600px] mx-auto">
            <div className="flex items-center justify-between p-7 bg-color-white rounded-lg shadow-lg ">
              <div className="w-[157px] h-[40px]">
                <img
                  className="w-full h-full object-cover"
                  src="./logo.png"
                  alt=""
                />
              </div>
              <ul className="md:flex gap-5 text-color-black hidden">
                {links.map((link, index) => (
                  <li key={index}>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "navLink relative" : "navLinkHover relative"
                      }
                      to={link.link}
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="flex gap-5">
                <Search></Search>
                <Favorite></Favorite>
                <Cart></Cart>
                <User></User>
                <Menu></Menu>
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
