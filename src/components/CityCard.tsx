import Link from "next/link";

interface CityCardProps {
  id: string;
  population: number;
  iso2: string;
  iso3: string;
  city: string;
  city_ascii: string;
  admin_name: string;
  region: string;
  continent: string;
  country: string;
  lat: number;
  lng: number;
  capital: string;
  img: string;
}

export default async function CityCard(data: CityCardProps) {
  return (
    <Link
      href={"/cities/" + data.id}
      className="hover:animate-smallbounce drop-shadow-lg h-44 w-full"
    >
      <div className="relative">
        <img
          className="w-full h-44 rounded-xl object-cover brightness-[0.3]"
          src={
            data.img != "none"
              ? data.img
              : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Black_colour.jpg/450px-Black_colour.jpg?20170110114905"
          }
        />

        <div className="items-center flex gap-2 flex-col absolute text-center text-2xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-row items-center justify-center gap-2">
            {data.city}{" "}
            {data.capital == "primary" && (
              <span className="text-yellow-300 w-0 text-xl">★</span>
            )}
          </div>
          <h1 className="text-lg">xx visits</h1>
        </div>
        <h3
          className={`absolute text-right text-2xl text-white top-5 right-5`}
        ></h3>
      </div>
    </Link>
  );
}
