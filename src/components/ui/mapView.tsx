import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import type { LatLngExpression } from "leaflet";

const center: LatLngExpression = [-36.8509, 174.7645];


export default function MapView() {
  return (
    <MapContainer
      center={center}
      zoom={13}
      style={{ height: "500px", width: "100%", borderRadius: "16px" }}
    >
      <TileLayer
        attribution="© OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={center}>
        {/* <Popup>My Location 📍</Popup> */}
      </Marker>
    </MapContainer>
  );
}

