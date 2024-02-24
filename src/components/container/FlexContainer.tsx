import React from "react";

interface FlexContainerProp {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

function FlexContainer({ children, className, onClick }: FlexContainerProp) {
  return (
    <div className={`flex ${className || ""}`} onClick={onClick}>
      {children}
    </div>
  );
}

export default FlexContainer;
