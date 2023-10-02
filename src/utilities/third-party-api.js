import axios from "axios";

export function fetchDadJoke(setQuote) {
    fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => setQuote(json.joke));
  }

  export async function fetchInsult(setQuote) {
    const response = await axios.get("https://insult.mattbas.org/api/insult")
    setQuote(response.data)
  }

  export async function fetchInspiration(setQuote) {
    const response = await axios.get("https://type.fit/api/quotes")
    const data = response.data
    setQuote(data[Math.floor(Math.random() * data.length)].text)
  }