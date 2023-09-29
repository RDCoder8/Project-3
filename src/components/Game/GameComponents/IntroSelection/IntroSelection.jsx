import React from 'react'

export default function IntroSelection({setPlayer, user, setMessage}) {
  return (
    <div>
    <section><img src="https://placedog.net/100/100" alt=""/><button onClick={() => setPlayer("https://placedog.net/100/100")}>Tight Dog Crew </button></section>
        <section><img src="http://placekitten.com/100/100" alt="" /> <button onClick={() =>setPlayer("http://placekitten.com/100/100")}>Tight Cat Crew</button></section>
    </div>
  )
}
