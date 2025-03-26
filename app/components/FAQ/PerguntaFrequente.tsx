"use client";

import { FC } from "react";
import { useRouter } from "next/navigation";

import IconButton from "@/app/components/ui/IconButton";
import Centered from "@/app/components/ui/Centered";
import Typography from "@/app/components/ui/Typography";
import { Pergunta } from "@/app/types/Pergunta";
import { arrowDown, arrowUp, edit, trash } from "@/app/constants/icons";

type PerguntaFrequenteProps = {
  pergunta: Pergunta;
};

const PerguntaFrequente: FC<PerguntaFrequenteProps> = ({ pergunta }) => {
  const router = useRouter();

  return (
    <Centered className="gap-x-4 border rounded-lg p-4" justify="start">
      <Typography>{pergunta.pergunta}</Typography>
      <Typography>{pergunta.cadastro}</Typography>
      <Typography>{pergunta.cliques}</Typography>
      <Typography>{pergunta.ordem}</Typography>
      <Centered className="flex-1 ml-auto gap-x-2" justify="end">
        <IconButton tertiary icon={arrowDown} />
        <IconButton tertiary icon={arrowUp} />
        <IconButton
          tertiary
          icon={edit}
          onClick={() =>
            router.push(`/cadastro/perguntas-frequentes/editar/${pergunta.id}`)
          }
        />
        <IconButton tertiary icon={trash} />
      </Centered>
    </Centered>
  );
};

export default PerguntaFrequente;
