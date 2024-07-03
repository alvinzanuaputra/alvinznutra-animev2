import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap bg-color-white rounded-md border border-color-white hover:border-color-primary dark:text-color-white hover:text-color-accent  dark:bg-color-third dark:hover:border-color-hitam transition-all duration-500",
{
    variants: {
      variant: {
        default:
          "",
        destructive:
          "bg-color-red text-color-primary border-none dark:text-color-primary dark:bg-color-red dark:border-color-red hover:border-color-hitam",
        outline:
          "border-color-hitam dark:border-color-white dark:hover:text-color-accent" ,
        secondary:
          "",
        ghost:
          "my-4",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
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
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
