export default function StartMenu({ user, setGameState, gameState, setPlayer }) {
  //On LoadGame Player data should be pulled from the server and Set to Player
  //Battle will use a useEffect to check for Player data being set.
  //If playerData isn't set then it will play the intro let the user make a TightCrew
  //If playerData is found then enemy Data is generated and a battle begins.

  function newCrew() {
    setPlayer(null)
    setGameState({
      ...gameState,
      showBattle: true,
      showStartMenu: false,
    })
  }
  return (
    <section className="start-menu">
      <h3>Welcome, {user.name}. Would you like to...</h3>
      <ul>
        <button
          onClick={() =>
            newCrew()
          }
        >
          Start Game
        </button>
      </ul>
    </section>
  );
}
