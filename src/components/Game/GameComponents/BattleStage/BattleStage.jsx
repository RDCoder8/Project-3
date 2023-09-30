import React, { useState } from "react";

export default function BattleStage({ player, enemy, gameState, playerHealth, enemyHealth }) {
  return (
    <section className="stage">
      <section>
      <img src={player.picture} alt="" />
      <h4>{player.name}</h4>
      <h3>EGO: {playerHealth}</h3>
      </section>
      <section>
      <img src={enemy.picture} alt="" width={150} />
      <h4>{enemy.name}</h4>
      <h3>EGO: {enemyHealth}</h3>
      </section>
    </section>
  );
}
