import L from "leaflet";
import iconURL from "../../assets/images/userIcon.svg";
 const UserIcon = L.icon({
    iconUrl: iconURL,
    iconSize: [25, 50],
    popupAnchor: [0, -11]
  });
  
export default UserIcon