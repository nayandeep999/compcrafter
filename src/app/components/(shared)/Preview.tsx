// app/components/shared/Preview.tsx
import { FC, ReactNode } from "react";

interface PreviewProps {
  children: ReactNode;
}

const Preview: FC<PreviewProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Preview;
