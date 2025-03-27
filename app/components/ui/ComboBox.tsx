import { Dispatch, FC, SetStateAction, useState } from "react";
import Image from "next/image";

import Centered from "./Centered";
import Typography from "./Typography";
import { chevronDown } from "@/app/constants/icons";

type ComboBoxProps = {
  list: { value: string | boolean; label: string }[];
  value: string | boolean;
  setValue: Dispatch<SetStateAction<string | boolean>>;
  label: string;
};

const ComboBox: FC<ComboBoxProps> = ({ list, value, setValue, label }) => {
  const [show, setShow] = useState(false);

  return (
    <Centered className="">
      <Centered
        className="relative px-2 py-2 gap-x-0 gap-y-1 rounded-lg bg-white border"
        onClick={() => setShow(!show)}
        direction="col"
      >
        <Centered className="px-2 py-0 hover:cursor-pointer" justify="between">
          <Typography>{show ? label : value}</Typography>
          <Image src={chevronDown} alt="arrow down" />
        </Centered>
        {show && (
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
    </Centered>
  );
};

export default ComboBox;
