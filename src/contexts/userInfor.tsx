import { createContext, useState, useContext, useEffect } from "react";
import { userContext, userData } from "../types/data";
import axios from "axios";
const AuthContext = createContext(null);
function AuthProvider(props: any) {
  const [userInfor, setUserInfor] = useState<userData>({
    name: "",
    email: "",
    photo: "",
    phone: 0,
    bio: "",
    permission: "",
  });
  useEffect(() => {
    // async function fetchUser() {
    //   await axios.get(`${import.meta.env.VITE_SV}/api/user/getuser`, {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     withCredentials: true,
    //   });
    // }
    // fetchUser();
  }, []);
  return (
    <AuthContext.Provider value={{ userInfor }} {...props}>
      {props.children}
    </AuthContext.Provider>
  );
}
function useAuth() {
  const context = useContext(AuthContext);
  if (typeof context === "undefined")
    throw new Error("use auth must be used within AuthProvider");
  return context;
}
export { AuthProvider, useAuth };
