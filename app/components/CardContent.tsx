"use client";
import { DynamicIcon } from "lucide-react/dynamic";
import Link from "next/link";
import cardItems from "../types/CardTypes";
import { motion } from "motion/react";

export default function CardContent({item,favCard,favAdd,favRemove} : {item : cardItems,favCard : number[],favAdd : (id : number) => void,favRemove : (id : number) => void}){
  const isFav = favCard.includes(item.id);

  function handleClick(){
    if(isFav){
      favRemove(item.id)
    } else if(!isFav){
      favAdd(item.id)
    }

  }

    return (
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: [0.9, 0.8, 1], opacity: [0, 0.5, 1] }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
        className="flex flex-col trans justify-center items-center mt-5 bg-slate-100 md:scale-100 h-auto w-52 text-center outline rounded-sm group hover:scale-105 hover:shadow-lg shadow-black"
      >
        <div className="flex flex-col justify-center my-3 mx-2 items-center text-center">
          <DynamicIcon
            name={item.icon}
            size={20}
            className="group-hover:-rotate-12 transition-all text-black"
          />
          {isFav ? (
            <motion.button
              initial={{ scale: 1, opacity: 1 }}
              whileTap={{ scale: 1.2, opacity: [0.5, 2] }}
              className="absolute top-2 right-2 cursor-pointer"
              title="(tekan 2x) untuk menghapus dari favorit"
              onDoubleClick={handleClick}
            >
              <DynamicIcon
                name="heart-minus"
                size={20}
                className="text-pink-600 brightness-75 hover:brightness-100 hover:scale-125 transition-all"
              />
            </motion.button>
          ) : (
            <motion.button
              initial={{ scale: 1, opacity: 1 }}
              whileTap={{ scale: 1.5, opacity: 5 }}
              className="absolute top-2 right-2 cursor-pointer"
              title="(tekan) untuk menambahkan ke favorit"
              onClick={handleClick}
            >
              <DynamicIcon
                name="heart-plus"
                size={20}
                className="text-pink-600 brightness-100 hover:brightness-75 hover:scale-125 transition-all"
              />
            </motion.button>
          )}
          <h3 className="text-2xl capitalize font-bold">{item.judul}</h3>
          <p className="text-sm my-3 leading-5">{item.deskripsi}</p>
          <Link
            href={item.link}
            className="flex gap-2 items-center cursor-pointer group-hover:font-bold hover:text-blue-600 transition-all"
          >
            Learn More
            <DynamicIcon name="play" size={20} />
          </Link>
        </div>
      </motion.div>
    );
}