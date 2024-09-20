"use client";
import { orelega_class } from "@/fonts";
import wc from "../../data/worldcities.json";
import { randomCity } from "@/utils";
import { useInterval } from "usehooks-ts";
import { useState } from "react";
import { getWikis } from "@/actions";

export default async function CityCarousel(props: { className: string }) {
//   const cities = [
//     randomCity(false, 800000),
//     randomCity(false, 800000),
//     randomCity(false, 800000),
//   ].map((x) => wc[x]);

//   const [n, setN] = useState(0);

//   useInterval(
//     () => {
//       // Your custom logic here
//       setN((n: number) => (n + 1) % cities.length);
//     },
//     // Delay in milliseconds or null to stop it
//     2000
//   );

  return (
    <div className="relative">
      <img
        className="w-full h-64 object-cover brightness-50"
        src={"https://placeholder.co/800x500"}
      />
      <div className={`absolute top-5 left-5 ${orelega_class}`}>
        <h3 className="text-4xl text-white ">Where will KOMTHRU take you?</h3>
      </div>
      <div className={`absolute bottom-24 right-5 ${orelega_class}`}>
        <h3 className="text-2xl text-white ">placeholder for name</h3>
      </div>
    </div>
  );
}
