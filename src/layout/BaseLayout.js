import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function BaseLayout(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <div style={{ flex: 1 }}>{props.children}</div>
      <Footer />
    </div>
  );
}
