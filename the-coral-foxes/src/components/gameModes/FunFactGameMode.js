import { Button } from "@mui/material";
import React from "react";

const FunFact = ({ funFact, onNextTask }) => (
  <div
    style={{
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      alignSelf: "center",
      justifySelf: "center",
      justifyContent: "center",
      alignContent: "center",
      maxWidth: "800px",
      textAlign: "center",
    }}
  >
    <h2>{funFact.title || "Did you know?"}</h2>
    <img src={funFact.pic} alt="funfact" />
    <p>{funFact.fact}</p>
    <Button variant="contained" onClick={onNextTask}>
      Neste
    </Button>
  </div>
);

export default FunFact;
