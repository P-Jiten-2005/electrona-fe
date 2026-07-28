import React from "react";

export default function Register() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">

      <div className="bg-white p-10 rounded-xl shadow-xl w-[420px]">

        <h1 className="text-3xl font-bold text-center mb-8">
          Create Account
        </h1>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />

        <input
          type="email"
          placeholder="Gmail"
          className="w-full border p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full border p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full border p-3 rounded mb-6 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />

        <button
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold p-3 rounded transition"
        >
          REGISTER
        </button>

        <p className="text-center mt-6 text-gray-600">
          Already have an account?
        </p>

        <button
          className="w-full mt-3 border border-black text-black hover:bg-black hover:text-white font-semibold p-3 rounded transition"
        >
          LOGIN
        </button>

      </div>

    </div>
  );
}