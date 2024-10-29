"use client";
import { LogOut, Package, Settings, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Wrapper from "../(shared)/Wrapper";
import Dropdown, { DropdownItem } from "./Dropdown";
import { DropdownCode } from "./DropdownCode";
import { DropdownUsage } from "./DropdownUsage";

const PlanSelectorPage = () => {
const imports = `import { Dropdown, DropdownItem } from "compcrafter"`;
  
  return (
    <Wrapper
      title="Dropdown"
      description="A component that provides a toggleable menu, allowing users to select an option or trigger an action."
      component={
        <div>
          <Dropdown
            trigger={
              <button
                className="bg-blue-700 px-4 py-2 
            text-gray-200 rounded-xl font-bold"
              >
                Menu
              </button>
            }
          >
            <DropdownItem>
              <Image
                src="https://api.dicebear.com/9.x/initials/svg?seed=Luis"
                alt="avatar"
                className="w-12 rounded-full"
              />
              <div className="py-2">
                <p className="font-medium">Luis Udell</p>
                <a href="" className="text-sm font-medium text-gray-400">
                  luisudell@gmail.com
                </a>
              </div>
            </DropdownItem>
            <DropdownItem>
              <ShoppingCart size={20} /> Cart
            </DropdownItem>
            <DropdownItem>
              <Package size={20} /> Orders
            </DropdownItem>
            <DropdownItem>
              <Settings size={20} />
              Preferences
            </DropdownItem>
            <DropdownItem>
              <LogOut size={20} /> Logout
            </DropdownItem>
          </Dropdown>
        </div>
      }
      code={DropdownCode}
      embedId="PATgbxhcHvg"
      imports={imports}
      usage={DropdownUsage}
    />
  );
};

export default PlanSelectorPage;
