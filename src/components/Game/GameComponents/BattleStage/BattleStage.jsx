import React from "react";

export default function BattleStage({ player, enemy, setGameState, gameState }) {
  return (
    <section>
      <h1>Fight</h1>{" "}
      <ul>
        <button onClick={() =>setGameState({...gameState, showBattle: false })}>End Fight</button>
      </ul>
    </section>
  );
}
