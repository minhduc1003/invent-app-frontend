import Auth from "./Auth";

const CheckEmail = () => {
  return (
    <Auth page="forgotPassword">
      <div className="flex flex-col items-center  w-[400px] gap-y-5   p-5 rounded-lg bg-slate-50 shadow-custom animate-left">
        <div className="w-10 h-10">
          <img
            className="w-full h-full object-cover"
            src="./checked.png"
            alt=""
          />
        </div>
        <h1 className="font-bold text-3xl text-green-400">Check Your Email</h1>
      </div>
    </Auth>
  );
};

export default CheckEmail;
