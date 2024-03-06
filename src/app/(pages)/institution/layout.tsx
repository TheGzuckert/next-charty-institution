import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: 'Institution',
    default: 'NUS',
  },
  description: 'A simple aplicaton to help a charity institution',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      {/* começar sideBar */}
      <div>AAAAA</div>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
