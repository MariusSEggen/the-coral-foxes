import React, { useEffect, useState } from "react";
import DaysSlider from "../components/DaysSlider";
import Button from "@mui/material/Button";
import KahootButtons from "../components/KahootButtons";

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
    pic: "/hei.png",
    question: "Hvilket alternativ?",
    alt1: "svar1",
    alt2: "svar2",
    alt3: "svar3",
    alt4: "svar4",
    answer: 1,
    gameMode: "kahoot",
  },
  {
    pic: "/hei.png",
    question: "Spørgesmål2",
    alt1: "feil",
    alt2: "riktig",
    alt3: "feil",
    alt4: "feil",
    answer: 2,
    gameMode: "kahoot",
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
    if (task.gameMode === "slider") {
      const difference = Math.abs(value - task.answer);
      let score = Math.round((1 - difference / task.max) * 1000);
      if (difference === 0) {
        setIsCorrectAnswer(true);
        console.log("correct answer!!!! ");
        score *= 2;
      }
    }
    if (task.gameMode === "kahoot") {
      if(value===task.answer){
        setIsCorrectAnswer(true);
        console.log("correct answer!!!! ");
        score=1000;
      }
      else{
        console.log("Feil :(");
        score=0;
      };
    };
    console.log(`Score: ${score}`);
    setTimeout(() => {
      setIndex(index + 1);
    }, 2000);
  };

  if (!task) return <div>No more questions</div>;

  if (task.gameMode === "kahoot") {
    console.log("KAHOOT!")
    return (
    <div>
      {
        <>
          <h2>{task.question}</h2>
          <img src={process.env.PUBLIC_URL + task.pic} alt="bilde" />
          <h3>{isCorrectAnswer && "Hurra helt riktig!"}</h3>
          <KahootButtons
          alt1={task.alt1}
          alt2={task.alt2}
          alt3={task.alt3}
          alt4={task.alt4}
          onSubmitAnswer={showAnswer}
          correctAnswer={task.answer}
          />
          
        </>
      }
    </div>
    );
  }

  if (task.gameMode === "slider"){
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
    }
};

export default Gamepage;
