"use client";
import wc from "@/data/worldcities.json";
import { orelega_class, outfit_class } from "@/fonts";
import { Marker, Polyline, Popup } from "react-leaflet";
import parse from "html-react-parser";
import day from "dayjs";
import Link from "next/link";
import { users } from "@/models/userModel";

interface PinProps {
  cityId: string;
  legStart: string;
  legEnd: string;
  media: string[];
  body: string;
}

interface TripPinsProps {
  cityFrom: string;
  start: string;
  end: string;
  name: string;
  legs: PinProps[];
  user: string;
  tripId: number;
}

export default function TripPins(data: TripPinsProps) {
  const markers = data.legs.map((pin) => {
    const city = wc[pin.cityId];
    const displayStr =
      city.city_ascii +
      ", " +
      (["US", "CA"].includes(city.iso2) ? city.admin_name : city.country);
    return (
      <>
        <Marker
          eventHandlers={{
            mouseover: (event) => event.target.openPopup(),
            click: (event) => event.target.openPopup(),
          }}
          riseOnHover={true}
          position={[city.lat, city.lng]}
        >
          <Popup className="w-48 md:w-72">
            <div className={`${outfit_class} flex flex-col h-48 gap-0`}>
              <div className="flex flex-row gap-0.5">
                <img className="h-4" src={users[data.user].profilePic} />
                <span>
                  <span className="text-blue-500 hover:text-blue-300">
                    {data.user}
                  </span>{" "}
                  went to
                </span>
              </div>
              <Link
                href={"/cities/" + pin.cityId}
                className={`${orelega_class} font-bold text-xl`}
              >
                {displayStr}
              </Link>
              <span className={`font-bold text-sm`}>
                {day(pin.legStart).format("MM/DD/YY")}-
                {day(pin.legEnd).format("MM/DD/YY")}
              </span>
              <span>
                Part of <i className="text-blue-500">{data.name}</i>
              </span>
              <div className="overflow-y-auto">{parse(pin.body)}</div>
            </div>
          </Popup>
        </Marker>
        <Polyline
          key={data.tripId}
          weight={0.5}
          positions={data.legs.map((pin) => {
            const pinP = wc[pin.cityId];
            return [pinP.lat, pinP.lng];
          })}
        />
      </>
    );
  });
  return markers;
}
