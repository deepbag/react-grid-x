/* eslint-disable @typescript-eslint/no-redeclare */
import React, { useEffect, useRef, useState } from "react";
import { CodeBlock, dracula } from "react-code-blocks";
import "./code-box.css";
import { faL } from "@fortawesome/free-solid-svg-icons";

export interface CodeBox {
  [tab: string]: {
    code: string;
    language: string;
    lineNumber?: boolean;
  };
}

interface CodeBoxProps {
  commands: CodeBox;
  limitHeight?: boolean;
}

const CodeBox: React.FC<CodeBoxProps> = ({ commands, limitHeight = false }) => {
  const [activeTab, setActiveTab] = useState<string | undefined>(undefined);
  const copyRef = useRef<HTMLSpanElement>(null);

  const onTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const onCopyClick = (command: string) => {
    navigator.clipboard
      .writeText(command)
      .then(() => {
        if (copyRef.current) {
          copyRef.current.innerText = "Copied!";
          setTimeout(() => {
            if (copyRef.current) {
              // Check if ref is still valid
              copyRef.current.innerText = "Copy";
            }
          }, 2000);
        }
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const activeCommand = commands[activeTab as string];

  useEffect(() => {
    // Set initial tab after component mounts, ensuring commands is available
    if (Object.keys(commands).length > 0) {
      setActiveTab(Object.keys(commands)[0]); // Get the first key
    }
  }, [commands]); // Re-run effect if commands changes

  return (
    <div className="rgx-code-box-install-commands">
      <div className="rgx-code-box-tabs">
        {Object.keys(commands).map((tab) => (
          <button
            key={tab}
            className={`rgx-code-box-tab ${
              activeTab === tab ? "rgx-code-box-active" : ""
            }`}
            onClick={() => onTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div>
        {activeCommand && (
          <div className="rgx-code-box-command">
            <CodeBlock
              language={activeCommand.language}
              text={activeCommand.code}
              showLineNumbers={activeCommand?.lineNumber}
              theme={dracula}
              customStyle={{
                width: "100%",
                backgroundColor: "#282828",
                ...(limitHeight && {
                  height: "300px",
                }),
              }}
            />
            <button
              className="rgx-code-box-copy-button"
              onClick={() => onCopyClick(activeCommand.code)}
            >
              <span ref={copyRef}>Copy</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeBox;
