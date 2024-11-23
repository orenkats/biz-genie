import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface PayDialogProps {
  open: boolean; // Controlled open state from parent
  onOpenChange: (isOpen: boolean) => void; // Notify parent when dialog state changes
}

export const PayDialog: React.FC<PayDialogProps> = ({ open, onOpenChange }) => {
  const { toast } = useToast();

  const handleClose = () => {
    onOpenChange(false); // Notify parent when dialog closes
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Login Attempted",
      description: "Login functionality will be implemented soon.",
    });
    handleClose();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="flex flex-col items-center justify-center text-center">
          <DialogTitle>Unlock Your Business Plan!</DialogTitle>
          <DialogDescription>
            Enter your credentials to access this content.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Full name
            </label>
            <Input id="name" type="text" placeholder="Enter your full name" required />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input id="email" type="email" placeholder="Enter your email" required />
          </div>
          <div className="flex justify-between space-x-4">
            <Button type="button" onClick={handleClose} className="w-full">
              Cancel
            </Button>
            <Button type="submit" className="w-full">
              Proceed to checkout $5
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
