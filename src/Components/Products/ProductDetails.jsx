import React, { useEffect, useState } from "react";
import womenscollection from "../../assets/womens-collection.webp";
import menscollection from "../../assets/mens-collection.webp";
import {toast} from "sonner";
const ProductDetails = () => {
  const [mainImag, setMainImage] = useState("");
  const [selectSize, setSelectSize] = useState("");
  const [selectColor, setSelectColor] = useState("");
  const [qty, setQty] = useState(1);
  const [isDisable, setIsDisable] = useState(false);
  const selectedProduct = {
    name: "Stylish Jacket",
    price: 120,
    originalPrice: 150,
    description: "this is a stylish jacke perfect for any occation",
    brand: "fashion brand",
    material: "Leather",
    sizes: ["S", "M", "X", "XL"],
    colors: ["Red", "yellow"],
    images: [
      {
        // url: "https://picsum.photos/500/500?random=1",
        url: womenscollection,
        altName: "Stylish Jackat",
      },
      {
        // url: "https://picsum.photos/500/500?random=2",
        url: menscollection,
        altName: "Stylish T-Shirt",
      },
    ],
  };
  // useEffect(()=>{
  //   if(selectedProduct.images.length > 0){
  //     setMainImage(selectedProduct.images[0].url)
  //     // console.log(mainImag,"mainimag");

  //   }
  // },[selectedProduct])

  const handleQty = (action) => {
    if (action === "plus") {
      setQty((prev) => prev + 1);
    }
    if (action === "minus" && qty > 1) {
      setQty((prev) => prev - 1);
    }
  };

  const handleAddToCart = ()=>{
    if(!selectSize || !selectColor){
      toast.error("Select color and Size berfore Add to Cart...!",{
        duration:1000
      })
    return;
    }
    setIsDisable(true);

    setTimeout(()=>{
      toast.success("added to cart.......!",{
        duration:3000
      })
        setIsDisable(false)
    },5000)
  }


  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectedProduct?.images?.map((item, idx) => (
              <img
                key={idx}
                src={item.url}
                alt={item.altName || `Thumbnail${idx}`}
                className={`w-20 h-20 rounded-lg object-cover cursor-pointer ${
                  mainImag === item.url ? "border-1 p-1" : "border-gray-300"
                }`}
                onClick={() => setMainImage(item.url)}
              />
            ))}
          </div>

          <div className="md:hidden overscroll-x-scroll flex space-x-4 mb-4">
            {selectedProduct?.images?.map((item, idx) => (
              <img
                key={idx}
                src={item.url}
                alt={item.altName || `Thumbnail${idx}`}
                className={`w-20 h-20 rounded-lg object-cover cursor-pointer ${
                  mainImag === item.url ? "border-1 p-1" : "border-gray-300"
                }`}
                onClick={() => setMainImage(item.url)}
              />
            ))}
          </div>
          <div className="sm:w-[300px] md:w-1/2">
            <div className="mb-4">
              <img
                src={mainImag || selectedProduct.images[0].url}
                alt="Main Product"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {selectedProduct.name}
            </h1>
            <p className="text-lg text-green-600 mb-1 line-through">
              {selectedProduct.originalPrice &&
                `${selectedProduct.originalPrice}`}
            </p>
            <p className="text-xl text-gray-500 mb-2">
              {selectedProduct.price}
            </p>
            <p className="text-gray-500 mb-2">{selectedProduct.description}</p>
            <div className="mb-4">
              <p className="text-green-700">Color</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectColor(color)}
                    className={`w-8 h-8 rounded-full border ${
                      selectColor === color
                        ? "border-black border-4"
                        : "border-gray-300"
                    }`}
                    style={{
                      backgroundColor: color.toLocaleLowerCase(),
                      filter: "brightness(0.5)",
                    }}
                  ></button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <p className="text-red-700">Sizes</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.sizes.map((sixes) => (
                  <button
                    key={sixes}
                    onClick={() => setSelectSize(sixes)}
                    className={`px-4 py-2 rounded border ${
                      selectSize === sixes
                        ? "bg-black text-white"
                        : "bg-gray-50"
                    }`}
                  >
                    {sixes}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <p className="text-gray-700">Quantity</p>
              <div className="flex items-center space-x-4 mt-2">
                <button
                  onClick={() => handleQty("minus")}
                  className="px-2 py-2 bg-gray-200 rounded text-lg"
                >
                  -
                </button>
                <span className="text-lg">{qty}</span>{" "}
                <button
                  onClick={() => handleQty("plus")}
                  className="px-2 py-2 bg-gray-200 rounded text-lg"
                >
                  +
                </button>
              </div>
            </div>

            <button disabled={isDisable} onClick={handleAddToCart} className={`bg-black text-white py-2 px-6 rounded w-full mb-4 ${isDisable ? "cursor-not-allowed opacity-50" : "bg-gray-900" }`}>
              {isDisable ? "adding....!" : "ADD TO CART"}
            </button>
            <div className="mt-10 text-gray-700">
              <h3 className="text-xl font-bold mb-4">Characterstics</h3>
              <table className="w-full text-left text-gray-600">
                <tbody>
                  <tr>
                    <td className="py-1">Brand</td>
                    <td className="py-1">{selectedProduct.brand}</td>
                  </tr>
                  <tr>
                    <td className="py-1">Material</td>
                    <td className="py-1">{selectedProduct.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
