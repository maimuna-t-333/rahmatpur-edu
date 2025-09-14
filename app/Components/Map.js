"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";


import "leaflet/dist/images/marker-shadow.png";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function Map() {

  const position = [25.2667, 89.6667];

  return (
    <div className="bg-white shadow p-4">
      <h3 className="text-green-700 font-bold text-lg mb-3">ম্যাপ</h3>

      <div className="w-full h-64">
        <MapContainer
          center={position}
          zoom={15}
          scrollWheelZoom={false}
          className="h-full w-full rounded"
        >
          {/* Base map layer */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />

          {/* Marker for school */}
          <Marker position={position}>
            <Popup>
              রহমতপুর আদর্শ বালিকা উচ্চ বিদ্যালয় <br /> গাইবান্ধা
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

