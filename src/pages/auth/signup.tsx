import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import { dataSignUp } from "../../types/data";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import Auth from "./Auth";
import axios from "axios";
import { toast } from "react-toastify";
const SignUp = () => {
  const { control, handleSubmit } = useForm<dataSignUp>({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const onSubmit = handleSubmit(async (data: dataSignUp) => {
    await axios
      .post(`${import.meta.env.VITE_SV}/api/user/register`, data)
      .then(() => {
        toast.success("Sign Up Successfully");
      })
      .catch((error) => {
        toast.error(error.response.data.error);
      });
  });
  return (
    <Auth page="signup">
      <form
        onSubmit={onSubmit}
        className="flex flex-col  w-[400px] gap-y-5  shadow-sm p-5 rounded-lg bg-slate-50 animate-left"
      >
        <Input
          name="name"
          placeholder="Enter name..."
          type="text"
          control={control}
        ></Input>
        <Input
          name="email"
          placeholder="Enter Email..."
          type="text"
          control={control}
        ></Input>
        <Input
          name="password"
          placeholder="Enter password..."
          type="text"
          control={control}
        ></Input>
        <span className="text-gray-400 flex justify-end ">
          <Link to={"/forgotPassword/email"}>Recover Password ?</Link>
        </span>
        <Button type={"submit"}>Sign In</Button>
      </form>
    </Auth>
  );
};

export default SignUp;
