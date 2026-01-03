"use client";
import { useState } from "react";

export default function SearchBar({handleFilter} : any){
    const [search,setSearch] = useState("");
    function handleSearch(e :any){
        setSearch(e.target.value)
        handleFilter(search)
    }

    return (

    );
}