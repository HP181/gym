import React from 'react'
import { NavLink } from 'react-router-dom'
import {GrYoga} from "react-icons/gr"
import {MdFitnessCenter} from "react-icons/md"

const Popular = () => {
  return (
    <div>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
        
      </h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
      Popular activities
      </h1>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <MdFitnessCenter size={25} />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              FUNCTIONAL TRAINING
            </h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">
            General development training aimed at increasing overall physical fitness and functional muscle strength. The proper training is preceded by a simple warm-up involving the whole body and finished with stretching. During the classes, all available equipment is used: mats, rubber bands, balls, dumbbells, barbells, as well as your own body weight. These exercises not only shape the body, but also increase endurance, strengthen muscles, tendons and joints, and burn fat. Working in such a system allows you to stimulate the metabolism and mobilize the body to intensively burn fat. The exercises performed during these classes imitate the movement patterns present in everyday life - multi-joint movements involving as many muscles as possible, moving away from isolated exercises.
            </p>
            <NavLink className="mt-3 text-indigo-500 inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
          <img src="/exercise.png" className='h-7 w-7 invert ' alt="" />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              FLAT BELLY
            </h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">
            Classes containing a set of exercises that shape and strengthen the abdominal muscles. Flat Belly is both a strengthening and aerobic exercise all rolled into one. Exercises performed during classes contribute to the burning of adipose tissue and make the body firmer and improve muscle tone. These classes are suitable for both beginners and advanced in training the abdominal muscles. Recommended for everyone who wants to show off a flat and firm belly.
            </p>
            <NavLink className="mt-3 text-indigo-500 inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
            <GrYoga className='invert' size={22}/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              YOGA
            </h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">
            Yoga classes include exercises aimed at preventing the occurrence of many diseases and pain in the future. The training is based on relaxation and breathing techniques and is a combination of gentle physical exercises with stress reduction methods. During the classes, attention is paid to the precise performance of asanas, gradually moving from basic to advanced positions. Equipment such as blocks or belts is used to deepen and correct the position. The classes are intended for both beginners and regular practitioners. Thanks to systematic practice, you will take care of a slim figure, reduce tension and gain more energy and strength in everyday life.
            </p>
            <NavLink className="mt-3 text-indigo-500 inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Popular