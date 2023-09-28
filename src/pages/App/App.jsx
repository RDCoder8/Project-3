import { useState } from "react";
import AuthPage from "../AuthPage/AuthPage.jsx";
import ProfilePage from "../ProfilePage/ProfilePage.jsx";
import GamePage from "../GamePage/GamePage.jsx";
import { Routes, Route } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar.jsx";
import "./App.css";
import { getUser } from "../../utilities/users-service.js";

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser}/>
          <Routes>
            <Route path="/profile" element={<ProfilePage user={user} setUser={setUser} />} />
            <Route path="/game" element={<GamePage user={user} setUser={setUser} />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
