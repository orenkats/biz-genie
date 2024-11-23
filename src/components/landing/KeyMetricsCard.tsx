import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const KeyMetricsCard = () => {
  return (
    <Card className="hover:scale-105 transition-transform duration-300">
      <CardHeader>
        <CardTitle className="text-xl text-primary">Key Metrics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Customer Satisfaction</span>
              <span className="text-sm text-primary">95%</span>
            </div>
            <Progress value={95} className="h-2" />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Sustainability Score</span>
              <span className="text-sm text-primary">88%</span>
            </div>
            <Progress value={88} className="h-2" />
          </div>
          {/* <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Staff Retention</span>
              <span className="text-sm text-primary">92%</span>
            </div>
            <Progress value={92} className="h-2" />
          </div> */}
        </div>
      </CardContent>
    </Card>
  );
};

export default KeyMetricsCard;