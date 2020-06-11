import {combineReducers} from "redux";
import liveStatsReducer from "./liveStats";

const rootReducer = combineReducers({
   liveStats: liveStatsReducer
});

export default rootReducer;