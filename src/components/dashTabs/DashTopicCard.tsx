import React, { useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Card } from "@/components/ui/card";
import { ScrollDialog } from "@/components/PayDialog"; // Adjust the path as needed

interface TopicCardProps {
  title: string;
  isVisible: boolean;
  content: string;
}

const TopicCard = ({ title, isVisible, content }: TopicCardProps) => {
  const scrollableRef = useRef<HTMLDivElement>(null); // Reference to the scrollable content
  const [isDialogOpen, setIsDialogOpen] = useState(false); // Track dialog open state

  if (!isVisible) return null;

  return (
    <div className="dash-tabs">
      <Card
        ref={scrollableRef}
        className={`w-full h-[calc(100vh-24rem)] p-6 animate-fade-in overflow-auto transition ${
          isDialogOpen ? "blur-sm" : "" // Add blur class when dialog is open
        }`}
      >
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <div className="text-foreground space-y-4">
          {/* Render content with ReactMarkdown */}
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </Card>

      {/* Include ScrollDialog and pass the scrollableRef and onOpenChange */}
      {/* <ScrollDialog scrollableRef={scrollableRef} onOpenChange={setIsDialogOpen} /> */}
    </div>
  );
};

export default TopicCard;
