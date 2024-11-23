// src/components/ui/dashboard/TopicCard.tsx
import { Card } from "@/components/ui/card";
import ReactMarkdown from "react-markdown";

interface TopicCardProps {
  title: string;
  isVisible: boolean;
  content: string;
}

const TopicCard = ({ title, isVisible, content }: TopicCardProps) => {
  if (!isVisible) return null;

  return (
    <Card className="w-full h-[calc(100vh-24rem)] p-6 animate-fade-in overflow-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center">{title}</h2>
      <div className="text-muted-foreground space-y-4">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </Card>
  );
};

export default TopicCard;
