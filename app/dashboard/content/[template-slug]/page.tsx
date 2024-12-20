"use client";
import React, { useContext, useState } from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import Template from "@/app/(data)/Template";
import { TEMPLATE } from "../../_components/TemplateListSection";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { chatSession } from "@/app/utils/AiModel";
import { db } from "@/app/utils/DB";
import { AIOutput } from "@/app/utils/schema";
import { useUser } from "@clerk/nextjs";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { useRouter } from "next/navigation";
import { UserSubscriptionContext } from "@/app/(context)/UserSubscriptionContext";
import { UpdateCreditUsageContext } from "@/app/(context)/UpdateCreditUsageContext";

interface PROPS {
  params: {
    "template-slug": string;
  };
}

const CreateNewContent = (props: PROPS) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [aiOutput, setAiOutput] = useState<string>("");
  const { user } = useUser();

  const selectedTemplate: TEMPLATE | undefined = Template?.find(
    (item) => item?.slug === props?.params["template-slug"]
  );
  console.log("render...........");
  const { totalUsage } = useContext(TotalUsageContext);
  const { userSubscription } = useContext(UserSubscriptionContext);
  const { updateCreditUsage, setUpdateCreditUsage } = useContext(
    UpdateCreditUsageContext
  );

  const router = useRouter();

  const generateAiContent = async (formData: any) => {
    if (totalUsage >= 10000 && !userSubscription) {
      alert("You have reached the maximum limit of 10000 characters");
      router.push("/dashboard/billing");
      return;
    }
    try {
      setLoading(true);
      console.log("content generated", formData);
      const selectedPrompt = selectedTemplate?.aiPrompt;
      const finalAiPrompt = JSON.stringify(formData) + ", " + selectedPrompt;
      const result = await chatSession.sendMessage(finalAiPrompt);
      console.log(result.response.text());
      setAiOutput(result.response.text());
      await saveInDb(formData, selectedTemplate?.slug, result.response.text());
      setUpdateCreditUsage(Date.now());
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const saveInDb = async (fromData: any, slug: any, aiResp: string) => {
    try {
      const formData = fromData ? JSON.stringify(fromData) : "";
      const templateSlug = slug ?? "";
      const aiResponse = aiResp ?? "";

      const result = await db.insert(AIOutput).values({
        formData: formData,
        templateSlug: templateSlug,
        aiResponse: aiResponse,
        createdBy: user?.primaryEmailAddress?.emailAddress ?? "", // Ensure createdBy is a valid string
      });

      // const result = await db.insert(AIOutput).values({
      //   formData: fromData,
      //   templateSlug: slug,
      //   aiResponse: aiResp,
      //   createdBy: user?.primaryEmailAddress?.emailAddress,
      // });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="p-10">
      <Link href="/dashboard/">
        <Button>
          <ArrowLeft /> Back
        </Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        {/* form section */}
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(userFormInput: any) =>
            generateAiContent(userFormInput)
          }
          loading={loading}
        />
        {/* output section */}
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
};

export default CreateNewContent;
