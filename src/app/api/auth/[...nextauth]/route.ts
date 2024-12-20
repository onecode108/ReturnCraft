import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { saveUser } from "../../../../../lib/db";

const isDevelopment = process.env.NODE_ENV === 'development'
const NEXTAUTH_URL = isDevelopment 
  ? 'http://localhost:3000' 
  : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`

export const authOptions: NextAuthOptions = {
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
};

export default NextAuth(authOptions);