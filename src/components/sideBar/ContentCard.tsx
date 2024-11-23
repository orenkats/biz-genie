import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Palette,
  DollarSign,
  Target,
  Shield,
  Type,
  MessageSquare,
  BookOpen,
  ChartBar,
  LineChart,
  CreditCard,
  Megaphone,
  Users,
  FileText,
  type LucideIcon,
} from "lucide-react";
import ReactMarkdown from "react-markdown"; 
interface ContentCardProps {
  title: string;
  content: string;
}

const getIconForTitle = (title: string): LucideIcon => {
  // Branding section
  if (title === "Logo Concept") return Palette;
  if (title === "Color Palette") return Palette;
  if (title === "Typography") return Type;
  if (title === "Voice & Tone") return MessageSquare;
  if (title === "Style Guide") return BookOpen;

  // Financial Plan section
  if (title === "Startup Costs") return DollarSign;
  if (title === "Revenue Streams") return ChartBar;
  if (title === "Financial Projections") return LineChart;
  if (title === "Funding Requirements") return CreditCard;

  // Marketing Strategy section
  if (title === "Target Customer Analysis") return Users;
  if (title === "Go-to-Market Strategy") return Target;
  if (title === "Paid Marketing Strategy") return Megaphone;
  if (title === "Metrics for Success") return ChartBar;

  // Legal Guide section
  if (title.includes("Legal") || title.includes("Licensing")) return Shield;
  if (title.includes("Tax") || title.includes("Insurance")) return FileText;
  if (title.includes("Compliance") || title.includes("Regulations")) return Shield;
  if (title.includes("Data Protection")) return Shield;

  // Default icon for any unmatched titles
  return FileText;
};

const ContentCard = ({ title, content }: ContentCardProps) => {
  const Icon = getIconForTitle(title);

  return (
    <Card className="w-full animate-fade-in">
      <CardHeader className="border-b">
        <div className="flex items-center gap-2">
          <Icon className="h-5 w-5 text-primary" />
          <CardTitle className="text-xl text-primary">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-6 markdown-content">
        {content ? (
          <ReactMarkdown>{content}</ReactMarkdown>
          
        ) : (
          <div className="flex items-center justify-center py-8">
            <div className="animate-pulse text-gray-400">Loading content...</div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ContentCard;