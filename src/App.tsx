import { useEffect, useRef, useState } from "react";
import GameContainer from "./components/GameContainer";
import LogoScore from "./components/LogoScore";
import Result from "./components/Result";
import {
  Close,
  Lizard,
  Paper,
  Pentagon,
  Rock,
  RulesBonus,
  Scissors,
  Spock,
} from "./images";

export interface Sign {
  name: string;
  firstColor: string;
  secondColor: string;
}

function App() {
  const [selected, setSelected] = useState<Sign | undefined>();
  const [random, setRandom] = useState<Sign | undefined>();
  const [whoWin, setWhoWin] = useState<string | null>(null);
  const [score, setScore] = useState<number | undefined>(0);
  const [toggleRules, setToggleRules] = useState<boolean>(false);

  const signs = [
    { name: Lizard, firstColor: "#834fe3", secondColor: "#8c5de5" },
    { name: Paper, firstColor: "#4865f4", secondColor: "#5671f5" },
    { name: Rock, firstColor: "#dc2e4e", secondColor: "#dd405d" },
    { name: Scissors, firstColor: "#ec9e0e", secondColor: "#eca922" },
    { name: Spock, firstColor: "#40b9ce", secondColor: "#52bed1" },
  ];
  //Functions goes here....

  const decideWhoWin = (
    selectedSign: string | undefined,
    randomSign: string | undefined
  ) => {
    console.log("hello", selectedSign);
    switch (selectedSign) {
      case Lizard: {
        if (randomSign === Spock) {
          setWhoWin("win");
          setScore(score as number + 1);
        } else if (randomSign === Rock) {
          setWhoWin("lose");
          setScore(score as number - 1);
        } else if (randomSign === Scissors) {
          setWhoWin("lose");
          setScore(score as number - 1);
        } else if (randomSign === Paper) {
          setWhoWin("win");
          setScore(score as number + 1);
        } else {
          setWhoWin("draw");
        }
        break;
      }
      case Paper: {
        if (randomSign === Rock) {
          setWhoWin("win");
          setScore(score as number + 1);
        } else if (randomSign === Scissors) {
          setWhoWin("lose");
          setScore(score as number - 1);
        } else if (randomSign === Lizard) {
          setWhoWin("lose");
          setScore(score as number - 1);
        } else if (randomSign === Spock) {
          setWhoWin("win");
          setScore(score as number + 1);
        } else {
          setWhoWin("draw");
        }
        break;
      }
      case Rock: {
        if (randomSign === Lizard) {
          setWhoWin("win");
          setScore(score as number + 1);
        } else if (randomSign === Paper) {
          setWhoWin("lose");
          setScore(score as number - 1);
        } else if (randomSign === Spock) {
          setWhoWin("lose");
          setScore(score as number - 1);
        } else if (randomSign === Scissors) {
          setWhoWin("win");
          setScore(score as number + 1);
        } else {
          setWhoWin("draw");
        }
        break;
      }
      case Scissors: {
        if (randomSign === Paper) {
          setWhoWin("win");
          setScore(score as number + 1);
        } else if (randomSign === Spock) {
          setWhoWin("lose");
          setScore(score as number - 1);
        } else if (randomSign === Rock) {
          setWhoWin("lose");
          setScore(score as number - 1);
        } else if (randomSign === Lizard) {
          setWhoWin("win");
          setScore(score as number + 1);
        } else {
          setWhoWin("draw");
        }
        break;
      }
      case Spock: {
        if (randomSign === Scissors) {
          setWhoWin("win");
          setScore(score as number + 1);
        } else if (randomSign === Lizard) {
          setWhoWin("lose");
          setScore(score as number - 1);
        } else if (randomSign === Paper) {
          setWhoWin("lose");
          setScore(score as number - 1);
        } else if (randomSign === Rock) {
          setWhoWin("win");
          setScore(score as number + 1);
        } else {
          setWhoWin("draw");
        }
        break;
      }
    }
  };

  useEffect(() => {
    const scoreExit = localStorage.getItem("score")
    if (scoreExit) {
      setScore(JSON.parse(scoreExit));
    } else {
      localStorage.setItem("score", JSON.stringify(0));
    }
  }, []);
  useEffect(() => {
    decideWhoWin(selected?.name, random?.name);
    console.log("inside useEffect", whoWin);
  }, [selected]);

  useEffect(() => {
    localStorage.setItem("score", JSON.stringify(score));
  }, [score]);
  
  const handleSelectSign = (sign: Sign) => {
    setRandom(signs[Math.floor(Math.random() * signs.length)]);
    setSelected(sign);
  };
  const handleNewGame = () => {
    setSelected(undefined);
    setWhoWin(null);
  };
  const caculateScore = () => {
    console.log(whoWin);
  };

  console.log(score, "somethin");

  return (
    <div className="w-screen h-screen font-Robot flex flex-col items-center">
      <LogoScore score={score} />
      <GameContainer
        handleSelectSign={handleSelectSign}
        selected={selected}
        random={random}
        whoWin={whoWin}
      />
      <Result whoWin={whoWin} handleNewGame={handleNewGame} />
      <button
        className="w-[150px] mx-auto mt-10 bg-transparent border-2 border-white text-[#3b4363] text-xl font-bold font-Robot h-12 rounded-lg inline-block"
        onClick={() => setToggleRules(true)}
      >
        RULE
      </button>
      <div
        className={`w-screen h-screen flex flex-col justify-center items-center bg-white absolute top-0 z-50 ${
          toggleRules ? "block" : "invisible"
        }`}
      >
        <img src={RulesBonus} className="w-[350px] h-[350px]" />
        <img
          src={Close}
          className="absolute bottom-20"
          onClick={() => setToggleRules(false)}
        />
      </div>
    </div>
  );
}

export default App;
