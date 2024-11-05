import { Button } from "@/components/ui/button";
import {
  BookOpen,
  SlidersHorizontal,
  TabletSmartphone,
  TimerIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const card = [
    {
      id: 1,
      name: "25+ templates",
      icon: TabletSmartphone,
      desc: "Responsive and mobile first project on web",
    },
    {
      id: 2,
      name: "Customizable",
      icon: SlidersHorizontal,
      desc: "components anr easily customized and extendable",
    },
    {
      id: 3,
      name: "Free to Use",
      icon: BookOpen,
      desc: "Every Components and plugin is well documented",
    },
    {
      id: 4,
      name: "24/7 Support",
      icon: TimerIcon,
      desc: "contact us 24 hours a day,7 days a week",
    },
  ];

  return (
    <>
      <div className="main">
        <div className="flex items-center  justify-between px-6 py-3 border-b shadow-md w-full overflow-x-hidden">
          <div className="pb-8 -mb-10">
            <Image src={"/logo.png"} alt="logo" width={50} height={50} />
          </div>
          <Link href={"/dashboard"}>
            <Button>Get Started</Button>
          </Link>
        </div>

        <div className="h-screen overflow-scroll scrollbar-none l bg-gradient-to-tr from-[#704ef8] via-[#6665fb] to-[#7096f1] flex flex-col gap-4 justify-center items-center">
          <div className="border rounded-full p-1 w-[300px] flex items-center justify-center bg-white">
            <Link href={"/dashboard"}>
              <p className="font-medium text-[16px] cursor-pointer">
                Membership - Join Now →{" "}
              </p>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center mx-2 ">
            <p className="sm:text-6xl text-3xl text-center mx-auto text-[#fff] font-bold">
              AI Content Generator
            </p>
            <p className="m-3 text-center flex items-center flex-wrap justify-center text-slate-100">
              Revolutionalize your content creation with out AI-powered app,
              delivering engaging and high-quality text in seconds.
            </p>
          </div>
          <div>
            <Link href={"/dashboard"}>
              <Button className="text-white bg-[#534c7b] mt-5">
                Get Started
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex  border-4 py-24 border-red-800 w-full cursor-pointer flex-wrap items-center justify-center gap-10">
          {card.map((item, index) => (
            <div className="p-5 flex  flex-col gap-2 rounded-md border  w-[300px] border-[#7f72d3]">
              <div className="p-2 bg-[#7f72d3] w-11 rounded-md text-white">
                <item.icon className="h-7 w-7" />
              </div>
              <h2 className="mt-2 tracking-tighter font-bold text-xl">
                {item.name}
              </h2>
              <p className="text-x">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
