import { call, put } from "redux-saga/effects";
import {
  getRoadmapDetailFailure,
  getRoadmapDetailSuccess,
  getRoadmapListFailure,
  getRoadmapListSuccess,
} from "./roadmapSlice";
import { RoadmapDetail, RoadmapList } from "./api";

// roadmap list
function* RoadmapListSaga(): Generator {
  try {
    const response: any = yield call(RoadmapList);

    yield put(getRoadmapListSuccess(response.data.data));
  } catch (error) {
    yield put(getRoadmapListFailure());
  }
}

// roadmap details
function* RoadmapDetailSaga(action: {
  type: string;
  payload: { id: string };
}): Generator {
  try {
    const { id } = action.payload;
    const response: any = yield call(RoadmapDetail, id);
    yield put(getRoadmapDetailSuccess(response.data));
  } catch (error) {
    yield put(getRoadmapDetailFailure());
  }
}

export { RoadmapListSaga, RoadmapDetailSaga };
