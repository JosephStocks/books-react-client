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
        margin: 0,
        padding: 0,
      }}
    >
      <Header />
      <div style={{ flex: 1, margin: 0, padding: 0 }}>{props.children}</div>
      <Footer />
    </div>
  );
}
