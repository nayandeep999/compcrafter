import React, { useState } from "react";
import useClickOutsideHook from "./useClickOutsideHook";

export interface DropdownProps {
  children: React.ReactNode;
  trigger: React.ReactNode;
}
export interface DropdownItemProps {
  children: React.ReactNode;
}
const Dropdown = ({ children, trigger }: DropdownProps) => {
  const [show, setShow] = useState<boolean>();
  const dropRef = useClickOutsideHook({
    callbackFn: () => setShow(false), // Pass a function, not the result of the function call
  });
  return (
    <div
      className="w-fit relative"
      onClick={() => {
        setShow((curr) => !curr);
      }}
      ref={dropRef}
    >
      <div>{trigger}</div>
      {show && (
        <ul
          className="min-w-max z-50 absolute right-0 mt-2 bg-zinc-900 border divide-y 
        divide-gray-600 rounded-xl shadow overflow-hidden"
        >
          {children}
        </ul>
      )}
    </div>
  );
};

export function DropdownItem({ children }: DropdownItemProps) {
  return (
    <li
      className="flex gap-3 items-center px-4 py-2 transition-colors
     text-gray-200 hover:bg-zinc-800 cursor-pointer"
    >
      {children}
    </li>
  );
}

export default Dropdown;
