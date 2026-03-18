import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="flex items-center justify-center min-h-screen bg-background bg-(image:--color-foreground)">
      {children}
    </main>
  );
};
