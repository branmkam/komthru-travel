"use client";
import { orelega_class } from "@/fonts";
import { useState } from "react";

export default function Login() {
  const [showText, setShowText] = useState(false);

  return (
    <div className="items-center w-full flex flex-col gap-2 h-[90vh] justify-center">
      <h3 className={orelega_class + " text-3xl"}>Login</h3>
      <input type="email" className="rounded-lg py-1 px-3 w-1/2" />
      <div className="relative w-1/2">
        <input
          type={showText ? "text" : "password"}
          className="rounded-lg py-1 px-3 w-full"
        />
        <button className="absolute top-1 right-2" onClick={() => setShowText((s) => !s)}>
          {showText ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
}
