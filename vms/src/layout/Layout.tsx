import { ReactNode } from "react";
import Header from "../components/header";
import SideBar from "../components/sidebar";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  return (
    <div className={`${location.pathname !== "/login" && "pt-4"} bg-[#FAFAFF]`}>
      {location.pathname !== "/login" && <Header />}
      {location.pathname !== "/login" && <SideBar />}
      {children}
    </div>
  );
}
