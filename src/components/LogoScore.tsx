import React from "react";
import { LogoBonus } from "../images";

interface Props {
  score: number | undefined;
}

const LogoScore = ({ score }: Props) => {
  return (
    <div className="w-[90%] mx-auto my-5 flex justify-between items-center border-2 border-[#606e85] rounded-md">
      <img src={LogoBonus} className="scale-50" />
      <div className="w-20 h-20 mr-5 flex flex-col justify-center items-center rounded-md bg-white">
        <span className="text-[#2a46c0] text-xs font-bold">SCORE</span>
        <span className="text-[#606e85] text-3xl font-extrabold">{score}</span>
      </div>
    </div>
  );
};

export default LogoScore;
