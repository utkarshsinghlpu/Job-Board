"use client"

import { useJobs } from "./job-context"
import { JobCard } from "./job-card"
import { Filters } from "./filters"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function JobBoard() {
  const { state } = useJobs()

  return (
    <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6">
      <Filters />
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">
            Recommended Jobs <span className="text-muted-foreground">(386)</span>
          </h2>
          <Select defaultValue="latest">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="latest">Last updated</SelectItem>
              <SelectItem value="salary-high">Highest salary</SelectItem>
              <SelectItem value="salary-low">Lowest salary</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-4">
          <JobCard
            company="Google"
            title="Senior Product Manager"
            location="California, CA"
            salary={2500}
            type={["Full Time"]}
            level="Senior Level"
            rating={4}
            reviews={42}
          />
          <JobCard
            company="Lyft"
            title="Front End Developer"
            location="New York, NY"
            salary={1500}
            type={["Full Time", "Mid Level"]}
            level="Mid Level"
            rating={3}
            reviews={27}
          />
          <JobCard
            company="Spotify"
            title="Quality Assurance Engineer"
            location="Rome, IT"
            salary={1500}
            type={["Full Time", "On-Site"]}
            level="Mid Level"
            rating={4}
            reviews={42}
          />
        </div>
      </div>
    </div>
  )
}

