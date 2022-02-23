import React from "react";
import ImageSlider from "../ImageSlider";
import DaysSlider from "../DaysSlider";

const Slider = ({ task, onSubmitAnswer }) => {
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <h2>{task.question}</h2>
      <ImageSlider oldPic={task.pic1} newPic={task.pic2} />
      <div style={{ marginTop: "800px" }}>
        <DaysSlider
          onSubmitAnswer={onSubmitAnswer}
          max={task.max}
          correctAnswer={task.answer}
        />
      </div>
    </div>
  );
};

export default Slider;
