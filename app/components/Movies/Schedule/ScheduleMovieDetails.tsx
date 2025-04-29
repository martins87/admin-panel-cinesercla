import { FC } from "react";
import Image from "next/image";

import { formatRuntime } from "@/lib/utils";
import { useMovieStore } from "@/app/store/movies";
import Centered from "@/app/components/ui/Centered";
import ScheduleMovieDetail from "./ScheduleMovieDetail";
import placeholderImg from "@/app/assets/images/placeholder.png";

type ScheduleMovieDetailsProps = {
  idHtticket: string;
};

const ScheduleMovieDetails: FC<ScheduleMovieDetailsProps> = ({
  idHtticket,
}) => {
  const { getMovieByIdHtticket } = useMovieStore();
  const movie = getMovieByIdHtticket(idHtticket);
  const posterPath = movie
    ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
    : placeholderImg;
  const title = movie
    ? movie.title
    : `Atenção: Vincule o filme de ID ${idHtticket}`;
  const originalTitle = movie ? movie.original_title : "-";
  const releaseDate = movie ? movie.release_date : "dd/mm/aaaa";
  const genre = movie ? movie.genres : "-";
  const runtime = movie ? movie.runtime : 0;

  return (
    <Centered className="bg-white border border-[#E9ECEF] rounded-lg px-4 py-4 gap-x-6">
      <Image
        width={94}
        height={140}
        className="rounded-sm"
        src={posterPath}
        alt=""
      />
      <Centered
        className="min-w-[40%] h-full"
        direction="col"
        justify="between"
      >
        <ScheduleMovieDetail label={title} value={originalTitle} bold />
        <ScheduleMovieDetail label="Lançamento" value={releaseDate} />
      </Centered>
      <Centered className="h-full" direction="col" justify="between">
        <ScheduleMovieDetail label="Gênero" value={genre} />
        <ScheduleMovieDetail label="Duração" value={formatRuntime(runtime)} />
      </Centered>
      <Centered className="h-full" direction="col" justify="between">
        <ScheduleMovieDetail label="Classificação" value="-" />
        <ScheduleMovieDetail label="Distribuidora" value="-" />
      </Centered>
      <Centered className="h-full" direction="col" justify="between">
        <ScheduleMovieDetail label="Diretor" value="-" />
        <ScheduleMovieDetail label="htticket ID" value={idHtticket} />
      </Centered>
    </Centered>
  );
};

export default ScheduleMovieDetails;
