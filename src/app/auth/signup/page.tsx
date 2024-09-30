"use client";
import wc from "@/data/worldcities.json";
import { orelega_class } from "@/fonts";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

const initInfo = {
  email: "",
  pw: "",
  pw2: "",
  homeCity: "",
  homeCountry: "",
  username: "",
  profilePic: "",
};

export default function Signup() {
  const [info, setInfo] = useState(initInfo);
  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);

  async function addUser() {
    //add appropriate checks here.
    if (info.email && info.username && info.pw.length > 7) {
      //successful creation.
      fetch("http://localhost:4002/adduser", {
        method: "POST",
        body: JSON.stringify({
          email: info.email,
          pw: info.pw,
          username: info.username,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((resp) => {
        setInfo(initInfo);
        redirect("/"); //eventually redirect to newuser landing page.
      });
    }
  }

  const setInfoVal = (e: any, key: string) => {
    setInfo((inf) => {
      return {
        ...inf,
        [`${key}`]: e.target.value,
      };
    });
  };

  useEffect(() => {
    console.log(info);
  }, [info]);
  return (
    <div className="items-center w-full flex flex-col gap-2 h-[90vh] justify-center">
      <h3 className={orelega_class + " text-3xl"}>Sign Up</h3>
      <input
        placeholder="Email"
        value={info.email}
        onChange={(e) => setInfoVal(e, "email")}
        type="email"
        className="rounded-lg py-1 px-3 w-5/6 md:w-1/2"
      />
      <input
        placeholder="Username"
        value={info.username}
        onChange={(e) => setInfoVal(e, "username")}
        type="text"
        className="rounded-lg py-1 px-3 w-5/6 md:w-1/2"
      />
      <div className="relative w-5/6 md:w-1/2">
        <input
          placeholder="Password"
          value={info.pw}
          onChange={(e) => setInfoVal(e, "pw")}
          type={showText1 ? "text" : "password"}
          className="rounded-lg py-1 px-3 w-full"
        />
        <button
          className="w-10 hidden sm:block absolute top-1 right-2"
          onClick={() => setShowText1((s) => !s)}
        >
          {showText1 ? "Hide" : "Show"}
        </button>
      </div>
      {/* <div className="relative w-5/6 md:w-1/2">
        <input
          value={info.pw2}
          onChange={(e) => setInfoVal(e, "pw2")}
          placeholder="Password again..."
          type={showText2 ? "text" : "password"}
          className="rounded-lg py-1 px-3 w-full"
        />
        <button
          className="w-10 hidden sm:block absolute top-1 right-2"
          onClick={() => setShowText2((s) => !s)}
        >
          {showText2 ? "Hide" : "Show"}
        </button>
      </div> */}

      {/* add home country/city autocomplete side-by-side here */}
      <div className="flex flex-col sm:flex-row w-full"></div>

      <button
        className="px-4 py-2 bg-[#020430] hover:bg-[#061290] rounded-lg text-white text-xl"
        onClick={addUser}
      >
        Submit
      </button>

      <p className="text-right text-[#020430]">
        Already have an account?{" "}
        <Link href="/auth/login" className="text-blue-700 hover:text-blue-500">
          Log in
        </Link>
      </p>
    </div>
  );
}
