import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import "./code-editor.css";

const CodeEditor: React.FC = () => {
  const [code, setCode] = useState(`
  import React from 'react';
  import ReactDOM from 'react-dom';
  
  function App() {
    return <h2>Hello, World!</h2>;
  }
  
  ReactDOM.render(<App />, document.getElementById('root'));
`);

  return (
    <div className="rgx-code-editor-container">
      <div className="rgx-code-editor-editor">
        <Editor
          height="100%"
          language="javascript"
          value={code}
          theme="vs-dark"
          onChange={(value) => setCode(value || "")}
        />
      </div>
    </div>
  );
};
export default CodeEditor;
