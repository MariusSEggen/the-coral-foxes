import React from "react";
import Button from "@mui/material/Button";

const EndScreen = ({onEndGame}) => {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "200px",
      }}
    >
      <h2>No more questions</h2>
      <div>
                    <Button variant="contained" onClick={onEndGame}>
                        Front Page
                    </Button>
      </div>
    </div>
  );
};

export default EndScreen;
