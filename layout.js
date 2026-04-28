import React from "react";

export const nodeTypes = {
  start: ({ data }) => <div style={circle}>{data.label}</div>,
  end: ({ data }) => <div style={{ ...circle, background: "#eee" }}>{data.label}</div>,
  process: ({ data }) => <div style={box}>{data.label}</div>,
  decision: ({ data }) => (
    <div style={diamondOuter}>
      <div style={diamondInner}>{data.label}</div>
    </div>
  )
};

const box = { padding: 10, border: "1px solid #222", fontSize: 12 };
const circle = { width: 80, height: 80, borderRadius: "50%", border: "1px solid #222", display: "flex", alignItems: "center", justifyContent: "center" };
const diamondOuter = { width: 100, height: 100, transform: "rotate(45deg)", border: "1px solid #222", display: "flex", alignItems: "center", justifyContent: "center" };
const diamondInner = { transform: "rotate(-45deg)", textAlign: "center" };