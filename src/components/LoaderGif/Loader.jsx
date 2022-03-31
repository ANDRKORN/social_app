import React from "react";
const Loader = (props) => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "grey",
        zIndex: 1,
        display: props.show ? "block" : "none",
      }}
    >
      <img
        style={{
          width: "100%",
          height: "100%",
          margin: "0 auto",          
        }}
        alt="loader"
        src={
          "https://pa1.narvii.com/7626/db294049eb37a27aaa65249cf205d7783beaef41r1-600-450_hq.gif"
        }
      />
    </div>
  );
};
export default Loader;
