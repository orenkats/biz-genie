import ColorPaletteCard from "@/components/sideBar/ColorPaletteCard";
import TypoCard from "@/components/sideBar/TypoCard";



const OverviewCard: React.FC<{ data: any }> = ({ data }) => {
  return (
    <div className="grid gap-4">
      {/* Color Palette */}
      {data.colorPalette && (
        <ColorPaletteCard colors={data.colorPalette} />
      )}

      {/* Typography */}
      {data.typography && (
        <TypoCard fonts={data.typography} />
      )}

      {/* Add more components as needed */}
    </div>
  );
};

export default OverviewCard;
