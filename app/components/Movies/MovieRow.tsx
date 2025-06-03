"use client";

import { Dispatch, FC, SetStateAction } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { Movie } from "@/app/types/movie";
import Centered from "../ui/Centered";
import Typography from "../ui/Typography";
import IconButton from "../ui/IconButton";
import Button from "../ui/Button";
import { arrowDown, arrowUp, edit, trash } from "@/app/constants/icons";
import noPoster from "@/app/assets/images/no_poster.png";

type MovieRowProps = {
  movie: Movie;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  setToDeleteId: Dispatch<SetStateAction<string>>;
};

const MovieRow: FC<MovieRowProps> = ({
  movie,
  setModalOpen,
  setToDeleteId,
}) => {
  const router = useRouter();
  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
    : noPoster;

  const handleEdit = () =>
    router.push(`/cadastro/filmes/editar/${movie.tmdbId}`);

  const handleDelete = () => {
    setToDeleteId(movie._id!);
    setModalOpen(true);
  };

  return (
    <Centered className="h-auto border border-[#CED4DA] rounded-lg pl-2 pr-4 py-2 gap-x-10">
      <Image
        width={94}
        height={140}
        className="rounded-sm"
        src={poster}
        alt=""
      />
      <Centered direction="col" items="start" justify="between">
        <Typography className="text-lg text-[#212529]" weight="500">
          {movie.title}
        </Typography>
        <Typography className="text-base text-[#767676]">
          {movie.original_title}
        </Typography>
        <Typography className="text-base text-[#767676]">
          Código TMDB: {movie.tmdbId}
        </Typography>
      </Centered>
      <Centered className="gap-y-2" direction="col">
        <Centered className="flex-1 ml-auto gap-x-2" justify="end">
          <IconButton tertiary icon={arrowDown} disabled />
          <IconButton tertiary icon={arrowUp} disabled />
          <IconButton tertiary icon={edit} onClick={handleEdit} />
          <IconButton tertiary icon={trash} onClick={handleDelete} />
        </Centered>
        <Button
          className="w-[184px] ml-auto"
          label="Ocultar"
          secondary
          disabled
        />
      </Centered>
    </Centered>
  );
};

export default MovieRow;
