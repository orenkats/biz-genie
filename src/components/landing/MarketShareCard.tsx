import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell } from "recharts";
import { CircleDotDashed } from "lucide-react";

const marketShareData = [
  { name: "Our Cafe", value: 30 },
  { name: "Competitor A", value: 25 },
  { name: "Competitor B", value: 20 },
  { name: "Others", value: 25 },
];

const COLORS = ["#86A789", "#B2C8BA", "#D2E3C8", "#EBF3E8"];

const MarketShareCard = () => {
  return (
    <Card className="hover:scale-105 transition-transform duration-300">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <CircleDotDashed className="h-5 w-5 text-secondary" />
          <CardTitle className="text-xl text-primary font-primary">Market Share Projection</CardTitle>
        </div>  
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <div style={{ width: "100%", height: 285 }}>
          <PieChart width={250} height={250}>
            <Pie
              data={marketShareData}
              cx={125}
              cy={125}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {marketShareData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {marketShareData.map((entry, index) => (
            <div key={entry.name} className="flex items-center">
              <div
                className="w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: COLORS[index] }}
              ></div>
              <span className="text-sm text-gray-600">
                {entry.name}: {entry.value}%
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MarketShareCard;