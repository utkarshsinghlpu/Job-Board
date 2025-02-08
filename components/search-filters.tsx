"use client"

import { Briefcase, MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { useJobs } from "./job-context"

export function SearchFilters() {
  const { state, dispatch } = useJobs()

  return (
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <Briefcase className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Designer"
            className="pl-9"
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FILTERS",
                payload: { search: e.target.value },
              })
            }
          />
        </div>
        <div className="relative">
          <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Work Location"
            className="pl-9"
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FILTERS",
                payload: { location: e.target.value },
              })
            }
          />
        </div>
        <Select
          onValueChange={(value) =>
            dispatch({
              type: "UPDATE_FILTERS",
              payload: { experience: value },
            })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Experience" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="entry">Entry Level</SelectItem>
            <SelectItem value="mid">Mid Level</SelectItem>
            <SelectItem value="senior">Senior Level</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Per month" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="month">Per month</SelectItem>
            <SelectItem value="year">Per year</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-4">
        <div className="flex justify-between">
          <Label>Salary Range</Label>
          <div className="text-sm">
            ${state.filters.salaryRange[0]} - ${state.filters.salaryRange[1]}
          </div>
        </div>
        <Slider
          defaultValue={[600, 1200]}
          max={5000}
          min={0}
          step={100}
          onValueChange={(value) =>
            dispatch({
              type: "UPDATE_FILTERS",
              payload: { salaryRange: value as [number, number] },
            })
          }
        />
      </div>
    </div>
  )
}

