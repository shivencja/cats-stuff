import { AuthOptions, DefaultSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { kv } from "@vercel/kv";
import bcrypt from "bcryptjs";
import { UserDTO, UserRole } from "@/types/users";

interface AppUser extends UserDTO {
  hashedPassword: string;
}

declare module "next-auth" {
  /**
   * Extends the default Session interface to include custom user properties
   */
  interface Session {
    user: {
      id: string;
      role: UserRole;
    } & DefaultSession["user"];
  }

  /**
   * Extends the default User interface to include custom properties
   */
  interface User {
    id: string;
    role: UserRole;
  }
}

declare module "next-auth/jwt" {
  /** Extends the default JWT interface to include custom properties */
  interface JWT {
    role: UserRole;
  }
}

export const authOptions: AuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    // add google provider later?
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // fetch user from KV by email
        const userKey = `user:${credentials.email}`;
        const user: AppUser | null = await kv.get(userKey);

        if (!user || !user.hashedPassword) {
          return null;
        }

        const isPasswordCorrect = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        if (isPasswordCorrect) {
          return { id: user.id, email: user.email, role: user.role };
        }

        return null;
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.sub = user.id;
      }
      return token;
    },
    session({ session, token }) {
      if (session.user && token.role && token.sub) {
        session.user.role = token.role;
        session.user.id = token.sub;
      }
      return session;
    },
  },
  secret: process.env.AUTH_SECRET,
};
