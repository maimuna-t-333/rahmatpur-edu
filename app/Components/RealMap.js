"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function RealMap() {
  return (
    <MapContainer
      center={[25.7439, 89.2752]} 
      zoom={13}
      scrollWheelZoom={false}
      className="h-full w-full rounded"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      />
      <Marker position={[25.7439, 89.2752]}>
        <Popup>
          📍 Rahmatpur AGHS School Location
        </Popup>
      </Marker>
    </MapContainer>
  );
}
