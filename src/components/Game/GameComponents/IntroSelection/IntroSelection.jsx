import React from "react";

export default function IntroSelection({ setPlayer, setEnemy, user, pickTeam, setQuote }) {

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
    })
    setQuote("Now the battle against the Full Stack Dragon Begins!")
  }

  return (
    <div className="stage">
      {pickTeam ?<section>
        <img src="https://placedog.net/300/300" alt="" /><br/>
        <button onClick={() => pickPlayer("https://placedog.net/300/300")}>
          Tight Dog Crew{" "}
        </button>
      </section> : ""}
      {pickTeam ?<section>
        <img src="http://placekitten.com/300/300" alt="" />{" "}<br />
        <button onClick={() => pickPlayer("http://placekitten.com/300/300")}>
          Tight Cat Crew
        </button>
      </section> : ""}
    </div>
  );
}
