import React from "react";
import BattleStage from "../BattleStage/BattleStage";
import IntroSelection from "../IntroSelection/IntroSelection";
import { useState } from "react";
import MessageBox from "../JokeBattle/MessageBox";

export default function Battle({
  setGameState,
  gameState,
  player,
  enemy,
  setPlayer,
  setEnemy,
  user,
}) {
  const [playerHealth, setPlayerHealth] = useState(1)
  const [enemyHealth, setEnemyHealth] = useState(1)
  return (
    <div className="battle-screen flex-ctr-ctr flex-col">
      {player ? (
        <BattleStage setGameState={setGameState} gameState={gameState} player={player} playerHealth={playerHealth} enemy={enemy} enemyHealth={enemyHealth} />
      ) : (
        <IntroSelection
          user={user}
          setPlayer={setPlayer}
          setEnemy={setEnemy}
        />
      )}
      {player ? <MessageBox setGameState={setGameState} gameState={gameState} player={player} playerHealth={playerHealth} enemy={enemy} setPlayerHealth={setPlayerHealth} /> : <section className="message-box"><p>Pick a crew</p></section>}
    </div>
  );
}
