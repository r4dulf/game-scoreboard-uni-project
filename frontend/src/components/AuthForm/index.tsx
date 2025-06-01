import { useState } from "react";
import { useCookieConsent } from "../../context/CookieContext/useCookieContext";
import { login, register } from "../../api";
import { Input } from "../Input";
import { Button } from "../Button";

import "./index.css";

interface Props {
  onAuth: () => void;
}

const AuthForm = ({ onAuth }: Props) => {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { consent } = useCookieConsent();

  if (!consent) {
    return (
      <div>
        <h2>Please accept cookies to register or log in</h2>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      if (mode === "login") {
        await login(name, password);
      } else {
        await register(name, password);
        await login(name, password);
      }
      onAuth();
    } catch (err: unknown) {
      const e = err as { response?: { data?: { error?: string } } };

      setError(e.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <div className="auth-form">
      <h2>{mode === "login" ? "Login" : "Register"}</h2>

      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button type="submit">
          {mode === "login" ? "Log in" : "Register"}
        </Button>
      </form>

      <Button
        onClick={() => setMode(mode === "login" ? "register" : "login")}
        kind="flat"
      >
        {mode === "login" ? "Create an account" : "Already have an account?"}
      </Button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default AuthForm;
