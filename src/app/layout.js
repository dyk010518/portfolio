import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Daniel Kim',
  keywords: 'Daniel, Daniel Kim, Dong Young, Dong Young Kim, MIT, Computer Science, Finance, personal website, portfolio',
  desctiption: `Daniel Kim's personal website`,
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
