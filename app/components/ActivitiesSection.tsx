"use client";

import CardContent from "./CardContent";
import CardDatas from "../api/cardDatas.json";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { useImmer } from "use-immer";
import { useEffect } from "react";
import cardItems from "../types/CardTypes";
import Loading from "../loading";
import { DynamicIcon } from "lucide-react/dynamic";
import { AnimatePresence } from "motion/react";

export default function ActivitiesSection() {
  const [isloading,SetIsLoading] = useState(true);

  useEffect(()=>{
    const datas = JSON.parse(localStorage.getItem("favCard") || "[]");
    const timer =setTimeout(()=>{
      setFavCard(datas)
      SetIsLoading(false)
    },2000)
    return ()=>{
      clearTimeout(timer)
    }
  },[])

  const items = CardDatas as cardItems[];
  const [search, setSearch] = useState("");
  const [favCard, setFavCard] = useImmer([]);

  const filtered = items.filter((item) => {
    const keyOfJudul = item.judul.toLowerCase();
    return keyOfJudul.includes(search.toLowerCase().trim());
  });

  function favAdd(id: number) {
    setFavCard((draft: number[]) => {
      draft.push(id);
    });
  }

  function favRemove(id: number) {
    setFavCard((draft: number[]) => {
      draft.splice(draft.indexOf(id), 1);
    });
  }

  function handleRemove() {
    setSearch("");
  }
  useEffect(()=>{
    localStorage.setItem("favCard",JSON.stringify(favCard))
  },[favCard])

  return (
    <section className="container-lg max-w-full min-h-[90vh]  pb-10 h-auto flex flex-col justify-center align-middle mt-10">
      <div className="flex flex-col justify-center items-center min-h[90vh]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="flex justify-between items-center gap-2 text-4xl my-5">
            Activities :
          </h1>
          <SearchBar
            search={search}
            setSearch={setSearch}
            handleRemove={handleRemove}
            favCount={favCard.length}
          />
        </div>
        <div className="flex justify-center">
          {isloading ? (
            <Loading />
          ) : filtered.length === 0 ? (
            <div className="flex flex-col justify-center items-center h-min-[50vh] h-24">
              <DynamicIcon name="frown" size={20} className="text-gray-400" />
              <p className="text-lg italic text-gray-400 capitalize">
                Maaf,tidak ada data yang ditemukan
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <AnimatePresence>
              {filtered.map((item) => (
                <CardContent
                  key={item.id}
                  item={item}
                  favCard={favCard}
                  favAdd={favAdd}
                  favRemove={favRemove}
                />
              ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
