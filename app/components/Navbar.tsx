"use client"
import Link from "next/link"
import Image from "next/image"
import amiya from "@/public/amiya.svg"

export default function Navbar(){
    return (
      <div className="container-lg flex items-center sticky z-20  top-0 max-w-screen mx-auto h-16 md:px-15 px-5 gap-8 justify-between bg-slate-100 shadow-sm shadow-slate-200">
        <Link className="flex items-center w-2/12 gap-4" href={"/"}>
          <Image src={amiya} alt="amiya icon" className="w-auto h-8 md:h-10" ></Image>
          <h1 className="text-md md:text-2xl font-bold uppercase text-stone-800">entah</h1>
        </Link>
        <nav className="flex w-8/12 justify-end items-center md:px-10 me-5 gap-5 text-md md:text-lg text-stone-800">
            <div className="flex w-1/2 justify-between md:gap-15 gap-3 font-semibold">
                <Link href={"/"} className=" hover:underline hover:text-zinc-600 hover:scale-105 underline">Home</Link>
                <Link href={"/"} className=" hover:underline hover:text-zinc-600 hover:scale-105">About</Link>
                <Link href={"/"} className=" hover:underline hover:text-zinc-600 hover:scale-105">Contact</Link>
            </div>
        </nav>
      </div>
    );
}