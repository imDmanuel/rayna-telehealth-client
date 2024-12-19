import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  beforeComponent?: React.ReactNode;
  afterComponent?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      beforeComponent = null,
      afterComponent = null,
      ...props
    },
    ref
  ) => {
    return (
      <div className="flex h-[3.5rem] w-full rounded-lg outline outline-1 overflow-hidden outline-input text-sm shadow-sm transition-colors focus-within:outline-none focus-within:ring-1 focus-within:ring-ring">
        {beforeComponent}
        <input
          type={type}
          className={cn(
            "flex h-full w-full bg-transparent p-4 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-neutral-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            beforeComponent && "pl-0",
            afterComponent && "pr-0",
            className
          )}
          ref={ref}
          {...props}
        />
        {afterComponent}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
