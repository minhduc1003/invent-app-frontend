import React, { ReactNode } from "react";
type Props = {
  children: ReactNode;
  type: string;
};
const Button = ({ children, type }: Props) => {
  return (
    <button
      type={type}
      className="bg-[#4461F2] p-4 w-full rounded-lg text-white flex items-center justify-center shadow-2xl cursor-pointer"
    >
      {children}
    </button>
  );
};

export default Button;
