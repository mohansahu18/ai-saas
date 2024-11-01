import "@toast-ui/editor/dist/toastui-editor.css";

import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Editor } from "@toast-ui/react-editor";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
const OutputSection = () => {
  const editorRef: any = useRef();
  return (
    <div className="bg-white shadow-lg border rounded-lg ">
      <div className="flex justify-between items-center p-5">
        <h2 className="font-medium text-lg">Your Result</h2>
        <Button className="flex gap-2 ">
          <Copy className="h-4 w-4" /> copy
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

OutputSection.propTypes = {};

export default OutputSection;
