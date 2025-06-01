import { useEffect, useState } from "react";
import { logout } from "./api";
import AuthForm from "./components/AuthForm";
import PlayerList from "./components/PlayerList";
import CookiePopup from "./components/CookiePopup";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    logout();
    setIsAuthenticated(false);
  };

  return (
    <div className="main-container">
      <h1>Game Scoreboard</h1>

      {isAuthenticated ? (
        <>
          <button onClick={handleLogout}>Log out</button>

          <PlayerList />
        </>
      ) : (
        <AuthForm onAuth={() => setIsAuthenticated(true)} />
      )}

      <CookiePopup />
    </div>
  );
};

export default App;
