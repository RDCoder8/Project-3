import React, { useState } from "react";

export default function BattleStage({ player, enemy, gameState, playerHealth, enemyHealth }) {
  return (
    <section className="stage">
      <section className="character-container">
      <img className="character-img" src={player.picture} alt="" />
      <h4>{player.name}</h4>
      <h3>Sanity: {playerHealth}</h3>
      </section>
      <section className="character-container">
      <img className="character-img" src={enemy.picture} alt="" />
      <h4>{enemy.name}</h4>
      <h3>EGO: {enemyHealth}</h3>
      </section>
    </section>
  );
}
