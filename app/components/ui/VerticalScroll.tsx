import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type VerticalScrollProps = {
  children: ReactNode;
  className?: string;
};

const VerticalScroll: FC<VerticalScrollProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        "w-full h-auto overflow-y-scroll flex flex-col gap-y-2",
        className
      )}
    >
      {children}
    </div>
  );
};

export default VerticalScroll;
