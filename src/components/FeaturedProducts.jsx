import React, { useContext } from "react";
import { AppContext } from "../StateManagement/ProductContext";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  const { isLoading, featureProducts } = useContext(AppContext);
  // console.log(featureProducts);


  return isLoading ? (
    <div className="flex flex-col items-center">
      <div className="py-14 flex flex-col items-center gap-10">
        <p className="text-white text-sm font-thin">. . . L o a d i n g</p>
        <img
          className="h-20"
          src="https://media.tenor.com/XK37GfbV0g8AAAAj/loading-cargando.gif"
          alt="loader image"
        />
      </div>
    </div>
  ) : (
    <>
    <div className=" h-screen flex text-slate-200 flex-col gap-28 justify-center items-center">
      <h2 className="text-4xl font-semibold">Feature Services</h2>
      <div className=" grid grid-cols-3  gap-32 justify-center items-center">
        {featureProducts.map((item) => (
          <ProductCard key={item?.id} item={item}/>
        ))}
      </div>
    </div>
    </>
  )
};

export default FeaturedProducts;
