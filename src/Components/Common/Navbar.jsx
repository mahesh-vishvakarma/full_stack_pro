import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiBars3BottomRight,
  HiShoppingBag,
} from "react-icons/hi2";
import Searchbar from "./Searchbar";
import Cartdrawer from "../Layouts/Cartdrawer";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileDrawer, setMobileDrawer] = useState(false);

  const toggleMobileDrawer = () => {
    setMobileDrawer(!mobileDrawer);
  };

  const togleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* logo */}
        <div>
          <Link to="/" className="font-medium text-2xl">
            Rabbit
          </Link>
        </div>

        <div className="hidden md:flex space-x-6">
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Men
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Woman
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Top Wear
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Bottom Wear
          </Link>
        </div>

        {/* right side */}
        <div className="flex items-center space-x-4">
          <Link to="/profile" className="hover:text-black">
            <HiOutlineUser className="w-6 h-6 text-gray-700" />
          </Link>
          <button
            onClick={togleCartDrawer}
            className="relative hover:text-black"
          >
            <HiShoppingBag className="h-6 w-6 text-gray-700" />{" "}
            <span className="absolute top-0.5 bg-rabit-red text-white text-xs rounded-full px-2 py-0.5">
              4
            </span>
          </button>

          {/* searchbar */}
          <div className="overflow-hidden">
            <Searchbar />
          </div>
          <button onClick={toggleMobileDrawer} className="md:hidden">
            <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>
      <Cartdrawer drawerOpen={drawerOpen} togleCartDrawer={togleCartDrawer} />

      {/* mobile */}
      {
        mobileDrawer ? <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          mobileDrawer ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMobileDrawer}>
            <IoMdClose className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <div className="p-4">
          <h1 className="text-xl font-semibold mb-4">Menu</h1>
          <nav>
            <Link
              to="#"
              onClick={toggleMobileDrawer}
              className="text-gray-500 block hover:text-gray-700"
            >
              Men
            </Link>
          </nav>
          <nav>
            <Link
              to="#"
              onClick={toggleMobileDrawer}
              className="text-gray-500 block hover:text-gray-700"
            >
              Woman
            </Link>
          </nav>
          <nav>
            <Link
              to="#"
              onClick={toggleMobileDrawer}
              className="text-gray-500 block hover:text-gray-700"
            >
              Top Wear
            </Link>
          </nav>
          <nav>
            <Link
              to="#"
              onClick={toggleMobileDrawer}
              className="text-gray-500 block hover:text-gray-700"
            >
              Bottom Wear
            </Link>
          </nav>
        </div>
      </div> : <></>
      }
    </>
  );
};

export default Navbar;
