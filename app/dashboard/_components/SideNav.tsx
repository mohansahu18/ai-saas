"use client";

import Image from "next/image";
import React from "react";
import LOGO from "../../../public/logo.png";
import { FileClock, History, Home, Settings } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import UsageTrack from "./UsageTrack";

interface Props {
  onItemClick?: () => void;
}

const MENU_LIST = [
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
] as const;

const SideNav: React.FC<Props> = ({ onItemClick }) => {
  const pathname = usePathname();

  const handleItemClick = () => {
    if (window.innerWidth < 768) {
      onItemClick?.();
    }
  };

  return (
    <div className="relative h-screen border bg-white p-5 shadow-sm">
      <div className="flex justify-center">
        <Image src={LOGO} width={60} height={50} alt="logo" priority />
      </div>
      <nav className="mt-10">
        {MENU_LIST.map((item) => (
          <Link key={item.path} href={item.path} onClick={handleItemClick}>
            <div
              className={`mb-2 flex cursor-pointer items-center gap-2 rounded-lg p-3 hover:bg-primary hover:text-white
                ${pathname === item.path ? "bg-primary text-white" : ""}`}
            >
              <item.icon className="h-7 w-7" />
              <h2>{item.name}</h2>
            </div>
          </Link>
        ))}
      </nav>
      <div className="absolute bottom-10 left-0 w-full">
        <UsageTrack onItemClick={onItemClick} />
      </div>
    </div>
  );
};

export default SideNav;
