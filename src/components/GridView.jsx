import React from "react";
import ProductCard from "./ProductCard";

const GridView = ({ products }) => {
  // console.log(products);
  return (
    <div >
      <div className="flex justify-center flex-wrap items-center gap-10 max-w-[1100px] ">
        {products?.map((item) => (
          <ProductCard key={item?.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default GridView;
