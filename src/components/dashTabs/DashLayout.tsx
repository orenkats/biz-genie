import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Shield,
  Briefcase,
  Target,
  FileText,
} from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
  onTopicChange: (topic: string) => void;
}

const DashboardLayout = ({ children, onTopicChange }: DashboardLayoutProps) => {
  const navItems = [
    { icon: Shield, label: "Branding", href: "/" },
    { icon: Briefcase, label: "Business Plan", href: "/business" },
    { icon: Target, label: "Marketing Strategy", href: "/marketing" },
    { icon: FileText, label: "Legal Guide", href: "/legal" },
  ];

  return (
    <div className="dash-tabs">
      <div className="min-h-screen bg-background">
        <header className="border-b">
          <div className="container mx-auto px-4 py-4">
            <h1 className="text-2xl font-bold text-center mb-6">Your Dashboard Business Plan</h1>
            <Tabs defaultValue={navItems[0].label} onValueChange={onTopicChange}>
              <TabsList className="w-full justify-center gap-2 ">
                {navItems.map((item) => (
                  <TabsTrigger
                    key={item.label}
                    value={item.label}
                    className="flex items-center gap-2 px-4"
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;