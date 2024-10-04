import CityCard from "./CityCard";
import wc from "@/data/worldcities.json";
import { getWiki } from "@/actions";

interface CityCardGridProps {
  ids: string[];
}

export default async function CityCardGrid(props: CityCardGridProps) {
  const { ids } = props;

  //for cities
  const citiesData = await Promise.all(
    ids.slice(0, 6).map((id) => {
      const data = wc[id];
      const fetchStr =
        data.city_ascii +
        ", " +
        (["US", "CA"].includes(data.iso2) ? data.admin_name : data.country);
      return getWiki(fetchStr);
    })
  );

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {ids.slice(0, 6).map((id, i) => (
        <CityCard key={id} id={id} img={citiesData[i].img} {...wc[id]} />
      ))}
    </div>
  );
}
