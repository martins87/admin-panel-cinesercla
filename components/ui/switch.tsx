"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

type SwitchProps = {
  className?: string;
  value: boolean;
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
};

const Switch: React.FC<SwitchProps> = ({
  className,
  value: checked,
  setValue,
}) => {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-5 w-9 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 hover:cursor-pointer",
        checked ? "bg-[#0057FC] " : "bg-input dark:bg-input/80",
        className
      )}
      onClick={() => setValue(!checked)}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "bg-background pointer-events-none block size-4 rounded-full ring-0 transition-transform",
          checked
            ? "dark:bg-primary-foreground translate-x-[calc(100%+1px)]"
            : "dark:bg-foreground translate-x-[1.5px]"
        )}
      />
    </SwitchPrimitive.Root>
  );
};

export default Switch;
