import React, { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../Products/FilterSidebar";
const CollectionsPg = () => {
  const [procollection, setCollection] = useState([]);
  const [isOpenSideBar,setIsOpenSideBar] = useState(false);
  const sideBarRef = useRef(null);

  const toggleSideBar = ()=>{
    setIsOpenSideBar(!isOpenSideBar);
  }

  const handleMouseDown = (e)=>{
    if(sideBarRef.current && !sideBarRef.current.contains(e.target)){
      setIsOpenSideBar(false) 
    }
  }

  useEffect(()=>{
    window.addEventListener("mousedown", handleMouseDown)
        window.removeEventListener("mousedown", handleMouseDown)
  })

  useEffect(() => {
    setTimeout(() => {
      const collection = [
        {
          _id: 1,
          name: "Stylish Jacket",
          price: 120,
          images: [
            {
              url: "https://picsum.photos/500/500?random=1",
              altText: "Stylish Jacket",
            },
          ],
        },
        {
          _id: 2,
          name: "Stylish Jacket",
          price: 120,
          images: [
            {
              url: "https://picsum.photos/500/500?random=2",
              altText: "Stylish Jacket",
            },
          ],
        },
        {
          _id: 3,
          name: "Stylish Jacket",
          price: 120,
          images: [
            {
              url: "https://picsum.photos/500/500?random=3",
              altText: "Stylish Jacket",
            },
          ],
        },
        {
          _id: "4",
          name: "Stylish Jacket",
          price: 120,
          images: [
            {
              url: "https://picsum.photos/500/500?random=4",
              altText: "Stylish Jacket",
            },
          ],
        },
        {
          _id: "5",
          name: "Stylish Jacket",
          price: 120,
          images: [
            {
              url: "https://picsum.photos/500/500?random=5",
              altText: "Stylish Jacket",
            },
          ],
        },
        {
          _id: "6",
          name: "Stylish Jacket",
          price: 120,
          images: [
            {
              url: "https://picsum.photos/500/500?random=6",
              altText: "Stylish Jacket",
            },
          ],
        },
        {
          _id: "7",
          name: "Stylish Jacket",
          price: 120,
          images: [
            {
              url: "https://picsum.photos/500/500?random=7",
              altText: "Stylish Jacket",
            },
          ],
        },
      ];
      setCollection(collection);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row">
      {/* mobile */}
      <button className="lg:hidden border p-2 flex justify-center" onClick={toggleSideBar}>
        <FaFilter className="mr-2" />
      </button>
      {/* filter sidbar */}
      <div ref={sideBarRef} 
      className={`${isOpenSideBar ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-1000 lg:static lg:translate-x-0`}
      >
        <FilterSidebar/>
      </div>
    </div>
  );
};

export default CollectionsPg;
