export const SidebarCode = 
`import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react"; 
import { useContext, createContext, useState, ReactNode } from "react";

// Define types for the context and props
interface SidebarContextType { expanded: boolean; }
interface SidebarProps { children: ReactNode; }
interface SidebarItemProps { icon: ReactNode; text: string; active?: boolean; alert?: boolean; }

// Create context with the proper type
const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export default function Sidebar({ children }: SidebarProps) { 
    const [expanded, setExpanded] = useState(true); 
    return (
    <aside className="h-screen bg-zinc-900">
      <nav className="h-full flex flex-col bg-zinc-800 border-r 
       border-zinc-700 shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img src="https://img.logoipsum.com/243.svg" 
          className={\`overflow-hidden transition-all \${
            expanded ? "w-32" : "w-0"
          }\`} alt="Logo" />
          <button onClick={() => setExpanded((curr) => !curr)} 
          className="p-1.5 rounded-lg bg-zinc-700 
          hover:bg-zinc-600 text-white">
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>
        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>
        <div className="border-t border-zinc-700 flex p-3">
          <img src="https://ui-avatars.com/api/?background=3730a3&color=c7d2fe&bold=true" 
          alt="Avatar" 
          className="w-10 h-10 rounded-md" />
          <div className={\`flex justify-between items-center 
          overflow-hidden transition-all \${
          expanded ? "w-52 ml-3" : "w-0"
          }\`}>
            <div className="leading-4 text-white">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-400">johndoe@gmail.com</span>
            </div>
            <MoreVertical size={20} className="text-gray-400" />
          </div>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, active = false, alert = false }: SidebarItemProps) {
  const context = useContext(SidebarContext);
  if (!context) { throw new Error("SidebarItem must be used within a Sidebar component."); }
  const { expanded } = context;
  return (
    <li className={\`
        relative flex items-center py-2 px-3 my-1 font-medium rounded-md 
        cursor-pointer transition-colors group
        \${
          active ? "bg-gradient-to-tr from-indigo-700 to-indigo-500 text-white" 
          : "hover:bg-zinc-700 text-gray-400"
        }
      \`}>
      {icon}
      <span className={\`overflow-hidden transition-all \${
        expanded ? "w-52 ml-3" : "w-0"
      }\`}>{text}</span>
      {alert && (
        <div className={\`absolute right-2 w-2 h-2 rounded bg-indigo-400 \${
          expanded ? "" : "top-2"
        }\`} />
      )}
      {!expanded && (
        <div className={\`
            absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-500 text-white text-sm
            invisible opacity-20 -translate-x-3 transition-all group-hover:visible 
            group-hover:opacity-100 group-hover:translate-x-0
          \`}>
          {text}
        </div>
      )}
    </li>
  );
}`;
