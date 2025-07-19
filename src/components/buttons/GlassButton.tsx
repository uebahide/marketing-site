import React, { ReactNode } from "react";
import { cn } from "../../utils/ClassNames";

export default function GlassButton({
  children,
  href,
  className,
}: {
  children: ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <button
      className={cn(
        "bg-blue-100 opacity-25 rounded-[100px] text-black px-[14px] h-[36px] font-semibold shadow-block",
        className
      )}
    >
      <a href={href}>{children}</a>
    </button>
  );
}
