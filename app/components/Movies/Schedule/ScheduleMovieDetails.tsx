import { FC } from "react";
import Image from "next/image";

import Centered from "@/app/components/ui/Centered";
import ScheduleMovieDetail from "./ScheduleMovieDetail";
import movieImg from "@/app/assets/images/movie-row.png";

type ScheduleMovieDetailsProps = {
  idHtticket: string;
};

const ScheduleMovieDetails: FC<ScheduleMovieDetailsProps> = ({
  idHtticket,
}) => {
  return (
    <Centered className="bg-white border border-[#E9ECEF] rounded-lg px-4 py-4 gap-x-6">
      <Image src={movieImg} alt="movie detail image" />
      <Centered className="min-w-[40%] gap-y-6" direction="col">
        <ScheduleMovieDetail
          label="Capitão América: Admirável Mundo Novo"
          value="Captain America: Brave New World"
          bold
        />
        <ScheduleMovieDetail label="Lançamento" value="13/02/2025" />
      </Centered>
      <Centered className="gap-y-6" direction="col">
        <ScheduleMovieDetail label="Gênero" value="Ação" />
        <ScheduleMovieDetail label="Duração" value="2h20min" />
      </Centered>
      <Centered className="gap-y-6" direction="col">
        <ScheduleMovieDetail label="Classificação" value="12 Anos" />
        <ScheduleMovieDetail label="Distribuidora" value="Walt Disney" />
      </Centered>
      <Centered className="gap-y-6" direction="col">
        <ScheduleMovieDetail label="Diretor" value="Julius Onah" />
        <ScheduleMovieDetail label="ID" value={idHtticket} />
      </Centered>
    </Centered>
  );
};

export default ScheduleMovieDetails;
