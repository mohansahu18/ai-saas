"use client";
import { db } from "@/app/utils/DB";
import { AIOutput, UserSubscription } from "@/app/utils/schema";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import React, { useContext, useEffect, useState } from "react";
import { HISTORY } from "../history/page";
import { eq } from "drizzle-orm";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { UserSubscriptionContext } from "@/app/(context)/UserSubscriptionContext";

const UsageTrack = () => {
  const { user } = useUser();
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const { userSubscription, setUserSubscription } = useContext(
    UserSubscriptionContext
  );
  const [maxWords, setMaxWords] = useState<number>(10000);
  useEffect(() => {
    user && getData();
    user && isUserSubscribed();
  }, [user]);

  const getData = async () => {
    try {
      const result: HISTORY[] = await db
        .select()
        .from(AIOutput)
        .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress));
      getTotalUsage(result);
    } catch (error) {
      console.log(error);
    }
  };

  const getTotalUsage = (result: HISTORY[]) => {
    let total: number = 0;
    result.forEach((ele) => {
      total += Number(ele.aiResponse?.length);
    });
    console.log(total);
    setTotalUsage(total);
  };

  const isUserSubscribed = async () => {
    debugger;
    try {
      const result = await db
        .select()
        .from(UserSubscription)
        .where(
          eq(UserSubscription.email, user?.primaryEmailAddress?.emailAddress)
        );
      if (result) {
        setUserSubscription(true);
        setMaxWords(1000000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="m-5">
      <div className="bg-primary text-white rounded-lg p-3">
        <h2 className="font-medium">Credits</h2>
        <div className="h-2 rounded-full w-full bg-[#9981f9] mt-3">
          <div
            style={{
              width: (totalUsage / 10000) * 100 + "%",
            }}
            className="h-2 rounded-full bg-white "
          ></div>
        </div>
        <h2 className="text-sm my-2">
          {totalUsage} /{maxWords} Credits used
        </h2>
      </div>
      <Button variant={"secondary"} className="w-full my-3 text-primary ">
        Upgrade
      </Button>
    </div>
  );
};

export default UsageTrack;
