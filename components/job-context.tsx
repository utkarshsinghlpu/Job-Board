"use client"

import type React from "react"
import { createContext, useContext, useReducer } from "react"

type Job = {
  id: string
  title: string
  company: string
  location: string
  salary: number
  type: string[]
  level: string
  rating: number
  reviews: number
}

type JobState = {
  jobs: Job[]
  filters: {
    search: string
    location: string
    experience: string
    salaryRange: [number, number]
    employmentTypes: string[]
  }
}

type JobAction =
  | { type: "SET_JOBS"; payload: Job[] }
  | { type: "UPDATE_FILTERS"; payload: Partial<JobState["filters"]> }

const JobContext = createContext<{
  state: JobState
  dispatch: React.Dispatch<JobAction>
} | null>(null)

const initialState: JobState = {
  jobs: [],
  filters: {
    search: "",
    location: "",
    experience: "",
    salaryRange: [600, 1200],
    employmentTypes: [],
  },
}

function jobReducer(state: JobState, action: JobAction): JobState {
  switch (action.type) {
    case "SET_JOBS":
      return { ...state, jobs: action.payload }
    case "UPDATE_FILTERS":
      return {
        ...state,
        filters: { ...state.filters, ...action.payload },
      }
    default:
      return state
  }
}

export function JobProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(jobReducer, initialState)

  return <JobContext.Provider value={{ state, dispatch }}>{children}</JobContext.Provider>
}

export function useJobs() {
  const context = useContext(JobContext)
  if (!context) {
    throw new Error("useJobs must be used within a JobProvider")
  }
  return context
}

