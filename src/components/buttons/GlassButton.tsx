import React, { ReactNode } from "react";

export default function GlassButton({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  return (
    <button className="bg-blue-100 opacity-25 rounded-[100px] text-black px-[14px] h-[36px] font-semibold">
      <a href={href}>{children}</a>
    </button>
  );
}
