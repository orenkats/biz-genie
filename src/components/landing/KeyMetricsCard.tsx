import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {Key} from "lucide-react"

const KeyMetricsCard = () => {
  return (
    <Card className="hover:scale-105 transition-transform duration-300">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <Key className="h-5 w-5 text-secondary" />
          <CardTitle className="text-xl text-primary font-primary">Key Metrics</CardTitle>
        </div>  
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