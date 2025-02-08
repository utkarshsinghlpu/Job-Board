import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  const faqs = [
    {
      question: "How do I create an account?",
      answer:
        "To create an account, click on the 'Sign Up' button in the top right corner of the homepage. Fill out the required information and follow the prompts to complete your registration.",
    },
    {
      question: "How can I search for jobs?",
      answer:
        "You can search for jobs by using the search bar on the homepage or by navigating to the 'Find Job' page. Use filters to narrow down your search by location, job type, salary range, and more.",
    },
    {
      question: "How do I apply for a job?",
      answer:
        "To apply for a job, click on the job listing you're interested in. On the job details page, you'll find an 'Apply Now' button. Click it and follow the instructions to submit your application.",
    },
    {
      question: "Can I save job listings for later?",
      answer:
        "Yes, you can save job listings by clicking the bookmark icon on any job card. You can view your saved jobs in your account dashboard.",
    },
    {
      question: "How do I post a job as an employer?",
      answer:
        "To post a job, you need to have an employer account. Once logged in, go to the 'Hiring' section and click on 'Post New Job'. Fill out the job details form and submit it for review.",
    },
  ]

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Frequently Asked Questions</h1>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  )
}

