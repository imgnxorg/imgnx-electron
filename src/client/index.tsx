import React, { useState } from "react";

import { createRoot } from "react-dom/client";
import "tailwindcss/tailwind.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    if (!!!window?.api) {
      throw new Error("!!!window.api");
    }
    const response = await window.api.login({ username, password });
    setMessage(response.success ? "Login Successful!" : response.message);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
      <div className="card p-4">
        <h2 className="mb-4">Login</h2>
        <input
          className="form-control mb-3"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="form-control mb-3"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn btn-primary w-100" onClick={handleLogin}>
          Login
        </button>
        {message && <p className="mt-3 text-center">{message}</p>}
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
