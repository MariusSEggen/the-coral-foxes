import React, { useEffect, useState } from "react";
import FunFactGameMode from "../components/gameModes/FunFactGameMode";
import gameModes from "../utils/gameModes";
import tasks from "../utils/tasks";
import SliderGameMode from "../components/gameModes/SliderGameMode";
import EndScreen from "../components/EndScreen";
import KahootGameMode from "../components/gameModes/KahootGameMode";

const Gamepage = () => {
  const [index, setIndex] = useState(0);
  const [task, setTask] = useState(tasks[index]);

  useEffect(() => setTask(tasks[index]), [index]);

  const showAnswer = async () => setTimeout(nextTask, 2000);
  const nextTask = () => setIndex(index + 1);

  if (!task) return <EndScreen />;

  switch (task.gameMode) {
    case gameModes.funFact:
      return <FunFactGameMode funFact={task} onNextTask={nextTask} />;
    case gameModes.slider:
      return <SliderGameMode task={task} onSubmitAnswer={showAnswer} />;
    case gameModes.kahoot:
      return <KahootGameMode task={task} onSubmitAnswer={showAnswer} />;
    default:
      console.log(`could not find game mode ${task.gameMode}`);
      return <EndScreen />;
  }
};

export default Gamepage;
