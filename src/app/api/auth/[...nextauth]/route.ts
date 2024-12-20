import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { saveUser } from "../../../../../lib/db";

const isDevelopment = process.env.NODE_ENV === 'development'
const NEXTAUTH_URL = isDevelopment 
  ? 'http://localhost:3000' 
  : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`

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

// GET과 POST 메소드 export
export const GET = handler;
export const POST = handler;