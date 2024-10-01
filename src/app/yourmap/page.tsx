"use client";
import Map from "@/components/Map";
import TripModal from "@/components/TripModal";
import TripPins from "@/components/TripPins";
import { orelega_class } from "@/fonts";
import { trips } from "@/models/userModel";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

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

  const [showModal, setShowModal] = useState(true);

  return (
    <>
      {showModal && (
        // <div className="w-full h-full bg-[#00000055] z-40">
        <TripModal
          setShowModal={setShowModal}
          className="fixed border-black border-2 p-6 inset-x-0 top-20 z-50 mx-auto animate-modalFade h-[75vh] w-[75vw] max-w-[600px] bg-[#f5f5f5] rounded-lg"
        />
        // </div>
      )}
      <div className="flex flex-row w-full h-[calc(100vh_-_4rem)]">
        <div className="flex flex-col text-white gap-1 overflow-y-auto w-1/3 p-4 bg-darkBlue">
          <button
            onClick={() => setShowModal(true)}
            className={`${orelega_class} flex flex-row items-center gap-2 justify-center w-full bg-white text-lg md:text-xl text-darkBlue px-4 py-2 rounded-lg hover:animate-smallbounce`}
          >
            <p>Add trip</p>
            <FontAwesomeIcon className="hover:cursor-pointer" icon={faPlus} />
          </button>
        </div>
        <Map
          children={trips.map((trip) => (
            <TripPins {...trip} />
          ))}
          className="h-full w-full z-30"
        />
      </div>
    </>
  );
}
