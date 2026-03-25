import * as React from "react";

import { cn } from "@/lib/utils";

export function Badge({
  className,
  children,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-[#C5963E]/25 bg-[#C5963E]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#F6D28E]",
        className
      )}
    >
      {children}
    </div>
  );
}
