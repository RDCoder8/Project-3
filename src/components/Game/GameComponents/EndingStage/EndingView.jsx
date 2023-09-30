import React, { useState } from "react";

export default function EndingStage({ gameState, setGameState }) {
  const [message, setMessage] = useState("")
  return (
    <section className='battle-screen flex-ctr-ctr flex-col'>
      <h1>Ending</h1>
      <ul>
        <button
          onClick={() => setGameState({ ...gameState, showStartMenu: true })}
        >
          Restart
        </button>
        <button>Next Monster</button>
      </ul>
      <section className="message-box">{message}</section>
    </section>
  );
}
