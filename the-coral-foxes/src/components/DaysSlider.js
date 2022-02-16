import React, { useEffect, useState } from "react";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";

const DaysSlider = ({ max, onSubmitAnswer, correctAnswer }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [value, setValue] = useState(0);

  const onSubmit = () => {
    setShowAnswer(true);
    onSubmitAnswer(value);
  };

  useEffect(() => {
    setShowAnswer(false);
    setValue(0);
  }, [correctAnswer]);

  return (
    <div style={{ width: "500px", margin: "0 auto" }}>
      <Slider
        aria-label="Temp"
        defaultValue={value}
        min={0}
        max={max}
        onChange={(_, newValue) => setValue(newValue)}
        value={value}
        valueLabelDisplay="on"
        disabled={showAnswer}
        marks={
          showAnswer && [
            {
              value: correctAnswer,
              label: correctAnswer.toString() + " dager",
            },
          ]
        }
      />
      <Button variant="contained" onClick={onSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default DaysSlider;
