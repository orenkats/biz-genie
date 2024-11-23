import { useState } from "react";
import DashboardLayout from "@/components/dashTabs/DashLayout";
import TopicCard from "@/components/dashTabs/DashTopicCard";
import Card from "@/components/dashTabs/DashCard";
import {
  Shield,
  Palette,
  Type,
  MessageSquare,
  DollarSign,
  Users,
  TrendingUp,
  Building,
  FileText,
  Book,
} from "lucide-react";

interface InitialData {
  branding: string;
  businessPlan: string;
  marketingStrategy: string;
  legalGuide: string;
}

interface DashIndexProps {
  initialData: InitialData;
}

// Helper functions for parsing the AI response
const parseAIResponse = (response: string | undefined | null) => {
  if (!response) {
    // If the response is null or undefined, return an empty structure
    return {
      logoConcept: "",
      colorPalette: {
        text: "",
        hexColors: [],
      },
      typography: {
        fonts: [],
        styles: [],
        weights: [],
      },
    };
  }

  // Extract 'Logo Concept'
  const logoConceptMatch = response.match(/Logo Concept:\n([\s\S]*?)\nColor Palette:/);
  const logoConcept = logoConceptMatch ? logoConceptMatch[1].trim() : "";

  // Extract 'Color Palette'
  const colorPaletteMatch = response.match(/Color Palette:\n([\s\S]*?)\nTypography:/);
  const colorPalette = colorPaletteMatch ? colorPaletteMatch[1].trim() : "";

  // Extract 'Typography'
  const typographyMatch = response.match(/Typography:\n([\s\S]*)/);
  const typography = typographyMatch ? typographyMatch[1].trim() : "";

  // Return structured data
  return {
    logoConcept,
    colorPalette: {
      text: colorPalette,
      hexColors: extractHexColors(colorPalette), // Uses the `extractHexColors` function
    },
    typography: {
      fonts: extractFonts(typography), // Uses the `extractFonts` function
    },
  };
};


const extractHexColors = (colorPalette: string) => {
  // Regex to match hex color codes
  const hexRegex = /#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})/g;
  return colorPalette.match(hexRegex) || [];

};

const extractFonts = (typography: string) => {
  const fontRegex = /(serif|sans-serif|script)/gi;
  return typography.match(fontRegex) || [];
};

const DashIndex: React.FC<DashIndexProps> = ({ initialData }) => {
  const [activeTopic, setActiveTopic] = useState("Branding");
  const brandingData = parseAIResponse(initialData.branding);
  
  const topics = [
    {
      label: "Branding",
      content: initialData.branding,
      stats: [
        { label: "Logo Concept", value: "Wine Glass & Vine", icon: Palette, trend: "In Progress" },
        { label: "Color Palette", value: "Burgundy & Olive", icon: Shield, trend: "Approved" },
        { label: "Typography", value: "Serif + Sans", icon: Type, trend: "Selected" },
        { label: "Voice & Tone", value: "Friendly Expert", icon: MessageSquare, trend: "Defined" },
      ],
    },
    {
      label: "Business Plan",
      content: initialData.businessPlan,
      stats: [
        { label: "Projected Revenue", value: "$200K", icon: DollarSign, trend: "Year 1" },
        { label: "Market Growth", value: "10%", icon: TrendingUp, trend: "CAGR" },
        { label: "Target Markets", value: "3", icon: Users, trend: "Identified" },
        { label: "Startup Cost", value: "$150K", icon: Building, trend: "Estimated" },
      ],
    },
    {
      label: "Marketing Strategy",
      content: initialData.marketingStrategy,
      stats: [
        { label: "Target Age Range", value: "25-55", icon: Users, trend: "Primary" },
        { label: "Income Level", value: "$60K+", icon: DollarSign, trend: "Annual" },
        { label: "Partnerships", value: "15+", icon: TrendingUp, trend: "Active" },
        { label: "Content Reach", value: "50K", icon: MessageSquare, trend: "Monthly" },
      ],
    },
    {
      label: "Legal Guide",
      content: initialData.legalGuide,
      stats: [
        { label: "Compliance Rate", value: "100%", icon: Shield, trend: "Maintained" },
        { label: "Insurance Coverage", value: "4", icon: FileText, trend: "Types" },
        { label: "Legal Documents", value: "25+", icon: Book, trend: "Updated" },
        { label: "Safety Score", value: "98%", icon: TrendingUp, trend: "Excellent" },
      ],
    },
  ];

  return (
    <div className="dash-tabs">
      <DashboardLayout onTopicChange={setActiveTopic}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {topics.find((t) => t.label === activeTopic)?.stats.map((stat, index) => (
            <Card key={index} className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                  {stat.trend && (
                    <span
                      className={`text-sm ${
                        stat.trend.startsWith("+") ? "text-green-500" : "text-muted-foreground"
                      }`}
                    >
                      {stat.trend}
                    </span>
                  )}
                </div>
                <stat.icon className="h-8 w-8 text-muted-foreground/50" />
              </div>
            </Card>
          ))}
        </div>

        {topics.map((topic) => (
          <div key={topic.label} className={activeTopic === topic.label ? "block" : "hidden"}>
            <TopicCard title={topic.label} isVisible content={topic.content} />
          </div>
        ))}
      </DashboardLayout>
    </div>
  );
};

export default DashIndex;
