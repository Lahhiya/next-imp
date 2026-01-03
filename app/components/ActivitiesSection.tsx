"use client";

import CardContent from "./CardContent";
import CardDatas from "../api/cardDatas.json"
import { useState } from "react";
import { DynamicIcon } from "lucide-react/dynamic";


export default function ActivitiesSection() {
    const items : any[] = CardDatas;
    const [search,setSearch] = useState("");
    const filtered = items.filter((item) => {
        const keyOfJudul = item.judul.toLowerCase();
        return (
            keyOfJudul.includes(search.toLowerCase().trim())
        );
    });
    console.log(filtered);
    function handleRemove(){
        setSearch("")
    }

    return (
      <section className="container-lg max-w-full min-h-screen pb-10 h-auto flex flex-col justify-center align-middle mt-10">
        <div className="flex flex-col justify-center items-center">
          <h1 className="flex justify-between gap-2 text-4xl my-5">
            Activities :
          </h1>
          <div className="flex justify-center items-center gap-2">
            <input
              type="text"
              placeholder="Mulai Mencari..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="rounded-full w-72 h-8 text-center border-2 border-black ring-amber-500"
            />
            <div className="flex justify-center items-center">
              <button
                onClick={handleRemove}
                title="hapus"
                className="border rounded-lg cursor-pointer hover:rotate-90 group transition-all overflow-hidden"
              >
                <DynamicIcon
                  name="x"
                  size={30}
                  color="black"
                  className="group-hover:bg-red-400 duration-1000 rounded-lg"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          {filtered.length === 0 ? (
            <div className="flex justify-center items-center h-min-[50vh] h-24">
              <h1 className="text-lg italic text-gray-400 capitalize">
                Maaf,tidak ada hasil pencarian yang cocok
              </h1>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((item) => (
                <CardContent key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    );
}
