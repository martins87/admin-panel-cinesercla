"use client";

import { ReactNode } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

import Typography from "./Typography";

type IconButtonProps = {
  icon: StaticImport | string; // Aceita tanto importação estática quanto URL
  label?: string | ReactNode;
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  rounded?: boolean;
  tooltip?: string;
};

const IconButton = ({
  icon,
  label,
  primary,
  secondary,
  tertiary,
  className,
  onClick,
  disabled,
  size = "md",
  rounded,
  tooltip,
}: IconButtonProps) => {
  const sizeClasses = {
    sm: "h-8 w-8 p-1",
    md: "h-10 w-10 p-2",
    lg: "h-12 w-12 p-2.5",
  };

  return (
    <button
      className={twMerge(
        "group flex items-center justify-center transition-colors ease-in-out duration-200 hover:cursor-pointer",
        primary
          ? "bg-[#0057FC] text-white hover:bg-[#0057FC]/90 border-0"
          : secondary
          ? "bg-white text-[#0057FC] border border-[#0057FC] hover:bg-[#0057FC]/10"
          : tertiary
          ? "bg-white text-gray-700 border border-[#CED4DA] hover:bg-white/90"
          : "",
        disabled &&
          "bg-[#E9ECEF] border-0 hover:bg-[#E9ECEF] hover:cursor-not-allowed",
        sizeClasses[size],
        rounded ? "rounded-full" : "rounded-lg",
        className
      )}
      onClick={onClick}
      title={tooltip}
      disabled={disabled}
    >
      <Image
        src={icon}
        alt={tooltip || "icon button"}
        className={twMerge(
          "transition-transform duration-200",
          disabled ? "opacity-50" : "group-hover:scale-110"
        )}
        width={24}
        height={24}
      />

      {label && (
        <Typography
          className={twMerge(
            "ml-2 text-sm tracking-wider",
            primary
              ? "text-white"
              : secondary
              ? "text-[#0057FC]"
              : tertiary
              ? "text-gray-700"
              : "",
            disabled && "text-[#ADB5BD]"
          )}
        >
          {label}
        </Typography>
      )}
    </button>
  );
};

export default IconButton;
