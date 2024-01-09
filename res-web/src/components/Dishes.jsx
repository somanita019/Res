import React from "react";
import pic1 from "../assets/img/food.avif";
import pic2 from "../assets/img/food.avif";
import pic3 from "../assets/img/lunch.jpeg";

const Dishes = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center pt-24 pb-10">
        Our Popular Dishes
      </h1>

      <div className="flex flex-wrap gap-8 justify-center">
        <a
          className="p-8 max-w-lg border border-brightColor rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
          href="#"
        >
          <img
            src={pic1}
            className="shadow rounded-lg overflow-hidden border"
            alt="Dish"
          />
          <div className="mt-8">
            <h4 className="font-bold text-xl">Tasty Dishes</h4>
            <p className="mt-2 text-gray-600">
              Create Exercises for any subject with the topics you and your
              students care about.
            </p>
            <div className="mt-5">
              <button
                type="button"
                className="px-6 py-1 border-2 border-brightColor text-brightColor hover:bg-brightColor hover:text-white transition-all rounded-full"
              >
                Book now
              </button>
            </div>
          </div>
        </a>
        <a
          className="p-8 max-w-lg border border-brightColor rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
          href="#"
        >
          <img
            src={pic2}
            className="shadow rounded-lg overflow-hidden border"
            alt="Dish"
          />
          <div className="mt-8">
            <h4 className="font-bold text-xl">Crispy</h4>
            <p className="mt-2 text-gray-600">
              Create Exercises for any subject with the topics you and your
              students care about.
            </p>
            <div className="mt-5">
              <button
                type="button"
                className="px-6 py-1 border-2 border-brightColor text-brightColor hover:bg-brightColor hover:text-white transition-all rounded-full"
              >
                Book now
              </button>
            </div>
          </div>
        </a>
        <a
          className="p-8 max-w-lg border border-brightColor rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
          href="#"
        >
          <img
            src={pic3}
            className="shadow rounded-lg overflow-hidden border"
            alt="Dish"
          />
          <div className="mt-8">
            <h4 className="font-bold text-xl">Delicious</h4>
            <p className="mt-2 text-gray-600">
              Create Exercises for any subject with the topics you and your
              students care about.
            </p>
            <div className="mt-5">
              <button
                type="button"
                className="px-6 py-1 border-2 border-brightColor text-brightColor hover:bg-brightColor hover:text-white transition-all rounded-full"
              >
                Book now
              </button>
            </div>
          </div>
        </a>
        <a
          className="p-8 max-w-lg border border-brightColor rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
          href="#"
        >
          <img src={pic3} className="shadow rounded-lg overflow-hidden border" alt="Dish" />
          <div className="mt-8">
            <h4 className="font-bold text-xl">Top Dessert</h4>
            <p className="mt-2 text-gray-600">
              Create Exercises for any subject with the topics you and your students care about.
            </p>
            <div className="mt-5">
              <button
                type="button"
                className="px-6 py-1 border-2 border-brightColor text-brightColor hover:bg-brightColor hover:text-white transition-all rounded-full"
              >
                Book now
              </button>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Dishes;
