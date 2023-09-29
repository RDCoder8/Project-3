import React from "react";
import MessageBox from "../MessageBox/MessageBox";

export default function EndingStage({ gameState, setGameState }) {
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
      <MessageBox />
    </section>
  );
}
