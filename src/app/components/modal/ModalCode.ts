export const ModalCode = 
`import { useEffect } from 'react';
import { X } from "lucide-react";
import { ReactNode } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ open, onClose, children }: ModalProps) {
  // Effect to prevent scroll on body when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'; // Disable scroll
    } else {
      document.body.style.overflow = 'unset'; // Enable scroll
    }

    // Cleanup function to reset the overflow style
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  return (
    // backdrop
    <div
      onClick={onClose}
      className={\`
        z-50 fixed inset-0 flex justify-center items-center transition-colors
       \${open ? "visible bg-black/80" : "invisible"}
      \`}
    >
      {/* modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={\`bg-zinc-900 rounded-xl shadow p-6 border transition-all
        \${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
        \`}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 text-gray-200 hover:text-gray-300"
        >
          <X />
        </button>
        {children}
      </div>
    </div>
  );
}`