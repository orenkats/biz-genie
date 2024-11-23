import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
export function InputEmail() {

    return (
    <div className="flex flex-row justify-center p-1 max-w-sm items-center space-x-2 text-gray-400 " >
      <Input type="email" placeholder="Email" />
      <Button type="submit" className="animate-fade-in bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%] hover:bg-right transition-all duration-500">Subscribe</Button>
    </div>
  )
  }