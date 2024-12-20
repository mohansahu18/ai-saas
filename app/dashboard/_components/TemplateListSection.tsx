"use client";
import React, { useEffect, useState } from "react";
import TemplateCard from "./TemplateCard";
import Templates from "../../(data)/Template";

export interface TEMPLATE {
  name: string;
  desc: string;
  icon: string;
  category: string;
  slug: string;
  aiPrompt: string;
  form?: FORM[];
}

export interface FORM {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}

function TemplateListSection({ searchInput }: any) {
  const [templateList, setTemplateList] = useState(Templates);

  useEffect(() => {
    if (searchInput) {
      const filterData = Templates.filter((item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      setTemplateList(filterData);
    } else {
      setTemplateList(Templates);
    }
  }, [searchInput]);
  // debugger;
  return (
    <div className="m-2 rounded-md grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
      {templateList.length > 0 ? (
        templateList.map((item: TEMPLATE, index: number) => (
          <TemplateCard key={index} {...item} />
        ))
      ) : (
        <h1 className="col-span-full flex justify-center items-center h-64 text-2xl">
          No Template Found
        </h1>
      )}
    </div>
  );
}

export default TemplateListSection;
