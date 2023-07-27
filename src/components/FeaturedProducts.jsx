import React, { useContext } from "react";
import { AppContext } from "../StateManagement/ProductContext";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";

const FeaturedProducts = () => {
  const { isLoading, featureProducts } = useContext(AppContext);
  console.log(featureProducts);

  if (isLoading) {
    return <div> ------ Content is loading ------ </div>;
  }

  return (
    <div className=" h-screen text-slate-200 flex flex-col gap-28 justify-center items-center">
      <h2 className="text-4xl font-semibold">Feature Services</h2>
      <div className=" grid grid-cols-3  gap-32 justify-center items-center">
        {featureProducts.map((item) => (
          <NavLink
            to="/singleproduct/:id"
            className="bg-slate-800 min-h-[380px] w-[340px] flex items-center justify-center rounded-lg"
          >
            <div key={item.id} className="w-[300px] rounded-md">
              <img
                src={`${item?.image}`}
                alt="Laptop"
                className="h-[200px] w-full rounded-md object-cover"
              />
              <div class="p-4">
                <h1 class="text-2xl font-semibold">{item?.name}</h1>
                <div className="flex justify-between items-center">
                  <p class="mt-3 text-lg text-blue-400">
                    {" "}
                    {<FormatPrice Price={item?.price} />}
                  </p>
                  <NavLink
                    to="/singleproduct/:id"
                    className="mt-4 rounded-lg bg-slate-700 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Read
                  </NavLink>
                </div>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
