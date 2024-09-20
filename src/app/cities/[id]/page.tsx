import wc from "../../../../data/worldcities.json";
import { notFound } from "next/navigation";

interface CityProps {
  params: {
    // city: string,
    id: string;
    // city_ascii: string,
    // lat: number,
    // lng: number,
    // country: string,
    // iso2: string,
    // iso3: string,
    // admin_name: string,
    // capital: string,
    // population: number
  };
}

export default function CityPage(props: CityProps) {
  if (!(Object.keys(wc).includes(props.params.id))) {
    return notFound();
  }
  const id = parseInt(props.params.id);
  const data = wc[id];
  return (
    <div>
      <p>City</p>
      <p>{id}</p>
      <p>{data.city}, {data.admin_name}, {data.country}</p>
      
    </div>
  );
}
