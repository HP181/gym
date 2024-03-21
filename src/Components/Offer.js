import React from "react";

const Offer = () => {
  return (
    <div>
      <section className="text-gray-600 body-font mt-40 mb-32">
        <div className="container px-5 mx-auto ">
          {/* <div className="hidden md:flex flex-wrap  m-auto  mb-20 bg-green-700 ">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                OUR OFFER
              </h1>
              <div className="h-1 w-40 bg-indigo-500 rounded" />
            </div>
            <div className="relative flex justify-around items-center ">
              <div className=' hidden sm:block absolute bg-cyan-400 w-44 h-44 bottom-10 left-[25em] rounded-full shadow-xl shadow-gray-200'></div>
              <div className=" hidden absolute  bg-gray-200  sm:w-[45em] sm:h-44  rounded-xl shadow-xl sm:ml-72 shadow-cyan-500/50 sm:flex p-20 items-center">
                <p className="w-full leading-relaxed text-[#2e94ff] font-bold z-30 ">
                  Get up to 30% off fixed term memberships or 10% off your first
                  6 months on monthly memberships - all with free multi-gym
                  access outside of term time.
                </p>
              </div>
            </div>
          </div> */}

<h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900">
                OUR OFFER
              </h1>

          <div className="flex flex-wrap -m-4 mt-20 ">
            <div className="xl:w-1/4 md:w-1/2 p-4">


       
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="/offer-1.png"
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  ONLINE TRAINING
                </h2>
                <p className="leading-relaxed text-base">
                  We'll contact you to learn about your health and fitness
                  background so that your personal trainer can design a training
                  plan tailored to your individual needs.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="offer-2.png"
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  TRAINING AND WORKSHOP
                </h2>
                <p className="leading-relaxed text-base">
                  Taking a unique and completely customised approach to training
                  and nutritional supplements, the Workshop system is the
                  antidote to fast fitness fads.{" "}
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="offer-3.png"
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  PHYSIOTHERAPY SERVICES
                </h2>
                <p className="leading-relaxed text-base">
                  Often you will have physiotherapy services onsite at your club
                  meaning that the physio can work with you in the treatment
                  room.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="offer-4.png"
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  WOMEN'S GYM
                </h2>
                <p className="leading-relaxed text-base">
                  Our women's fitness classes range from low to high intensity
                  and strength training workouts.we provide ladies only gyms so
                  you can enjoy a work
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offer;
