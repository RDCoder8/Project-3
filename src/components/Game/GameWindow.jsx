import StartMenu from "./GameComponents/StartMenu/StartMenu";
import Battle from "./GameComponents/Battle/Battle";
import { useState } from "react";

export default function GameWindow({ user, setUser }) {
  const [gameState, setGameState] = useState({
    showStartMenu: true,
    showBattle: false,
    showEnd: false
  })

  const [player, setPlayer] = useState({})
  const [enemy, setEnemy] = useState({})
  
  function checkBattle() {
    if (!gameState.showStartMenu && !gameState.showBattle) {
        return "Ending"
    } else {
        return <Battle gameState={gameState} setGameState={setGameState}/>
    }
  }
  return (
    <main className="game-window">
      {gameState.showStartMenu ? <StartMenu user={user} setGameState={setGameState} gameState={gameState} /> : checkBattle()}
    </main>
  );
}
