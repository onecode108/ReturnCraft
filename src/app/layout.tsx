import { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'

export const metadata: Metadata = {
  title: "ReturnCraft",
  description: "ReturnCraft Application",
};

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={openSans.className}>
      <body>{children}</body>
    </html>
  )
}
