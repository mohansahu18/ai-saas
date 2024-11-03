import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Header = () => {
  const router = useRouter();
  return (
    <div className="flex justify-between items-center p-5 shadow-md border-b-2 bg-white">
      {/* <div className="flex gap-2 items-center p-2 border rounded-md max-w-md">
        <Search />
        <input type="text" className="outline-none" placeholder="Search...." />
      </div> */}
      <hr className="my-6 border" />
      <div className="flex items-center gap-5">
        <Link href={"/dashboard/billing"}>
          <h2 className="bg-primary p-3 rounded-full text-xs text-white px-2 m-3">
            {" "}
            🔥 Join The Membership Now
          </h2>
        </Link>
        <UserButton />
      </div>
    </div>
  );
};

export default Header;
