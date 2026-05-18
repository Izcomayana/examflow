'use client'

import { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

const faqs = [
  {
    question: 'What is ExamFlow?',
    answer:
      'ExamFlow is an intelligent exam scheduling system designed for universities and educational institutions. It uses advanced AI algorithms to automatically generate conflict-free examination timetables while optimizing resource allocation and student schedules.',
  },
  {
    question: 'How are conflicts prevented?',
    answer:
      'Our system analyzes multiple factors including instructor availability, student enrollments, room capacities, and course requirements. It uses constraint satisfaction algorithms to ensure no overlapping exams, instructor conflicts, or room double-bookings occur.',
  },
  {
    question: 'Can schedules be edited after generation?',
    answer:
      'Yes, absolutely! The dashboard provides a user-friendly interface to make manual adjustments to the generated schedule. You can swap rooms, reschedule exams, or make any changes you need while the system prevents conflicts.',
  },
  {
    question: 'Can timetables be exported?',
    answer:
      'Yes, schedules can be exported in multiple formats including PDF, Excel, and CSV. You can easily share timetables with students, instructors, and other stakeholders.',
  },
  {
    question: 'How long does it take to generate a schedule?',
    answer:
      'Most schedules are generated in seconds to minutes, depending on the complexity of your institution. What would take days manually can now be done in just a few clicks.',
  },
  {
    question: 'Is our data secure?',
    answer:
      'Yes, data security is our top priority. We use industry-standard encryption, secure authentication, and comply with data protection regulations to ensure your institutional data remains confidential and secure.',
  },
]

export default function FAQSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 })

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance transition-all duration-700 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}>
            Frequently Asked Questions
          </h2>
          <p className={`text-lg text-muted-foreground transition-all duration-700 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`} style={{ animationDelay: '0.1s' }}>
            Find answers to common questions about ExamFlow.
          </p>
        </div>

        <div className={`bg-white border border-border rounded-xl overflow-hidden transition-all duration-700 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0'
        }`} style={{ animationDelay: '0.2s' }}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-border last:border-b-0"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-muted/30 transition-colors">
                  <span className="text-lg font-semibold text-foreground text-left">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
