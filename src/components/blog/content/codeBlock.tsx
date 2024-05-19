import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = ({
  codeString,
  lang,
}: {
  codeString: string;
  lang: string;
}) => {
  return (
    <code className="mt-4">
      <SyntaxHighlighter language={lang} style={nord}>
        {codeString}
      </SyntaxHighlighter>
    </code>
  );
};

export default CodeBlock;
