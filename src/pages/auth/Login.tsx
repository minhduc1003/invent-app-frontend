import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../../components/Input";
import { dataLogIn } from "../../types/data";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import Auth from "./Auth";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const { control, handleSubmit } = useForm<dataLogIn>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const submitForm: SubmitHandler<dataLogIn> = async (data) => {
    try {
      await axios.post(`${import.meta.env.VITE_SV}/api/user/login`, data);
      toast.success("Sign In Successfully");
    } catch (error) {
      toast.error("Error signing in");
    }
  };

  return (
    <Auth page="signin">
      <form
        onSubmit={handleSubmit(submitForm)}
        className="flex flex-col items-end w-[400px] gap-y-5  shadow-sm p-5 rounded-lg bg-slate-50 "
      >
        <Input
          name="email"
          placeholder="Enter Email"
          type="text"
          control={control}
        ></Input>
        <Input
          name="password"
          placeholder="Enter password"
          type="text"
          control={control}
        ></Input>
        <span className="text-gray-400  ">
          <Link to={"/"}>Recover Password ?</Link>
        </span>
        <Button type={"submit"}>Sign In</Button>
      </form>
    </Auth>
  );
};

export default Login;
