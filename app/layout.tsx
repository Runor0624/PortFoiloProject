import type { Metadata } from 'next'
import './globals.css'

import Footers from '@/components/Footer/Footers'
import Headers from '@/components/Header/Headers'
import Top from '@/components/Button/Top'
import DarkModeProvider from '@/components/ETC/DarkModeProvider'
import DarkModeButton from '@/components/Button/DarkMode'

export const metadata: Metadata = {
  title: '한상일 - 포트폴리오',
  description: '개발자 한상일의 포트폴리오 입니다.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-#cfcfcf dark:bg-black">
        <DarkModeProvider>
        <Headers />
        {children}
        <Top />
        <DarkModeButton />
        <Footers />
        </DarkModeProvider>
      </body>
    </html>
  )
}
