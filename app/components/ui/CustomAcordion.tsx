"use client"

import type * as React from "react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

type StateItem = {
  name: string;
  count: number;
  content: React.ReactNode;
};

type StateAccordionProps = {
  states: StateItem[];
};

export function CustomAccordion({ states }: StateAccordionProps) {
  return (
    <Accordion type="multiple" className="w-full">
      {states.map((state, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="border border-gray-200 rounded-md mb-2 overflow-hidden"
        >
          <AccordionTrigger className="py-4 px-4 hover:no-underline hover:bg-gray-100 bg-gray-50 data-[state=open]:bg-gray-50">
            <div className="flex items-center w-full">
              <span className="text-gray-700 font-medium">{state.name}</span>
              <span className="text-gray-500 ml-2">({state.count})</span>
              <div className="flex-grow mx-4">
                <div className="h-[1px] bg-gray-200"></div>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-2 pb-4 px-4 bg-gray-50">{state.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}