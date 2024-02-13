import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

export default function Layout({ children }: any) {
  return (
    <div>
      <div>
        <Header />
      </div>
      {/* <Navbar /> */}
      <div className="inner_container mt-[12vh] min-h-[78vh] ">{children}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
