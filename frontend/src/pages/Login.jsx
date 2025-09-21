import React from "react";

function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h1 className="text-xl font-bold mb-4">Swarm Timesheets Login</h1>
        <input type="text" placeholder="Email" className="w-full p-2 mb-3 border rounded" />
        <input type="password" placeholder="Password (disabled for now)" className="w-full p-2 mb-3 border rounded" disabled />
        <button className="w-full bg-blue-500 text-white p-2 rounded">Login</button>
      </div>
    </div>
  );
}

export default Login;
