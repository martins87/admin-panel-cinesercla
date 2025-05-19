"use client";

import { FC, ReactNode } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

import Centered from "./Centered";
import Typography from "./Typography";
import Footer from "../Footer";
import { arrowLeft } from "@/app/constants/icons";

type PageProps = {
  children: ReactNode;
  rightColumn?: ReactNode;
  title: string;
  subtitle?: string;
  pageHeader?: ReactNode;
  className?: string;
  backArrow?: boolean;
  backUrl?: string;
};

const Page: FC<PageProps> = ({
  children,
  rightColumn,
  title,
  subtitle,
  pageHeader,
  className,
  backArrow,
  backUrl,
}) => {
  const router = useRouter();

  const navigateBack = () => (backUrl ? router.push(backUrl) : router.back());

  return (
    <div
      className={twMerge(
        "w-[95%] h-full flex flex-col items-center justify-start mx-auto my-10",
        className
      )}
    >
      <Centered
        className="gap-y-4 mb-4"
        direction="col"
        items="start"
        justify="between"
      >
        <Centered className="gap-x-2" justify="start">
          {backArrow && (
            <Image
              className="w-14 aspect-auto hover:cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out"
              src={arrowLeft}
              alt="arrow left"
              onClick={navigateBack}
            />
          )}
          <Typography className="text-5xl" weight="500">
            {title}
          </Typography>
        </Centered>
        {subtitle && (
          <Typography className="text-xl" weight="400">
            {subtitle}
          </Typography>
        )}
        {pageHeader && (
          <Centered className="mt-6" justify="start">
            {pageHeader}
          </Centered>
        )}
      </Centered>
      <Centered className="gap-x-4" items="start" justify="start">
        <Centered
          className="h-full border rounded-lg p-4 gap-y-4 bg-white"
          direction="col"
          items="start"
          justify="start"
        >
          {children}
        </Centered>
        {rightColumn}
      </Centered>
      <Footer />
    </div>
  );
};

export default Page;
