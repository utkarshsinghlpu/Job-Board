import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Briefcase, MessageSquare, Users, HelpCircle, Building } from "lucide-react"

export default function HomePage() {
  const features = [
    { title: "Find Job", description: "Browse and apply to job listings", icon: Briefcase, href: "/jobs" },
    { title: "Messages", description: "Communicate with employers", icon: MessageSquare, href: "/messages" },
    { title: "Hiring", description: "Post jobs and manage applications", icon: Building, href: "/hiring" },
    { title: "Community", description: "Connect with other professionals", icon: Users, href: "/community" },
    { title: "FAQ", description: "Get answers to common questions", icon: HelpCircle, href: "/faq" },
  ]

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Welcome to Eclipse</h1>
      <p className="text-xl text-center mb-12 text-muted-foreground">
        Your one-stop platform for job searching and hiring
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <feature.icon className="h-6 w-6" />
                {feature.title}
              </CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href={feature.href}>
                <Button className="w-full">Go to {feature.title}</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  )
}

