"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faX } from "@fortawesome/free-solid-svg-icons";
import { orelega_class } from "@/fonts";
import { useState } from "react";
import wc from "@/data/worldcities.json";
import { popnum } from "@/utils/utils";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import RichText from "./RichText";

export default function TripModal(props: {
  className: string;
  setShowModal: Function;
}) {
  const { className, setShowModal } = props;

  const [inp, setInp] = useState("");
  const [selected, setSelected] = useState("~editing~");
  const [isTitleEditing, setIsTitleEditing] = useState(false);
  const [tripTitle, setTripTitle] = useState("My trip");
  const [dates, setDates] = useState([new Date(), new Date()]);

  const wcKeys = Object.keys(wc);
  const validCities = wcKeys
    .filter((x) =>
      (wc[x].city_ascii ? wc[x].city_ascii : wc[x].city)
        .toLowerCase()
        .includes(inp.toLowerCase())
    )
    .sort((a, b) => wc[b].population - wc[a].population);

  return (
    <div className={className + " overflow-y-auto m-2"}>
      <div className="absolute top-6 p-2 right-6">
        <FontAwesomeIcon
          className="hover:cursor-pointer"
          onClick={() => setShowModal(false)}
          icon={faX}
        />
      </div>
      <div>
        <div
          className={`${orelega_class} hover:cursor-pointer pb-4 border-b-2 border-b-darkBlue text-2xl  items-center md:text-4xl flex flex-row gap-3`}
        >
          {!isTitleEditing ? (
            <>
              <span onClick={() => setIsTitleEditing(true)}>{tripTitle}</span>
              <FontAwesomeIcon
                onClick={() => setIsTitleEditing(true)}
                icon={faEdit}
              />
            </>
          ) : (
            <>
              <input
                placeholder="Enter a title for your trip!"
                className="border-2 border-darkBlue rounded-lg p-2 w-full"
                value={tripTitle}
                onChange={(e) => setTripTitle(e.target.value)}
              />
              <button
                onClick={() => setIsTitleEditing(false)}
                className="w-20 p-2 text-lg bg-darkBlue rounded-lg text-white"
              >
                Save
              </button>
            </>
          )}
        </div>
        <div className="flex flex-col gap-6 mt-4 pb-4">
          <div className="flex flex-col gap-2">
            <p className={`text-lg ${orelega_class}`}>
              Which city did you go to?
            </p>
            <div className="w-full">
              {selected == "~editing~" ? (
                <>
                  <input
                    placeholder="Search for cities..."
                    className="border-2 border-darkBlue rounded-lg p-2 w-full"
                    value={inp}
                    onChange={(e) => setInp(e.target.value)}
                  />
                  <div className="rounded-md max-h-80 absolute w-[58vw] z-50 max-w-[550px] overflow-y-auto">
                    {inp.length > 0 && validCities.length > 0
                      ? validCities.slice(0, 40).map((y) => {
                          return (
                            <div
                              onClick={() => setSelected(y)}
                              className="hover:cursor-pointer w-full border-y-[1px] border-slate-200 hover:bg-darkBlue hover:text-white px-4 py-2 bg-white"
                            >
                              <p
                                className={`${orelega_class} text-lg font-bold`}
                              >
                                {wc[y].city}
                                <span className="text-sm font-normal">
                                  {wc[y].admin_name && ", " + wc[y].admin_name}
                                </span>
                              </p>
                              <p className={""}>
                                {wc[y].country} ({popnum(wc[y].population)})
                              </p>
                            </div>
                          );
                        })
                      : inp.length > 0 && (
                          <p className="bg-white p-2 rounded-lg">
                            No cities found. Try again!
                          </p>
                        )}
                  </div>
                </>
              ) : (
                <div
                  onClick={() => {
                    //   setInp(wc[selected].city_ascii);
                    setSelected("~editing~");
                  }}
                  className="hover:text-darkBlue cursor-pointer flex flex-row text-lg gap-2 items-center"
                >
                  <span>
                    {wc[selected].city},{" "}
                    {wc[selected].admin_name && wc[selected].admin_name + ", "}
                    {wc[selected].country}
                  </span>
                  <FontAwesomeIcon icon={faEdit} />
                </div>
              )}
            </div>
          </div>
          <div className="w-full flex gap-2 flex-col md:flex-row justify-around items-center">
            <div className="">
              <p className={`text-lg ${orelega_class}`}>Start Date</p>
              <DatePicker
                className="rounded-lg p-2 border-black border-2 w-full"
                showFullMonthYearPicker={true}
                showPreviousMonths={true}
                selected={dates[0]}
                onChange={(date) =>
                  setDates((d) => [date, d[1] < date ? date : d[1]])
                }
              />
            </div>
            <div className="">
              <p className={`text-lg ${orelega_class}`}>End Date</p>
              <DatePicker
                className="rounded-lg p-2 border-black border-2 w-full"
                showFullMonthYearPicker={true}
                selected={dates[1]}
                onChange={(date) =>
                  setDates((d) => [d[0] > date ? date : d[0], date])
                }
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className={`text-lg ${orelega_class}`}>
              Tell us a bit about your experience!
            </p>
            <RichText />
          </div>
          <button className="bg-darkBlue text-white px-4 py-2 rounded-lg">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
