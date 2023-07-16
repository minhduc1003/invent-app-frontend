import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/signup";
import ForgotPasswordWriteEmail from "./pages/auth/ForgotPasswordWriteEmail";
import ForgotPasswordWritePassword from "./pages/auth/ForgotPasswordWritePassword";
import CheckEmail from "./pages/auth/CheckEmail";

function App() {
  return (
    <>
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
      </Routes>
    </>
  );
}

export default App;
