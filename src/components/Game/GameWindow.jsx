import StartMenu from "./GameComponents/StartMenu/StartMenu";
import Battle from "./GameComponents/Battle/Battle";
import EndingStage from "./GameComponents/EndingStage/EndingView";
import { useEffect, useState } from "react";
import music from "../../assets/tightcrewtomcardy.mp3"


export default function GameWindow({ user, setUser }) {
  const [gameState, setGameState] = useState({
    showStartMenu: true,
    showBattle: false,
    showEnd: false,
  });
  const [player, setPlayer] = useState(null);
  const [enemy, setEnemy] = useState(null);
  const [ending, setEnding] = useState("")
  //setting background images at different points
  const [background, setBackground] = useState("")

  const audio = new Audio(music);

  function play() {
      audio.loop = true;
      audio.play();
  }

  function pause() {
    audio.pause()
  }

  function checkBattle() {
    if (!gameState.showStartMenu && !gameState.showBattle) {
      return (
        <EndingStage
          gameState={gameState}
          setGameState={setGameState}
          player={player}
          enemy={enemy}
          user={user}
          ending={ending}
          background={background}
          setBackground={setBackground}
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
          setEnding={setEnding}
          background={background}
          setBackground={setBackground}
        />
      );
    }
  }

  return (
    <main className="game-window">
    <button className="music-button" onClick={play}>🎵</button>
    <button className="music-button" onClick={pause}>✖</button>
      {gameState.showStartMenu ? (
        <StartMenu
          user={user}
          setGameState={setGameState}
          gameState={gameState}
          setPlayer={setPlayer}
          setBackground={setBackground}
        />
      ) : (
        checkBattle()
      )}
      
    </main>
  );
}
