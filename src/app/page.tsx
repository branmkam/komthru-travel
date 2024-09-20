"use client";
import { randomCity } from "@/utils";
import CityCarousel from "@/components/CityCarousel";

export default function Home() {

  return (
    <div>
      <CityCarousel className={""} />
      <div className="p-6">
        <button
          onClick={() => randomCity(true, 800000)}
          className="p-2 bg-black rounded-xl text-slate-100"
        >
          Find somewhere new
        </button>
      </div>
    </div>
  );
}
