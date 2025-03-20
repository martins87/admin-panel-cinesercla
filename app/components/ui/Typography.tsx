import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type TypographyProps = {
  children: string | ReactNode;
  className?: string;
  font?: "neue-montreal" | "proxima-nova";
  weight?: "400" | "500" | "700";
  maxChar?: number;
  onClick?: () => void;
};

const Typography: FC<TypographyProps> = ({
  children,
  className,
  font = "neue-montreal",
  weight = "400",
  maxChar,
  onClick,
}) => {
  return (
    <span
      className={twMerge(
        "text-black/90",
        font === "neue-montreal"
          ? "font-[family-name:var(--font-neue-montreal)]"
          : "font-[family-name:var(--font-gellix)]",
        weight === "400"
          ? "font-normal"
          : weight === "500"
          ? "font-medium"
          : "font-bold",
        className
      )}
      onClick={onClick}
    >
      {maxChar
        ? children!.toString().length > maxChar
          ? `${children!.toString().slice(0, maxChar)}...`
          : children!.toString()
        : children}
    </span>
  );
};

export default Typography;
