import gameModes from "./gameModes";

const tasks = [
  {
    gameMode: gameModes.kahoot,
    pic: "/Vulcano_RGB.jpg",
    question: "Hvor er vulkanen?",
    alt1: "svar1",
    alt2: "svar2",
    alt3: "svar3",
    alt4: "svar4",
    answer: 1,
  },
  {
    gameMode: gameModes.funFact,
    pic: "/Vulcano_SWIR.jpg",
    fact: "Bla bla bla ",
  },
  {
    gameMode: gameModes.kahoot,
    pic: "/Vulcano_SWIR.jpg",
    question: "Hvilket alternativ?",
    alt1: "svar1",
    alt2: "svar2",
    alt3: "svar3",
    alt4: "svar4",
    answer: 1,
  },
  {
    gameMode: gameModes.funFact,
    pic: "/Vulcano_SWIR.jpg",
    fact: "Bla bla bla ",
  },
  {
    gameMode: gameModes.kahoot,
    pic: "/Fire_Timelapse.gif",
    question: "Hvor lang tid tok det branden å spre seg i bildet?",
    alt1: "10 dager",
    alt2: "50 dager",
    alt3: "200 dager",
    alt4: "1000 dager",
    answer: 2,
  },
  {
    gameMode: gameModes.kahoot,
    pic: "/Dam_Combined.png",
    question: "Hva er det disse bildene viser?",
    alt1: "Oversvømmelse",
    alt2: "Ulike lysbølge lengder",
    alt3: "Nedskoging",
    alt4: "Oppdemming",
    answer: 4,
  },
  {
    gameMode: gameModes.slider,
    pic1: "/Lizard_Island_2021-11-22.jpg",
    pic2: "/Lizard_Island_2022-01-01.jpg",
    question: "Hvor mange dager er det mellom disse bildene?",
    answer: 40,
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
