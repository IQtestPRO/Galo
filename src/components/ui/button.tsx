import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold tracking-[0.02em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5963E]/50 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-[#C5963E] via-[#E0B666] to-[#A06F28] px-6 py-3 text-[#081613] shadow-halo hover:translate-y-[-1px] hover:brightness-105",
        secondary:
          "border border-white/12 bg-white/5 px-6 py-3 text-[#F4EDDE] hover:border-[#C5963E]/40 hover:bg-white/10",
        ghost:
          "px-4 py-2 text-[#F4EDDE]/80 hover:bg-white/5 hover:text-[#F4EDDE]",
      },
      size: {
        default: "h-11",
        lg: "h-12 px-7",
        sm: "h-9 px-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
