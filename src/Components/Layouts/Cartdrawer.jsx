import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Cartcontents from "../Cart/Cartcontents";

const Cartdrawer = ({drawerOpen,togleCartDrawer}) => {

  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 bg-white h-full shadow-lg transform transition-transform duration-300 md:w-1/4 flex flex-col z-50 ${
        drawerOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-end p-4">
        <button onClick={togleCartDrawer}>
          <IoMdClose className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      <div className="flex-grow p-4 overflow-y-auto">
        <h1 className="text-xl mb-4 font-semibold">your carts</h1>
        <Cartcontents/>
      </div>
      <div className="sticky p-4 bottom-0 bg-white">
        <button className="w-full bg-black text-white transition py-3 rounded-lg font-semibold hover:bg-gray-500">Checkout</button>
        <p className="text-sm mb-2 text-center text-gray-800 tracking-tighter">
            Shipping,Taxes and discount code calculate at Checkout
        </p>
      </div>
    </div>
  );
};

export default Cartdrawer;
