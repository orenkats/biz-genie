import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import ColorPaletteCard from "@/components/sideBar/ColorPaletteCard";
import TypoCard from "@/components/sideBar/TypoCard";
import CustomerAnalysisCard from "@/components/sideBar/TargetCostumerCard";

const OverviewCard: React.FC<{ data: any }> = ({ data }) => {
  return (
    
    <div className="flex w-full h-full ">
      
      <ResizablePanelGroup direction="horizontal" className="flex-1">
        {/* Color Palette Panel */}
        <ResizablePanel
          defaultSize={50} // Initial size as a percentage
          minSize={20}     // Minimum size as a percentage
          maxSize={50}     // Maximum size as a percentage
        >
          <div className="p-4"> {/* Add padding */}
            {data.colorPalette && <ColorPaletteCard colors={data.colorPalette} />}
          </div>  
          <div className="p-4"> {/* Add padding */}
            {data.typography && <TypoCard fonts={data.typography} />}
          </div>
        </ResizablePanel>
        
        {/* Customer Analysis Panel */}
        <ResizablePanel
          defaultSize={25}
          minSize={20}
          maxSize={50}
        >
          <div className="p-4">
            {data.customerAnalysis && (<CustomerAnalysisCard data={data.customerAnalysis} />)}
          </div>
          
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default OverviewCard;
