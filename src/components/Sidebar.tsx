// src/components/Sidebar.tsx
import { Brush, Home, FileText, BarChart3, Shield, CheckSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction } from "react";

interface SidebarProps {
  onTopicChange: (topic: string) => void;
}

const menuItems = [
  { icon: Home, label: "Overview", topic: "overview" },
  { icon: Brush, label: "Branding", topic: "branding" },
  { icon: FileText, label: "Business Plan", topic: "businessPlan" },
  { icon: BarChart3, label: "Marketing Strategy", topic: "marketingStrategy" },
  { icon: Shield, label: "Legal Guide", topic: "legalGuide" },
  { icon: CheckSquare, label: "Execution Plan", topic: "executionPlan" },
];

export const Sidebar = ({ onTopicChange }: SidebarProps) => {
  return (
    <div className="h-screen w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-primary">Dashboard</h2>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.topic}>
                <button
                  onClick={() => onTopicChange(item.topic)}
                  className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-600 hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <Icon className="w-5 h-5" />
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
