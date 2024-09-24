import { orelega_class } from "@/fonts";
import wc from "@/data/worldcities.json";
import { getWikis } from "@/actions";

export default async function CityCarousel(props: { className: string }) {
  const cities = ["1620619017", "1124586170", "1724594040"].map((x) => wc[x]);

  const cityString = JSON.stringify(
    cities
      .map(
        (data) =>
          data.city +
          ", " +
          (["US", "CA"].includes(data.iso2) ? data.admin_name : data.country)
      )
      .join("|")
  );
  let wikis = await getWikis(cityString);
  console.log(wikis);

  return (
    <div className="relative">
      <img
        className="w-full h-64 object-cover brightness-50"
        src={"https://placeholder.co/800x500"}
      />
      <div className={`absolute top-5 left-5 ${orelega_class}`}>
        <h3 className="text-4xl text-white ">Where will KOMTHRU take you?</h3>
      </div>
      <div className={`absolute bottom-5 right-5 ${orelega_class}`}>
        <h3 className="text-2xl text-white ">placeholder for name</h3>
      </div>
    </div>
  );
}
