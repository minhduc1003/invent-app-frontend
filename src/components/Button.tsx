import React, { ReactNode } from "react";
type Props = {
  children: ReactNode;
  type: "button" | "submit" | "reset" | undefined;
} & React.HTMLAttributes<HTMLButtonElement>;
const Button = ({ children, type, ...props }: Props) => {
  return (
    <button
      type={type}
      className="bg-[#4461F2] p-4 w-full rounded-lg text-color-white flex items-center justify-center shadow-2xl cursor-pointer"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
