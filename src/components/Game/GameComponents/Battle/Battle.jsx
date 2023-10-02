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
  user,
}) {
  const [playerHealth, setPlayerHealth] = useState(30);
  const [enemyHealth, setEnemyHealth] = useState(30);
  const [quote, setQuote] = useState("Pick a team!");
  const [messageArray, setMessageArray] = useState([]);
  const [toggleButtons, setToggleButtons] = useState(true);
  const [hit, setHit] = useState(false)

function checkLife() {
  if (playerHealth <= 0 || enemyHealth <= 0) {
    gameOver()
    setMessageArray([])
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
  }

  function jokeButtonClick() {
    setToggleButtons(false);
    fetchDadJoke(setQuote);
    messageArray.push(
      "The Tight Crew waits to see if the monster laughs",
      "You're not funny",
      "The Tight Crew re-thinks their career as stand-up comedians"
    );
  }

  function insultButtonClick() {
    setToggleButtons(false);
    setHit(true)
    fetchInsult(setQuote);
    messageArray.push(
      "The Tight Crew damaged the beast's ego!",
      "Is that the best you've got?",
      "The Tight Crew continues their fight against the beast"
    );
  }

  function inspirationButtonClick() {
    setToggleButtons(false);
    fetchInspiration(setQuote);
    messageArray.push(
      "The Tight Crew feels inspired",
      "Why are you trying to get inspired?",
      "The Tight Crew continues their fight against the beast"
    );
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
          gameOver={gameOver}
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
