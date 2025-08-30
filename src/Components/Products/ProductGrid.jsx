import React from "react";
import { Link } from "react-router-dom";
const ProductGrid = ({ produts }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {produts.map((item, idx) => (
        <Link key={idx} to={`product/item._id`} className="block">
          <div className="bg-white p-4 rounded-lg">
            <div className="w-full h-96 mb-4">
              <img
                className="w-full h-full rounded-lg object-cover"
                src={item.images[0].url}
                alt={item.images[0].altText || item.name}
              />
              <div>
                <h3 className="text-sm mb-2">{item.name}</h3>
                <p className="text-green-500 font-medium text-sm tracking-tighter">
                  $ {item.price}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;
