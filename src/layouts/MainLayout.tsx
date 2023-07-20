import React, { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="md:max-w-[700px] lg:max-w-[950px] xl:max-w-[1100px] 2xl:max-w-[1440px]  max-w-[600px] mx-auto">
      {children}
    </div>
  );
};

export default MainLayout;
