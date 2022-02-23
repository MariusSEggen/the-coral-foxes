import gameModes from "./gameModes";

const tasks = [
  {
    gameMode: gameModes.slider,
    pic1: "/old2.png",
    pic2: "/new2.png",
    question: "Hvor mange dager er det mellom disse bildene?",
    answer: 200,
    min: 0,
    max: 500,
  },
  {
    gameMode: gameModes.funFact,
    pic: "/old2.png",
    fact: "Dette bildet er fra nordsiden av Great Barrier Reef. I løpet av 2016 døde 40% av korallene i dette området! ",
  },
  {
    gameMode: "kahoot",
    pic: "/new.png",
    question: "Hvilket alternativ?",
    alt1: "svar1",
    alt2: "svar2",
    alt3: "svar3",
    alt4: "svar4",
    answer: 1,
  },
];

export default tasks;
