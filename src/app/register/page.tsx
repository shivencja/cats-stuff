"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Wszystkie pola są wymagane.");
      return;
    }

    try {
      // axios
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        router.push("/login");
      } else {
        const data = await res.json();
        setError(data.error || "Wystąpił błąd podczas rejestracji.");
      }
    } catch (err) {
      setError("Nie udało się połączyć z serwerem.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Stwórz konto</h2>

        {error && <p>{error}</p>}

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>

        <div>
          <label htmlFor="password">Hasło</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>

        <div>
          <button type="submit">Zarejestruj się</button>
        </div>
      </form>
    </div>
  );
}
