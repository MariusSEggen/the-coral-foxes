import React, { useEffect, useState } from "react";
import HighScoreList from "../components/HighScoreList";
import Button from "@mui/material/Button";

const Frontpage = ({onStartGame}) => {
    
    return (
        <div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
                <img src= "logo_example.png"/>
                <h2>{"Korall Rev"}</h2> 
            </div>
            
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
            }}>
                <div style={{
                display: "flex",
                flexDirection: "row",
                width: "500px",
                alignItems: "center",
                justifyContent: "center", 
                }}>
                    <Button variant="contained" onClick={onStartGame}>
                        New Game
                    </Button>
                </div>
                <div style={{
                    display: "flex",
                    width: "500px",
                    justifyContent:"center", 
                }}>
                    <HighScoreList />
                </div>
                

                
            </div>
            
        </div>
    )
  };
  
  export default Frontpage;