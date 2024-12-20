import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "ReturnCraft",
  description: "ReturnCraft Application",
};

const pretendardFont = Pretendard({
  subsets: ["latin"],
  weight: "variable"
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={pretendardFont.className}>{children}</body>
    </html>
  )
}
