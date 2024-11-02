"use client";
import Image from "next/image";
import { TEMPLATE } from "../../_components/TemplateListSection";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";

interface PROPS {
  selectedTemplate?: TEMPLATE;
  userFormInput: any;
  loading: boolean;
}
const FormSection = ({ selectedTemplate, userFormInput, loading }: PROPS) => {
  const [formData, setFormData] = useState<any>();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    userFormInput(formData);
    console.log(formData);
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="p-5 shadow-md border rounded-lg bg-white">
      {/* @ts-ignore */}
      <Image src={selectedTemplate?.icon} alt="icon" width={70} height={70} />
      <h2 className="font-bold text-2xl mb-2 text-primary">
        {selectedTemplate?.name}
      </h2>
      <p className="text-gray-500 text-sm">{selectedTemplate?.desc}</p>
      <form onSubmit={handleSubmit} className="mt-6">
        {selectedTemplate?.form?.map((item) => (
          <div className="my-2 flex flex-col gap-2 mb-7" key={item.name}>
            <label className="font-bold" htmlFor={item.name}>
              {item.label}
            </label>
            {item.field === "input" ? (
              <Input
                onChange={handleInputChange}
                name={item?.name}
                required={item?.required}
              />
            ) : item.field === "textarea" ? (
              <Textarea
                onChange={handleInputChange}
                name={item?.name}
                required={item?.required}
              />
            ) : null}
          </div>
        ))}
        <Button disabled={loading} className="w-full py-6">
          {loading && <Loader2Icon className="animate-spin" />}
          Generate Content
        </Button>
      </form>
    </div>
  );
};

export default FormSection;
