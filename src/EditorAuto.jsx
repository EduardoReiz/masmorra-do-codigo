import { useState } from "react";
import Editor from "@monaco-editor/react";

// Editor de código que começa pequeno e cresce (até um limite) conforme o aluno escreve,
// em vez de ocupar a tela inteira desde o começo.
export default function EditorAuto({ min = 180, max = 520, onMount, options, ...resto }) {
  const [altura, setAltura] = useState(min);
  return (
    <div style={{ height: altura }} className="editor-auto">
      <Editor
        height="100%"
        theme="vs-dark"
        options={{ fontSize: 14, minimap: { enabled: false }, scrollBeyondLastLine: false, padding: { top: 12, bottom: 12 }, automaticLayout: true, ...options }}
        onMount={(editor, monaco) => {
          const ajusta = () => setAltura(Math.min(Math.max(editor.getContentHeight() + 4, min), max));
          editor.onDidContentSizeChange(ajusta);
          ajusta();
          onMount?.(editor, monaco);
        }}
        {...resto}
      />
    </div>
  );
}
