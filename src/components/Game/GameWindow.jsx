import React from "react";

export default function GameWindow({ user, setUser }) {
  return (
    <main className="game-window">
      <section className="start-menu">
        <h3>Welcome, {user.name}. Would you like to...</h3>
        <button>New Game</button>
        <button>Load Game</button>
        <button>Delete Game</button>
      </section>
    </main>
  );
}
