"use client";

import { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import { twMerge } from "tailwind-merge";

import Centered from "./Centered";

type InputProps = {
  placeholder: string;
  value: string | number;
  setValue: Dispatch<SetStateAction<string>>;
  className?: string;
  inputClassName?: string;
};

const Input: FC<InputProps> = ({
  placeholder,
  value,
  setValue,
  className,
  inputClassName,
}) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return (
    <Centered
      className={twMerge(
        "px-2 py-0 gap-x-0 gap-y-1 rounded-lg bg-inherit border",
        className
      )}
      justify="start"
    >
      <input
        className={twMerge(
          "w-full -mt-[1px] py-2 px-1 outline-none text-base font-[family-name:var(--font-neue-montreal)] bg-inherit",
          "placeholder:text-[#ADB5BD]",
          inputClassName
        )}
        type="text"
        // ref={inputref}
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
    </Centered>
  );
};

export default Input;
