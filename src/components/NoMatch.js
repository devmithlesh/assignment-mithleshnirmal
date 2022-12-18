import React from "react";

function NoMatch() {
  return (
    <div
      style={{
        background: "#000",
        color: "#fff",
        width: "100%",
        height: "100vh",
        position: "absolute",
        top: "0",
      }}
    >
      <h1 style={{ padding: "20px" }}>Sorry! No Match URL</h1>
      <p style={{ padding: "20px" }}>Go Back</p>
    </div>
  );
}

export default NoMatch;
