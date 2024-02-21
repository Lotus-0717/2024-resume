import React from "react";

function Stack({ children }: { children: React.ReactNode }) {
  return <div className=" p-5">{children}</div>;
}

export default Stack;