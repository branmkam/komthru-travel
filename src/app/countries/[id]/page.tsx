import wc from "@/data/worldcities.json";
import dynamic from "next/dynamic";
import { getWiki } from "@/actions";
import { orelega_class } from "@/fonts";
import CityCard from "@/components/CityCard";
import { notFound } from "next/navigation";

const CityMap = dynamic(() => import("@/components/CityMap"), {
  ssr: false,
});

interface CountryProps {
  params: {
    id: string;
  };
}

export default async function Country(props: CountryProps) {
  const id = props.params.id;
  const cities = Object.keys(wc)
    .filter((x) => wc[x]["iso3"] == id)
    .sort((a, b) => wc[b].population - wc[a].population);

  if (cities.length == 0) {
    return notFound();
  }

  const data = wc[cities[0]];
  const fetchStr = data.country;
  let wikiInfo = await getWiki(fetchStr);
  let txt = wikiInfo.txt.substring(0, wikiInfo.txt.lastIndexOf(".") + 1);

  return (
    <div className="m-0">
      <div className="relative">
        <img
          className="w-full h-64 object-cover brightness-[0.3]"
          src={
            wikiInfo.img != "none"
              ? wikiInfo.img
              : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Black_colour.jpg/450px-Black_colour.jpg?20170110114905"
          }
        />

        <div className="items-center flex gap-2 flex-col absolute text-center text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className={`flex flex-row gap-4 ${orelega_class}`}>
            {data.country.replace("Democratic Republic of the Congo", "DRC")}
            <img
              src={`https://flagcdn.com/60x45/${data.iso2.toLowerCase()}.png`}
              alt={data.country + " flag"}
            />
          </div>
          <h1 className="text-2xl">xx Komthru users have visited</h1>
        </div>
        <h3
          className={`absolute text-right text-2xl text-white top-5 right-5`}
        ></h3>
      </div>
      <div className="p-6 max-w- flex flex-col gap-4">
        <div className="w-full flex flex-col gap-8 md:flex-row">
          {txt && (
            <div className="w-full">
              <p>
                {data.country.startsWith("United") && "The "}
                <span className={`${orelega_class} text-2xl`}>
                  {data.country}{" "}
                </span>
                {txt}{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={"https://en.wikipedia.org/wiki/" + fetchStr}
                  className="text-blue-800 underline hover:cursor-pointer hover:text-blue-500"
                >
                  Wikipedia
                </a>
              </p>
            </div>
          )}
          {/* <div className={txt ? "w-full md:w-1/2" : "w-full"}>
          <h3 className={`${orelega_class} text-3xl mb-4`}>Map</h3>
          <CityMap data={data} className={"h-80 w-full"} />
        </div> */}
        </div>
        {/* get top 6 cities by population */}
        <div>
          {" "}
          <h3 className={`${orelega_class} text-3xl mb-4`}>Top Cities</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {cities.slice(0, 6).map((cid) => (
              <CityCard key={cid} id={cid} {...wc[cid]} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
