'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import { ContextProvider, useFeatureFlagsContext } from '@/context'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <ContextProvider>
        <body className={inter.className}>{children}</body>
      </ContextProvider>
    </html>
  )
}
