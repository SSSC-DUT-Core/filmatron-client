import { MainNav } from "@/src/components/nav";
import { ThemeToggle } from "@/src/components/theme-toggle";

const Navbar = () => {

  return ( 
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
        </div>
      </div>
    </div>
  );
};
 
export default Navbar;
