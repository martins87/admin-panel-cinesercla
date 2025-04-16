import {
  ChangeEvent,
  Dispatch,
  FC,
  KeyboardEvent,
  SetStateAction,
} from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import Centered from "../ui/Centered";
import Typography from "../ui/Typography";
import { searchGray } from "@/app/constants/icons";

type SearchProps = {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  onClickFn?: () => void;
};

const Search: FC<SearchProps> = ({ searchTerm, setSearchTerm, onClickFn }) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const search: string = e.target?.value;
    setSearchTerm(search);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onClickFn) {
      onClickFn(); // Trigger search when Enter is pressed
    }
  };

  return (
    <Centered className="flex items-center gap-x-4 px-3 py-[10px] border border-[#0043D8] rounded-md">
      <Image className="w-5" src={searchGray} alt="navbar search icon" />
      <input
        className={cn(
          "flex flex-1 outline-none font-[family-name:var(--font-neue-montreal)] text-base font-normal text-[#343A40] placeholder:text-[#ADB5BD] transition-all duration-500"
        )}
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Digite o nome do filme..."
      />
      {onClickFn && (
        <Typography
          className="text-[#0057FC] text-base hover:cursor-pointer hover:scale-105 transition-all ease-in-out duration-200"
          weight="500"
          onClick={onClickFn}
        >
          PESQUISAR
        </Typography>
      )}
    </Centered>
  );
};

export default Search;
