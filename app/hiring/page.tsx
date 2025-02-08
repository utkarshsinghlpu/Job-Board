import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlusCircle, Users, Briefcase, FileText } from "lucide-react"

export default function HiringPage() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Hiring Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold">Active Jobs</h2>
            <Briefcase className="h-5 w-5 text-primary" />
          </div>
          <p className="text-3xl font-bold">12</p>
        </Card>
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold">Total Applicants</h2>
            <Users className="h-5 w-5 text-primary" />
          </div>
          <p className="text-3xl font-bold">143</p>
        </Card>
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold">Interviews Scheduled</h2>
            <FileText className="h-5 w-5 text-primary" />
          </div>
          <p className="text-3xl font-bold">8</p>
        </Card>
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold">Positions Filled</h2>
            <Users className="h-5 w-5 text-primary" />
          </div>
          <p className="text-3xl font-bold">3</p>
        </Card>
      </div>
      <div className="mt-8">
        <Button>
          <PlusCircle className="h-4 w-4 mr-2" />
          Post New Job
        </Button>
      </div>
    </main>
  )
}

