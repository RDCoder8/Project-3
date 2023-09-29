

export default function StartMenu({user, setGameState, gameState}) {

    //On LoadGame Player data should be pulled from the server and Set to Player
    //Battle will use a useEffect to check for Player data being set. 
    //If playerData isn't set then it will play the intro let the user make a TightCrew
    //If playerData is found then enemy Data is generated and a battle begins. 
  return (
    <section className="start-menu">
        <h3>Welcome, {user.name}. Would you like to...</h3>
        <button onClick={() => setGameState({...gameState, showBattle: true, showStartMenu: false })}>New Game</button>
        <button>Load Game</button>
        <button>Delete Game</button>
      </section>
  )
}
