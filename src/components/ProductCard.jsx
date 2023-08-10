import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";
import ProductButton from "./ProductButton";

const ProductCard = ({ item }) => {
  return (
    <NavLink
      to={`/singleproduct/${item?.id}`}
      className="bg-slate-950 backdrop-filter backdrop-blur-lg bg-opacity-50 min-h-[380px] w-[340px] flex items-center justify-center rounded-lg"
    >
      <div className="w-[300px] rounded-lg">
        <img
          src={`${item?.image}`}
          alt="Laptop"
          className="h-[200px] w-full rounded-md object-cover"
        />
        <div className="p-4">
          <h3 className="text-2xl text-white font-semibold">{item?.name}</h3>
          <div className="flex justify-between items-center">
            <p className="mt-3 text-lg text-blue-400">
              {" "}
              {<FormatPrice Price={item?.price} />}
            </p>
            <ProductButton text={"View"} />
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default ProductCard;
