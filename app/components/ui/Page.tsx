import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

import Centered from "./Centered";
import Typography from "./Typography";
import Footer from "../Footer";

type PageProps = {
  children: ReactNode;
  title: string;
  subtitle?: string;
  className?: string;
};

const Page: FC<PageProps> = ({ children, title, subtitle, className }) => {
  return (
    <div
      className={twMerge(
        "w-[95%] h-full flex flex-col items-center justify-start mx-auto my-10",
        className
      )}
    >
      <Centered
        className="gap-y-4 mb-10"
        direction="col"
        items="start"
        justify="between"
      >
        <Typography className="text-5xl" weight="500">
          {title}
        </Typography>
        {subtitle && (
          <Typography className="text-xl" weight="400">
            {subtitle}
          </Typography>
        )}
      </Centered>
      <Centered className="h-full border rounded-lg bg-white">
        {children}
      </Centered>
      <Footer />
    </div>
  );
};

export default Page;
