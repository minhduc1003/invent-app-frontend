import React from "react";

const WhyUs = () => {
  const reasons = [
    {
      id: 0,
      title: "Fast & Secure Delivery",
      image: "service.png",
    },
    {
      id: 1,
      title: "100% Guarantee On Product",
      image: "service1.png",
    },
    {
      id: 2,
      title: "24 Hour Return Policy",
      image: "service2.png",
    },

    {
      id: 3,
      title: "Next Level Pro Quality",
      image: "service3.png",
    },
  ];
  return (
    <>
      <div className="flex items-center justify-center mt-5 mb-20">
        <h1 className="text-4xl font-bold">Why People Choose Us</h1>
      </div>
      <div className="flex items-center justify-between mb-10">
        {reasons.map((reason) => (
          <div key={reason.id}>
            <div className="flex items-center justify-center flex-col gap-y-4">
              <div>
                <img src={reason.image} alt="" />
              </div>
              <h2 className="font-medium">{reason.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WhyUs;
