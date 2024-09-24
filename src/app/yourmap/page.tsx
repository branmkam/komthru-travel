"use client";
import Map from "@/components/Map";

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
    <div className="flex flex-row w-full h-screen">
      <div className="flex flex-col gap-1 overflow-y-auto w-1/3 p-4 bg-blue-800">test</div>
      <Map children={null} className="h-full w-full" />
    </div>
  );
}
