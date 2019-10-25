import { SET_ACTIVE_MARKER } from "../actions/constants/action-types";

export default function markerReducer(
  state = {
    activeMarker: null
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
    default:
  }
  return state;
}
