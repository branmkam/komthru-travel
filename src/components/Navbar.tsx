import Link from "next/link";
import wc from "@/data/worldcities.json";
import Image from "next/image";

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
    <nav className="text-white h-16 flex flex-row px-4 items-center justify-between fixed z-50 w-full bg-darkBlue">
      <div className="flex flex-row gap-3 justify-center items-center">
        <Link className="font-bold hover:text-blue-300 " href="/">
          <Image
            src="/images/testlogo.png"
            alt="Komthru logo"
            height={30}
            width={73}
          />
        </Link>
        <p>Discover</p>
        <Link href="/search">Search</Link>
        <p></p>
      </div>
      <div className="flex flex-row gap-3">
        <Link href="/yourmap">Your Map</Link>
        <Link href="/auth/login">Log in</Link>
      </div>
    </nav>
  );
}
