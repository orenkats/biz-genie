import { Users, Building2, Globe2, Award } from "lucide-react";

const stats = [
  {
    icon: <Users className="w-4 h-4 text-primary" />,
    value: "10K+",
    label: "Active Users",
  },
  {
    icon: <Building2 className="w-4 h-4 text-primary" />,
    value: "500+",
    label: "Enterprise Clients",
  },
  {
    icon: <Globe2 className="w-4 h-4 text-primary" />,
    value: "30+",
    label: "Countries",
  },
  {
    icon: <Award className="w-4 h-4 text-primary" />,
    value: "99.9%",
    label: "Uptime",
  },
];

export const Stats = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center gap-4 overflow-x-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center space-x-2 flex-shrink-0">
              <div className="p-2 bg-primary/10 rounded-lg">
                {stat.icon}
              </div>
              <div className="text-left">
                <p className="text-lg font-bold leading-none">{stat.value}</p>
                <p className="text-xs text-gray-600">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};