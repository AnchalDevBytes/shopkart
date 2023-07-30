import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../StateManagement/ProductContext";
import PageNavigation from "../components/PageNavigation";
import MyImage from "../components/MyImage";
import FormatPrice from "../Helpers/FormatPrice";
import { TbTruckDelivery, TbReplaceFilled } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import Stars from "../components/Stars";
import AddToCart from "../components/AddToCart";

const API = "https://api.pujakaitem.com/api/products";

const SingleProducts = () => {
  const { singleFetchData, isSingleLoading, singleProduct } =
    useContext(AppContext);
  console.log(singleProduct);

  const { id } = useParams();

  useEffect(() => {
    singleFetchData(`${API}?id=${id}`);
  }, []);

  const {
    id: alu,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image,
    colors
  } = singleProduct;

  return isSingleLoading ? (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-extrabold text-slate-200">{name} Detail</h2>
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
      <PageNavigation title={name} />
      <div className="grid grid-cols-2 items-center justify-around w-screen text-center 
      ">
        <div>
          <MyImage imgs={image} />
        </div>
        <div className="flex flex-col justify-start gap-8 max-w-[70%] text-start text-slate-100 bg-slate-900 rounded-xl px-24 py-8 backdrop-filter backdrop-blur-xl bg-opacity-50 mb-24 mt-5">
          <h2 className="text-4xl font-bold">{name}</h2>
          <Stars stars={stars} reviews={reviews}/>
          <p>
            MRP: 
            <del>
              <FormatPrice Price={price + 250000} />
            </del>
          </p>
          <p className="animate-pulse text-base font-semibold text-green-400">
            Deal of the Day : <FormatPrice Price={price} />
          </p>
          <p className="text-sm font-medium">{description}</p>
          <div className="flex justify-between items-center border-b-2">
            <div className="flex flex-col items-center gap-3">
              <TbTruckDelivery className="text-5xl p-2  text-slate-800 bg-slate-400 rounded-full hover:shadow-lg hover:shadow-slate-200 active:rounded-full hover:text-pink-400" />
              <p className="text-base font-light mb-2">Free Delivery</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <TbReplaceFilled className="text-5xl p-2  text-slate-800 bg-slate-400 rounded-full hover:shadow-lg hover:shadow-slate-200 active:rounded-full hover:text-pink-400" />
              <p className="text-base font-light mb-2">30 Days Replacement</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <TbTruckDelivery className="text-5xl p-2  text-slate-800 bg-slate-400 rounded-full hover:shadow-lg hover:shadow-slate-200 active:rounded-full hover:text-pink-400" />
              <p className="text-sm font-light mb-2">Delivery</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <MdOutlineSecurity className="text-5xl p-2  text-slate-800 bg-slate-400 rounded-full hover:shadow-lg hover:shadow-slate-200 active:rounded-full hover:text-pink-400" />
              <p className="text-base font-light mb-2">2 Year Warranty</p>
            </div>
          </div>
          <div>
            <p>
              Available:  <span>{stock > 0 ? "In Stock" : "Not Available"}</span>
            </p>
            <p>
              ID:  <span>{alu}</span>
            </p>
            <p>
              Brand:  <span>{company}</span>
            </p>
          </div>
          <hr className="-mt-6" />
          {stock > 0 && <AddToCart product={singleProduct}/>}
        </div>
      </div>
    </>
  );
};
export default SingleProducts;
