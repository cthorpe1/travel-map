import {
  SET_ACTIVE_MARKER,
  LOAD_MARKERS
} from "../actions/constants/action-types";

export default function markerReducer(
  state = {
    activeMarker: null,
    markers: null,
  },
  action
) {
  switch (action.type) {
    case SET_ACTIVE_MARKER:
      state = {
        ...state,
        activeMarker: action.payload
      };
      break;

    case LOAD_MARKERS:
      console.log("Fetching Markers...");
      state = {
        ...state,
        markers: action.payload,
      };
      break;
    default:
  }
  return state;
}
