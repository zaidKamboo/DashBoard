import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { dataActions } from "../Store/Slices/dataSlice";

const Filters = () => {
  const dispatch = useDispatch();
  const handleClick = useCallback(
    (item) => {
      // As data provided is not that responsive to filters i am add SORT_BY_ID feature to see the change instead of Region...
      item === "region"
        ? dispatch(dataActions.sortBy("insight"))
        : dispatch(dataActions.sortBy(item));
    },
    [dispatch]
  );

  return (
    <div className="flex w-[100vw] justify-space-between rounded-md bg-zinc-100">
      <h2 className="font-semibold capitalize text-2xl m-3">all filters</h2>
      <div className="flex w-[100vw] justify-center items-center rounded-md bg-zinc-100">
        {[
          "end_year",
          "topics",
          "sector",
          "region",
          "PEST",
          "source",
          "SWOT",
          "country",
          "city",
        ].map((item, index) => (
          <button
            className="bg-zinc-900 text-white border-2 border-zinc-900 rounded-lg font-semibold border-1 capitalize py-1 px-3 mx-2"
            key={index}
            onClick={() => handleClick(item)}
          >
            Filter by {item}🔽
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filters;
