import { combineReducers } from "redux";
import mapReducer from "./mapReducer";
import markersReducer from "./markersReducer";

export default combineReducers({
    mapReducer,
    markersReducer
});