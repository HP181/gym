import React from "react";

const Banner = () => {
  return (
    <>
      <div className="relative top-0">
        <img
          src="/background.png"
          className="sm:w-[80%] sm:h-[60vh] m-auto object-cover rounded-lg   "
          alt="banner pic"
        />

        <div className="absolute top-0 flex flex-col justify-center  w-full h-full pl-10 sm:pl-36">
          <h1 className="text-gray-200  font-mono sm:pb-6 sm:text-2xl md:text-3xl">FITNESS ZONE</h1>
          <p className="relative text-white  font-bold font-mono w-full sm:text-2xl md:text-6xl">
            Where Fitness
          </p>
          <p className="relative text-white  font-bold font-mono sm:text-2xl md:text-6xl">
            Becomes Your
          </p>
          <p className="relative text-white  font-bold font-mono sm:text-2xl md:text-6xl">Lifestyle</p>
          
        </div>
      </div>
    </>
  );
};

export default Banner;
