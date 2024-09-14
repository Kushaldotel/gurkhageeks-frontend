import { takeLatest } from "redux-saga/effects";
import { getRoadmapDetailRequest, getRoadmapListRequest } from "./roadmapSlice";
import { RoadmapDetailSaga, RoadmapListSaga } from "./roadmapSaga";

function* roadmapWatcherSage() {
  yield takeLatest(getRoadmapListRequest.type, RoadmapListSaga);
  yield takeLatest(getRoadmapDetailRequest.type, RoadmapDetailSaga);
}

export default roadmapWatcherSage;
