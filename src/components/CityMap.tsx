"use client";
import React, { useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { CityProps } from "@/utils/interfaces";

export default function CityMap(props: { data: CityProps; className: string }) {
  const { data, className } = props;

  const position = [data.lat, data.lng];

  return (
    <MapContainer
      className={className}
      center={position}
      zoom={6}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://cdn.lima-labs.com/{z}/{x}/{y}.png?api=demo"
      />
      <Marker position={position}></Marker>
    </MapContainer>
  );
}
