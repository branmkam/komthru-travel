import Link from "next/link";
import wc from "@/data/worldcities.json";

const highlights = {
  Europe: ["RUS", "DEU", "GBR", "ESP", "FRA", "ITA"],
  Asia: ["CHN", "IND", "JPN", "PHL", "TUR", "IDN"],
  "South America": ["BRA", "COL", "ARG", "VEN", "PER", "CHL"],
  Oceania: ["AUS", "NZL", "PNG", "FJI", "NCL", "PYF"],
  "North America": ["USA", "MEX", "CAN", "GTM", "CUB", "DOM"],
  Africa: ["NGA", "EGY", "COD", "ZAF", "AGO", "MAR"],
};

export default function Navbar() {
  return (
    <nav className="text-white h-10 flex flex-row px-4 items-center justify-between fixed z-50 w-full bg-[#020430]">
      <div className="flex flex-row gap-3">
        <Link className="font-bold hover:text-blue-300 " href="/">KOMTHRU</Link>
        <p>Discover</p>
        <p></p>
      </div>
      <div className="flex flex-row gap-3">
        <Link href="/yourmap">Your Map</Link>
        <Link href="/auth/login">Log in</Link>
      </div>
    </nav>
  );
}
