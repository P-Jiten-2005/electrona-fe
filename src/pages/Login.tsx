import React from "react";

export default function Login() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">

      <div className="bg-white p-10 rounded-xl shadow-xl w-[420px]">

        <h1 className="text-3xl font-bold text-center mb-8">
          Login
        </h1>

        <input
          type="text"
          placeholder="User ID"
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="email"
          placeholder="Gmail"
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded mb-6"
        />

        <button
          className="w-full bg-orange-500 text-white p-3 rounded"
        >
          LOGIN
        </button>

        <button
          className="w-full mt-4 border p-3 rounded"
        >
          Continue with Google
        </button>

        <p className="text-center mt-5">
          New User?
        </p>

        <button
          className="w-full mt-2 bg-black text-white p-3 rounded"
        >
          Create Account
        </button>

      </div>

    </div>
  );
}