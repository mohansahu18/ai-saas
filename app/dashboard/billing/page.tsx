"use client";
import { Button } from "@/components/ui/button";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Loader2Icon } from "lucide-react";
import { db } from "@/app/utils/DB";
import { UserSubscription } from "@/app/utils/schema";
import { useUser } from "@clerk/nextjs";
import { UserSubscriptionContext } from "@/app/(context)/UserSubscriptionContext";

const Billing = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { userSubscription } = useContext(UserSubscriptionContext);
  const { user } = useUser();
  useEffect(() => {
    const loadRazorpayScript = () => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      document.body.appendChild(script);
    };

    loadRazorpayScript();
  }, []);

  const createSubscription = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post("/api/create-subscription/", {});
      console.log(response, "llllllllllllllllllllll");
      OnPayment(response?.data?.id);
    } catch (error: any) {
      console.log({ msg: error });
    } finally {
      setIsLoading(false);
    }
  };
  const OnPayment = (subId: string) => {
    try {
      if (typeof window.Razorpay === "undefined") {
        console.error("Razorpay SDK not loaded");
        return;
      }
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        "subscript ion_id": subId,
        name: "AI  Content Generator",
        description: "Monthly Subscription",
        handler: async function (response: any) {
          if (response) {
            SaveSubscription(response.razorpay_payment_id);
          }
        },
      };
      // @ts-ignore
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  const SaveSubscription = async (paymentId: string) => {
    try {
      const result = await db.insert(UserSubscription).values({
        email: user?.primaryEmailAddress?.emailAddress,
        userName: user?.fullName,
        active: true,
        paymentId: paymentId,
        joinDate: Date.now(),
      });
      if (result) {
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-[88vh]">
      <div className="my-4">
        <h1 className="text-3xl font-bold">Upgrade With Monthly plan</h1>
      </div>

      <div className="flex gap-8">
        <div className="border border-[#D88095] bg-white p-8 rounded-md">
          <div className="flex w-full justify-center mb-1">
            <h2 className="text-3xl flex items-center font-bold">Free</h2>
          </div>

          <div className="flex gap-1 w-full justify-center">
            <h1 className="text-4xl my-2 font-medium">₹0</h1>
            <h3 className="mt-6 my-2 font-medium">/month</h3>
          </div>

          <div className="p-2 flex flex-col items-start justify-center">
            <h1 className="py-1 text-[16px] font-medium">
              ✔ 1,00,000 Words/Month
            </h1>

            <h1 className="py-1 text-[16px] font-medium">
              ✔ 50+ Template Access
            </h1>

            <h1 className="py-1 text-[16px] font-medium">
              ✔ Limited Download & Copy
            </h1>

            <h1 className="py-1 text-[16px] font-medium">
              ✔ 1 Month of History
            </h1>
          </div>

          <Button className="w-full cursor-not-allowed bg-white border border-[#D88095] text-[#D88095] rounded-md">
            Free Tier
          </Button>
        </div>

        <div className="border border-[#D88095] bg-white p-8 rounded-md">
          <div className="flex w-full justify-center mb-1">
            <h2 className="text-3xl flex items-center font-bold">Monthly</h2>
          </div>

          <div className="flex gap-1 w-full justify-center">
            <h1 className="text-4xl my-2 font-medium">₹999</h1>
            <h3 className="mt-6 my-2 font-medium">/month</h3>
          </div>

          <div className="p-2 flex flex-col items-start justify-center">
            <h1 className="py-1 text-[16px] font-medium">
              ✔ 1,00,000 Words/Month
            </h1>

            <h1 className="py-1 text-[16px] font-medium">
              ✔ 50+ Template Access
            </h1>

            <h1 className="py-1 text-[16px] font-medium">
              ✔ Unlimted Download & Copy
            </h1>

            <h1 className="py-1 text-[16px] font-medium">
              ✔ 1 Year of History
            </h1>
          </div>

          {/* {userSubscription == true ? (
            <Button className="w-full" onClick={checkoutButton}>
              Your Plan is activated
            </Button>
          ) : (
          
          )} */}
          <Button
            disabled={isLoading}
            className="w-full"
            onClick={createSubscription}
          >
            {isLoading && <Loader2Icon className="animate-spin" />}
            {userSubscription ? "Your Plan is activated" : " Activate Plan"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Billing;
