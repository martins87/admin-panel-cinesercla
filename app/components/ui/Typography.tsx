import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type TypographyProps = {
  className?: string;
  font?: "neue-montreal" | "gellix";
  weight?: "400" | "500" | "700" | "800";
  children: string | ReactNode;
  maxChar?: number;
  onClick?: () => void;
};

const Typography: FC<TypographyProps> = ({
  className,
  font = "proxima-nova",
  weight = "700",
  children,
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
        weight === "700"
          ? "font-bold"
          : weight === "800"
          ? "font-extrabold"
          : weight,
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
