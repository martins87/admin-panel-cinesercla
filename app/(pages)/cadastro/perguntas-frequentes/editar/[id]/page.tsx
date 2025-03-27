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
import FAQInput from "@/app/components/FAQ/FAQInput";
import ComboBox from "@/app/components/ui/ComboBox";
import { categorias, opcoes } from "@/app/constants/perguntasFrequentes";

// @ts-expect-error:next-line
const EditarPerguntasFrequentePage = ({ params }) => {
  const id = params.id;
  const [categoria, setCategoria] = useState<string | boolean>("");
  const [ordem, setOrdem] = useState<string>("");
  const [isPrincipalDuvida, setIsPrincipalDuvida] = useState<string | boolean>(
    false
  );
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
        <Centered className="gap-x-2" items="center" justify="start">
          <Typography>Ativa</Typography>
          <Switch />
        </Centered>
        <Centered className="grid grid-cols-2 gap-x-4 gap-y-4">
          <FAQInput label="Selecione uma Categoria" obrigatoria>
            <ComboBox
              label="Selecione"
              list={categorias}
              value={categoria}
              setValue={setCategoria}
            />
          </FAQInput>
          <FAQInput label="Ordem dentro do Grupo" obrigatoria>
            <Input placeholder={ordem} value={ordem} setValue={setOrdem} />
          </FAQInput>
          <FAQInput label="Agrupar nas Principais Dúvidas?">
            <ComboBox
              label={isPrincipalDuvida ? "Sim" : "Não"}
              list={opcoes}
              value={isPrincipalDuvida}
              setValue={setIsPrincipalDuvida}
            />
          </FAQInput>
          <FAQInput label="Ordem Entre as Principais Dúvidas">
            <Input
              placeholder={ordemPrincipalDuvida}
              value={ordemPrincipalDuvida}
              setValue={setOrdemPrincipalDuvida}
            />
          </FAQInput>
        </Centered>
        <FAQInput label="Digite uma Pergunta" obrigatoria>
          <Input
            placeholder={pergunta}
            value={pergunta}
            setValue={setPergunta}
          />
        </FAQInput>
        <FAQInput label="Digite uma Resposta" obrigatoria>
          <Input
            placeholder={resposta}
            value={resposta}
            setValue={setResposta}
          />
        </FAQInput>
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
