"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { UserRole } from "@/types/users";

/**
 * A component that displays the navigation bar with links based on authentication status
 */
export default function Navbar() {
  const { data: session, status } = useSession();
  const user = session?.user;

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
              {user?.role === UserRole.ADMIN && (
                <Link href="/users">User management</Link>
              )}

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
