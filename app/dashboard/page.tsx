"use client";
import React, { useState } from "react";
import SearchSection from "./_components/SearchSection";
import TemplateListSection from "./_components/TemplateListSection";

const Dashboard = () => {
  const [searchInput, onSearchInput] = useState<string>("");
  return (
    <div>
      {/* search section */}
      <SearchSection
        onSearchInput={(value: string) => onSearchInput(value)}
        // onSearchInput={onSearchInput}
      />
      {/* template section */}
      <TemplateListSection searchInput={searchInput} />
    </div>
  );
};

export default Dashboard;
