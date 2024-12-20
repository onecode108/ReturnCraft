import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { saveUser } from "../../../../../lib/db";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (user.email) {
        await saveUser(
          user.email,
          user.name || null,
          user.image || null
        );
      }
      return true;
    },
  },
});

export { handler as GET, handler as POST };