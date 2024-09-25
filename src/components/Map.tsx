"use client";
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

export default function Map(props: { className: string; children: any }) {
  const { className, children } = props;
  return (
    <MapContainer
      className={className}
      center={[0, 0]}
      zoom={3}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://cdn.lima-labs.com/{z}/{x}/{y}.png?api=demo"
      />
      {children && children}
    </MapContainer>
  );
}
