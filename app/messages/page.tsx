import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { MessageSquare, Send } from "lucide-react"

export default function MessagesPage() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Messages</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="col-span-1 p-4">
          <h2 className="font-semibold mb-4">Conversations</h2>
          {/* Placeholder for conversation list */}
          <div className="space-y-2">
            {["John Doe", "Jane Smith", "Company XYZ"].map((name) => (
              <div key={name} className="flex items-center gap-2 p-2 hover:bg-muted rounded-md cursor-pointer">
                <MessageSquare className="h-5 w-5" />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </Card>
        <Card className="col-span-2 p-4">
          <h2 className="font-semibold mb-4">Chat</h2>
          <div className="h-[400px] mb-4 bg-muted rounded-md"></div>
          <div className="flex gap-2">
            <Input placeholder="Type your message..." className="flex-grow" />
            <Button>
              <Send className="h-4 w-4 mr-2" />
              Send
            </Button>
          </div>
        </Card>
      </div>
    </main>
  )
}

