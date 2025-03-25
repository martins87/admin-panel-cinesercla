"use client";

import { useEffect, useState } from "react";

import Page from "@/app/components/ui/Page";
import Centered from "@/app/components/ui/Centered";
import Typography from "@/app/components/ui/Typography";
import { Pergunta } from "@/app/types/Pergunta";
import { getPerguntaById } from "@/lib/utils";

// @ts-expect-error:next-line
const EditarPerguntasFrequentePage = ({ params }) => {
  const id = params.id;
  console.log("id", id);
  const [categoria, setCategoria] = useState<string>("");
  const [ordem, setOrdem] = useState<string>("");
  const [pergunta, setPergunta] = useState<string>("");
  const [resposta, setResposta] = useState<string>("");

  useEffect(() => {
    const p: Pergunta | undefined = getPerguntaById(id);
    if (p) {
      setCategoria(p.categoria);
      setOrdem(p.ordem);
      setPergunta(p.pergunta);
      setResposta(p.resposta);
    } else console.log("Could not get pergunta");
  }, [id]);

  return (
    <Page
      title="Editar Pergunta Frequente"
      subtitle="Corrija, atualize ou reorganize perguntas frequentes"
    >
      <Centered
        direction="col"
        className="gap-y-4"
        items="start"
        justify="start"
      >
        <Typography>Categoria: {categoria}</Typography>
        <Typography>Ordem: {ordem}</Typography>
        <Typography>Pergunta: {pergunta}</Typography>
        <Typography>Resposta: {resposta}</Typography>
      </Centered>
    </Page>
  );
};

export default EditarPerguntasFrequentePage;
