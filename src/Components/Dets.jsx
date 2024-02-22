import React from "react";

const Dets = ({ item }) => {
  return (
    <div className="mx-1 rounded-md h-full justify-evenly text-xl px-2 py-2 w-1/2">
      <h2 className="font-semibold text-center capitalize">{item?.title}</h2>
      <hr className="my-3 bg-black border-black" />
      <div className="details text-start flex flex-col justify-center ">
        <p className="capitalize font-light">Country : {item.country}</p>
        <p className="capitalize font-light">Region : {item.region} </p>
        <p className="capitalize font-light">Topics : {item?.topic} </p>
        <p className="capitalize font-light">Insight : {item?.insight}</p>
        <p className="capitalize font-light">Date : {item?.added}</p>
      </div>
    </div>
  );
};

export default Dets;
