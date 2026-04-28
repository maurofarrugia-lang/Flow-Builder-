import React from "react";

export default function Toolbar({ input, setInput, generate, exportPDF }) {
  return (
    <div style={{ position: "absolute", top: 10, left: 10, width: 260, background: "#fff", border: "1px solid #ccc", padding: 10 }}>
      <textarea value={input} onChange={e => setInput(e.target.value)} style={{ width: "100%", height: 140 }} />
      <button onClick={generate}>Generate</button>
      <button onClick={exportPDF}>Export PDF</button>
    </div>
  );
}