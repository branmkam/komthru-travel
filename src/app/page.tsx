"use client";
import { randomCity } from "@/utils";
import CityCarousel from "@/components/CityCarousel";
import { orelega_class } from "@/fonts";
import { useState } from "react";
import { useInterval } from "usehooks-ts";

export default function Home() {
  const [picNum, setPicNum] = useState(0);

  useInterval(() => {
    setPicNum((n) => (n + 1) % 4);
  }, 5000);

  const pics = {
    "Lisbon, Portugal":
      "https://www.meditravel.cz/wp-content/uploads/2020/02/lisbon-scaled.jpg",
    "Montréal, Canada":
      "https://www.travelalerts.ca/wp-content/uploads/2020/08/Feat.jpg",
    "Cape Town, South Africa":
      "https://c1.staticflickr.com/3/2450/5718824942_f69e23fc56_b.jpg",
    "Kuala Lumpur, Malaysia":
      "https://velvetescape.com/wp-content/uploads/2018/09/IMG_3823.jpg",
  };

  const toShow = Object.keys(pics)[picNum];
  return (
    <div>
      <div className="relative bg-black">
        <img
          className="w-full h-[500px] animate-fadeInOut object-cover brightness-[0.5]"
          src={pics[toShow]}
        />

        <div className="p-4 rounded-xl items-center flex gap-2 flex-col text-center -translate-x-1/2 -translate-y-1/2 absolute text-white top-1/2 left-1/2">
          <div
            className={`${orelega_class} drop-shadow-default text-4xl sm:text-6xl lg:text-7xl`}
          >
            KOMTHRU today.
          </div>
          <h1 className="text-2xl drop-shadow-default md:text-3xl">
            Where will your{" "}
            <span className="md:hidden">
              <br />
            </span>
            next trip take you?
          </h1>
        </div>
        <h1 className="right-5 bottom-5 absolute text-2xl text-white font-bold">
          {toShow}
        </h1>
        <button
          onClick={() => randomCity(true, 800000)}
          className="p-4 bg-[#00000088] border-4 border-slate-100 absolute bottom-5 hover:animate-smallbounce text-2xl left-5 text-slate-100 rounded-xl"
        >
          Find somewhere new
        </button>
      </div>
      <div className="p-6"></div>
    </div>
  );
}
