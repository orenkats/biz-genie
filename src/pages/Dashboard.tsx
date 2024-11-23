import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import LoadingScreen from "@/components/dashTabs/LoadingScreen"; 
import DashIndex from "@/components/dashTabs/DashIndex"; // Adjust the path based on your folder structure
import { fetchDashboardData } from "@/utils/fetchDashboardData"; // Adjust the path based on your folder structure

const DashboardPage = () => {
  const router = useRouter();
  const { businessIdea } = router.query;

  const [data, setData] = useState({
    branding: "",
    businessPlan: "",
    marketingStrategy: "",
    legalGuide: "",
  });
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [showDialog, setShowDialog] = useState(false);

  // Fetch data when the businessIdea is available
  useEffect(() => {
    if (businessIdea) {
      const loadData = async () => {
        try {
          const fetchedData = await fetchDashboardData(businessIdea as string);
          setData(fetchedData); // Populate state with fetched data
        } catch (error) {
          console.error("Error fetching dashboard data:", error);
        } finally {
          setIsLoading(false); // Stop loading
        }
      };

      loadData();
    }
  }, [businessIdea]);

  // Show a loading state if the data is still being fetched
  if (isLoading) {
    return (
      <LoadingScreen/>
    );
  }

  return (
    <div className="dashboard-page">
      <DashIndex initialData={data} /> {/* Pass the fetched data as a prop */}
    </div>
  );
};

export default DashboardPage;
