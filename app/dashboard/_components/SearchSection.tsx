"use client";
import { Search } from "lucide-react";
import React from "react";

function SearchSection({ onSearchInput }: any) {
  return (
    <div className="flex flex-col justify-center gap-1 items-center p-10 m-2 rounded-md bg-gradient-to-tr to-[#89D1D0] via-[#8E84C8] from-[#d88095]">
      <h2 className="text-white text-3xl font-bold">Brows All Templates</h2>
      <p className="text-white">What would you like to create today?</p>
      <div className="w-full flex items-center justify-center">
        <div className="flex gap-2 items-center border rounded-md p-2 mh-2 bg-white my-3 w-[50%]">
          <Search className="text-[#d88095]" />
          <input
            type="text"
            placeholder="Search"
            className="outline-none bg-transparent w-full text-[#8E84C8]"
            onChange={(e) => onSearchInput(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
