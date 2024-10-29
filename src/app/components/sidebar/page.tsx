"use client";
import {
  LayoutDashboard,
  LifeBuoy,
  Package,
  Settings,
  User,
  UserCircle,
} from "lucide-react";
import Wrapper from "../(shared)/Wrapper";
import Sidebar, { SidebarItem } from "./Sidebar";
import { SidebarCode } from "./SidebarCode";

const PlanSelectorPage = () => {
  const imports = `import { Sidebar, SidebarItem } from "compcrafter"`;
  const usage = `<Sidebar>
  <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" alert />
  <SidebarItem icon={<UserCircle size={20} />} text="Users" active />
  <SidebarItem icon={<User size={20} />} text="Inventory" />
  <SidebarItem icon={<Package size={20} />} text="Orders" alert />
  <hr className="my-3" />
  <SidebarItem icon={<Settings size={20} />} text="Settings" />
  <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
</Sidebar>`;

  return (
    <Wrapper
      title="Plan Selector"
      description="A component that allows users to select from a set of predefined plans, 
      displaying each plan's features, price, and other details."
      component={
        <div className="h-3/4 md:py-7 py-5">
          <Sidebar>
            <SidebarItem
              icon={<LayoutDashboard size={20} />}
              text="Dashboard"
              alert
            />
            <SidebarItem icon={<UserCircle size={20} />} text="Users" active />
            <SidebarItem icon={<User size={20} />} text="Inventory" />
            <SidebarItem icon={<Package size={20} />} text="Orders" alert />
            <hr className="my-3" />
            <SidebarItem icon={<Settings size={20} />} text="Settings" />
            <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
          </Sidebar>
        </div>
      }
      code={SidebarCode}
      embedId="NFrFhBJPTmI"
      imports={imports}
      usage={usage}
    />
  );
};

export default PlanSelectorPage;
