import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
   
const menuItems = {
    "Overview":[],
    "Branding": [
      "Logo Concept",
      "Color Palette",
      "Typography",
      "Voice & Tone",
      "Style Guide",
    ],
    "Buisness Plan": [
      "Executive Summary",
      "Market Analysis",
      "Company Description",
      "Product Overview",
      "Financial Plan",
    ],
    "Marketing Strategy": [
      "Target Customer Analysis",
      "Go-to-Market Strategy",
      "Paid Marketing Strategy",
    ],
    "Legal Guide": [
      "Legal Disclaimers",
      "Business Entity Formation",
      "Tax Obligations",
      "Compliance and Regulations",
      "Intellectual Property Protection",
      "Contracts and Agreements",
      "Insurance",
      "Maintaining Good Standing",
      "Exit Strategy",
      "Seek Professional Help", 
    ],
  };
  
  interface BusinessPlanSidebarProps {
    onItemSelect: (item: string) => void;
    businessName: string;
  }
  
export function BusinessPlanSidebar({ onItemSelect, businessName }: BusinessPlanSidebarProps) {
    return (
      <div className="p-4 pt-6">
        <h2 className="mb-4 px-4 text-lg font-semibold tracking-tight text-primary">
          {businessName} Dashboard
        </h2>
        <Accordion type="multiple" className="w-full">
          {Object.entries(menuItems).map(([section, items]) => (
            <AccordionItem value={section} key={section}>
              <AccordionTrigger className="text-sm hover:text-primary hover:no-underline">
                {section}
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col space-y-1">
                  {items.map((item) => (
                    <button
                      key={item}
                      onClick={() => onItemSelect(item)}
                      className={cn(
                        "w-full rounded-md p-2 text-sm text-left",
                        "hover:bg-secondary/20 hover:text-primary",
                        "transition-colors"
                      )}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    );
  }