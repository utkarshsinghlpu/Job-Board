import { Star, Bookmark } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface JobCardProps {
  company: string
  title: string
  location: string
  salary: number
  type: string[]
  level: string
  rating: number
  reviews: number
}

export function JobCard({ company, title, location, salary, type, level, rating, reviews }: JobCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-start justify-between">
        <div className="flex gap-4">
          <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
            <span className="text-lg font-semibold">{company[0]}</span>
          </div>
          <div>
            <h3 className="font-semibold">{title}</h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{location}</span>
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < rating ? "fill-primary" : "fill-muted stroke-muted-foreground"}`}
                  />
                ))}
                <span className="ml-1">({reviews} Reviews)</span>
              </div>
            </div>
          </div>
        </div>
        <Button variant="ghost" size="icon">
          <Bookmark className="h-4 w-4" />
        </Button>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {type.map((t) => (
          <span key={t} className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="text-lg font-semibold">
          ${salary}k<span className="text-sm text-muted-foreground">/Monthly</span>
        </div>
        <Button>Details</Button>
      </div>
    </Card>
  )
}

