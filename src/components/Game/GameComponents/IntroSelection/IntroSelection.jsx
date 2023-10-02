import React from "react";

export default function IntroSelection({ setPlayer, setEnemy, user }) {

  function enemySet() {
    setEnemy({
      name: "Fullstack Dragon",
      picture: "src/assets/fullstackdragon.png",
      ego: 30,
    })
  }

  async function pickPlayer(url) {
    enemySet()
    await setPlayer({
      name: `${user.name} and their Tight Crew`,
      picture: url,
      ego: 30,
    });
  }
  return (
    <div className="stage">
      <section>
        <img src="https://placedog.net/100/100" alt="" />
        <button onClick={() => pickPlayer("https://placedog.net/100/100")}>
          Tight Dog Crew{" "}
        </button>
      </section>
      <section>
        <img src="http://placekitten.com/100/100" alt="" />{" "}
        <button onClick={() => pickPlayer("http://placekitten.com/100/100")}>
          Tight Cat Crew
        </button>
      </section>
    </div>
  );
}
