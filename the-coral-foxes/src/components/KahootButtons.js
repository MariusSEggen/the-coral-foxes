import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";

const KahootButtons = ({ alt1, alt2, alt3, alt4, correctAnswer }) => {
const [showAnswer, setShowAnswer] = useState(false);

function answer(value){
    console.log(value)
    setShowAnswer(true);

    if (value === correctAnswer){
        console.log("Riktig!")

    }
}
    return(
    <div style={{ width: "500px", margin: "0 auto" }}>
        <Button 
            variant="contained" 
            onClick={() => answer(1)} 
            disabled={showAnswer}>
            {alt1}
            
        </Button>
        <Button 
            variant="contained" 
            onClick={() => answer(2)}
            disabled={showAnswer}>
            {alt2}
        </Button>
        <Button 
            variant="contained" 
            onClick={() => answer(3)}
            disabled={showAnswer}>
            {alt3}
        </Button>
        <Button 
            variant="contained" 
            onClick={() => answer(4)}
            disabled={showAnswer}>
            {alt4}
        </Button>
        </div>
);
}

export default KahootButtons;
