"use client";
import Map from "@/components/Map";
import TripPins from "@/components/TripPins";
import { trips } from "@/models/userModel";

export default function YourMap() {
  //   useEffect(() => {
  //     const mapRef = useMap();
  //     if (selected) {
  //       console.log(mapChildren);
  //       mapRef.setView([selCity.lat, selCity.lng], 7);
  //     }
  //   }, [selected]);

  // const mapChildren = selected ? (
  //   <Marker position={[selCity.lat, selCity.lng]}>
  //     <Popup>
  //       <Link href={"/cities/" + selected}>
  //         {selCity.city}, {selCity.country}
  //       </Link>
  //     </Popup>
  //   </Marker>
  // ) : null;

  return (
    <div className="flex flex-row w-full h-[calc(100vh_-_4rem)]">
      <div className="flex flex-col text-white gap-1 overflow-y-auto w-1/3 p-4 bg-darkBlue">
        test
      </div>
      <Map
        children={trips.map((trip) => (
          <TripPins {...trip} />
        ))}
        className="h-full w-full"
      />
    </div>
  );
}
