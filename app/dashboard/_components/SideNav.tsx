"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import LOGO from "../../../public/logo.png";
import { FileClock, History, Home, Settings } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import UsageTrack from "./UsageTrack";

interface PROPS {
  onItemClick?: () => void;
}

const SideNav = ({ onItemClick }: PROPS) => {
  const params = usePathname();
  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: History,
      path: "/dashboard/history",
    },
    {
      name: "Billing",
      icon: FileClock,
      path: "/dashboard/billing",
    },
    {
      name: "Setting",
      icon: Settings,
      path: "/dashboard/setting",
    },
  ];
  useEffect(() => {}, []);
  return (
    <div className="h-screen p-5 shadow-sm border bg-white relative">
      <div className="flex justify-center">
        <Image src={LOGO} width={60} height={50} alt="logo" />
      </div>
      <div className="mt-10">
        {MenuList.map((ele, i) => (
          <Link
            onClick={(e) => {
              if (window.innerWidth < 768) {
                onItemClick?.();
              }
            }}
            key={i}
            href={ele.path}
          >
            <div
              className={`flex items-center gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer ${
                params === ele.path && "bg-primary text-white"
              }`}
            >
              <ele.icon className="h-7 w-7" />
              <h2>{ele.name}</h2>
            </div>
          </Link>
        ))}
      </div>
      <div className="absolute bottom-10 left-0  w-full">
        <UsageTrack onItemClick={onItemClick} />
      </div>
    </div>
  );
};

export default SideNav;
