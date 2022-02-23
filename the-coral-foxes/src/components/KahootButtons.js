import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";

const KahootButtons = ({ alt1, alt2, alt3, alt4, onSubmitAnswer, correctAnswer }) => {
const [showAnswer, setShowAnswer] = useState(false);

function answer(value){
    console.log(value);
    setShowAnswer(true);

    if (value === correctAnswer){
        console.log("Riktig!");
        onSubmitAnswer(1000);
    }

    else{
        console.log("Feil!");
        onSubmitAnswer(0);
    };
};
    return(
    <div style={{ width: "500px", margin: "0 auto" }}>
        <Button 
            variant="contained" 
            onClick={() => answer(1)} 
            //disabled={showAnswer}
            color={(alt1 === correctAnswer && showAnswer) ? 'success' : 'primary'}>
            {alt1}
            
        </Button>
        <Button 
            variant="contained" 
            onClick={() => answer(2)}
            //disabled={showAnswer}
            color={(alt2 === correctAnswer && showAnswer) ? 'success' : 'primary'}>
            {alt2}
        </Button>
        <Button 
            variant="contained" 
            onClick={() => answer(3)}
            //disabled={showAnswer}
            color={(alt3 === correctAnswer && showAnswer) ? 'success' : 'primary'}>
            {alt3}
        </Button>
        <Button 
            variant="contained" 
            onClick={() => answer(4)}
            //disabled={showAnswer}
            color={(alt4 === correctAnswer && showAnswer) ? 'success' : 'primary'}>
            {alt4}
        </Button>
        </div>
);
}

export default KahootButtons;
