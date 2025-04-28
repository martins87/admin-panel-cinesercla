import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { MovieSchedule } from "@/app/types/movie";
import { Schedule } from "@/app/types/schedule";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getFormattedDate = (): string => {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date());
};

export const formatDateBR = (dateString: string) => {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    return "";
  }

  return new Intl.DateTimeFormat("pt-BR").format(date);
};

export const encodeQueryString = (query: string) => {
  return encodeURIComponent(query).replace(/%20/g, "+");
};

export const formatRuntime = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}h${mins}m`;
};

export const groupScheduleByMovie = (schedule: Schedule[]): MovieSchedule[] => {
  if (schedule.length === 0) return [];

  let movieIndex = 0;
  let idHtticket = schedule[0].idHtticket;
  const movieScheduleList: MovieSchedule[] = [{ idHtticket, scheduleList: [] }];

  for (let i = 0; i < schedule.length; i++) {
    if (schedule[i].idHtticket === idHtticket) {
      movieScheduleList[movieIndex].scheduleList.push(schedule[i]);
    } else {
      movieIndex++;
      idHtticket = schedule[i].idHtticket;
      movieScheduleList.push({ idHtticket, scheduleList: [schedule[i]] });
    }
  }

  return movieScheduleList;
};
