import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Logo from "./Logo";
import Nav from "./Nav";
import { Button } from "./ui/button";
// import Socials from "./Socials";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variants="outline" ><AlignJustify className="cursor-pointer" /></Button>
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <Nav
              containerStyle="flex flex-col items-center gap-y-6"
              linkStyle="text-2xl"
            />
          </div>
          {/* <Socials containerStyles="flex gap-x-4" iconsStyles="text-2xl" /> */}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;