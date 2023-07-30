import React, { useContext } from "react";
import { AppContext } from "../StateManagement/ProductContext";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";

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
          <NavLink 
            to={`/singleproduct/${item.id}`}
            key={item.id} 
            className="bg-slate-800 min-h-[380px] w-[340px] flex items-center justify-center rounded-lg"
          >
            <div className="w-[300px] rounded-md">
              <img
                src={`${item?.image}`}
                alt="Laptop"
                className="h-[200px] w-full rounded-md object-cover"
              />
              <div className="p-4">
                <h1 className="text-2xl font-semibold">{item?.name}</h1>
                <div className="flex justify-between items-center">
                  <p className="mt-3 text-lg text-blue-400">
                    {" "}
                    {<FormatPrice Price={item?.price} />}
                  </p>
                  <button
                    to={`/singleproduct/${item.id}`}
                    className="mt-4 rounded-lg bg-slate-700 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Read
                  </button>
                </div>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
    </>
  )
};

export default FeaturedProducts;
