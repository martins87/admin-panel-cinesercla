"use client";

import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

import Centered from "./ui/Centered";

type ModalProps = {
  open: boolean;
  // setOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
  className?: string;
};

const Modal = ({ open, children, className }: ModalProps) => {
  if (!open) return null;

  return (
    <div
      className={twMerge(
        "fixed inset-0 flex items-center justify-center z-10 backdrop-brightness-[20%]",
        className
      )}
    >
      <Centered className="w-[60vw] h-[80vh] bg-white rounded-lg px-8 py-8 gap-y-14">
        {children}
      </Centered>
    </div>
  );
};

export default Modal;
