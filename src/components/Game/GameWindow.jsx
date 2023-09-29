import StartMenu from "./GameComponents/StartMenu/StartMenu";
import Battle from "./GameComponents/Battle/Battle";
import EndingStage from "./GameComponents/EndingStage/EndingView";
import { useState } from "react";

export default function GameWindow({ user, setUser }) {
  const [gameState, setGameState] = useState({
    showStartMenu: true,
    showBattle: false,
    showEnd: false,
  });

  const [player, setPlayer] = useState(null);
  const [enemy, setEnemy] = useState(null);

  function checkBattle() {
    if (!gameState.showStartMenu && !gameState.showBattle) {
      return (
        <EndingStage
          gameState={gameState}
          setGameState={setGameState}
          player={player}
          enemy={enemy}
          user={user}
        />
      );
    } else {
      return (
        <Battle
          gameState={gameState}
          setGameState={setGameState}
          setPlayer={setPlayer}
          setEnemy={setEnemy}
          player={player}
          enemy={enemy}
          user={user}
        />
      );
    }
  }
  return (
    <main className="game-window">
      {gameState.showStartMenu ? (
        <StartMenu
          user={user}
          setGameState={setGameState}
          gameState={gameState}
          setPlayer={setPlayer}
        />
      ) : (
        checkBattle()
      )}
    </main>
  );
}
