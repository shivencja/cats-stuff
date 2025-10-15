import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { kv } from "@vercel/kv";
import bcrypt from "bcryptjs";

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
        const user: { email: string; hashedPassword?: string } | null =
          await kv.get(userKey);

        if (!user || !user.hashedPassword) {
          return null;
        }

        const isPasswordCorrect = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        if (isPasswordCorrect) {
          return { id: user.email, email: user.email };
        }

        return null;
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
};
