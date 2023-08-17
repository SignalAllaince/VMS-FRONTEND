import { ReactNode } from "react";

interface Backdrop {
  children: ReactNode;
}
export default function Backdrop({ children }: Backdrop) {
  return (
    <div className="fixed left-0 top-0 w-full h-screen overflow-scroll bg-[#000000a8] flex justify-center items-center z-20">
      {children}
    </div>
  );
}
