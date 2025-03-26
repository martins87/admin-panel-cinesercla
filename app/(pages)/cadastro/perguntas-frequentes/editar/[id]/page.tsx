"use client";

import { useEffect, useState } from "react";

import Page from "@/app/components/ui/Page";
import Centered from "@/app/components/ui/Centered";
import Typography from "@/app/components/ui/Typography";
import { Pergunta } from "@/app/types/Pergunta";
import { getPerguntaById } from "@/lib/utils";
import { Switch } from "@/components/ui/switch";
import Input from "@/app/components/ui/Input";
import Button from "@/app/components/ui/Button";

// @ts-expect-error:next-line
const EditarPerguntasFrequentePage = ({ params }) => {
  const id = params.id;
  console.log("id", id);
  const [categoria, setCategoria] = useState<string>("");
  const [ordem, setOrdem] = useState<string>("");
  const [isPrincipalDuvida, setIsPrincipalDuvida] = useState<boolean>(false);
  const [ordemPrincipalDuvida, setOrdemPrincipalDuvida] = useState<string>("-");
  const [pergunta, setPergunta] = useState<string>("");
  const [resposta, setResposta] = useState<string>("");

  useEffect(() => {
    const p: Pergunta | undefined = getPerguntaById(id);
    if (p) {
      setCategoria(p.categoria);
      setOrdem(p.ordem);
      setIsPrincipalDuvida(p.principalDuvida);
      setOrdemPrincipalDuvida(p.ordemPrincipalDuvida);
      setPergunta(p.pergunta);
      setResposta(p.resposta);
    } else console.log("Could not get pergunta");
  }, [id]);

  return (
    <Page
      title="Editar Pergunta Frequente"
      subtitle="Corrija, atualize ou reorganize perguntas frequentes"
    >
      <Centered className="gap-y-4" direction="col">
        <Centered className="gap-x-2" items="center" justify="end">
          <Typography>Ativa</Typography>
          <Switch />
        </Centered>
        <Centered className="grid grid-cols-2 gap-x-4 gap-y-4">
          <Centered direction="col" items="start">
            <Typography>Selecione uma Categoria*</Typography>
            <Input placeholder={categoria} />
          </Centered>
          <Centered direction="col" items="start">
            <Typography>Ordem dentro do Grupo*</Typography>
            <Input placeholder={ordem} />
          </Centered>
          <Centered direction="col" items="start">
            <Typography>Agrupar nas Principais Dúvidas?</Typography>
            <Input placeholder={isPrincipalDuvida ? "Sim" : "Não"} />
          </Centered>
          <Centered direction="col" items="start">
            <Typography>Ordem Entre as Principais Dúvidas</Typography>
            <Input placeholder={ordemPrincipalDuvida} />
          </Centered>
        </Centered>
        <Centered direction="col" items="start">
          <Typography>Digite uma Pergunta*</Typography>
          <Input placeholder={pergunta} />
        </Centered>
        <Centered direction="col" items="start">
          <Typography>Digite uma Resposta*</Typography>
          <Input placeholder={resposta} />
        </Centered>
        <Centered className="gap-x-2" justify="end">
          <Button label="SALVAR" primary />
          <Button label="SALVAR E SAIR" secondary />
          <Button label="CANCELAR" secondary />
        </Centered>
      </Centered>
    </Page>
  );
};

export default EditarPerguntasFrequentePage;
