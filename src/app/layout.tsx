import { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'

export const metadata: Metadata = {
  title: "ReturnCraft",
  description: "ReturnCraft Application",
};

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-opensans',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${openSans.className} antialiased`}>{children}</body>
    </html>
  )
}
