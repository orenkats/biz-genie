import { Button } from "@/components/ui/button";
import { LoginDialog } from "./LoginDialog";
import { SignUpDialog } from "./SignUpDialog";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-gray-900">
              BizGenie
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8 ">
            <LoginDialog />
            
            <SignUpDialog />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;