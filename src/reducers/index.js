import { combineReducers } from "redux";
import mapReducer from "./mapReducer";
import markersReducer from "./markersReducer";
import sidebarReducer from "./sidebarReducer";

export default combineReducers({
  mapReducer,
  markersReducer,
  sidebarReducer
});
