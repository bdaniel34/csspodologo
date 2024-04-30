import React from "react";
import { TileLayer, Marker, MapContainer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/images/marker-icon.png";
export default function Maps() {
  return (
    <div className="Map">
      <MapContainer
        center={[36.13242880404336, -5.448560267479523]}
        zoom={19}
        scrollWheelZoom={false}
        style={{ height: "50vh" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          url="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/How_to_use_icon.svg/2214px-How_to_use_icon.svg.png"
          position={[36.13242880404336, -5.448560267479523]}
        >
          <Popup>
            Clinica Poyatos <br />
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
