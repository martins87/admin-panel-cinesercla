import { FC } from "react";
import Image from "next/image";

import Centered from "../ui/Centered";
import Button from "../ui/Button";
import Typography from "../ui/Typography";
import { upload } from "@/app/constants/icons";

type MovieImagesProps = {
  posterPath: string;
  backdropPath: string;
  posterModalFn: () => void;
  backdropModalFn: () => void;
};

const MovieImages: FC<MovieImagesProps> = ({
  posterPath,
  backdropPath,
  posterModalFn,
  backdropModalFn,
}) => {
  const noBannerImg = backdropPath === null;

  return (
    <Centered className="gap-x-4" justify="start">
      <Centered className="relative w-fit gap-y-2" direction="col">
        <div className="relative w-full rounded-lg overflow-hidden border">
          <Image
            width={720}
            height={1080}
            src={`https://image.tmdb.org/t/p/original${posterPath}`}
            alt="Imagem"
            className="w-auto h-[395px] object-cover"
            priority
          />
          <Button
            className="absolute w-fit h-9 top-0 right-0 px-3 hover:bg-white/90 rounded-t-none rounded-bl-md rounded-br-none border-0"
            label="ALTERAR"
            secondary
            onClick={posterModalFn}
          />
        </div>
        <Typography className="text-[#6C757D]" weight="500">
          TAMANHO RECOMENDADO: XXXpx
        </Typography>
        <Button
          label="SUBSTITUIR IMAGEM"
          tertiary
          icon={upload}
          className="w-full"
          textClassname="font-medium"
          disabled
        />
      </Centered>
      <Centered className="relative w-fit gap-y-2" direction="col">
        <div className="relative aspect-video w-full rounded-lg overflow-hidden border">
          {noBannerImg ? (
            <Centered className="w-[720px] h-full">
              <Typography className="text-xl" weight="500">
                Sem imagem fornecida pelo TMDB
              </Typography>
            </Centered>
          ) : (
            <Image
              width={720}
              height={1080}
              src={`https://image.tmdb.org/t/p/original${backdropPath}`}
              alt="Imagem"
              className="w-auto h-[395px] object-cover"
              priority
            />
          )}
          <Button
            className="absolute w-fit h-9 top-0 right-0 px-3 hover:bg-white/90 rounded-t-none rounded-bl-md rounded-br-none border-0"
            label="ALTERAR"
            secondary
            onClick={backdropModalFn}
          />
        </div>
        <Typography className="text-[#6C757D]" weight="500">
          TAMANHO RECOMENDADO: XXXpx
        </Typography>
        <Button
          label="SUBSTITUIR IMAGEM"
          tertiary
          icon={upload}
          className="w-full"
          textClassname="font-medium"
          disabled
        />
      </Centered>
    </Centered>
  );
};

export default MovieImages;
