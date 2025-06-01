import { useEffect, useState } from "react";
import { logout } from "./api";
import PlayerList from "./components/PlayerList";
import CookiePopup from "./components/CookiePopup";
import AuthForm from "./components/AuthForm";
import { Button } from "./components/Button";

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
          <PlayerList />

          <Button onClick={handleLogout} variant="danger">
            Log out
          </Button>
        </>
      ) : (
        <AuthForm onAuth={() => setIsAuthenticated(true)} />
      )}

      <CookiePopup />
    </div>
  );
};

export default App;
