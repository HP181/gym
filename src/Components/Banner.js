import React from "react";

const Banner = () => {
  return (
    <>
      <div className="relative top-0">
        <img
          src="/background.png"
          className="w-full h-[55vh] object-cover rounded-lg   "
          alt="banner pic"
        />

        <div className="absolute top-0 flex flex-col justify-center  w-full h-full pl-36">
          <h1 className="text-gray-200 text-3xl font-mono pb-6">FITNESS ZONE</h1>
          <p className="relative text-white text-6xl font-bold font-mono w-16 ">
            Where Fitness
          </p>
          <p className="relative text-white text-6xl font-bold font-mono">
            Becomes Your
          </p>
          <p className="relative text-white text-6xl font-bold font-mono">Lifestyle</p>
          
        </div>
      </div>
    </>
  );
};

export default Banner;
