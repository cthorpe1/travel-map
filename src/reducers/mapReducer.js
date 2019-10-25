import { INIT_MAP } from "../actions/constants/action-types";

const DEFAULT_MAP_CENTER = {
  lat: "42.452416",
  lng: "-30.035798"
};
const DEFAULT_ZOOM = 3;

export default function mapReducer(
  state = {
    map: null,
    position: DEFAULT_MAP_CENTER,
    zoom: DEFAULT_ZOOM
  },
  action
) {
  switch (action.type) {
    case INIT_MAP:
      state = {
        ...state,
        map: action.payload
      };
      break;
    default:
  }
  return state;
}
