import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
}

const Card = ({ title, subtitle, className, children, ...props }: CardProps) => {
  return (
    <div className="dash-tabs">
      <div
        className={cn(
          "bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in",
          className
        )}
        {...props}
      >
        {title && <h3 className="text-lg font-semibold mb-1">{title}</h3>}
        {subtitle && <p className="text-sm text-gray-500 mb-4">{subtitle}</p>}
        {children}
      </div>
    </div>
  );
};

export default Card;