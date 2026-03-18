import { cn } from "@/shared/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";


const buttonVariants = cva(
  "text-center transaction-colors",
  {
    variants: {
      variant: {
        primary:
          "border rounded-lg hover:border-text w-full bg-surface hover:bg-surface-muted text-text hover:text-text-hover border-stroke hover:border-text",
        circle: "py-4 px-4 rounded-full hover:bg-highlight",
      },
      size: {
        default: "",
        lg: "py-4 px-6",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
