import Map from "@/components/Map";

export default function YourMap() {
  return <div className="flex flex-row w-full h-screen">
    <div className="w-1/3 bg-blue-800">
      <p>sidebar</p>
    </div>
    <div>
      <Map children={null} className="z-30 h-full" />
    </div>
  </div>;
}
