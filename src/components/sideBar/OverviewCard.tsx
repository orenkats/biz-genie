import ColorPaletteCard from "@/components/sideBar/ColorPaletteCard";
import TypoCard from "@/components/sideBar/TypoCard";
import TargetCostumerCard from "@/components/sideBar/TargetCostumerCard";


const OverviewCard: React.FC<{ data: { colorPalette: any; typography: any; customerAnalysis: any } }> = ({ data }) => {
  console.log("Rendering OverviewCard with data:", data);

  return (
    <div className="grid gap-4">
      {/* Color Palette */}
      {data.colorPalette && <ColorPaletteCard colors={data.colorPalette} />}

      {/* Typography */}
      {data.typography && <TypoCard fonts={data.typography} />}

      {/* Customer Analysis */}
      {data.customerAnalysis && <TargetCostumerCard data={data.customerAnalysis} />}
    </div>
  );
};


export default OverviewCard;
