import React from "react";

export default function Legend() {
  return (
    <div style={{ position: "absolute", bottom: 10, left: 10, fontSize: 12 }}>
      <div>● Start / End</div>
      <div>■ Process</div>
      <div>◆ Decision</div>
    </div>
  );
}