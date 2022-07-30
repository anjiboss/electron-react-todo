import React, { Children } from "react";

interface LeftViewProps {
  children?: React.ReactNode;
}

const LeftView: React.FC<LeftViewProps> = ({ children }) => {
  return (
    <>
      <div className="left-view">{children}</div>
    </>
  );
};
export default LeftView;
