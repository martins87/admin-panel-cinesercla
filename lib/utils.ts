import { perguntasFrequentes } from "@/app/constants/faq";
import { Faq } from "@/app/types/Faq";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPerguntaById(id: string): Faq | undefined {
  return perguntasFrequentes.find((pergunta) => pergunta._id === id);
}

export const getFormattedDate = (): string => {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date());
};
