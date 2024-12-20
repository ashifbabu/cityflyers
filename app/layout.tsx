import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/header/header'
import { Sidebar } from '@/components/sidebar/sidebar'
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
})

export const metadata: Metadata = {
  title: 'CityFlyers - Travel Booking Platform',
  description: 'Book flights, hotels, and more with CityFlyers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen">
            <Sidebar />
            <div className="flex-1">
              <Header />
              <main className="flex-1">{children}</main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}