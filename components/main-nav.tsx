"use client"

import {
  MapPin,
  MessageSquare,
  Users,
  HelpCircle,
  Settings,
  Sun,
  Moon,
  Briefcase,
  Building,
  ChevronLeft,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

export function MainNav() {
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()
  const router = useRouter()

  const navItems = [
    { href: "/jobs", label: "Find Job", icon: Briefcase },
    { href: "/messages", label: "Messages", icon: MessageSquare },
    { href: "/hiring", label: "Hiring", icon: Building },
    { href: "/community", label: "Community", icon: Users },
    { href: "/faq", label: "FAQ", icon: HelpCircle },
  ]

  const isMainPage = pathname === "/"

  return (
    <header className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            {!isMainPage && (
              <Button variant="ghost" size="icon" onClick={() => router.push("/")}>
                <ChevronLeft className="h-5 w-5" />
                <span className="sr-only">Back to main page</span>
              </Button>
            )}
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">Eclipse</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary flex items-center gap-2 ${
                    pathname === item.href ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">New York, NY</span>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

