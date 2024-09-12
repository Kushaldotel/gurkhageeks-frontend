import React from "react";

const TextError = ({ children }: any) => {
  return <div className="text-red-500">{children}</div>;
};

export default React.memo(TextError);
