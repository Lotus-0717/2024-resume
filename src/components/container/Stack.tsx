import React from "react";

interface StackProps {
  children: React.ReactNode;
  className?: string;
}

function Stack({ children, className }: StackProps) {
  return <div className={`p-5 ${className || ""}`}>{children}</div>;
}

export default Stack;
