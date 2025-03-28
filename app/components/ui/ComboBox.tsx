"use client";

import {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";

import Centered from "./Centered";
import Typography from "./Typography";
import { chevronDown } from "@/app/constants/icons";

type ComboBoxProps = {
  label: string;
  list: { value: string | boolean; label: string }[];
  value: string | boolean;
  setValue: Dispatch<SetStateAction<string | boolean>>;
};

const ComboBox: FC<ComboBoxProps> = ({ list, value, setValue, label }) => {
  const comboBoxRef = useRef<HTMLDivElement>(null);
  const [showItems, setShowItems] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        comboBoxRef.current &&
        !comboBoxRef.current.contains(event.target as Node)
      ) {
        setShowItems(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Centered
      className="relative px-2 py-2 gap-x-0 gap-y-1 rounded-lg bg-white border"
      direction="col"
      onClick={() => setShowItems(!showItems)}
      ref={comboBoxRef}
    >
      <Centered className="px-2 py-0 hover:cursor-pointer" justify="between">
        <Typography>
          {showItems ? label : list.find((item) => item.value === value)?.label}
        </Typography>
        <Image src={chevronDown} alt="arrow down" />
      </Centered>
      {showItems && (
        <ul className="absolute top-[42px] w-full py-2 flex flex-col items-start justify-start bg-white border rounded-lg z-20 transition-all ease-in-out duration-300">
          {list.map((item, index) => (
            <li
              key={index}
              className="w-full px-4 py-2 hover:bg-[#A3A3A3]/10 hover:cursor-pointer"
              onClick={() => setValue(item.value)}
            >
              <Typography>{item.label}</Typography>
            </li>
          ))}
        </ul>
      )}
    </Centered>
  );
};

export default ComboBox;
