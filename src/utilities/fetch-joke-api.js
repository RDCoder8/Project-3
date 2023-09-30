export function fetchDadJoke(setQuote) {
    fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => setQuote(json.joke));
  }