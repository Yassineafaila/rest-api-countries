import React from "react";

const ContainerCountries = ({ children }: { children: React.ReactNode }) => {
    return <div className="container mx-auto max-w-[1380px]">
      {children}
  </div>;
};

export default ContainerCountries;
