import { useEffect, useState } from "react";

export default function MessageBox({
  jokeButtonClick,
  insultButtonClick,
  inspirationButtonClick,
  handleStoryClick,
  gameOver,
  toggleButtons,
  quote
}) {
  
  return (
    <div className="message-box" >
      <p className="message">{quote}</p>
      {toggleButtons ?<ul>
        <button onClick={jokeButtonClick}>
          Press Joke
        </button>
        <button onClick={insultButtonClick}>
          Press Insult
        </button>
        <button onClick={inspirationButtonClick}>Press Inspiration</button>
        <button
          onClick={gameOver}
        >
          Become A Farmer
        </button>
      </ul> : <button onClick={handleStoryClick}>Continue</button>}
    </div>
  );
}
