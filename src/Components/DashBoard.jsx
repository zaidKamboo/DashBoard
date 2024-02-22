import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataActions } from "../Store/Slices/dataSlice";
import Filters from "./Filters";
import Charts from "./Charts";
import Loader from "./Loader";
import Dets from "./Dets";
import InfiniteScroll from "react-infinite-scroll-component";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { loading, error, data, currentData } = useSelector(
    (store) => store.dataObj
  );
  console.log(currentData);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("http://localhost:8080/data/getAllData")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        dispatch(dataActions.setData(res.data));
      })
      .catch((error) => {
        console.log("Error:", error.message);
      });
  };

  const fetchMoreData = () => {
    dispatch(dataActions.updateCurrentData());
  };

  return (
    <div className="container w-full">
      <h1 className="text-2xl font-semibold m-4">
        Data Visualization Dashboard
      </h1>
      <Filters />
      {loading && <Loader />}
      {error && <p>Error: {error.message}</p>}
      <InfiniteScroll
        className="w-[100vw]"
        dataLength={currentData.length}
        next={fetchMoreData}
        hasMore={currentData.length < data.length}
        loader={loading && <Loader />}
      >
        <div className="flex flex-wrap items-center bg-[#fff] gap-6 justify-evenly w-[100%] px-5 py-4">
          {currentData.map((item, index) => (
            <div
              key={index}
              className="w-[48%] flex items-center card bg-zinc-200 rounded-2xl px-2 py-2"
            >
              <div className="w-[47%] mx-1 bg-zinc-900 rounded-lg h-full">
                <Charts
                  data={[
                    { variable: "Intensity", value: item?.intensity },
                    { variable: "Likelihood", value: item?.likelihood },
                    { variable: "Relevance", value: item?.relevance },
                  ]}
                />
              </div>
              <Dets item={item} />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Dashboard;
