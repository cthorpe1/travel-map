import * as constants from "./constants/action-types";
import {getMarkersFromDB} from "../helpers/markerHelpers";

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
  console.log("get active marker");
  return {
    type: constants.SET_ACTIVE_MARKER,
    payload: markerId
  };
}

export function loadMarkers() {
  let markers = [];
  return dispatch => {
    getMarkersFromDB().then(snap => {
      snap.forEach(doc => {
        markers.push(doc.data());
      });
      dispatch({
        type: constants.LOAD_MARKERS,
        payload: markers
      });
    });
  };
}
