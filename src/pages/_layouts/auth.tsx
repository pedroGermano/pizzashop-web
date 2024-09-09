import { Outlet } from "react-router-dom";
import { Pizza } from "lucide-react";

export function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-2">
      <div className="flex flex-col justify-between h-full p-10 border-r border-foreground/5 bg-muted text-muted-foreground">
        <div className="flex items-center gap-3 text-lg text-foreground">
          <Pizza className="w-5 h-5" />
          <span className="font-semibold">pizza.shop</span>
        </div>
        <footer className="text-sm">
          Painel do parceiro &copy; pizza.shop - {new Date().getFullYear()}
        </footer>
      </div>
      <div className="relative flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
}
