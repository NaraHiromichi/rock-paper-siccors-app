import React from "react";
import { Sign } from "../App";

interface Props {
  whoWin: string | null;
  handleNewGame: () => void;
}

const Result: React.FC<Props> = ({ whoWin, handleNewGame }) => {
  if (whoWin === "win") {
    return (
      <div className="w-[85%] mx-auto flex flex-col justify-center items-center">
        <h1 className="text-white text-center text-5xl font-bold font-Robot">
          YOU WIN
        </h1>
        <button
          onClick={handleNewGame}
          className="w-[70%] mt-5 bg-white text-[#3b4363] text-xl font-bold font-Robot h-12 rounded-lg inline-block"
        >
          PLAY AGAIN
        </button>
      </div>
    );
  }
  if (whoWin === "lose") {
    return (
      <div className="w-[85%] mx-auto flex flex-col justify-center items-center">
        <h1 className="text-white text-center text-5xl font-bold font-Robot">
          YOU LOSE
        </h1>
        <button
          onClick={handleNewGame}
          className="w-[70%] mt-5 bg-white text-[#3b4363] text-xl font-bold font-Robot h-12 rounded-lg inline-block"
        >
          PLAY AGAIN
        </button>
      </div>
    );
  }
  if (whoWin === "draw") {
    return (
      <div className="w-[85%] mx-auto flex flex-col justify-center items-center">
        <h1 className="text-white text-center text-5xl font-bold font-Robot">
          DRAW
        </h1>
        <button
          onClick={handleNewGame}
          className="w-[70%] mt-5 bg-white text-[#3b4363] text-xl font-bold font-Robot h-12 rounded-lg inline-block"
        >
          PLAY AGAIN
        </button>
      </div>
    );
  }
  return (
    <div className="w-[85%] mx-auto flex flex-col justify-center items-center invisible">
      <h1 className="text-white text-center text-5xl font-bold font-Robot">
        DRAW
      </h1>
      <button
        onClick={handleNewGame}
        className="w-[70%] mt-5 bg-white text-[#3b4363] text-xl font-bold font-Robot h-12 rounded-lg inline-block"
      >
        PLAY AGAIN
      </button>
    </div>
  );
};

export default Result;
