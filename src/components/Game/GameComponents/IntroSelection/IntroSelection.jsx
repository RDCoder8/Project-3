import React from "react";

export default function IntroSelection({ setPlayer, setEnemy, user, pickTeam, setQuote, setBackground, background }) {

  function enemySet() {
    setEnemy({
      name: "Fullstack Dragon",
      picture: "https://imageupload.io/ib/x8zakdXd0q2iRC8_1696338673.png",
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
    setBackground("Battle")
  }

  return (
    <div className={background === "Intro" ? "IntroBG stage" : "stage"}>
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
