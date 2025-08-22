import React, { useState } from "react";
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";

const Searchbar = () => {
  const [serchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsopen] = useState(false);

  const handleSearchTerm = () => {
    setIsopen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(serchTerm, "sfsfslj");
    setIsopen(!isOpen);
  };
  return (
    <div
      className={`flex justify-center items-center w-full transition-all duration-300 ${
        isOpen ? " absolute top-0 left-0 w-full bg-white h-24 z-50" : "w-au"
      }`}
    >
      {isOpen ? (
        <form
          onSubmit={handleSubmit}
          className="relative flex justify-center items-center w-full"
        >
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search"
              value={serchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-gray-100 px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-700 "
            />
            <button className="absolute top-1.5 right-2 transform-translate-y-1/2 text-gray-600 hover:text-gray-800">
              <HiMagnifyingGlass className="h-6 w-6" />
            </button>
          </div>
          <button type="button" onClick={handleSearchTerm}>
            <HiMiniXMark className="h-6 w-6 absolute top-1.5 right-4 transform-translate-y-1/2 text-gray-600 hover:text-gray-800" />
          </button>
        </form>
      ) : (
        <button onClick={handleSearchTerm}>
          <HiMagnifyingGlass />
        </button>
      )}
    </div>
  );
};

export default Searchbar;
