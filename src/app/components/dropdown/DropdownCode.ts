
export const DropdownCode = 
`import React, { useState } from "react";
import useClickOutsideHook from "./useClickOutsideHook";
import { useEffect, useRef } from "react";

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
          className="min-w-max absolute right-0 mt-2 bg-zinc-900 divide-y 
        divide-gray-600 rounded-lg shadow overflow-hidden"
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

export interface UseClickOutsideHookProps {
  callbackFn: () => void;
}

export function useClickOutsideHook({
  callbackFn,
}: UseClickOutsideHookProps) {

  let domNodeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let handler = (event: MouseEvent) => {
      if (
        domNodeRef.current &&
        !domNodeRef.current.contains(event.target as Node)
      ) {
        callbackFn();
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return domNodeRef;
}

export default Dropdown;`