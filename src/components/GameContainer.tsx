import React, { useRef } from "react";
import { Sign } from "../App";
import { Lizard, Paper, Pentagon, Rock, Scissors, Spock } from "../images";

interface Props {
  handleSelectSign: (sign: Sign) => void;
  selected: Sign | undefined;
  random: Sign | undefined;
  whoWin: string | null;
}

const GameContainer: React.FC<Props> = ({
  handleSelectSign,
  selected,
  random,
  whoWin,
}) => {
  if (selected) {
    return (
      <div className="w-[90%] max-w-[400px] h-[240px] mx-auto mt-40 flex justify-between items-center mb-10">
        <div className="flex flex-col justify-center items-center relative">
          <div
            className={`w-[130px] h-[130px] rounded-full bg-gradient-to-r from-[${selected.firstColor}] to-[${selected.secondColor}] flex justify-center items-center`}
          >
            <div
              className={`absolute top-[38%] -translate-y-[50%] w-[260px] h-[260px] flex justify-center items-center rounded-full bg-[#223555] -z-50 ${
                whoWin === "win" ? "block" : "invisible"
              }`}
            >
              <div className="bg-[#283957] w-[70%] h-[70%] rounded-full flex items-center justify-center -z-50">
                <div className="bg-[#2b3f5c] w-[60%] h-[60%] rounded-full -z-40"></div>
              </div>
            </div>
            <div className="bg-white min-w-[78%] min-h-[78%] max-w-[78%] max-h-[78%] rounded-full flex items-center justify-center z-50">
              <img src={selected.name} className="max-w-[45px] max-h-[85px]" />
            </div>
          </div>
          <span className="mt-5 text-xl text-white font-bold font-Robot z-50">
            YOU PICKED
          </span>
        </div>
        {random ? (
          <div className="flex flex-col justify-center items-center relative">
            <div
              className={`w-[130px] h-[130px] rounded-full bg-gradient-to-r from-[${random.firstColor}] to-[${random.secondColor}] flex justify-center items-center`}
            >
              <div
                className={`absolute top-[38%] -translate-y-[50%] w-[260px] h-[260px] flex justify-center items-center rounded-full bg-[#223555] -z-50 ${
                  whoWin === "lose" ? "block" : "invisible"
                }`}
              >
                <div className="bg-[#283957] w-[70%] h-[70%] rounded-full flex items-center justify-center -z-50">
                  <div className="bg-[#2b3f5c] w-[60%] h-[60%] rounded-full -z-40"></div>
                </div>
              </div>
              <div className="bg-white min-w-[78%] min-h-[78%] max-w-[78%] max-h-[78%] rounded-full flex items-center justify-center z-50">
                <img
                  src={random.name}
                  className="max-w-[45px] max-h-[85px]"
                />
              </div>
            </div>
            <span className="mt-5 text-xl text-white font-bold font-Robot z-50">
              YOU PICKED
            </span>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center">
            <div
              className={`w-[130px] h-[130px] bg-[#1a2946] rounded-full flex justify-center items-center`}
            >
              <div className="min-w-[78%] min-h-[78%] max-w-[78%] max-h-[78%] rounded-full flex items-center justify-center">
                <img
                  src={Lizard}
                  className="max-w-[45px] max-h-[85px] invisible"
                />
              </div>
            </div>
            <span className="mt-5 text-xl text-white font-bold font-Robot invisible">
              THE HOUSE PICKED
            </span>
          </div>
        )}
      </div>
    );
  }
  return (
    <div className="w-[90%] max-w-[250px] h-[240px] mx-auto mt-40 mb-0 relative">
      <img src={Pentagon} className="min-w-full h-full mx-auto my-auto z-0" />
      <div
        className="w-[100px] h-[100px] rounded-full bg-gradient-to-r from-[#ec9e0e] to-[#eca922] flex justify-center items-center absolute -top-[60px] left-[50%] -translate-x-[50%]"
        onClick={() =>
          handleSelectSign({
            name: Scissors,
            firstColor: "#ec9e0e",
            secondColor: "#eca922",
          })
        }
      >
        <div className="bg-white min-w-[78%] min-h-[78%] max-w-[78%] max-h-[78%] rounded-full flex items-center justify-center">
          <img src={Scissors} className="max-w-[35px] max-h-[80px]" />
        </div>
      </div>
      <div
        className="w-[100px] h-[100px] rounded-full bg-gradient-to-r from-[#4865f4] to-[#5671f5] flex justify-center items-center absolute -right-[40px] top-[50%] -translate-y-[65%]"
        onClick={() =>
          handleSelectSign({
            name: Paper,
            firstColor: "#4865f4",
            secondColor: "#5671f5",
          })
        }
      >
        <div className="bg-white min-w-[78%] min-h-[78%] max-w-[78%] max-h-[78%] rounded-full flex items-center justify-center">
          <img src={Paper} className="max-w-[35px] max-h-[80px]" />
        </div>
      </div>
      <div
        className="w-[100px] h-[100px] rounded-full bg-gradient-to-r from-[#dc2e4e] to-[#dd405d] flex justify-center items-center absolute right-[10px] -bottom-[60px]"
        onClick={() =>
          handleSelectSign({
            name: Rock,
            firstColor: "#dc2e4e",
            secondColor: "#dd405d",
          })
        }
      >
        <div className="bg-white min-w-[78%] min-h-[78%] max-w-[78%] max-h-[78%] rounded-full flex items-center justify-center">
          <img src={Rock} className="max-w-[35px] max-h-[80px]" />
        </div>
      </div>
      <div
        className="w-[100px] h-[100px] rounded-full bg-gradient-to-r from-[#834fe3] to-[#8c5de5] flex justify-center items-center absolute left-[10px] -bottom-[60px]"
        onClick={() =>
          handleSelectSign({
            name: Lizard,
            firstColor: "#834fe3",
            secondColor: "#8c5de5",
          })
        }
      >
        <div className="bg-white min-w-[78%] min-h-[78%] max-w-[78%] max-h-[78%] rounded-full flex items-center justify-center">
          <img src={Lizard} className="max-w-[35px] max-h-[80px]" />
        </div>
      </div>
      <div
        className="w-[100px] h-[100px] rounded-full bg-gradient-to-r from-[#40b9ce] to-[#52bed1] flex justify-center items-center absolute -left-[40px] top-[50%] -translate-y-[65%]"
        onClick={() =>
          handleSelectSign({
            name: Spock,
            firstColor: "#40b9ce",
            secondColor: "#52bed1",
          })
        }
      >
        <div className="bg-white min-w-[78%] min-h-[78%] max-w-[78%] max-h-[78%] rounded-full flex items-center justify-center">
          <img src={Spock} className="max-w-[35px] max-h-[80px]" />
        </div>
      </div>
    </div>
  );
};

export default GameContainer;
