import React from "react";

const MainContent = ({ children }) => {
  return <div className="overflow-y-auto p-4">{children}</div>;
};

export default MainContent;
