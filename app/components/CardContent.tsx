"use client";
import { DynamicIcon } from "lucide-react/dynamic";
import Link from "next/link";
import { cardItems } from "../types/CardContent";

export default function CardContent({item} : {item : cardItems}){
    return (
        <div className="flex flex-col justify-center items-center mt-5 transition-all bg-slate-100 sm:scale-90 md:scale-100 h-auto w-52 text-center outline rounded-sm group hover:scale-105 hover:shadow-lg shadow-black">
            <div className="flex flex-col justify-center my-3 mx-2 items-center text-center">
            <DynamicIcon
                name={item.icon}
                color="black"
                size={20}
                className="group-hover:-rotate-12 transition-all"
            />
            <h3 className="text-2xl capitalize font-bold">{item.judul}</h3>
            <p className="text-sm my-3 leading-5">
                {item.deskripsi}
            </p>
            <Link
                href={item.link}
                className="flex gap-2 items-center cursor-pointer group-hover:font-bold hover:text-blue-600 peer transition-all"
            >
                Learn More
                <DynamicIcon name="play" size={20} className="peer-hover:text-blue-600 transition-all"/>
            </Link>
            </div>
        </div>
    );
}