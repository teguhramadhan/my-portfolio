"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMsg(error.message);
    } else {
      router.push("/admin"); // Redirect ke halaman admin
    }

    setLoading(false);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-black px-4 text-white">
        <form
          onSubmit={handleLogin}
          className="bg-[#1e1e1e] p-8 rounded-lg shadow-md w-full max-w-md space-y-4"
        >
          <h2 className="text-2xl font-bold text-center mb-4">Login Admin</h2>

          {errorMsg && (
            <p className="bg-red-500/20 border border-red-500 text-red-400 text-sm rounded p-2">
              {errorMsg}
            </p>
          )}

          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#2a2a2a] border border-gray-600 text-white p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-accent"
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#2a2a2a] border border-gray-600 text-white p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-accent"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-accent text-white py-3 rounded w-full hover:bg-accent/80 transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <div className="flex justify-center text-accent mt-6">
          <a href="/">To main Page</a>
        </div>
      </div>
    </>
  );
}
