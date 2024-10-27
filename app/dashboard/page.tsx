"use client";
import React, { useState } from "react";
import SearchSection from "./_components/SearchSection";
import TemplateListSection from "./_components/TemplateListSection";

const Dashborad = () => {
  const [searchInput, onSearchInput] = useState("");
  return (
    <div>
      {/* search section */}
      <SearchSection onSearchInput={onSearchInput} />
      {/* template section */}
      <TemplateListSection searchInput={searchInput} />
    </div>
  );
};

export default Dashborad;
