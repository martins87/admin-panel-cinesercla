import { FC } from "react";

import { TMDBMovie } from "@/app/types/tmdbMovie";
import TMDBResult from "./TMDBResult";
import VerticalScroll from "../ui/VerticalScroll";

type TMDBResultListProps = {
  list: TMDBMovie[];
};

const TMDBResultList: FC<TMDBResultListProps> = ({ list }) => {
  return (
    <VerticalScroll>
      {list.map((movie) => (
        <TMDBResult key={movie.id} result={movie} />
      ))}
    </VerticalScroll>
  );
};

export default TMDBResultList;
