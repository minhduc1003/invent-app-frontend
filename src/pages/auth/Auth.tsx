import { ReactNode } from "react";
import { Link } from "react-router-dom";
type Props = {
  children: ReactNode;
  page: "signin" | "signup" | "forgotPassword";
};
const Auth = ({ children, page }: Props) => {
  let message1, message2, message3, message4;

  switch (page) {
    case "signin":
      message1 = "Sign In";
      message2 = "if you don't an account";
      message3 = "you can";
      message4 = " Register here!";
      break;
    case "signup":
      message1 = "Sign Up";
      message2 = "if you have an account";
      message3 = "you can";
      message4 = " Log In here!";
      break;
    case "forgotPassword":
      message1 = "Recover Account";
      message2 = "if you remember the account";
      message3 = "you can";
      message4 = " Log In here!";
      break;
    default:
      break;
  }
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center lg:px-40 px-5 relative ">
      <div className=" items-center lg:justify-between gap-y-10 flex-1 relative flex lg:flex-row flex-col">
        <div className="items-center flex  ">
          <div>
            <h1 className="font-semibold text-[60px] lg:text-[80px] mb-10">
              {message1}
            </h1>
            <p className="text-xl">
              {message2} <br /> {message3}
              <span className="text-[#4461F2] cursor-pointer">
                <Link to={`/${page == "signin" ? "signup" : "signin"}`}>
                  {message4}
                </Link>
              </span>
            </p>
          </div>
          <div className="absolute  left-[15%] top-[calc(50%+2rem)] hidden lg:block -z-[100]">
            <img
              className="w-full h-full object-cover "
              src="/rocket.png"
              alt=""
            />
          </div>
        </div>
        {children}
      </div>
      <img
        className="absolute bottom-0 right-0 object-cover w-full z-[-10000] "
        src="./bg.png"
      ></img>
    </div>
  );
};

export default Auth;
