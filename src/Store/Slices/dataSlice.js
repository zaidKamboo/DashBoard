// import { createSlice } from "@reduxjs/toolkit";

// const dataSlice = createSlice({
//   initialState: {
//     loading: true,
//     error: false,
//     currentData: [],
//     page: 1,
//     data: [],
//   },
//   name: "data",
//   reducers: {
//     setData: (state, action) => {
//       state.data = action.payload;
//       state.currentData = state.data.slice(0, 20); // Set initial current data
//       state.loading = false;
//     },
//     updateCurrentData: (state) => {
//       state.page++; // Increment the page number
//       const startIndex = (state.page - 1) * 20; // Calculate the start index for new data
//       const endIndex = state.page * 20; // Calculate the end index for new data

//       // Append new data to currentdata
//       state.currentData.push(...state.data.slice(startIndex, endIndex));
//       state.loading = false;
//     },
//     sortBy: (state, action) => {
//       let item = action.payload;
//       console.log("insie sortby");
//       let newState = state;
//       if (action.payload === "SWOT" || action.payload === "PEST") {
//         for (let i = 0; i < newState.currentdata.length; i++) {
//           for (let j = i + 1; j < newState.currentdata.length; j++) {
//             if (
//               newState.currentdata[i]?.insight >
//               newState.currentdata[j]?.insight
//             ) {
//               let t = newState.currentdata[i];
//               newState.currentdata[i] = newState.currentdata[j];
//               newState.currentdata[j] = t;
//             }
//           }
//         }
//       } else {
//         for (let i = 0; i < newState.currentdata.length; i++) {
//           for (let j = i + 1; j < newState.currentdata.length; j++) {
//             if (newState.currentdata[i]?.item > newState.currentdata[j]?.item) {
//               let t = newState.currentdata[i];
//               newState.currentdata[i] = newState.currentdata[j];
//               newState.currentdata[j] = t;
//             }
//           }
//         }
//       }
//       console.log(newState);
//       return newState;
//     },
//   },
// });

// export const dataActions = dataSlice.actions;

// export default dataSlice;
import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  initialState: {
    loading: true,
    error: false,
    currentData: [],
    page: 1,
    data: [],
  },
  name: "data",
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
      state.currentData = state.data.slice(0, 20); // Set initial current data
      state.loading = false;
    },
    updateCurrentData: (state) => {
      state.page++; // Increment the page number
      const startIndex = (state.page - 1) * 20; // Calculate the start index for new data
      const endIndex = state.page * 20; // Calculate the end index for new data

      // Append new data to currentdata
      state.currentData.push(...state.data.slice(startIndex, endIndex));
      state.loading = false;
    },
    sortBy: (state, action) => {
      const filterItem = action.payload;
      state.currentData.sort((a, b) => {
        if (filterItem === "SWOT" || filterItem === "PEST") {
          return (a.insight || "").localeCompare(b.insight || "");
        } else {
          const itemA = a[filterItem] || "";
          const itemB = b[filterItem] || "";
          return itemA.localeCompare(itemB);
        }
      });
    },
  },
});

export const dataActions = dataSlice.actions;

export default dataSlice;
