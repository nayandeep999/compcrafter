export const PLanSelctorCode =
`import { useContext, createContext, ReactNode, ChangeEvent } from "react";

interface PlanSelectorContextType {
  value: string | number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const PlanSelectorContext = createContext<PlanSelectorContextType | undefined>(
  undefined
);

interface PlanSelectorGroupProps {
  value: string | number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  children: ReactNode;
}

export function PlanSelectorGroup({
  value,
  onChange,
  children,
}: PlanSelectorGroupProps) {
  return (
    <PlanSelectorContext.Provider value={{ value, onChange }}>
      {children}
    </PlanSelectorContext.Provider>
  );
}

interface PlanSelectorProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode;
  value: string | number;
}

export function PlanSelector({ children, ...props }: PlanSelectorProps) {
  const context = useContext(PlanSelectorContext);

  if (!context) {
    throw new Error("PlanSelector must be used within a PlanSelectorGroup");
  }

  const { value, onChange } = context;

  return (
    <label
    className={\`
        px-6 py-4 shadow rounded-lg cursor-pointer
        transition-all \${
          value === props.value
            ? "bg-gradient-to-t from-violet-600 to-violet-500 text-white shadow-violet-800 scale-105"
            : "bg-zinc-800 text-white hover:shadow-md shadow-zinc-600"
        }
      \`}
      
    >
      <input
        type="radio"
        className="hidden"
        checked={value === props.value}
        onChange={onChange}
        {...props}
      />
      {children}
    </label>
  );
}

interface PlanProps {
  icon: ReactNode;
  title: string;
  features: string[];
  price: number;
}

export function Plan({ icon, title, features, price }: PlanProps) {
  return (
    <div className="flex gap-4 items-center">
      {icon}
      <div>
        <h3 className="text-lg font-semibold text-gray-100">{title}</h3>
        <p className="text-sm text-gray-100">{features.join(" · ")}</p>
      </div>
      <span className="ml-auto font-medium text-gray-100">\${price}</span>
    </div>
  );
}`