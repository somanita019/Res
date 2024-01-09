import React from "react";
import Button from "../layouts/Button";

const Welcome = () => {
  return (
    <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/chef.webp')] bg-cover bg-no-repeat">
      <div className="w-full lg:w2/3 space-y-5">
        <h1 className="text-blackcolor font-semibold text-6xl">
          Elevate Your Inner Foodie with Every Bite.
        </h1>
        <p className="text-blackcolor ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
          ab voluptatibus ad. A commodi et exercitationem doloribus dignissimos,
          omnis nihil amet.
        </p>
        <div className="lg:pl-44">
          <Button title="Book Now" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
