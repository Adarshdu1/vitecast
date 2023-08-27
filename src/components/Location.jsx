import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Spinner from "./Spinner";

export default function Location({ position, city }) {
  const [positionData, setPositionData] = useState(null);
  useEffect(() => {
    setPositionData(position);
  }, [position]);
  return (
    <div className="mx-2 w-full">
      <h1 className="mb-5 text-2xl font-semibold ">Location Map</h1>
      {positionData && positionData === position ? (
        <MapContainer
          className="h-[290px] rounded-lg w-full"
          center={positionData}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={positionData}>
            <Popup>{city}</Popup>
          </Marker>
        </MapContainer>
      ) : (
        <Spinner />
      )}
    </div>
  );
}
