import React, { useState, useRef } from "react";
import KahootButtons from "../KahootButtons";

const KahootGameMode = ({ task, onSubmitAnswer }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const correctAnswer = useRef(false);

  const selectAnswer = (answer) => {
    setShowAnswer(true);
    onSubmitAnswer();
    correctAnswer.current = answer === task.answer;
  };

  return (
    <div
      style={{
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignSelf: "center",
        justifySelf: "center",
        justifyContent: "center",
        alignContent: "center",
        maxWidth: "800px",
        textAlign: "center",
      }}
    >
      <h2>{task.question}</h2>
      <img src={task.pic} alt="something" />
      <p>
        {showAnswer &&
          `Svaret var ${correctAnswer.current ? "riktig" : "feil"}`}
      </p>
      <p>
        {showAnswer &&
          !correctAnswer.current &&
          `Riktig svar var ${task.answer}`}
      </p>
      <KahootButtons
        alt1={task.alt1}
        alt2={task.alt2}
        alt3={task.alt3}
        alt4={task.alt4}
        onSubmitAnswer={selectAnswer}
        correctAnswer={task.answer}
      />
    </div>
  );
};

export default KahootGameMode;
