"use client";

import { ReactNode } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

import Typography from "./ui/Typography";
import Button from "./ui/Button";
import { logoBig } from "@/app/constants/icons";
import Centered from "./ui/Centered";

type AlertModalProps = {
  isOpen: boolean;
  title?: string | ReactNode;
  message?: string | ReactNode;
  cancelLabel?: string;
  confirmLabel?: string;
  onCancel?: () => void;
  onConfirm?: () => void;
  className?: string;
  buttonsContainerClassName?: string;
  hideOnOutsideClick?: boolean;
};

const AlertModal = ({
  isOpen,
  title,
  message,
  cancelLabel = "CANCELAR",
  confirmLabel,
  onCancel,
  onConfirm,
  className,
  buttonsContainerClassName,
  hideOnOutsideClick = false,
}: AlertModalProps) => {
  if (!isOpen) return null;

  const handleOutsideClick = () => {
    if (hideOnOutsideClick && onCancel) {
      onCancel();
    }
  };

  return (
    <div
      className={twMerge(
        "fixed inset-0 flex items-center justify-center z-10 backdrop-brightness-[10%]",
        className
      )}
      onClick={handleOutsideClick}
    >
      <Centered
        className="w-fit bg-white rounded-lg px-20 py-8 gap-y-10"
        direction="col"
      >
        <Image src={logoBig} alt="Logo" />
        {typeof title === "string" ? (
          <Typography className="text-2xl" weight="700">
            {title}
          </Typography>
        ) : (
          title
        )}
        {typeof message === "string" ? (
          <Typography className="text-xl text-[#343A40] -mt-9" weight="400">
            {message}
          </Typography>
        ) : (
          <div className="-mt-9">{message}</div>
        )}
        <div
          className={twMerge("flex w-full gap-4", buttonsContainerClassName)}
        >
          <Button label={cancelLabel} onClick={onCancel} secondary full />
          <Button label={confirmLabel} onClick={onConfirm} primary full />
        </div>
      </Centered>
    </div>
  );
};

export default AlertModal;
