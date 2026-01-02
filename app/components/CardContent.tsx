"use client";
import { DynamicIcon } from "lucide-react/dynamic";
import Link from "next/link";

export default function CardContent(){
    return (
      <div className="flex flex-col justify-center items-center mt-5 transition-all bg-slate-100 h-auto w-52 text-center outline rounded-sm group hover:scale-105 hover:shadow-lg shadow-black">
        <div className="flex flex-col justify-center my-3 mx-2 items-center text-center">
          <DynamicIcon
            name="speech"
            color="black"
            size={20}
            className="group-hover:-rotate-12 transition-all"
          />
          <h3 className="text-2xl capitalize font-bold">berbicara</h3>
          <p className="text-sm my-3 leading-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
            eum eos omnis, dolorem, dignissimos velit commodi ipsam maxime
            eveniet repellendus blanditiis illum mollitia officia distinctio
            unde dolores fugiat maiores nihil?
          </p>
          <Link
            href={"/"}
            className="flex gap-2 items-center cursor-pointer group-hover:font-bold hover:text-blue-600 peer transition-all"
          >
            Learn More
            <DynamicIcon name="play" size={20} className="peer-hover:text-blue-600 transition-all"/>
          </Link>
        </div>
      </div>
    );
}