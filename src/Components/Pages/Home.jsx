import React from "react";
import Hero from "../Layouts/Hero";
import Collection from "../Products/Collection";
import Neaarivels from "../Products/Neaarivels";
import ProductDetails from "../Products/ProductDetails";
import ProductGrid from "../Products/ProductGrid";
import womenscollection from "../../assets/womens-collection.webp";
import menscollection from "../../assets/mens-collection.webp";
import FeaturedCollection from "../Products/FeaturedCollection";
import FeaturSection from "../Products/FeaturSection";
const Home = () => {
  const placeholderProducts = [
    {
      _id: 5,
      name: "product 1",
      price: 100,
      images: [
        {
          url: menscollection,
          altText: "product 1",
        },
      ],
    },
    {
      _id: 6,
      name: "product 1",
      price: 100,
      images: [
        {
          url: womenscollection,
          altText: "product 2",
        },
      ],
    },
    {
      _id: 7,
      name: "product 1",
      price: 100,
      images: [
        {
          url: menscollection,
          altText: "product 3",
        },
      ],
    },
    {
      _id: 8,
      name: "product 1",
      price: 100,
      images: [
        {
          url: menscollection,
          altText: "product 4",
        },
      ],
    },
    {
      _id: 9,
      name: "product 1",
      price: 100,
      images: [
        {
          url: menscollection,
          altText: "product 4",
        },
      ],
    },
    {
      _id: 10,
      name: "product 1",
      price: 100,
      images: [
        {
          url: menscollection,
          altText: "product 4",
        },
      ],
    },
    {
      _id: 11,
      name: "product 1",
      price: 100,
      images: [
        {
          url: menscollection,
          altText: "product 4",
        },
      ],
    },
    {
      _id: 12,
      name: "product 1",
      price: 100,
      images: [
        {
          url: menscollection,
          altText: "product 4",
        },
      ],
    },
  ];
  return (
    <div>
      <Hero />
      <Collection />
      <Neaarivels />
      {/* best sellor */}
      <h1 className="text-3xl font-medium text-center">Best Sellor</h1>
      <ProductDetails />
      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">
          Top Wears for Women
        </h2>
        <ProductGrid produts={placeholderProducts} />
      </div>
      <FeaturSection/>
    </div>
  );
};

export default Home;
