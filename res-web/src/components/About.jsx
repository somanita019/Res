import React from "react";
import pic3 from "../assets/img/img1.webp";
import Button from "../layouts/Button";
const About = () => {
  return (
    <div className=" mt-24 min-h-screen flex flex-col lg:flex-row justify-center items-centers lg:px-32 px-5">
      <img className="w-1/2 h-1/2" src={pic3} alt="img" />
      <div className=" mx-5 space-y-4 lg:pt-14">
        <h1 className="font-semibold text-4xl text-center md:text-start">
          Why choose us?{" "}
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
          corrupti, quo eveniet necessitatibus perferendis harum commodi vero
          dignissimos distinctio ut autem natus dicta architecto est magni,
          quidem cumque velit ullam debitis, officiis animi dolor recusandae et
          dolorum! Nemo, a temporibus!
        </p>
        <p>
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla
        </p>
        <div className="flex justify-center lg:justify-start">
          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;
