import { FC } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

import { Banner } from "@/app/types/banner";
import Centered from "../ui/Centered";
import Typography from "../ui/Typography";
import IconButton from "../ui/IconButton";
import Button from "../ui/Button";
import { arrowDown, arrowUp, edit, trash } from "@/app/constants/icons";

type BannerRowProps = {
  banner: Banner;
  index: number;
};

const BannerRow: FC<BannerRowProps> = ({ banner, index }) => {
  return (
    <Centered
      className={twMerge("gap-x-4 p-2", (index + 1) % 2 ? "bg-[#F8F9FA]" : "")}
      justify="start"
    >
      <Centered justify="start">
        <Image
          className="rounded-sm"
          width={100}
          height={100}
          src={banner.image}
          alt={banner.nome}
        />
      </Centered>
      <Centered justify="start">
        <Typography>{banner.nome}</Typography>
      </Centered>
      <Centered justify="start">
        <Typography>{banner.pagina}</Typography>
      </Centered>
      <Centered justify="start">
        <Typography>{banner.secao}</Typography>
      </Centered>
      <Centered justify="start">
        <Typography>{banner.ordem}</Typography>
      </Centered>
      <Centered className="gap-y-2" direction="col">
        <Centered className="flex-1 ml-auto gap-x-2" justify="end">
          <IconButton tertiary icon={arrowDown} />
          <IconButton tertiary icon={arrowUp} />
          <IconButton tertiary icon={edit} onClick={() => {}} />
          <IconButton tertiary icon={trash} onClick={() => {}} />
        </Centered>
        <Button className="w-[184px] ml-auto" label="Ocultar" secondary />
      </Centered>
    </Centered>
  );
};

export default BannerRow;
