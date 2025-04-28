import { FC } from "react";

import { MovieSchedule } from "@/app/types/movie";
import TheaterRow from "./TheaterRow";
import Centered from "../../ui/Centered";

type ScheduleMovieProps = {
  movie: MovieSchedule;
};

const ScheduleMovie: FC<ScheduleMovieProps> = ({ movie }) => {
  return (
    <Centered
      className="bg-[#F8F9FA] border border-[#E9ECEF] rounded-lg p-4"
      direction="col"
    >
      <h2>Filme ID: {movie.idHtticket}</h2>
      <Centered
        className="bg-white border border-[#E9ECEF] rounded-lg gap-y-2 p-4"
        direction="col"
      >
        {movie.scheduleList.map((schedule, index) => (
          // <li key={index}>{JSON.stringify(sala)}</li>
          <TheaterRow key={index} schedule={schedule} />
        ))}
      </Centered>
    </Centered>
  );
};

export default ScheduleMovie;
