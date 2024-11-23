import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, MapPin, Laptop } from "lucide-react";

const TargetCustomerCard: React.FC<{ data: { age: string; location: string; engagement: string } }> = ({ data }) => {
  return (
    <Card className="hover:scale-105 transition-transform duration-300 overflow-hidden flex-auto">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <Users className="h-5 w-5 text-primary" />
          <CardTitle className="text-xl text-primary">Target Customer</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-start space-x-3 p-3 bg-secondary/10 rounded-lg hover:bg-secondary/20 transition-colors">
            <Users className="h-5 w-5 text-primary mt-1" />
            <div>
              <p className="font-medium">Age Range</p>
              <p className="text-gray-600">{data.age}</p>
            </div>
          </div>
          <div className="flex items-start space-x-3 p-3 bg-secondary/10 rounded-lg hover:bg-secondary/20 transition-colors">
            <MapPin className="h-5 w-5 text-primary mt-1" />
            <div>
              <p className="font-medium">Location</p>
              <p className="text-gray-600">{data.location}</p>
            </div>
          </div>
          <div className="flex items-start space-x-3 p-3 bg-secondary/10 rounded-lg hover:bg-secondary/20 transition-colors">
            <Laptop className="h-5 w-5 text-primary mt-1" />
            <div>
              <p className="font-medium">Profile</p>
              <p className="text-gray-600">{data.engagement}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};


export default TargetCustomerCard;