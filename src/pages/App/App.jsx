import { useState } from "react";
import AuthPage from "../AuthPage/AuthPage.jsx";
import ProfilePage from "../ProfilePage/ProfilePage.jsx";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage.jsx";
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
            <Route path="/orders/" element={<OrderHistoryPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
