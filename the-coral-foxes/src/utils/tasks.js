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
];

export default tasks;
