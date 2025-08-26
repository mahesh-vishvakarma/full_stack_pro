import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Neaarivels = () => {
  const scrollReff = useRef(null);

  // const [isDragging,setIsdragging] = useState(false);
  // const [startX,setStartX] = useState(0);
  // const [scrollleft,setScrolleft] = useState(false)
  const [cancrollLeft,setcanScrollLeft] = useState(false);
  const [canscrollRight,cansetScrollRight] = useState(true);


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

const ScroLL = (directionm)=> {
  const scroAmount = directionm === "left" ? -300 : 300;
  let hh = scrollReff.current.scrollBy({left:scroAmount, behaviour:"smooth"})
console.log("aeroorei",hh);
}

const updateButton = ()=>{
  const container = scrollReff.current;
  if(container){
    const leftScroll = container.scrollLeft;
    const rightScroll = container.scrollWidth > leftScroll + container.clientWidth;
    setcanScrollLeft(leftScroll > 0);
    cansetScrollRight(rightScroll)
  }
  // console.log({
  //   scrollLeft:container.scrollLeft,
  //   cllintWidth:container.clientWidth,
  // });  
}

  useEffect(()=>{
    const container = scrollReff.current;
    if(container){
      container.addEventListener("scroll",updateButton);
      // updateButton();
    }
  })
  return (
    <section>
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
        <p className="text-lg text-gray-600 mb-8">
          Dicover the latest stylish straight runway, freshly added to keep your
          wardrobe on the cutting edge of fation
        </p>

        <div className="absolute right-0 bottom-[-30px] flex space-x-2">
          <button onClick={()=> ScroLL("left")} disabled={!setcanScrollLeft} className={`p-2 rounded border ${cancrollLeft ? "bg-white text-black" : "bg-gray-200 text-gray-800 cursor-not-allowed"}`}>
            <FiChevronLeft className="text-2xl" />
          </button>
          <button onClick={()=> ScroLL("right")} disabled={!cansetScrollRight} className={`p-2 rounded border ${canscrollRight ? "bg-white text-black" : "bg-gray-200 text-gray-800 cursor-not-allowed"}`}>
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>

      <div ref={scrollReff} className="container mx-auto overflow-x-scroll flex space-x-6 relative">
        {newArrival.map((product) => {
          return (
            <div
              key={product._id}
              className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative"
            >
              <img 
                src={product.images[0]?.url}
                alt={product.images[0]?.altText || product.name}
                className="w-full h-[500px] object-cover rounded"
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
