import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { ScrollArea } from "@/components/ui/scroll-area";
import ContentCard from "@/components/sideBar/ContentCard";
import { BusinessPlanSidebar } from "@/components/sideBar/BusinessPlanSidebar";
import { fetchDashboardData } from "@/utils/FetchData";
import { PayDialog } from "@/components/PayDialog";
import  OverviewCard  from "@/components/sideBar/OverviewCard";
import classNames from "classnames";

interface Subtopics {
  [key: string]: string; // Each subtopic has a string as content
}

interface DashboardData {
  overview: {full : string};  
  branding: { full: string; subtopics: Subtopics };
  businessPlan: { full: string; subtopics: Subtopics };
  marketingStrategy: { full: string; subtopics: Subtopics };
  legalGuide: { full: string; subtopics: Subtopics };
}

const BusinessPlan = () => {
  const router = useRouter();
  const { businessIdea, businessName } = router.query; 
  const businessIdeaString = Array.isArray(businessIdea) ? businessIdea[0] : businessIdea || "";
  const businessNameString = Array.isArray(businessName) ? businessName[0] : businessName || "";
  const [selectedItem, setSelectedItem] = useState<string | null>("Overview");
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    // Fetch data when component mounts
    const fetchData = async () => {
      setIsLoading(true);
      const data = await fetchDashboardData(businessIdeaString);
      setDashboardData(data);
      setIsLoading(false);
    };

    fetchData();
  }, [businessIdea]);

  useEffect(() => {
    // Trigger the dialog 3 seconds after data is loaded
    if (!isLoading) {
      const timer = setTimeout(() => {
        setIsDialogOpen(true);
      }, 3000);

      return () => clearTimeout(timer); // Cleanup timer if component unmounts
    }
  }, [isLoading]);

  const renderContent = () => {
    if (!selectedItem) {
      return (
        <div className="flex items-center justify-center h-full">
          <h1
            className={classNames(
              "absolute top-0 w-full text-center mt-4 z-10 text-3xl font-bold text-primary",
              { "animate-pulse": isLoading }
            )}
          >
            {isLoading ? "Generating Your Business Plan..." : "Business Plan Ready!"}
          </h1>
        </div>
      );
    }

    if (selectedItem === "Overview" && dashboardData) {
        return (
          <OverviewCard
            title="Overview"
            content={dashboardData.overview?.full || "No data available for Overview"}
          />
        );
      }

    // Retrieve content for the selected item
    const content = Object.values(dashboardData || {}).reduce((acc, section: any) => {
      return acc || section.subtopics?.[selectedItem] || null;
    }, null);

    return (
      <div className={isDialogOpen ? "blur-sm pointer-events-none" : ""}>
        <ContentCard title={selectedItem} content={content} />
      </div>
    );
  };

  return (
    <div className="flex h-screen">
      <ScrollArea className="h-screen w-[300px] border-r bg-background">
        <BusinessPlanSidebar 
          onItemSelect={setSelectedItem} 
          businessName={businessNameString}  
        />
      </ScrollArea>
      <main className="flex-1 p-8 flex justify-center">
        <div className="w-full max-w-4xl">{renderContent()}</div>
      </main>

      {/* PayDialog */}
      <PayDialog onOpenChange={(isOpen) => setIsDialogOpen(isOpen)} open={isDialogOpen} />
    </div>
  );
};

export default BusinessPlan;
