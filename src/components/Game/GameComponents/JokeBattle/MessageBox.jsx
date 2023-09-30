import { useEffect, useState } from "react";
import { fetchDadJoke } from "../../../../utilities/fetch-joke-api";

export default function MessageBox({
  gameState,
  setGameState,
  playerHealth,
  setPlayerHealth,
}) {
  const [quote, setQuote] = useState("Want to hear a joke?");
  const [messageArray, setMessageArray] = useState([]);

  function handleButtonClick() {
    if (messageArray.length === 0) {
      fetchDadJoke(setQuote);
      messageArray.push("Did you laugh?", "Do you want to tell another joke?");
    } else {
      setQuote(messageArray.shift());
      if (messageArray.length === 1) {
        setPlayerHealth(playerHealth - 5)
      }
    }
  }
  return (
    <div className="message-box">
      <p className="message">{quote}</p>
      <ul>
        <button onClick={handleButtonClick}>
          {messageArray.length === 0 ? "Get Joke" : "Continue"}
        </button>
        <button
          onClick={() => setGameState({ ...gameState, showBattle: false })}
        >
          End Fight
        </button>
      </ul>
    </div>
  );
}
