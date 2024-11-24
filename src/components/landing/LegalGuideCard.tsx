import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollText, Building2, FileCheck, Shield } from "lucide-react";

const LegalGuideCard = ({ className = "" }) => {
  return (
    <Card className={`hover:scale-105 transition-transform duration-300 ${className}`}>
      <CardHeader className=" flex items-center pb-2 ">
        <div className="flex items-center space-x-2">
          <ScrollText className="h-5 w-5 text-secondary" />
          <CardTitle className="text-xl center text-primary font-primary">Legal Guide</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        {/* <h3 className="font-semibold mb-2 text-base text-center ">Key Requirements</h3> */}
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col items-center p-2 bg-secondary/10 rounded-lg hover:bg-secondary/20 transition-colors text-center group">
            <Building2 className="h-6 w-6 text-primary mb-1 group-hover:scale-110 transition-transform" />
            <p className="font-medium text-sm">Business Registration</p>
          </div>
          <div className="flex flex-col items-center p-2 bg-secondary/10 rounded-lg hover:bg-secondary/20 transition-colors text-center group">
            <FileCheck className="h-6 w-6 text-primary mb-1 group-hover:scale-110 transition-transform" />
            <p className="font-medium text-sm">Licensing & Permits</p>
          </div>
          <div className="flex flex-col items-center p-2 bg-secondary/10 rounded-lg hover:bg-secondary/20 transition-colors text-center group">
            <ScrollText className="h-6 w-6 text-primary mb-1 group-hover:scale-110 transition-transform" />
            <p className="font-medium text-sm">Tax Compliance</p>
          </div>
          <div className="flex flex-col items-center p-2 bg-secondary/10 rounded-lg hover:bg-secondary/20 transition-colors text-center group">
            <Shield className="h-6 w-6 text-primary mb-1 group-hover:scale-110 transition-transform" />
            <p className="font-medium text-sm">Insurance Needs</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LegalGuideCard;