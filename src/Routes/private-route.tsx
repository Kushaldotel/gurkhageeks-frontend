import React, { Suspense } from "react";

const PrivateLayout: React.FC = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      {/* private page routes goes here... */}
    </Suspense>
  );
};

export default PrivateLayout;
