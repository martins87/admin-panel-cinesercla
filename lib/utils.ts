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
  return `${hours}h ${mins}m`;
};

export const groupScheduleByMovie = (schedule: Schedule[]): MovieSchedule[] => {
  if (schedule.length === 0) return [];

  let movieIndex = 0;
  let idFilme = schedule[0].idFilme;
  const movieScheduleList: MovieSchedule[] = [{ idFilme, scheduleList: [] }];

  for (let i = 0; i < schedule.length; i++) {
    if (schedule[i].idFilme === idFilme) {
      movieScheduleList[movieIndex].scheduleList.push(schedule[i]);
    } else {
      movieIndex++;
      idFilme = schedule[i].idFilme;
      movieScheduleList.push({ idFilme, scheduleList: [schedule[i]] });
    }
  }

  return movieScheduleList;
};

export async function uploadFile(file: File): Promise<string> {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch("/api/upload", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Failed to upload image.");
  }

  const data = await response.json();
  return data.fileId as string;
}

export async function uploadFiles(files: File[]): Promise<string[]> {
  const fileIds: string[] = [];

  for (const file of files) {
    try {
      const fileId = await uploadFile(file);
      fileIds.push(fileId);
    } catch (error) {
      console.error("Error uploading file:", error);
      throw error; // Re-throw to handle it in the calling function
    }
  }

  return fileIds;
}
