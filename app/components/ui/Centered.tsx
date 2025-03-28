import { forwardRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type CenteredProps = {
  children: ReactNode;
  className?: string;
  items?: "center" | "start" | "end";
  direction?: "row" | "col";
  justify?: "center" | "start" | "end" | "between" | "around";
  onClick?: () => void;
};

const Centered = forwardRef<HTMLDivElement, CenteredProps>(
  ({ children, className, direction, items, justify, onClick }, ref) => {
    return (
      <div
        ref={ref}
        className={twMerge(
          "w-full flex",
          items === "start"
            ? "items-start"
            : items === "end"
            ? "items-end"
            : "items-center",
          direction === "col" ? "flex-col" : "flex-row",
          justify === "start"
            ? "justify-start"
            : justify === "end"
            ? "justify-end"
            : justify === "between"
            ? "justify-between"
            : justify === "around"
            ? "justify-around"
            : "justify-center",
          className
        )}
        onClick={onClick}
      >
        {children}
      </div>
    );
  }
);

Centered.displayName = "Centered";

export default Centered;
