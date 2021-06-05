import React from "react";

export default function MovieContainer(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        color: "white",
        backgroundColor: "#3d4f71",
        justifyContent: "center",
        alignItems: "center",
        width: "300px",
        margin: "10px 20px 10px 20px",
        paddingBottom: "20px",
      }}
    >
      <img
        src={
          props.poster === "N/A" ? require("./placeholder.png").default : props.poster
        }
        alt={props.name}
      />
      <h1 style={{ fontSize: "20px", padding: "0px 5px", textAlign: "center" }}>
        {props.name}
      </h1>
      <div>
        <span style={{ fontWeight: "600" }}>Year : </span>
        {props.year}
      </div>
      <div>
        <span style={{ fontWeight: "600" }}>Type : </span>
        {props.type}
      </div>
    </div>
  );
}
