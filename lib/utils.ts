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
