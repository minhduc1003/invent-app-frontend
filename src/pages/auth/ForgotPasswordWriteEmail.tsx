import axios from "axios";
import Auth from "./Auth";
import { toast } from "react-toastify";
import { SubmitHandler, useForm } from "react-hook-form";
import { sentToken } from "../../types/data";
import Input from "../../components/Input";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { useState } from "react";
const ForgotPasswordWriteEmail = () => {
  const { control, handleSubmit } = useForm<sentToken>({
    mode: "onChange",
    defaultValues: {
      email: "",
    },
  });
  const navigate = useNavigate();

  const [comfirm, setComfirm] = useState(false);
  const submitForm: SubmitHandler<sentToken> = async (data) => {
    await axios
      .post(`${import.meta.env.VITE_SV}/api/user/forgotpassword`, data)
      .then(() => {
        setComfirm(true);
        toast.success(
          "sent link to email successfully please check your email"
        );
        if (comfirm) {
          setTimeout(() => navigate("/forgotPassword/checkEmail"), 2000);
        }
      })
      .catch((error) => {
        setComfirm(false);
        toast.error(error.response.data.error);
      });
  };

  return (
    <Auth page="forgotPassword">
      <form
        onSubmit={handleSubmit(submitForm)}
        className={`flex flex-col  w-[400px] gap-y-5  shadow-sm p-5 rounded-lg bg-slate-50  ${
          comfirm ? "animate-right" : "animate-left"
        }`}
      >
        <Input
          name="email"
          placeholder="Enter Email"
          type="text"
          control={control}
        ></Input>
        <Button type={"submit"} onClick={() => setComfirm(true)}>
          Send
        </Button>
      </form>
    </Auth>
  );
};

export default ForgotPasswordWriteEmail;
