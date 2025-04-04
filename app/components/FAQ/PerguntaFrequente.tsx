"use client";

import { Dispatch, FC, SetStateAction } from "react";
import { useRouter } from "next/navigation";

import IconButton from "@/app/components/ui/IconButton";
import Centered from "@/app/components/ui/Centered";
import Typography from "@/app/components/ui/Typography";
import { Faq } from "@/app/types/Faq";
import { arrowDown, arrowUp, edit, trash } from "@/app/constants/icons";

type PerguntaFrequenteProps = {
  faq: Faq;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  setToDeleteFaqId: Dispatch<SetStateAction<string>>;
};

const PerguntaFrequente: FC<PerguntaFrequenteProps> = ({
  faq,
  setModalOpen,
  setToDeleteFaqId,
}) => {
  const router = useRouter();

  const handleDelete = () => {
    setToDeleteFaqId(faq._id!);
    setModalOpen(true);
  };

  return (
    <Centered className="gap-x-4 border rounded-lg p-4" justify="start">
      <Typography>{faq.pergunta}</Typography>
      <Typography>{faq.cadastro}</Typography>
      <Typography>{faq.cliques}</Typography>
      <Typography>{faq.ordem}</Typography>
      <Centered className="flex-1 ml-auto gap-x-2" justify="end">
        <IconButton tertiary icon={arrowDown} />
        <IconButton tertiary icon={arrowUp} />
        <IconButton
          tertiary
          icon={edit}
          onClick={() =>
            router.push(`/cadastro/perguntas-frequentes/editar/${faq._id}`)
          }
        />
        <IconButton tertiary icon={trash} onClick={handleDelete} />
      </Centered>
    </Centered>
  );
};

export default PerguntaFrequente;
