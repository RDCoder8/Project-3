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
        <img className="character-img" src="https://imageupload.io/ib/1BTqj6AvxhuQKXv_1696336965.png" alt="" /><br/>
        <button onClick={() => pickPlayer("https://imageupload.io/ib/1BTqj6AvxhuQKXv_1696336965.png")}>
          Meme Team Tight Crew{" "}
        </button>
      </section> : ""}
      {pickTeam ?<section>
        <img className="character-img" src="https://imageupload.io/ib/6gdHqflcpqp5h64_1696337086.png" alt="" />{" "}<br />
        <button onClick={() => pickPlayer("https://imageupload.io/ib/6gdHqflcpqp5h64_1696337086.png")}>
          Girl Boss Tight Crew
        </button>
      </section> : ""}
    </div>
  );
}
