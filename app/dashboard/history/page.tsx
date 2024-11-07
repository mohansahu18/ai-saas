"use client";
import { desc, eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import { TEMPLATE } from "../_components/TemplateListSection";
import Templates from "@/app/(data)/Template";
import { useUser } from "@clerk/nextjs";
import { db } from "@/app/utils/DB";
import { AIOutput } from "@/app/utils/schema";

export interface HISTORY {
  id: number;
  formData: string;
  aiResponse: string | null;
  templateSlug: string;
  createdBy: string;
  createdAt: Date | null;
}

const History = () => {
  // const { user } = useUser();
  // const [historyList, setHistoryList] = useState<HISTORY[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);

  // const fetchHistory = async () => {
  //   if (user?.primaryEmailAddress?.emailAddress) {
  //     try {
  //       const userEmail = user?.primaryEmailAddress?.emailAddress;
  //       if (!userEmail) {
  //         console.error("User email is not available.");
  //         return; // Exit if no email is available
  //       }
  //       const fetchedHistory: HISTORY[] = await db
  //         .select()
  //         .from(AIOutput)
  //         .where(eq(AIOutput.createdBy, userEmail))
  //         .orderBy(desc(AIOutput?.id));

  //       setHistoryList(fetchedHistory);
  //     } catch (error) {
  //       console.error("Failed to fetch history:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  // };
  // useEffect(() => {
  //   fetchHistory();
  // }, [user]);

  // const GetTemplateName = (slug: string) => {
  //   const template = Templates.find((item) => item.slug === slug);
  //   return template?.name || "Unknown Template"; // Adjust based on your template structure
  // };

  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  // const truncateText = (text, maxWords = 20) => {
  //   const words = text.split(" ");
  //   if (words.length <= maxWords) {
  //     return text;
  //   }
  //   return `${words.slice(0, maxWords).join(" ")}...`;
  // };

  // const formatDate = (dateString) => {
  //   const date = new Date(dateString);
  //   return date.toLocaleDateString();
  // };
  // const getWordCount = (text) => {
  //   return text.split(" ").length;
  // };
  // console.log(historyList, "historyList");

  return (
    <div className="m-2 p-5 rounded-md bg-white border">
      {/* <h2 className="font-bold">History</h2>
      {historyList.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-2 border text-left">Template</th>
                <th className="p-2 border text-left">Form Data</th>
                <th className="p-2 border text-left">AI Response</th>
                <th className="p-2 border text-left">Word Count</th>
                <th className="p-2 border text-left">Created At</th>
              </tr>
            </thead>
            <tbody>
              {historyList.map((item) => (
                <tr key={item.id} className="mb-4">
                  <td className="p-2 border font-medium">
                    {GetTemplateName(item.templateSlug)}
                  </td>
                  <td className="p-2 border">
                    {JSON.parse(item.formData).niche || "N/A"}
                  </td>
                  <td className="p-2 border max-w-[300px] truncate">
                    {truncateText(item.aiResponse, 20)}
                  </td>
                  <td className="p-2 border">
                    {getWordCount(item.aiResponse)}
                  </td>
                  <td className="p-2 border">{formatDate(item.createdAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-500">No history found</p>
      )} */}
      history
    </div>
  );
};

export default History;
