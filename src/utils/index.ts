"use server";
import wc from "@/data/worldcities.json";
import { redirect } from "next/navigation";

export async function randomCity(redir: boolean = false, l: number = 0) {
  let cities = Object.keys(wc);
  let filteredCities = cities.filter((x) => wc[x].population > l);
  let rand = Math.floor(Math.random() * filteredCities.length);
  let city = filteredCities[rand];
  {
    redir && redirect("/cities/" + city);
  }
  return city;
}