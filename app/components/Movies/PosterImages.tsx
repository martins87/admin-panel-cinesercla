"use client";

import { Dispatch, FC, SetStateAction, useState } from "react";
import Image from "next/image";

import { TMDBImage } from "@/app/types/tmdbImage";
import Button from "../ui/Button";
import Centered from "../ui/Centered";
import Typography from "../ui/Typography";
import VerticalScroll from "../ui/VerticalScroll";
import IconButton from "../ui/IconButton";
import { close } from "@/app/constants/icons";

type PosterImagesProps = {
  handleCloseFn: () => void;
  images: TMDBImage[];
  setPosterPath: Dispatch<SetStateAction<string>>;
};

const PosterImages: FC<PosterImagesProps> = ({
  handleCloseFn,
  images,
  setPosterPath,
}) => {
  console.log("images", images);
  const [selectedPath, setSelectedPath] = useState<string>("");

  const handleImageClick = (file_path: string) => setSelectedPath(file_path);

  const handleClick = () => {
    setPosterPath(selectedPath);
    handleCloseFn();
  };

  return (
    <Centered
      className="h-full gap-y-10"
      items="start"
      justify="between"
      direction="col"
    >
      <Centered justify="between">
        <Typography className="text-3xl text-[#212529]" weight="700">
          Escolha uma nova imagem da lista
        </Typography>
        <IconButton icon={close} tertiary onClick={handleCloseFn} />
      </Centered>
      <VerticalScroll className="h-full">
        <Centered className="grid grid-cols-4 gap-2">
          {images.map((image, index) => (
            <Centered
              key={index}
              className="hover:cursor-pointer"
              onClick={() => handleImageClick(image.file_path)}
            >
              <Image
                className="w-[263px] h-[395px] object-cover rounded-sm"
                width={720}
                height={1080}
                src={`https://image.tmdb.org/t/p/original${image.file_path}`}
                alt="Imagem"
                priority
              />
            </Centered>
          ))}
        </Centered>
      </VerticalScroll>
      <Centered justify="between">
        <Typography className="text-base">{`${images.length} resultados encontrados`}</Typography>
        <Button label="SELECIONAR IMAGEM" primary onClick={handleClick} />
      </Centered>
    </Centered>
  );
};

export default PosterImages;
