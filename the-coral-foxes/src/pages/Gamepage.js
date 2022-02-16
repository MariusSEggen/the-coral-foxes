import React, { useEffect, useState } from "react";
import DaysSlider from "../components/DaysSlider";

const tasks = [
  {
    pic: "/satelitt.png",
    question: "Hvor mange dager er det mellom disse?",
    answer: 20,
    max: 150,
    gameMode: "slider",
  },
  {
    pic: "/hei.png",
    question: "Hei?",
    answer: 1500,
    max: 5000,
    gameMode: "slider",
  },
  {
    pic1: "/hei.png",
    pic2: "/hallo.png",
    question: "Hei?",
    answer: 1,
    gameMode: "pick-image",
  },
];

const gameModes = ["slider", "kahoot", "pick-image"];

const Gamepage = () => {
  const [index, setIndex] = useState(0);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [task, setTask] = useState(tasks[index]);

  useEffect(() => {
    console.log("askdjfh");
    if (index >= tasks.length) {
      console.log("no more tasks");
      return;
    }
    setTask(tasks[index]);
  }, [index]);

  const showAnswer = (value) => {
    const difference = Math.abs(value - task.answer);
    let score = Math.round((1 - difference / task.max) * 1000);
    if (difference === 0) {
      setIsCorrectAnswer(true);
      console.log("correct answer!!!! ");
      score *= 2;
    }
    console.log(`Score: ${score}`);
    setTimeout(() => {
      setIndex(index + 1);
    }, 2000);
  };

  if (!task) return <div>No more questions</div>;

  if (task.gameMode === "kahoot") {
    return <div>heahsfdjkh</div>;
  }

  return (
    <div>
      {
        <>
          <h2>{task.question}</h2>
          <img src={process.env.PUBLIC_URL + task.pic} alt="bilde" />
          <h3>{isCorrectAnswer && "Hurra helt riktig!"}</h3>
          <DaysSlider
            onSubmitAnswer={showAnswer}
            max={task.max}
            correctAnswer={task.answer}
          />
        </>
      }
    </div>
  );
};

export default Gamepage;
