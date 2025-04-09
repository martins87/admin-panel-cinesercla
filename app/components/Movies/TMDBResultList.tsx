import { TMDBMovie } from "@/app/types/tmdbMovie";
import Centered from "../ui/Centered";
import TMDBResult from "./TMDBResult";
import { FC } from "react";

type TMDBResultListProps = {
  list: TMDBMovie[];
};

const TMDBResultList: FC<TMDBResultListProps> = ({ list }) => {
  return (
    <Centered className="gap-y-2 overflow-y-scroll" direction="col">
      {list.map((movie) => (
        <TMDBResult key={movie.id} result={movie} />
      ))}
    </Centered>
  );
};

export default TMDBResultList;
