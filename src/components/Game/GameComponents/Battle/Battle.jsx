import React from "react";
import BattleStage from "../BattleStage/BattleStage";
import IntroSelection from "../IntroSelection/IntroSelection";
import { useState } from "react";
import MessageBox from "../JokeBattle/MessageBox";
import { fetchDadJoke } from "../../../../utilities/third-party-api";
import { fetchInsult } from "../../../../utilities/third-party-api";
import { fetchInspiration } from "../../../../utilities/third-party-api";

export default function Battle({
  setGameState,
  gameState,
  player,
  enemy,
  setPlayer,
  setEnemy,
  setEnding,
  user,
}) {
  const [playerHealth, setPlayerHealth] = useState(30);
  const [enemyHealth, setEnemyHealth] = useState(30);
  const [quote, setQuote] = useState("Pick a team!");
  const [messageArray, setMessageArray] = useState([]);
  const [toggleButtons, setToggleButtons] = useState(true);
  const [hit, setHit] = useState(false)
  const [inspirationCounter, setInspirationCounter] = useState(0)
  const [jokeCounter, setJokeCounter] = useState(0)

function checkLife() {
  if (playerHealth <= 0 || enemyHealth <= 0) {
    gameOver()
    setMessageArray([])
    setEnding("Fighting")
  }
  if (inspirationCounter > 4) {
    gameOver()
    setEnding("Inspired")
  }
  if (jokeCounter > 4) {
    gameOver()
    setEnding("Funny")
  }
}

function gameOver() {
  setGameState({ ...gameState, showBattle: false })
}

  function handleStoryClick() {
    if (messageArray[0]) {
      setQuote(messageArray.shift());
      checkLife()
    } else {
      setToggleButtons(true);
      if (gameState.showBattle) {
      setQuote("What to do next?")
      }
      setHit(false)
    }
    if (messageArray.length === 2 && hit) {
        setEnemyHealth(enemyHealth - 5)
      }
    if (messageArray.length === 1) {
      setPlayerHealth(playerHealth - 5)
    }
  }

  function jokeButtonClick() {
    setToggleButtons(false);
    fetchDadJoke(setQuote);
    setJokeCounter(jokeCounter + 1)
    messageArray.push(
      "The Tight Crew waits to see if the monster laughs",
      "'You're the only joke here'",
      "The Tight Crew re-thinks their career as stand-up comedians"
    );
  }

  function insultButtonClick() {
    setToggleButtons(false);
    setHit(true)
    fetchInsult(setQuote);
    messageArray.push(
      "The Tight Crew damaged the beast's ego!",
      "'Is that the best you've got?'",
      "The code dragon melts their minds with errors"
    );
  }

  function inspirationButtonClick() {
    setToggleButtons(false);
    fetchInspiration(setQuote);
    setInspirationCounter(inspirationCounter + 1)
    messageArray.push(
      "The Tight Crew feels inspired",
      "'Why are you trying to get inspired?'",
      "The beast lashes out at the Tight Crew"
    );
  }

  function quitButtonClick() {
    setEnding("Farmer")
    gameOver()
  }


  return (
    <div className="battle-screen flex-ctr-ctr flex-col">
      {player ? (
        <BattleStage
          setGameState={setGameState}
          gameState={gameState}
          player={player}
          playerHealth={playerHealth}
          enemy={enemy}
          enemyHealth={enemyHealth}
        />
      ) : (
        <IntroSelection user={user} setPlayer={setPlayer} setEnemy={setEnemy} />
      )}
      {player ? (
        <MessageBox
          gameOver={quitButtonClick}
          player={player}
          enemy={enemy}
          jokeButtonClick={jokeButtonClick}
          insultButtonClick={insultButtonClick}
          inspirationButtonClick={inspirationButtonClick}
          handleStoryClick={handleStoryClick}
          quote={quote}
          toggleButtons={toggleButtons}
        />
      ) : (
        <section className="message-box" onClick={handleStoryClick}>
          <p>{quote}</p>
        </section>
      )}
    </div>
  );
}
