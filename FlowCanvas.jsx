import React from "react";
import ReactFlow, { Controls, Background } from "reactflow";
import "reactflow/dist/style.css";

export default function FlowCanvas({ nodes, edges, nodeTypes }) {
  return (
    <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} fitView>
      <Controls />
      <Background gap={20} />
    </ReactFlow>
  );
}