import { checkToken } from "../../utilities/users-service";
import GameWindow from "../../components/Game/GameWindow";


export default function GamePage({user, setUser}) {
 
  return (
    <div className="flex-ctr-ctr flex-col">
      <GameWindow user={user} setUser={setUser} />
    </div>
  );
}
