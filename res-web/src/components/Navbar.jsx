import React, { useState } from "react";
import { Link } from "react-scroll";
import { BiChevronDown, BiRestaurant } from "react-icons/bi";
import Button from "../layouts/Button";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";
const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className="fixed w-full">
      <div>
        <div className="flex flex-row justify-between p-4 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgba(0,0,0,0.2)]">
          <div className="flex flex-row items-center cursor-pointer ">
            <span>
              <BiRestaurant size={32} />
            </span>

            <h1 className="text-xl font-semibold">Res</h1>
          </div>
          <nav className="hidden md:flex flex-row intems-center text-lg font-medium gap-8 ">
            <Link
              to="welcome"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all  cursor-pointer"
            >
              Welcome To Res
            </Link>
            <div className="relative group">
              <div className="flex items-center gap-1">
                <Link
                  to="dishes"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:text-brightColor transition-all cursor-pointer"
                >
                  Dishes
                </Link>
                <BiChevronDown className="cursor-poniter" size={25} />
              </div>

              <ul className="absolute hidden space-y-2 group-hover:block bg bg-white border border-gray-300 rounded-lg p-5">
                <li>
                  <Link
                    to="dishes"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="hover:text-brightColor transition-all cursor-pointer"
                  >
                    Dishes
                  </Link>
                </li>
                <li>
                  <Link
                    to="dishes"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="hover:text-brightColor transition-all cursor-pointer"
                  >
                    Tasty
                  </Link>
                </li>
                <li>
                  <Link
                    to="dishes"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="hover:text-brightColor transition-all cursor-pointer"
                  >
                    Delicious
                  </Link>
                </li>
                <li>
                  <Link
                    to="dishes"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="hover:text-brightColor transition-all cursor-pointer"
                  >
                    Crispy
                  </Link>
                </li>
              </ul>
            </div>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-brightColor transition-all cursor-pointer"
            >
              About us
            </Link>
            <Link
              to="menu"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Menu
            </Link>
            <Link
              to="Contact"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Contact
            </Link>
            <Button title="Sign In" />
            <Button title="Sign Up" />
          </nav>

          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="px-2 py-1 border border-gray-300 rounded-md mr-4 focus:outline-none"
            />
          </div>
          <div className="md:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transfrom duration-300`}
        >
          <Link
            to="welcome"
            spy={true}
            smooth={true}
            duration={500}
            className="text-brightColor transition-all  cursor-pointer"
          >
            Welcome To Res
          </Link>
          <Link
            to="dishes"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
          >
            Dishes
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightColor transition-all cursor-pointer"
          >
            About us
          </Link>
          <Link
            to="menu"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
          >
            Menu
          </Link>
          <Link
            to="Contact"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
          >
            Contact
          </Link>

          <Button title="Sign In" />
          <Button title="Sign Up" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
