import { TMDBMovie } from "@/app/types/tmdbMovie";
import TMDBResult from "./TMDBResult";
import { FC } from "react";

type TMDBResultListProps = {
  list: TMDBMovie[];
};

const TMDBResultList: FC<TMDBResultListProps> = ({ list }) => {
  return (
    <div className="w-full min-h-[160px] overflow-y-scroll flex flex-col gap-y-2">
      {list.map((movie) => (
        <TMDBResult key={movie.id} result={movie} />
      ))}
    </div>
  );
};

export default TMDBResultList;
