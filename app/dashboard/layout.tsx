"use client";
import React, { useState } from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";
import { TotalUsageContext } from "../(context)/TotalUsageContext";
import { UserSubscriptionContext } from "../(context)/UserSubscriptionContext";
import { UpdateCreditUsageContext } from "../(context)/UpdateCreditUsageContext";
import { Menu } from "lucide-react";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [totalUsage, setTotalUsage] = useState<number>(0);
  const [userSubscription, setUserSubscription] = useState<boolean>(false);
  const [updateCreditUsage, setUpdateCreditUsage] = useState<any>();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
      <UserSubscriptionContext.Provider
        value={{ userSubscription, setUserSubscription }}
      >
        <UpdateCreditUsageContext.Provider
          value={{ updateCreditUsage, setUpdateCreditUsage }}
        >
          <div className="bg-slate-100 min-h-screen relative overflow-hidden">
            {/* Mobile Menu Button */}
            <button
              onClick={toggleSidebar}
              className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-md"
            >
              <Menu className="h-6 w-6" />
            </button>

            {/* Overlay for mobile */}
            {isSidebarOpen && (
              <div
                className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
                onClick={toggleSidebar}
              />
            )}

            {/* Sidebar */}
            <div
              className={`
                fixed top-0 left-0 h-[100dvh] w-64 z-40
                transform transition-transform duration-300 ease-in-out
                ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
                md:translate-x-0
              `}
            >
              <div className="h-full overflow-y-auto bg-white">
                <SideNav onItemClick={closeSidebar} />
              </div>
            </div>

            {/* Main Content */}
            <div className="md:ml-64 min-h-screen">
              <Header />
              {children}
            </div>
          </div>
        </UpdateCreditUsageContext.Provider>
      </UserSubscriptionContext.Provider>
    </TotalUsageContext.Provider>
  );
};

export default Layout;
