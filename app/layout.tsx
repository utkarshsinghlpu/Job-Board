import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { JobProvider } from "@/components/job-context"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Eclipse - Job Board",
  description: "Find your next job opportunity",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <JobProvider>{children}</JobProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

