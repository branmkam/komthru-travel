import wc from "../../../../data/worldcities.json";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import { getWiki } from "@/actions";
import { orelega_class } from "@/fonts";
import { popnum } from "@/utils/utils";

const CityMap = dynamic(() => import("@/components/CityMap"), {
  ssr: false,
});

interface CityProps {
  params: {
    id: string;
  };
}

export default async function CityPage(props: CityProps) {
  if (!Object.keys(wc).includes(props.params.id)) {
    return notFound();
  }

  const id = parseInt(props.params.id);
  const data = wc[id];
  const fetchStr =
    data.city +
    ", " +
    (["US", "CA"].includes(data.iso2) ? data.admin_name : data.country);
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
        <div
          className={`flex flex-col gap-0.5 absolute top-5 left-5 ${orelega_class}`}
        >
          <h3 className="text-4xl text-white ">{data.city}</h3>
          {data.admin_name && (
            <h3 className="text-xl text-white ">{data.admin_name}</h3>
          )}
          <h3 className="text-3xl text-white ">
            {data.country.replace("Democratic Republic of the Congo", "DRC")}
          </h3>
        </div>
        <h3
          className={`absolute text-2xl text-white bottom-5 left-5 ${orelega_class}`}
        >
          Population: {popnum(data.population)}
        </h3>
        <h3 className={`absolute text-right text-2xl text-white top-5 right-5`}>
          xx Komthru users
          <br />
          have visited
        </h3>
      </div>
      <div className="p-6 w-full flex flex-col gap-8 md:flex-row">
        {txt && (
          <div className="w-full md:w-1/2">
            <h3 className={`${orelega_class} text-3xl mb-4`}>Summary</h3>
            <p>
              <span className={`${orelega_class} text-2xl`}>{data.city} </span>
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
        <div className={txt ? "w-full md:w-1/2" : "w-full"}>
          <h3 className={`${orelega_class} text-3xl mb-4`}>Map</h3>
          <CityMap data={data} className={"h-80 w-full"} />
        </div>
      </div>
    </div>
  );
}
