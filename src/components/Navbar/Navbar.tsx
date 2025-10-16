"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

/**
 * A component that displays the navigation bar with links based on authentication status
 */
export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <nav>
      <div>
        <Link href="/">Mój Sklep</Link>
      </div>
      <div>
        <div>
          {status === "loading" && <p>Ładowanie...</p>}

          {status === "unauthenticated" && (
            <>
              <Link href="/login">Zaloguj się</Link>
              <Link href="/register">Zarejestruj się</Link>
            </>
          )}

          {status === "authenticated" && (
            <>
              <Link href="/profile">Profil</Link>
              <span>({session.user?.email})</span>
              <button onClick={() => signOut({ callbackUrl: "/" })}>
                Wyloguj się
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
