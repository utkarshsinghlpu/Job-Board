import { JobBoard } from "@/components/job-board"
import { SearchFilters } from "@/components/search-filters"

export default function JobsPage() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Find Your Next Job</h1>
      <SearchFilters />
      <JobBoard />
    </main>
  )
}

