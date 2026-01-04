"use client";
import { DynamicIcon } from "lucide-react/dynamic";

export default function SearchBar({search,setSearch,handleRemove,favCount} : {search : string,setSearch : (search : string) => void,handleRemove : () => void,favCount : number}){
    return (
      <div className="flex justify-center items-center px-3 rounded-lg border-2 border-gray-600 gap-2">
        <div className="flex justify-center items-center">
          <DynamicIcon
            name="heart"
            size={20}
            className="duration-2000 rounded-lg m-1 text-pink-600  hover:animate-shrink transition-all"
          ></DynamicIcon>
          <span className="text-sm font-semibold">{favCount}</span>
        </div>
        <input
          type="text"
          placeholder="Mulai Mencari..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-full w-52 h-8 text-center focus:outline-none focus:ring-2 focus:border-gray-600 bg-gray-200 my-1"
        />
        <div className="flex justify-center items-center">
          <button
            onClick={handleRemove}
            title="hapus"
            className="cursor-pointer hover:rotate-90 group transition-all overflow-hidden"
          >
            {search.length > 0 ? (
              <DynamicIcon
                name="x"
                size={25}
                color="black"
                className="duration-1000 rounded-lg m-1"
              />
            ) : (
              <DynamicIcon
                name="search"
                size={25}
                color="black"
                className="duration-1000 rounded-lg m-1"
              />
            )}
          </button>
        </div>
      </div>
    );
}