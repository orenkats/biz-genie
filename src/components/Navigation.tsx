import { UserPlus } from "lucide-react";
import { Button } from "./ui/button";
import { LoginDialog } from "./LoginDialog";
import { SignUpDialog } from "./SignUpDialog";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="h-20 flex justify-between items-center">
          <div className="text-2xl font-bold text-white">
            Logo
          </div>
          
          <div className="flex items-center gap-4">
            <LoginDialog />
            
            <SignUpDialog />
            
          </div>
        </div>
      </div>
    </nav>
  );
};