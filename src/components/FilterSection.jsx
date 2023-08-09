import React, { useContext } from "react";
import { FilterContext } from "../StateManagement/FilterContext";
import { FaCheck } from "react-icons/fa";
import FormatPrice from "../Helpers/FormatPrice";
import ProductButton from "./ProductButton";
import {MdCleaningServices} from "react-icons/md"

const FilterSection = () => {
  const {
    filters: { text, category, company, colors, MaxPrice, MinPrice, price },
    updateFilterValue,
    all_products,
    ResetFilter,
  } = useContext(FilterContext);

  //unique data
  const getUniqueData = (data, property) => {
    let newVal = data.map((currElm) => {
      return currElm[property];
    });

    if (property === "colors") {
      return (newVal = ["all", ...new Set([].concat(...newVal))]);
    } else {
      return (newVal = ["all", ...new Set(newVal)]);
    }
  };

  //category data
  const categryData = getUniqueData(all_products, "category");
  const companyData = getUniqueData(all_products, "company");
  const colorsData = getUniqueData(all_products, "colors");

  return (
    <div className="py-10 px-5 border-r-2  border-r-black shadow shadow-black h-full w-full flex flex-col">
      <div className="mt-16 flex justify-between items-center">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            value={text}
            placeholder="SEARCH"
            onChange={updateFilterValue}
            className="py-3 text-center mx-10 border-none outline-none rounded-lg focus:opacity-50"
          />
        </form>
        <div onClick={ResetFilter} className="mr-10 cursor-pointer  flex items-center gap-2 text-white py-2 px-5 rounded-lg bg-slate-800  text-sm font-semiboldshadow-sm hover:bg-slate-400 transition-all duration-300 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
          <p>Clear filter</p>
          <MdCleaningServices className="text-3xl text-red-300 hover:text-red-700" />
          {/* <ProductButton text={"Reset Filter"} /> */}
        </div>
      </div>
      <div className="flex flex-col items-start gap-5 mt-10 mx-10 bg-slate-200 text-slate-900 rounded-lg py-10">
        <h3 className="text-2xl font-semibold tracking-widest ml-10">
          category
        </h3>
        <div className="flex flex-col items-start gap-5 ml-10">
          {categryData.map((currElm, index) => (
            <button
              className="hover:text-sky-600 tracking-widest"
              key={index}
              name="category"
              type="button"
              value={currElm}
              onClick={updateFilterValue}
            >
              {currElm}
            </button>
          ))}
        </div>
      </div>
      <div className="bg-slate-200 mt-20 mx-10 pl-10 py-5 rounded-lg flex flex-col items-start gap-5">
        <h3 className="text-2xl font-semibold tracking-widest ">company</h3>
        <form action="#">
          <select
            name="company"
            id="company"
            className="py-2 px-5 bg-slate-300 text-slate-900 rounded-md text-center transition-all"
            onClick={updateFilterValue}
          >
            {companyData.map((currElm, index) => (
              <option key={index} value={currElm} name="company">
                {currElm}
              </option>
            ))}
          </select>
        </form>
      </div>
      <div className="bg-slate-200 mt-20 mx-10 pl-10 py-5 rounded-lg flex flex-col items-start gap-5">
        <h3 className="text-2xl font-semibold tracking-widest ">Colors</h3>
        <div className="flex items-center ">
          {colorsData.map((currColors, index) =>
            currColors === "all" ? (
              <button
                key={index}
                type="button"
                value={currColors}
                name="colors"
                onClick={updateFilterValue}
                className="text-black"
              >
                all
              </button>
            ) : (
              <button
                key={index}
                type="button"
                style={{ backgroundColor: currColors }}
                className={
                  colors === currColors
                    ? "w-5 h-5 p-1 rounded-full ml-4 border-none outline-none opacity-100 cursor-pointer "
                    : "w-5 h-5 p-1 rounded-full ml-4 border-none outline-none opacity-60 cursor-pointer "
                }
                value={currColors}
                name="colors"
                onClick={updateFilterValue}
              >
                {colors === currColors ? (
                  <FaCheck className="text-xs font-bold text-white" />
                ) : null}
              </button>
            )
          )}
        </div>
      </div>
      <div className="bg-slate-200 mt-20 mx-10 pl-10 py-5 rounded-lg flex flex-col items-start gap-5">
        <h3 className="text-2xl font-semibold tracking-widest ">Price</h3>
        <p className="text-green-700">
          <FormatPrice Price={price} />
        </p>
        <input
          type="range"
          name="price"
          min={MinPrice}
          max={MaxPrice}
          onChange={updateFilterValue}
        />
      </div>
    </div>
  );
};

export default FilterSection;
