import Common from "./Common";
import React from "react";
import web from "../src/images/techd.png";

export default function About() {
  return (
    <>
      <Common
        name="Hi! I am"
        visit="./Education"
        imgsrc={web}
        btname="My Educational Background"
      />
    </>
  );
}
