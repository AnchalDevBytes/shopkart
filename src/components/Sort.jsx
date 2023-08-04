import React, { useContext } from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { FilterContext } from "../StateManagement/FilterContext";

const Sort = () => {
  const { grid_view, SetGridView, SetListView, Sorting, filter_products } =
    useContext(FilterContext);

  return (
    <div className="flex justify-between gap-36 items-center text-white px-5 mt-20">
      <div className="flex gap-3">
        <button
          className={
            grid_view
              ? "bg-black text-white p-2 rounded"
              : "text-slate-900 p-2 rounded"
          }
          onClick={SetGridView}
        >
          <BsFillGridFill className="text-3xl" />
        </button>
        <button
          className={
            !grid_view
              ? "bg-black text-white p-2 rounded"
              : "text-slate-900 p-2 rounded"
          }
          onClick={SetListView}
        >
          <BsList className="text-3xl" />
        </button>
      </div>
      <div>
        <p className="text-sm font-light ">{`(Total ${filter_products?.length} ) Products Available`}</p>
      </div>
      <div>
        <form action="#">
          <label htmlFor="sort">
            <select
              name="sort"
              id="sort"
              className="py-3 px-6 text-black rounded-lg text-center"
              onClick={Sorting}
            >
              <option
                value="disabled"
                className="text-opacity-50 text-sm font-light"
              >
                --- Filter ---
              </option>
              <option value="lowest">Price(lowest)</option>
              <option value="highest">Price(Highest)</option>
              <option value="a-z">Price(a-z)</option>
              <option value="z-a">Price(z-a)</option>
            </select>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Sort;
