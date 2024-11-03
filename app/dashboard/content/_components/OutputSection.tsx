import "@toast-ui/editor/dist/toastui-editor.css";

import React, { useEffect, useRef, useState } from "react";
import { Editor } from "@toast-ui/react-editor";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

interface PROPS {
  aiOutput: string;
}

const OutputSection = ({ aiOutput }: PROPS) => {
  const editorRef: any = useRef();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput);
  }, [aiOutput]);

  const handleCopy = () => {
    navigator.clipboard.writeText(aiOutput);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <div className="bg-white shadow-lg border rounded-lg ">
      <div className="flex justify-between items-center p-5">
        <h2 className="font-medium text-lg">Your Result</h2>
        <Button onClick={handleCopy} className="flex gap-2 ">
          <Copy className="h-4 w-4" />
          {copied ? "Copied!" : "Copy"}
        </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Your Result Will Appear Here"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        height="600px"
        onChange={() => console.log(editorRef.current.getInstance())}
      />
    </div>
  );
};

export default OutputSection;
