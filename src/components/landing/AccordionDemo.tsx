import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Card } from "../ui/card"
  
  export function AccordionDemo() {
    return (
      <Card className="hover:scale-105 transition-transform duration-300 flex-auto h-40 overflow-hidden">
        <Accordion type="single" collapsible className="w-full p-4 text-gray-600 text-sm">
          <AccordionItem value="item-1">
            <AccordionTrigger>Overview</AccordionTrigger> 
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Branding</AccordionTrigger>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Buisness Plan</AccordionTrigger>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Marketing Strategy</AccordionTrigger>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Legal Guide</AccordionTrigger>
          </AccordionItem>
          
        </Accordion>
      </Card>
    )
  }
  