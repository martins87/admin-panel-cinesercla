import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type PageProps = {
  children: ReactNode;
  className?: string;
};

const Page: FC<PageProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        "w-[95%] h-full flex flex-col items-center justify-start mx-auto my-10",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Page;
