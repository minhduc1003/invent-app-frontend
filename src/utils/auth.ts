import { getCookie, setCookie, removeCookie } from "typescript-cookie";
interface options {
  expires: Date | number;
  domain: string;
}
const cookieOptions: options = {
  expires: 30,
  domain: "localhost",
};
export const saveCookie = (cookie: string) => {
  if (cookie) {
    console.log(cookie);
    setCookie("token", cookie, { ...cookieOptions });
  } else {
    removeCookie("token", { ...cookieOptions, path: "/" });
  }
};
export const getCookies = () => {
  return getCookie("token");
};
