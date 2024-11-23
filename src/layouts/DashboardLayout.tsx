// src/layouts/DashboardLayout.tsx
import { Sidebar } from "@/components/Sidebar";
import { ReactNode, Dispatch, SetStateAction } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
  onTopicChange: (topic: string) => void;
}

export const DashboardLayout = ({ children, onTopicChange }: DashboardLayoutProps) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar onTopicChange={onTopicChange} /> {/* Pass onTopicChange to Sidebar */}
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
};
