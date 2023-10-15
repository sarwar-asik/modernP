import Header from "@/components/ui/Header";
import Navbar from "@/components/ui/Navbar";
import React from "react";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header/>
      <Navbar></Navbar>
      {children}
    </div>
  );
};

export default PublicLayout;
