import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          "flex h-12 w-full rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-[#F4EDDE] placeholder:text-[#D6D1C6]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5963E]/40",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
