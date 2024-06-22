import * as React from "react";
import { TInputProps } from "@/types";
import 'animate.css'

export const Input = React.forwardRef<HTMLInputElement, TInputProps>(
  ({ children, ...props }, ref) => {
    return (
      <>
        <div className="relative rounded-md 
        border focus-within:border 
        text-color-hitam 
        border-color-secondary focus-within:text-color-hitam focus-within:border-color-secondary dark:text-color-primary dark:border-color-secondary dark:focus-within:border-color-hitam dark:focus-within:text-color-primary hover:border-color-secondary animate__animated animate__fadeInUp animate__delay-0.3s">
          {children && (
            <div className="absolute inset-y-0 start-0 flex items-center ps-2 font-thin text-xl">
              {children}
            </div>
          )}
          <input
            className={`w-full rounded-md p-2 pe-3 dark:bg-color-third font-normal text-sm text-color-dark dark:text-color-primary dark:hover:border-color-hitam ${
              children ? "ps-9" : "ps-3"
            }`}
            ref={ref}
            {...props}
          />
        </div>
      </>
    );
  }
);
Input.displayName = "Input";
