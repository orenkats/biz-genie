import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TimelineCard = () => {
  return (
    <Card className="hover:scale-105 transition-transform duration-300">
      <CardHeader>
        <CardTitle className="text-xl text-primary">
          Implementation Timeline
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="relative pl-8 border-l-2 border-primary pb-4">
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
            <h3 className="font-semibold">Month 1-2</h3>
            <p className="text-sm text-gray-600">Location securing and permits</p>
          </div>
          <div className="relative pl-8 border-l-2 border-primary pb-4">
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
            <h3 className="font-semibold">Month 3-4</h3>
            <p className="text-sm text-gray-600">Interior design and renovation</p>
          </div>
          <div className="relative pl-8 border-l-2 border-primary pb-4">
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
            <h3 className="font-semibold">Month 5</h3>
            <p className="text-sm text-gray-600">Staff hiring and training</p>
          </div>
          <div className="relative pl-8">
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
            <h3 className="font-semibold">Month 6</h3>
            <p className="text-sm text-gray-600">Grand Opening</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TimelineCard;