"use client";
import CopyToClipboard from "react-copy-to-clipboard";
import Sidebar from "../components/(shared)/Sidebar";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Check, Clipboard } from "lucide-react";
import { useState } from "react";

export default function Page() {
  const [isCopiedNpm, setIsCopiedNpm] = useState(false);

  const handleCopyNpm = () => {
    setIsCopiedNpm(true); // Change the icon to tick mark
    setTimeout(() => {
      setIsCopiedNpm(false); // Revert the icon after 2 seconds
    }, 2000);
  };

  return (
    <div className="container flex justify-center items-center w-full mx-auto">
      <div className="flex w-full py-4 mt-16">
        {/* Sidebar */}
        <div>
          <Sidebar />
        </div>
        <div className="mx-auto sm:mx-10 flex-col items-start max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl">
          {/* Title and Description */}
          <h1 className="text-2xl font-bold mb-2">Installation</h1>
          <p className="mb-4 text-muted-foreground">
            How to install dependencies and structure your app.
          </p>
          <div className="flex flex-col items-start mt-8 gap-7 text-gray-100">
            <h2 className="text-md font-medium">
              CompCrafter is built with React and TypeScript, styled using
              Tailwind CSS. Before you start, ensure you have these dependencies
              in your project.
            </h2>
            <h2 className="text-md font-medium">
              To get started with CompCrafter, you can easily copy the component
              code or install it via npm. <br />
              Run the following command in your terminal:
            </h2>
            <div className="relative w-full h-auto rounded-xl">
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
            <h2 className="text-md font-medium">
              Once installed, you can import the components you need directly
              into your project or copy the code snippets from our documentation
              and customize them to fit your requirements.
            </h2>
            <h2 className="text-md font-medium">
              Enjoy building and learning!
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
