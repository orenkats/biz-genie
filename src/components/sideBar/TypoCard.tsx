import { Card, CardHeader, CardContent,CardTitle} from "@/components/ui/card";
import { Pen } from "lucide-react";
interface TypographyProps {
  type: string;
  font: string;
  size: string;
  description: string;
}

const TypoCard: React.FC<{ fonts: string[] }> = ({ fonts }) => {
  return (
    <Card className="hover:scale-105 transition-transform duration-300">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <Pen className="h-5 w-5 text-primary" />
          <CardTitle className="text-xl text-primary">Typography</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {fonts.map((font, index) => (
            <div
              key={index}
              className="text-lg"
              style={{ fontFamily: font }} // Apply the font dynamically
            >
              {font}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TypoCard;
