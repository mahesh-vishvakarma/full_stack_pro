import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Neaarivels = () => {
  const scrollReff = useRef(null);

  const [isDragging, setIsdragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(false);
  const [scrollRight, setScrollRight] = useState(true);

  const newArrival = [
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

  const isMouseDoun = (e) => {
    setStartX(e.pageX - scrollReff.current.offsetLeft);
    setIsdragging(true);
    // console.log(startX,"start x");
    setScrollLeft(scrollReff.current.offsetLeft);
  };

  const isMouseIsUpMove = (e) => {
    if(!isDragging) return;
    const x = e.startX - scrollReff.current.offsetLeft;
    const walk = x - startX;
    // scrollReff.current.offsetLeft = scrollLeft-walk;
  };

  const isMouLeaveOrUp = () => {
    setIsdragging(false)
  };


  const updateButton = () => {
    const container = scrollReff.current;
    // console.log({
    //   scrollLeft: container.scrollLeft,
    //   cllintWidth: container.clientWidth,
    // });
  };

  useEffect(() => {
    const container = scrollReff.current;
    if (container) {
      container.addEventListener("scroll", updateButton);
      updateButton();
      return ()=> container.removeEventListener("scroll",updateButton)
    }
  });
  return (
    <section>
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
        <p className="text-lg text-gray-600 mb-8">
          Dicover the latest stylish straight runway, freshly added to keep your
          wardrobe on the cutting edge of fation
        </p>

        <div className="absolute right-0 bottom-[-30px] flex space-x-2">
          <button className="p-2 rounded border bg-white text-black">
            <FiChevronLeft className="text-2xl" />
          </button>
          <button className="p-2 rounded border bg-white text-black">
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>

      <div
        onMouseDown={isMouseDoun}
        onMouseLeave={isMouLeaveOrUp}
        onMouseMove={isMouseIsUpMove}
        onMouseUp={isMouLeaveOrUp}
        ref={scrollReff}
        className="container mx-auto overflow-x-scroll flex space-x-6 relative"
      >
        {newArrival.map((product) => {
          return (
            <div
              key={product._id}
              className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative"
            >
              <img
                src={product.images[0]?.url}
                alt={product.images[0]?.altText || product.name}
                draggable="false"
                className={`w-full h-[500px] object-cover rounded ${isDragging ? "cursor-grabbing" : "cursor-grab"} `}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-md text-white p-4 rounded-b-lg">
                <Link to={`/product/${product._id}`}>
                  <h4 className="font-medium">{product?.name}</h4>
                  <p className="mt-1">${product.price}</p>
                </Link>
              </div>
              <h1>{product?.name}</h1>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Neaarivels;
