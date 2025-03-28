import { perguntasFrequentes } from "@/app/constants/faq";
import { Pergunta } from "@/app/types/Pergunta";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPerguntaById(id: string): Pergunta | undefined {
  return perguntasFrequentes.find((pergunta) => pergunta.id === id);
}
