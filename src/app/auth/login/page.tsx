"use client";
import { orelega_class } from "@/fonts";
import Link from "next/link";
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
        <button
          className="w-10 absolute top-1 right-2"
          onClick={() => setShowText((s) => !s)}
        >
          {showText ? "Hide" : "Show"}
        </button>
      </div>
      <p className="text-right text-[#020430]">
        Don't have an account? <Link href="/auth/signup" className="text-blue-700 hover:text-blue-500">Sign up</Link>
      </p>
    </div>
  );
}
