import { useState } from "react";
import { login, register } from "../api";

interface Props {
  onAuth: () => void;
}

const AuthForm = ({ onAuth }: Props) => {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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
    <div>
      <h2>{mode === "login" ? "Login" : "Register"}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">
          {mode === "login" ? "Log in" : "Register"}
        </button>
      </form>

      <button onClick={() => setMode(mode === "login" ? "register" : "login")}>
        {mode === "login" ? "Create an account" : "Already have an account?"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default AuthForm;
