import React, { useEffect, useState } from "react";

export default function EndingStage({ gameState, setGameState, ending }) {
  const [message, setMessage] = useState(
    "Sometimes...being a Software Engineer is tough..."
  );
  const [restart, setRestart] = useState(false);
  const [messageArray, setMessageArray] = useState();
  
  function pickEnding() {
    if (ending === "Farmer" && !restart) {
      setMessageArray([
        "The Tight Crew found their talents might be better suited elsewhere",
        "Farming didn't involve giant coding beasts",
        "But part of them couldn't help but wonder what would have happened if they stayed.",
      ]);
    } else if (ending === "Fighting" && !restart) {
      setMessageArray([
        "The Tight Crew went back and forth with the Fullstack Dragon for a long time",
        "By the end of it, it didn't matter if they won or lost",
        "They would find another code beast to fight because bullying code was all they knew.",
      ]);
    } else if (ending === "Inspired" && !restart) {
      setMessageArray([
        "But through some really inspiring reading material the Tight Crew Ascended",
        "Now labeled the Enlightened Crew they traveled to spread a new coding gospel",
        "The new heights they achieved would change the programming world",
      ]);
    } else if (!restart) {
      setMessageArray([
        "'You figured out my true weakness...Rawhahaha! I love Dad Jokes!'",
        "But hearing a laughing dragon makes the tough time worth it",
        "In the world of coding it is easy to make an enemy from every code beast (or project)",
        "But making an ally is a better way to win at times!",
      ]);
    }
  }

  function handleStoryClick() {
    if (messageArray[0]) {
      setMessage(messageArray.shift());
      if (messageArray.length === 0) {
        setRestart(true);
      } 
    } 
  }

  useEffect(()=>{
    pickEnding()
  }, [])

  return (
    <section className="battle-screen flex-ctr-ctr flex-col">
      <h1>{ending}</h1>
      {restart ? (
        <ul>
          <button
            onClick={() => setGameState({ ...gameState, showStartMenu: true })}
          >
            Restart
          </button>
        </ul>
      ) : (
        ""
      )}
      <section className="message-box">
        {message}
        <ul>
          <button onClick={handleStoryClick}>
            {!restart ? "Continue" : "End"}
          </button>
        </ul>
      </section>
    </section>
  );
}
