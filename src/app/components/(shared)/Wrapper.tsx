"use client";
import { Button } from "@/components/ui/button";
import { Check, Clipboard } from "lucide-react";
import { FC, ReactNode, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Preview from "./Preview";
import YtVideo from "./YtVideo";
import Sidebar from "./Sidebar";

interface WrapperProps {
  title: string;
  description: string;
  component: ReactNode;
  code: string;
  embedId: string;
  imports: string;
  usage: string;
}

const Wrapper: FC<WrapperProps> = ({
  title,
  description,
  component,
  code,
  embedId,
  imports,
  usage,
}) => {
  const [activeTab, setActiveTab] = useState("preview");
  const [isCopiedCode, setIsCopiedCode] = useState(false);
  const [isCopiedImports, setIsCopiedImports] = useState(false);
  const [isCopiedUsage, setIsCopiedUsage] = useState(false);
  const [isCopiedNpm, setIsCopiedNpm] = useState(false);

  const handleCopyCode = () => {
    setIsCopiedCode(true); // Change the icon to tick mark
    setTimeout(() => {
      setIsCopiedCode(false); // Revert the icon after 2 seconds
    }, 2000);
  };

  const handleCopyImports = () => {
    setIsCopiedImports(true); // Change the icon to tick mark
    setTimeout(() => {
      setIsCopiedImports(false); // Revert the icon after 2 seconds
    }, 2000);
  };

  const handleCopyUsage = () => {
    setIsCopiedUsage(true); // Change the icon to tick mark
    setTimeout(() => {
      setIsCopiedUsage(false); // Revert the icon after 2 seconds
    }, 2000);
  };

  const handleCopyNpm = () => {
    setIsCopiedNpm(true); // Change the icon to tick mark
    setTimeout(() => {
      setIsCopiedNpm(false); // Revert the icon after 2 seconds
    }, 2000);
  };

  return (
    <div className="flex p-4 mt-3">
      {/* Sidebar */}

      <div>
        <Sidebar />
      </div>
      <div className="mx-auto sm:mx-10 flex-col items-start max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl">
        {/* Title and Description */}
        <h1 className="text-2xl font-bold mb-2">{title}</h1>
        <p className="mb-4 text-muted-foreground">{description}</p>

        {/* Tabs */}
        <div className="flex items-start space-x-3">
          <Button
            variant={"ghost"}
            className={`px-2 py-2 rounded-t ${
              activeTab === "preview"
                ? "text-gray-200 font-bold border-b-2 border-gray-200"
                : "text-muted-foreground"
            }`}
            onClick={() => setActiveTab("preview")}
          >
            Preview
          </Button>
          <Button
            variant={"ghost"}
            className={`px-2 py-2 rounded-t ${
              activeTab === "code"
                ? "text-gray-200 border-b-2 border-gray-200"
                : "text-muted-foreground"
            }`}
            onClick={() => setActiveTab("code")}
          >
            Code
          </Button>
          <Button
            variant={"ghost"}
            className={`px-2 py-2 rounded-t ${
              activeTab === "video"
                ? "text-gray-200 border-b-2 border-gray-200"
                : "text-muted-foreground"
            }`}
            onClick={() => setActiveTab("video")}
          >
            Video
          </Button>
        </div>
        <hr className="w-full border-b-0" />

        <div
          className={`flex justify-center items-center ${
            activeTab == "preview" ? "border" : ""
          } w-full rounded-xl mt-4 mb-4 min-h-96`}
        >
          {/* Preview Component */}
          {activeTab === "preview" && <Preview>{component}</Preview>}
          {activeTab === "code" && (
            <div className="relative w-full h-full rounded-xl">
              <button className="absolute flex flex-row top-2 right-2 p-2 border rounded-xl">
                <CopyToClipboard text={code} onCopy={handleCopyCode}>
                  {isCopiedCode ? (
                    <Check className="w-4 h-4 text-green-500" /> // Tick mark icon
                  ) : (
                    <Clipboard className="w-4 h-4" /> // Original clipboard icon
                  )}
                </CopyToClipboard>
              </button>
              <SyntaxHighlighter
                style={vscDarkPlus}
                wrapLines={true}
                wrapLongLines={true}
                showLineNumbers={false}
                showInlineLineNumbers={false}
                language="typescript"
                customStyle={{
                  width: "100%",
                  height: "384px",
                  lineHeight: "1.5",
                  fontSize: "1rem",
                  borderRadius: "5px",
                  margin: "0px",
                  overflowX: "hidden",
                }}
              >
                {code}
              </SyntaxHighlighter>
            </div>
          )}
          {/* Video Component */}
          {activeTab === "video" && (
            <div className="w-full h-full">
              <YtVideo embedId={embedId} />
            </div>
          )}
        </div>
        <div className="flex flex-col w-full">
          {/* Imports - npm command */}
          <h1 className="text-2xl font-bold mt-4 mb-2">Install</h1>
          <hr className="w-full mb-4" />
          <div className="relative w-full h-auto rounded-xl mb-4">
            <button className="absolute flex flex-row top-2 right-2 p-2 border rounded-xl">
              <CopyToClipboard
                text={"npm install compcrafter"}
                onCopy={handleCopyNpm}
              >
                {isCopiedNpm ? (
                  <Check className="w-4 h-4 text-green-500" /> // Tick mark icon
                ) : (
                  <Clipboard className="w-4 h-4" /> // Original clipboard icon
                )}
              </CopyToClipboard>
            </button>
            <SyntaxHighlighter
              style={vscDarkPlus}
              wrapLines={true}
              wrapLongLines={true}
              showLineNumbers={false}
              showInlineLineNumbers={false}
              language="bash"
              customStyle={{
                width: "100%",
                height: "100%",
                lineHeight: "1.5",
                fontSize: "1rem",
                borderRadius: "5px",
                margin: "0px",
                overflowX: "hidden",
              }}
            >
              {"npm install compcrafter"}
            </SyntaxHighlighter>
          </div>
          <h1 className="text-2xl font-bold mt-2 mb-2">Usage</h1>
          <hr className="w-full mb-4" />

          {/* Imports */}
          <div className="relative w-full h-auto rounded-xl mb-4">
            <button className="absolute flex flex-row top-2 right-2 p-2 border rounded-xl">
              <CopyToClipboard text={imports} onCopy={handleCopyImports}>
                {isCopiedImports ? (
                  <Check className="w-4 h-4 text-green-500" /> // Tick mark icon
                ) : (
                  <Clipboard className="w-4 h-4" /> // Original clipboard icon
                )}
              </CopyToClipboard>
            </button>
            <SyntaxHighlighter
              style={vscDarkPlus}
              wrapLines={true}
              wrapLongLines={true}
              showLineNumbers={false}
              showInlineLineNumbers={false}
              language="typescript"
              customStyle={{
                width: "100%",
                height: "100%",
                lineHeight: "1.5",
                fontSize: "1rem",
                borderRadius: "5px",
                margin: "0px",
                overflowX: "hidden",
              }}
            >
              {imports}
            </SyntaxHighlighter>
          </div>
          {/* Usage */}
          <div className="relative w-full h-auto rounded-xl mb-4">
            <button className="absolute flex flex-row top-2 right-2 p-2 border rounded-xl">
              <CopyToClipboard text={usage} onCopy={handleCopyUsage}>
                {isCopiedUsage ? (
                  <Check className="w-4 h-4 text-green-500" /> // Tick mark icon
                ) : (
                  <Clipboard className="w-4 h-4" /> // Original clipboard icon
                )}
              </CopyToClipboard>
            </button>
            <SyntaxHighlighter
              style={vscDarkPlus}
              wrapLines={true}
              wrapLongLines={true}
              showLineNumbers={false}
              showInlineLineNumbers={false}
              language="typescript"
              customStyle={{
                width: "100%",
                height: "100%",
                lineHeight: "1.5",
                fontSize: "1rem",
                borderRadius: "5px",
                margin: "0px",
                overflowX: "hidden",
              }}
            >
              {usage}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
