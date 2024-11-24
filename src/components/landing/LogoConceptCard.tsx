import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Paintbrush } from "lucide-react";

const LogoConceptCard = () => {
  return (
    <Card className="hover:scale-105 transition-transform duration-300">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <Paintbrush className="h-5 w-5 text-secondary" />
          <CardTitle className="text-xl text-primary font-primary">Logo Concept</CardTitle>
        </div>
      </CardHeader>
      <CardContent className=" flex flex-col h-36">
        <div className=" space-y-4">
          <div className=" p-2 bg-[#86A789]/10 rounded-lg">
            <h4 className="font-semibold mb-1">Design Elements</h4>
            <ul className=" space-y-1 text-sm text-gray-600">
              <div className="h-20"> 
              <li >• Organic leaf motif with sage color palette</li>
              <li>• Eco-friendly typography with natural curves</li>
              
              </div>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LogoConceptCard;