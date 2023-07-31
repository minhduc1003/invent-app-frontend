import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/signup";
import ForgotPasswordWriteEmail from "./pages/auth/ForgotPasswordWriteEmail";
import ForgotPasswordWritePassword from "./pages/auth/ForgotPasswordWritePassword";
import CheckEmail from "./pages/auth/CheckEmail";
import Home from "./pages/home/Home";
import { AuthProvider } from "./contexts/userInfor";
import Header from "./layouts/Header/Header";
import Shop from "./pages/shop/Shop";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/forgotPassword/email"
            element={<ForgotPasswordWriteEmail />}
          />
          <Route
            path="/forgotPassword/password/:id"
            element={<ForgotPasswordWritePassword />}
          />
          <Route path="/forgotPassword/checkEmail" element={<CheckEmail />} />
          <Route element={<Header />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
