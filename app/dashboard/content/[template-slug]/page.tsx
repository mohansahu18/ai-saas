"use client";
import React, { useState } from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import Template from "@/app/(data)/Template";
import { TEMPLATE } from "../../_components/TemplateListSection";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { chatSession } from "@/app/utils/AiModel";

interface PROPS {
  params: {
    "template-slug": string;
  };
}

const CreateNewContent = (props: PROPS) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [aiOutput, setAiOutput] = useState<string>("");

  const selectedTemplate: TEMPLATE | undefined = Template?.find(
    (item) => item?.slug === props?.params["template-slug"]
  );
  console.log("render...........");

  const generateAiContent = async (formData: any) => {
    try {
      setLoading(true);
      console.log("content generated", formData);
      const selectedPrompt = selectedTemplate?.aiPrompt;
      const finalAiPrompt = JSON.stringify(formData) + ", " + selectedPrompt;
      const result = await chatSession.sendMessage(finalAiPrompt);
      console.log(result.response.text());
      setAiOutput(result.response.text());
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      setLoading(false);
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
