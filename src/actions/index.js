import * as constants from "./constants/action-types";

//MAP ACTIONS
export function initMap(mapInstance) {
  return {
    type: constants.INIT_MAP,
    payload: mapInstance.leafletElement
  };
}

//SIDEBAR ACTIONS
export function openSidebar(selectedTab) {
  return {
    type: constants.OPEN_SIDEBAR,
    payload: selectedTab
  };
}

export function closeSidebar() {
  return {
    type: constants.CLOSE_SIDEBAR,
    payload: null
  };
}

//MARKER ACTIONS
export function setActiveMarker(markerId) {
  return {
    type: constants.SET_ACTIVE_MARKER,
    payload: markerId
  };
}
