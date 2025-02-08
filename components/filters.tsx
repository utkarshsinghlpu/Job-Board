"use client"

import { Fingerprint } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { useJobs } from "./job-context"

export function Filters() {
  const { state, dispatch } = useJobs()

  const employmentTypes = [
    { id: "full-time", label: "Full Time" },
    { id: "internship", label: "Internship" },
    { id: "freelance", label: "Freelance" },
    { id: "contractual", label: "Contractual" },
  ]

  const scheduleTypes = [
    { id: "full-day", label: "Full day" },
    { id: "flexible", label: "Flexible schedule" },
    { id: "remote", label: "Remote work" },
  ]

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Fingerprint className="h-8 w-8 text-primary" />
          </div>
          <h3 className="font-semibold mb-2">Update your data!</h3>
          <p className="text-sm text-muted-foreground mb-4">Update your data and find the best opportunities</p>
          <Button className="w-full">Update your data</Button>
        </div>
      </Card>
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold mb-4">Working schedule</h3>
          <div className="space-y-4">
            {employmentTypes.map((type) => (
              <div key={type.id} className="flex items-center space-x-2">
                <Checkbox id={type.id} />
                <label
                  htmlFor={type.id}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {type.label}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Employment type</h3>
          <div className="space-y-4">
            {scheduleTypes.map((type) => (
              <div key={type.id} className="flex items-center space-x-2">
                <Checkbox id={type.id} />
                <label
                  htmlFor={type.id}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {type.label}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

