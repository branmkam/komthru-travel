"use client";
import Map from "@/components/Map";
import { useEffect, useRef, useState } from "react";
import wc from "@/data/worldcities.json";
import { orelega_class } from "@/fonts";
import { Marker, Popup, useMap, useMapEvent } from "react-leaflet";
import Link from "next/link";

export default function Search() {
  const [inp, setInp] = useState("");
  const [selected, setSelected] = useState(null);

  const selCity = wc[selected];

  const wcKeys = Object.keys(wc).sort((a, b) => {
    return wc[b].population - wc[a].population;
  });
  //   useEffect(() => {
  //     const mapRef = useMap();
  //     if (selected) {
  //       console.log(mapChildren);
  //       mapRef.setView([selCity.lat, selCity.lng], 7);
  //     }
  //   }, [selected]);

  const mapChildren = selected ? (
    <Marker position={[selCity.lat, selCity.lng]}>
      <Popup>
        <Link href={"/cities/" + selected}>
          {selCity.city}, {selCity.country}
        </Link>
      </Popup>
    </Marker>
  ) : null;

  return (
    <div className="flex flex-row w-full h-screen">
      <div className="flex flex-col gap-1 overflow-y-auto w-1/3 p-4 bg-blue-800">
        <input
          className="w-full"
          value={inp}
          onChange={(e) => setInp(e.target.value)}
        />
        {inp.length > 0 ? (
          wcKeys
            .filter((x) => wc[x].city.toLowerCase().includes(inp.toLowerCase()))
            .slice(0, 6)
            .map((y) => {
              return (
                <div
                  onClick={() => setSelected(y)}
                  className="hover:cursor-pointer w-full rounded-md p-1 bg-white"
                >
                  <p className={`${orelega_class} text-lg font-bold`}>
                    {wc[y].city}
                    <span className="text-sm font-normal">
                      {wc[y].admin_name && ", " + wc[y].admin_name}
                    </span>
                  </p>
                  <p className={""}>{wc[y].country}</p>
                </div>
              );
            })
        ) : (
          <p className="text-white text-xl">Start typing to find a city.</p>
        )}
      </div>
      <Map children={mapChildren} className="h-full w-full" />
    </div>
  );
}
