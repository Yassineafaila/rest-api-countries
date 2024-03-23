import React from "react";

const ContainerCountries = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto max-w-[1380px] grid grid-col-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 lg:gap-4 xl:gap-5">
      {children}
    </div>
  );
};

export default ContainerCountries;
