import './globals.css'
import { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { getServerSession } from 'next-auth/next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "ReturnCraft",
  description: "ReturnCraft Application",
};

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession();

  return (
    <html lang="ko" className={openSans.className}>
      <body className="bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 min-h-screen flex flex-col">
        <header className="bg-white/10 backdrop-blur-lg shadow-lg sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 hover:scale-105 transition-transform">
              ReturnCraft
            </Link>
            <div>
              {session?.user ? (
                <div className="flex items-center gap-4">
                  <span className="text-gray-200">{session.user.name}님 환영합니다</span>
                  <Link
                    href="/api/auth/signout"
                    className="px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transform hover:scale-105 transition-all duration-200"
                  >
                    로그아웃
                  </Link>
                </div>
              ) : (
                <div className="flex gap-4">
                  <Link
                    href="/signup"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transform hover:scale-105 transition-all duration-200"
                  >
                    회원가입
                  </Link>
                  <Link
                    href="/api/auth/signin"
                    className="px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transform hover:scale-105 transition-all duration-200"
                  >
                    로그인
                  </Link>
                </div>
              )}
            </div>
          </div>
        </header>
        <main className="flex-1 flex">{children}</main>
      </body>
    </html>
  )
}
