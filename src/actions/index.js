import {SET_MAP_POSITION} from "./constants/action-types";

export const setMapPosition = newPos => ({
    type: SET_MAP_POSITION,
    payload: newPos
});