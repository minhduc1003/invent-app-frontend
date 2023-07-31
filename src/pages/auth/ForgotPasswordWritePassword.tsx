import axios from "axios";
import Auth from "./Auth";
import { toast } from "react-toastify";
import { SubmitHandler, useForm } from "react-hook-form";
import { refreshPassword } from "../../types/data";
import Input from "./components/Input";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
const ForgotPasswordWritePassword = () => {
  const { control, handleSubmit } = useForm<refreshPassword>({
    mode: "onChange",
    defaultValues: {
      oldPassword: "",
      password: "",
      confirmPassword: "",
    },
  });
  const { id } = useParams();
  const navigate = useNavigate();
  const submitForm: SubmitHandler<refreshPassword> = async (data) => {
    console.log(Object.keys(data).length);
    if (
      data.password === "" ||
      data.oldPassword === "" ||
      data.confirmPassword === ""
    ) {
      return toast.error("Please fill all fields");
    }
    if (data.password === data.confirmPassword) {
      await axios
        .put(`${import.meta.env.VITE_SV}/api/user/forgotpassword/${id}`, {
          oldPassword: data.oldPassword,
          password: data.password,
        })
        .then(() => {
          toast.success("sent email successfully");
          navigate("/signin");
        })
        .catch((error) => {
          toast.error(error.response.data.error);
        });
    } else {
      toast.error("new password not match");
    }
  };
  return (
    <Auth page="forgotPassword">
      <form
        onSubmit={handleSubmit(submitForm)}
        className="flex flex-col  w-[400px] gap-y-5  shadow-sm p-5 rounded-lg bg-slate-50 animate-left "
      >
        <Input
          name="oldPassword"
          placeholder="Enter old password"
          type="text"
          control={control}
        ></Input>
        <Input
          name="password"
          placeholder="Enter Password"
          type="text"
          control={control}
        ></Input>
        <Input
          name="confirmPassword"
          placeholder="Enter Password"
          type="text"
          control={control}
        ></Input>
        <Button type={"submit"}>Send</Button>
      </form>
    </Auth>
  );
};

export default ForgotPasswordWritePassword;
