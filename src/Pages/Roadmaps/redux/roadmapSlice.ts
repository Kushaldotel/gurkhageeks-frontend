import { createSlice } from "@reduxjs/toolkit";
import { RoadmapStateProps } from "./types";

const initialState: RoadmapStateProps = {
  loadingList: false,
  list: [],
  loading: false,
  details: null,
};

const roadmapSlice = createSlice({
  name: "roadmap",
  initialState,
  reducers: {
    // get roadmap list
    getRoadmapListRequest: (state) => {
      state.loadingList = true;
    },
    getRoadmapListSuccess: (state, { payload }) => {
      state.loadingList = false;
      state.list = payload.results;
    },
    getRoadmapListFailure: (state) => {
      state.loadingList = false;
    },
    // get roadmap details
    getRoadmapDetailRequest: (state)=>{
      state.loading = true
    },
    getRoadmapDetailSuccess: (state, { payload })=>{
      state.loading = false
      state.details = payload.data
    },
    getRoadmapDetailFailure: (state)=>{
      state.loading = false
    }
  },
});

export const {
  // roadmap list
  getRoadmapListRequest,
  getRoadmapListSuccess,
  getRoadmapListFailure,
  // roadmap details
  getRoadmapDetailRequest,
  getRoadmapDetailSuccess,
  getRoadmapDetailFailure
} = roadmapSlice.actions;
export default roadmapSlice.reducer;
