import { useEffect, useState } from "react";
import { getPlayers, updateScore } from "../api";
import { jwtDecode } from "jwt-decode";

interface Player {
  id: number;
  name: string;
  score: number;
}

interface TokenPayload {
  id: number;
  name: string;
  iat: number;
}

const PlayerList = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [userId, setUserId] = useState<number | null>(null);

  useEffect(() => {
    const fetchPlayers = async () => {
      const data = await getPlayers();

      setPlayers(data);
    };

    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode<TokenPayload>(token);

      setUserId(decoded.id);
    }

    fetchPlayers();
  }, []);

  const handleScoreChange = async (id: number, delta: number) => {
    await updateScore(id, delta);
    const updated = await getPlayers();

    setPlayers(updated);
  };

  return (
    <table
      style={{ marginTop: "2rem", borderCollapse: "collapse", width: "100%" }}
    >
      <thead>
        <tr>
          <th style={{ textAlign: "left" }}>Name</th>
          <th style={{ textAlign: "left" }}>Score</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {players.map((player) => (
          <tr key={player.id}>
            <td>{player.name}</td>
            <td>{player.score}</td>
            <td>
              {player.id === userId ? (
                <>
                  <button onClick={() => handleScoreChange(player.id, +1)}>
                    +1
                  </button>
                  <button onClick={() => handleScoreChange(player.id, -1)}>
                    -1
                  </button>
                </>
              ) : (
                <span style={{ color: "#888" }}>—</span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PlayerList;
