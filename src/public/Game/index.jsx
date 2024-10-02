import React from "react";
import Heading from "./Heading";
import ContentGame from "./ContentGame";
import { CountProvider } from "../../context/countContext";
import AppearNumber from "./AppearNumber";

const Game = () => {
  return (
    <div className="space-y-5 w-full h-full">
      <CountProvider>
        <Heading />
        <ContentGame />
        <AppearNumber />
      </CountProvider>
    </div>
  );
};

export default Game;
