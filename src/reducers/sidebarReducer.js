import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from "../actions/constants/action-types";

export default function sidebarReducer(
  state = {
    isCollapsed: true,
    selectedTab: "home"
  },
  action
) {
  switch (action.type) {
    case OPEN_SIDEBAR:
      state = {
        ...state,
        isCollapsed: false,
        selectedTab: action.payload
      };
      break;
    case CLOSE_SIDEBAR:
      state = {
        ...state,
        isCollapsed: true
      };
      break;
    default:
  }
  return state;
}
