import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { headers } from 'next/headers'
import { db } from '@/db'
import { loginLogs } from '@/db/schema'

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (user?.email) {
        try {
          const headersList = await headers()
          const ipAddress = await headersList.get('x-forwarded-for')
          const userAgent = await headersList.get('user-agent')
          
          await db.insert(loginLogs).values({
            userEmail: user.email,
            ipAddress: ipAddress || 'unknown',
            userAgent: userAgent || 'unknown'
          })
        } catch (error) {
          console.error('Failed to save login log:', error)
          // 로그인은 계속 진행
        }
      }
      return true
    }
  }
});

export { handler as GET, handler as POST };