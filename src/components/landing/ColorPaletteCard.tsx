import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette } from "lucide-react";

const ColorPaletteCard = () => {
  return (
    <Card className="hover:scale-105 transition-transform duration-300">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <Palette className="h-5 w-5 text-secondary" />
          <CardTitle className="text-xl text-primary font-primary">Color Palette</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-3">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-[#86A789] shadow-lg transform transition-all duration-300 group-hover:scale-110 flex-shrink-0" />
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <span className="font-medium">Fresh Sage</span>
                <span className="text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">#86A789</span>
              </div>
              <div className="h-0.5 bg-[#86A789] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          </div>

          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-[#B2C8BA] shadow-lg transform transition-all duration-300 group-hover:scale-110 flex-shrink-0" />
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <span className="font-medium">Garden Mist</span>
                <span className="text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">#B2C8BA</span>
              </div>
              <div className="h-0.5 bg-[#B2C8BA] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          </div>

          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-[#D2E3C8] shadow-lg transform transition-all duration-300 group-hover:scale-110 flex-shrink-0" />
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <span className="font-medium">Herb Leaf</span>
                <span className="text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">#D2E3C8</span>
              </div>
              <div className="h-0.5 bg-[#D2E3C8] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          </div>

          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-[#EBF3E8] shadow-lg border border-gray-200 transform transition-all duration-300 group-hover:scale-110 flex-shrink-0" />
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <span className="font-medium">Morning Dew</span>
                <span className="text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">#EBF3E8</span>
              </div>
              <div className="h-0.5 bg-[#EBF3E8] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ColorPaletteCard;