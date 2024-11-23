import { Card, CardHeader, CardContent } from "@/components/ui/card";

const TypoCard: React.FC<{ fonts: { type: string; description: string }[] }> = ({ fonts }) => {
    return (
      <Card>
        <CardHeader>Typography</CardHeader>
        <CardContent>
          {fonts.map((font, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-bold">{font.type}</h3>
              <p className="text-gray-500">{font.description}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    );
  };
  
  export default TypoCard;
  