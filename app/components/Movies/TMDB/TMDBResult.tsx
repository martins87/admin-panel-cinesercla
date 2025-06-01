import { FC } from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { TMDBMovie } from "@/app/types/tmdbMovie";
import { useMovieStore } from "@/app/store/movies";
import { formatDateToBR } from "@/lib/utils";
import Centered from "@/app/components/ui/Centered";
import Typography from "@/app/components/ui/Typography";
import IconButton from "@/app/components/ui/IconButton";
import { checkBlue, plus } from "@/app/constants/icons";

type TMDBResultprops = {
  result: TMDBMovie;
};

const TMDBResult: FC<TMDBResultprops> = ({ result }) => {
  const router = useRouter();
  const { getMovieByTMDBId } = useMovieStore();
  const isMovieAdded = getMovieByTMDBId(result.id) !== undefined;

  const handleAddMovie = () =>
    router.push(`/cadastro/filmes/novo/${result.id}`);

  return (
    <Centered className="h-auto border border-[#CED4DA] rounded-lg pl-2 pr-4 py-2 gap-x-10">
      <Image
        width={94}
        height={140}
        className="rounded-sm"
        src={`https://image.tmdb.org/t/p/original${result.poster_path}`}
        alt=""
      />
      <Centered direction="col" items="start" justify="between">
        <Typography className="text-lg text-[#212529]" weight="500">
          {result.title}
        </Typography>
        <Typography className="text-base text-[#767676]">
          {result.original_title}
        </Typography>
        <Typography className="text-base text-[#343A40]">
          Previsão de Lançamento:
        </Typography>
        <Typography className="text-base text-[#767676]">
          {formatDateToBR(result.release_date)}
        </Typography>
      </Centered>
      {isMovieAdded ? (
        <Centered className="w-72 gap-x-2" justify="end">
          <Typography className="text-lg text-[#0057FC]">
            Filme já adicionado
          </Typography>
          <Image src={checkBlue} alt="check" />
        </Centered>
      ) : (
        <IconButton
          className="h-12"
          icon={plus}
          tertiary
          onClick={handleAddMovie}
        />
      )}
    </Centered>
  );
};

export default TMDBResult;
