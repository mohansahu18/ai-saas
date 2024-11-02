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
  aiResponse: string;
  templateSlug: string;
  createdBy: string;
  createdAt: string;
}

const History = () => {
  const { user } = useUser();
  const [historyList, setHistoryList] = useState<HISTORY[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchHistory = async () => {
    if (user?.primaryEmailAddress?.emailAddress) {
      try {
        const fetchedHistory: HISTORY[] = await db
          .select()
          .from(AIOutput)
          .where(eq(AIOutput.createdBy, user.primaryEmailAddress.emailAddress))
          .orderBy(desc(AIOutput.id));

        setHistoryList(fetchedHistory);
      } catch (error) {
        console.error("Failed to fetch history:", error);
      } finally {
        setLoading(false);
      }
    }
  };
  useEffect(() => {
    fetchHistory();
  }, [user]);

  const GetTemplateName = (slug: string) => {
    const template = Templates.find((item) => item.slug === slug);
    return template?.name || "Unknown Template"; // Adjust based on your template structure
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="m-2 p-5 border rounded-md bg-white">
      <h2 className="font-bold">History</h2>
      {historyList.map((item) => (
        <div key={item.id} className="mb-4">
          <h3 className="font-semibold">
            {GetTemplateName(item.templateSlug)}
          </h3>
          <p>
            <strong>Form Data:</strong>{" "}
            {JSON.parse(item.formData).outline || "N/A"}
          </p>{" "}
          {/* Displaying outline if present */}
          <p>
            <strong>AI Response:</strong> {item.aiResponse}
          </p>
          <p>
            <small>
              <em>Created at: {new Date(item.createdAt).toLocaleString()}</em>
            </small>
          </p>
        </div>
      ))}
    </div>
  );
};

export default History;
