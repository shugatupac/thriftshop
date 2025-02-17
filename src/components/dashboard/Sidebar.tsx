import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Package2,
  ShoppingCart,
  Grid,
  Settings,
  Home,
  LogOut,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const NavItem = ({
  icon = <Home className="h-5 w-5" />,
  label = "Nav Item",
  active = false,
  onClick = () => {},
}: NavItemProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="lg"
            className={cn(
              "w-full justify-start gap-4 px-4",
              active && "bg-primary/10 text-primary",
            )}
            onClick={onClick}
          >
            {icon}
            <span>{label}</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

interface SidebarProps {
  activeItem?: string;
  onNavigate?: (item: string) => void;
}

const Sidebar = ({
  activeItem = "dashboard",
  onNavigate = () => {},
}: SidebarProps) => {
  const navItems = [
    {
      icon: <Home className="h-5 w-5" />,
      label: "Dashboard",
      id: "dashboard",
    },
    {
      icon: <Package2 className="h-5 w-5" />,
      label: "Products",
      id: "products",
    },
    {
      icon: <ShoppingCart className="h-5 w-5" />,
      label: "Orders",
      id: "orders",
    },
    {
      icon: <Grid className="h-5 w-5" />,
      label: "Categories",
      id: "categories",
    },
  ];

  return (
    <div className="w-[280px] h-full bg-white border-r p-4 flex flex-col">
      <div className="flex items-center gap-2 px-4 py-6">
        <Package2 className="h-6 w-6 text-primary" />
        <h1 className="text-xl font-bold">Thrift Store</h1>
      </div>

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => (
          <NavItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            active={activeItem === item.id}
            onClick={() => onNavigate(item.id)}
          />
        ))}
      </nav>

      <div className="border-t pt-4 space-y-2">
        <NavItem
          icon={<Settings className="h-5 w-5" />}
          label="Settings"
          onClick={() => onNavigate("settings")}
          active={activeItem === "settings"}
        />
        <NavItem
          icon={<LogOut className="h-5 w-5" />}
          label="Logout"
          onClick={() => console.log("Logout clicked")}
        />
      </div>
    </div>
  );
};

export default Sidebar;
