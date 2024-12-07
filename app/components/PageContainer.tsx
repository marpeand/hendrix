import React from "react";

interface PageContainerProps {
  children: React.ReactNode;
}

const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <section className="md:w-2/4 w-full mx-auto min-h-[calc(100vh-350px)]">
      {children}
    </section>
  );
};

export default PageContainer;
