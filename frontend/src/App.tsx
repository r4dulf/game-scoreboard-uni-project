import { useEffect, useState } from "react";
import { logout } from "./api";
import AuthForm from "./components/AuthForm";
import PlayerList from "./components/PlayerList";
import CookieConsent from "react-cookie-consent";

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
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Game Scoreboard</h1>

      {isAuthenticated ? (
        <>
          <button onClick={handleLogout}>Log out</button>
          <PlayerList />
        </>
      ) : (
        <AuthForm onAuth={() => setIsAuthenticated(true)} />
      )}

      <CookieConsent
        location="bottom"
        buttonText="Accept"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#fff", background: "#007bff", fontSize: "13px" }}
      >
        This site uses cookies to enhance the user experience and for security.{" "}
        <a href="/privacy" style={{ color: "#00ffff" }}>
          Learn more
        </a>
      </CookieConsent>
    </div>
  );
};

export default App;
