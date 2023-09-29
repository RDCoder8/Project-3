import React from "react";
import BattleStage from "../BattleStage/BattleStage";
import IntroSelection from "../IntroSelection/IntroSelection";
import { useState } from "react";

export default function Battle({
  setGameState,
  gameState,
  player,
  enemy,
  setPlayer,
  setEnemy,
  user,
}) {
  const [message, setMessage] = useState("");
  return (
    <div className="battle-screen flex-ctr-ctr flex-col">
      {player ? (
        <BattleStage setGameState={setGameState} gameState={gameState} />
      ) : (
        <IntroSelection
          user={user}
          setPlayer={setPlayer}
          setMessage={setMessage}
        />
      )}
      <section className="message-box">{message}</section>
    </div>
  );
}
