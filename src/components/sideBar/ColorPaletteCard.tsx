import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette } from "lucide-react";

interface ColorPaletteCardProps {
  colors: Array<{ name: string; hex: string }>;
}

const ColorPaletteCard: React.FC<ColorPaletteCardProps> = ({ colors }) => {
  return (
    <Card className="hover:scale-105 transition-transform duration-300">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <Palette className="h-5 w-5 text-primary" />
          <CardTitle className="text-xl text-primary">Color Palette</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {colors.map((color, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 group cursor-pointer"
            >
              <div
                className="w-10 h-10 rounded-full shadow-lg transform transition-all duration-300 group-hover:scale-110 flex-shrink-0"
                style={{ backgroundColor: color.hex }} // Dynamically apply the background color
              />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{color.name}</span> {/* Display color name */}
                  <span className="text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    {color.hex}
                  </span>
                </div>
                <div
                  className="h-0.5 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  style={{ backgroundColor: color.hex }} // Use the color for the underline
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ColorPaletteCard;
