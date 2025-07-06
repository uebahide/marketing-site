import React, { ReactNode } from "react";

export default function CtaButton({ children }: { children: ReactNode }) {
  return (
    <button className="rounded-[100px] bg-black text-white px-[14px] h-[36px] font-semibold">
      {children}
    </button>
  );
}
