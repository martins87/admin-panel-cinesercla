import React, { FC } from "react";
import Centered from "../../ui/Centered";
import Typography from "../../ui/Typography";
import { Schedule } from "@/app/types/schedule";
import { formatDateToBR } from "@/lib/utils";
import Image from "next/image";
import { audio, calendar, clock } from "@/app/constants/icons";

type TheaterRowProps = {
  schedule: Schedule;
};

type MovieTimeProps = {
  horario: string;
};

const MovieTime: FC<MovieTimeProps> = ({ horario }) => {
  if (horario === "00:00:00") return null;

  return (
    <Typography className="text-[#343A40]">
      {`${horario.slice(0, 5)}`}
    </Typography>
  );
};

const TheaterRow: FC<TheaterRowProps> = ({ schedule }) => {
  return (
    <Centered className="h-[70px] bg-[#F8F9FA] border border-[#CED4DA] rounded-lg px-6">
      <Centered items="start" direction="col">
        <Typography
          className="text-md text-[#343A40]"
          weight="700"
        >{`Sala ${schedule.sala}`}</Typography>
        <Typography className="text-md text-[#767676]">{`Sessão ${schedule.versao}`}</Typography>
      </Centered>
      <Centered className="gap-x-2" justify="start">
        <Image src={clock} alt="clock icon" />
        <MovieTime horario={schedule.horario0} />
        <MovieTime horario={schedule.horario1} />
        <MovieTime horario={schedule.horario2} />
        <MovieTime horario={schedule.horario3} />
        <MovieTime horario={schedule.horario4} />
        <MovieTime horario={schedule.horario5} />
        <MovieTime horario={schedule.horario6} />
        <MovieTime horario={schedule.horario7} />
      </Centered>
      <Centered
        // className="gap-x-2 border-l-[1.5px] border-[#343A40]/30"
        className="gap-x-2"
        justify="start"
      >
        <Image src={calendar} alt="calendar icon" />
        <Typography className="text-[#343A40]">{`${formatDateToBR(
          schedule.dataInicio
        )} a ${formatDateToBR(schedule.dataFim)}`}</Typography>
      </Centered>
      <Centered className="gap-x-2" justify="start">
        <Image src={audio} alt="audio icon" />

        <Typography className="lowercase first-letter:uppercase text-[#343A40]">
          {schedule.idioma}
        </Typography>
      </Centered>
    </Centered>
  );
};

export default TheaterRow;
