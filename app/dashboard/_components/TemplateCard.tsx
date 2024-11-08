import React from "react";
import { TEMPLATE } from "./TemplateListSection";
import Image from "next/image";
import Link from "next/link";

function TemplateCard(item: TEMPLATE) {
  return (
    <Link
      href={`/dashboard/content/${item.slug}`}
      className="p-5 shadow-md border rounded-sm bg-white flex flex-col flex-wrap gap-3 cursor-pointer  hover:shadow-lg transition-all"
    >
      <Image src={item.icon} alt="icon" width={50} height={50} priority />
      <h2 className="font-medium text-lg">{item.name}</h2>
      <p className="text-gray-500 line-clamp-3">{item.desc}</p>
    </Link>
  );
}

export default TemplateCard;
