import React from "react";

interface FlexContainerProp {
  children: React.ReactNode;
  className?: string;
}

function FlexContainer({ children, className }: FlexContainerProp) {
  return <div className={`flex ${className || ""}`}>{children}</div>;
}

export default FlexContainer;
