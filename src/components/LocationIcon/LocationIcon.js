import L from "leaflet";
import iconURL from "../../assets/images/locationIcon.svg";
const LocationIcon = L.icon({
    iconUrl: iconURL,
    iconSize: [25, 50],
    popupAnchor: [0, -11]
  });

  export default LocationIcon;