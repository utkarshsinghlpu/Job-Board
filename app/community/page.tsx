import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageSquare, ThumbsUp, Share2 } from "lucide-react"

export default function CommunityPage() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Community</h1>
      <div className="grid gap-6">
        {[1, 2, 3].map((post) => (
          <Card key={post} className="p-6">
            <h2 className="font-semibold mb-2">Community Post Title {post}</h2>
            <p className="text-muted-foreground mb-4">
              This is a sample community post. It could be a question, a discussion topic, or an announcement.
            </p>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <ThumbsUp className="h-4 w-4 mr-2" />
                Like
              </Button>
              <Button variant="ghost" size="sm">
                <MessageSquare className="h-4 w-4 mr-2" />
                Comment
              </Button>
              <Button variant="ghost" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </main>
  )
}

