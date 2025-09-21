import { useState } from "react";
import { useNavigate } from "react-router-dom";

const users = {
  "admin@swarm.com": "A1",      // Admin main page
  "worker@swarm.com": "SW1",    // Site Worker main page
  "office@swarm.com": "OW1",    // Office Worker main page
  "manager@swarm.com": "M1"     // Manager main page
};

export default function Login() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (users[email]) {
      navigate(`/${users[email]}`);
    } else {
      setError("Invalid email. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-96"
      >
        <h2 className="text-xl font-bold mb-6 text-center">Swarm Timesheets</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded w-full py-2 px-3 mb-4"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 w-full rounded"
        >
          Login
        </button>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </form>
    </div>
  );
}
