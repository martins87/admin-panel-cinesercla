"use client";

import { FC, ReactNode } from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { twMerge } from "tailwind-merge";
import Typography from "./Typography";

type ButtonProps = {
  label: string | ReactNode;
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  quaternary?: boolean;
  className?: string;
  icon?: StaticImport;
  onClick?: () => void;
};

const Button: FC<ButtonProps> = ({
  label,
  primary,
  secondary,
  tertiary,
  quaternary,
  className,
  icon,
  onClick,
}) => {
  return (
    <button
      className={twMerge(
        "group flex items-center justify-center gap-x-3 px-5 py-3 rounded-lg transition-all duration-200 border-2",
        primary
          ? "bg-[#0057FC] text-white hover:bg-[#0057FC]/90 border-[#0057FC]"
          : secondary
          ? "bg-white text-[#0057FC] border-[#0057FC] hover:bg-white/90"
          : tertiary
          ? "bg-white text-gray-700 border-[#CED4DA] hover:bg-white/90"
          : quaternary
          ? "bg-white text-gray-700 border-[#CED4DA] hover:bg-white/90 flex-row-reverse"
          : "",
        className
      )}
      onClick={onClick}
    >
      <Typography
        className={twMerge(
          "text-sm tracking-wider", 
          primary ? "text-white" : secondary ? "text-[#0057FC]" : tertiary || quaternary ? "text-gray-700" : ""
        )}
      >
        {label}
      </Typography>
      {icon && <Image src={icon} alt="button icon" />}
    </button>
  );
};

export default Button;
