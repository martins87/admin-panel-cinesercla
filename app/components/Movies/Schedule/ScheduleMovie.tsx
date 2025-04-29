import { FC } from "react";

import { MovieSchedule } from "@/app/types/movie";
import Centered from "@/app/components/ui/Centered";
import TheaterRow from "./TheaterRow";
import ScheduleMovieDetails from "./ScheduleMovieDetails";

type ScheduleMovieProps = {
  movie: MovieSchedule;
};

const ScheduleMovie: FC<ScheduleMovieProps> = ({ movie }) => {
  return (
    <Centered
      className="bg-[#F8F9FA] border border-[#E9ECEF] rounded-lg p-4 gap-y-4"
      direction="col"
    >
      <ScheduleMovieDetails idHtticket={movie.idHtticket} />
      <Centered
        className="bg-white border border-[#E9ECEF] rounded-lg gap-y-2 p-4"
        direction="col"
      >
        {movie.scheduleList.map((schedule, index) => (
          <TheaterRow key={index} schedule={schedule} />
        ))}
      </Centered>
    </Centered>
  );
};

export default ScheduleMovie;
