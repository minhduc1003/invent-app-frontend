import React, { ReactNode } from "react";
type Props = {
  icon: ReactNode;
  children: ReactNode;
  color: "pink" | "purple";
  className?: string;
};
const DesOfSection = ({ icon, children, color,className }: Props) => {
  return (
    <>
      <div className={`flex gap-4 items-center text-sm font-semibold mt-20 ${className}`}>
        <div
          className={`p-1 border border-solid  rounded-full text-color-white  ${
            color == "pink"
              ? "border-color-secondary bg-color-secondary"
              : "border-color-chart01 bg-color-chart01"
          }`}
        >
          <span>{icon}</span>
        </div>
        <p
          className={
            color == "pink" ? "text-color-secondary" : "text-color-chart01"
          }
        >
          {children}
        </p>
      </div>
    </>
  );
};

export default DesOfSection;
