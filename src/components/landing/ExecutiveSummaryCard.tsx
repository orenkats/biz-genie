import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";

const ExecutiveSummaryCard = () => {
  return (
    <Card className="hover:scale-105 transition-transform duration-300">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <FileText className="h-5 w-5 text-secondary" />
          <CardTitle className="text-xl text-primary font-primary">Executive Summary</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 text-sm text-gray-600">
          <p className="text-left leading-relaxed">
            "Green Earth Cafe is a sustainable, eco-conscious dining establishment that embodies the calming essence of sage through its design, menu, and philosophy. We offer a serene dining experience featuring organic..."
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExecutiveSummaryCard;