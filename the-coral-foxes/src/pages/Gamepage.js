import React, { useEffect, useState } from "react";
import DaysSlider from "../components/DaysSlider";
import ImageSlider from "../components/ImageSlider";
import FunFact from "../components/FunFact";
import gameModes from "../utils/gameModes";
import tasks from "../utils/tasks";

const Gamepage = () => {
  const [index, setIndex] = useState(0);
  const [task, setTask] = useState(tasks[index]);

  useEffect(() => {
    if (index >= tasks.length) {
      console.log("no more tasks");
      setTask(null);
      return;
    }
    setTask(tasks[index]);
  }, [index]);

  const showAnswer = async (value) => {
    setTimeout(nextTask, 2000);
  };

  const nextTask = () => {
    setIndex(index + 1);
  };

  if (!task)
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "200px",
        }}
      >
        <h2>No more questions</h2>
      </div>
    );

  if (task.gameMode === gameModes.funFact) {
    return <FunFact funFact={task} onNextTask={nextTask} />;
  }

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
          onSubmitAnswer={showAnswer}
          max={task.max}
          correctAnswer={task.answer}
        />
      </div>
    </div>
  );
};

export default Gamepage;
