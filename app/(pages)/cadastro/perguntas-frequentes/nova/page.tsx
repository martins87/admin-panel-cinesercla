"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Faq } from "@/app/types/Faq";
import Page from "@/app/components/ui/Page";
import Centered from "@/app/components/ui/Centered";
import Typography from "@/app/components/ui/Typography";
import Button from "@/app/components/ui/Button";
import AlertModal from "@/app/components/AlertModal";
import Switch from "@/components/ui/switch";
import InputWrapper from "@/app/components/InputWrapper";
import ComboBox from "@/app/components/ui/ComboBox";
import Input from "@/app/components/ui/Input";
import { categorias, opcoes } from "@/app/constants/faq";
import { getFormattedDate } from "@/lib/utils";
import { createFaq } from "@/lib/db/faq";
import { useFaqStore } from "@/app/store/faq";

const NovaPerguntasFrequentePage = () => {
  const router = useRouter();
  const { addFaq } = useFaqStore();
  const [categoria, setCategoria] = useState<string | boolean>("");
  const [ordem, setOrdem] = useState<string>("");
  const [principalDuvida, setPrincipalDuvida] = useState<string | boolean>(
    false
  );
  const [ordemPrincipalDuvida, setOrdemPrincipalDuvida] = useState<string>("-");
  const [pergunta, setPergunta] = useState<string>("");
  const [resposta, setResposta] = useState<string>("");
  // const [cadastro, setCadastro] = useState<string>("");
  // const [cliques, setCliques] = useState<string>("");
  const [ativa, setAtiva] = useState<boolean>(false);
  const [salvarModalOpen, setSalvarModalOpen] = useState<boolean>(false);
  const [salvarESairModalOpen, setSalvarESairModalOpen] =
    useState<boolean>(false);

  const handleSalvar = async (sair?: boolean) => {
    const newFaq: Faq = {
      pergunta,
      resposta,
      cadastro: getFormattedDate(),
      cliques: "0",
      ordem,
      categoria: String(categoria),
      principalDuvida: !!principalDuvida,
      ordemPrincipalDuvida,
      ativa,
    };

    try {
      const createdFaq = await createFaq(newFaq);

      if (createdFaq) {
        // Updates the local state with the new FAQ
        addFaq(createdFaq);
        console.log("FAQ created successfully:", createdFaq);
        if (sair) router.push("/cadastro/perguntas-frequentes");
      } else {
        console.error("Failed to create FAQ.");
      }
    } catch (error) {
      console.error("Error creating FAQ:", error);
    }
  };

  const handleVoltar = () => router.back();

  return (
    <>
      <Page
        title="Nova Pergunta Frequente"
        subtitle="Adicione uma pergunta frequente e defina sua categoria"
      >
        <Centered className="gap-y-4" direction="col">
          <Centered className="gap-x-2" items="center" justify="start">
            <Typography weight="500">Ativa</Typography>
            <Switch value={ativa} setValue={setAtiva} />
          </Centered>
          <Centered className="grid grid-cols-2 gap-x-4 gap-y-4">
            <InputWrapper label="Selecione uma Categoria" obrigatoria>
              <ComboBox
                label="Selecione"
                list={categorias}
                value={categoria}
                setValue={setCategoria}
              />
            </InputWrapper>
            <InputWrapper label="Ordem dentro do Grupo" obrigatoria>
              <Input placeholder={ordem} value={ordem} setValue={setOrdem} />
            </InputWrapper>
            <InputWrapper label="Agrupar nas Principais Dúvidas?">
              <ComboBox
                label={principalDuvida ? "Sim" : "Não"}
                list={opcoes}
                value={principalDuvida}
                setValue={setPrincipalDuvida}
              />
            </InputWrapper>
            <InputWrapper label="Ordem Entre as Principais Dúvidas">
              <Input
                placeholder={ordemPrincipalDuvida}
                value={ordemPrincipalDuvida}
                setValue={setOrdemPrincipalDuvida}
              />
            </InputWrapper>
          </Centered>
          <InputWrapper label="Digite uma Pergunta" obrigatoria>
            <Input
              placeholder={pergunta}
              value={pergunta}
              setValue={setPergunta}
            />
          </InputWrapper>
          <InputWrapper label="Digite uma Resposta" obrigatoria>
            <Input
              placeholder={resposta}
              value={resposta}
              setValue={setResposta}
            />
          </InputWrapper>
          <Centered className="gap-x-2" justify="end">
            <Button
              label="SALVAR"
              primary
              onClick={() => setSalvarModalOpen(true)}
            />
            <Button
              label="SALVAR E SAIR"
              secondary
              onClick={() => setSalvarESairModalOpen(true)}
            />
            <Button label="VOLTAR" secondary onClick={handleVoltar} />
          </Centered>
        </Centered>
      </Page>
      <AlertModal
        isOpen={salvarModalOpen}
        title="Deseja salvar?"
        message="Ao confirmar, ação não poderá ser desfeita."
        confirmLabel="SALVAR"
        onCancel={() => setSalvarModalOpen(false)}
        onConfirm={() => handleSalvar(false)}
        hideOnOutsideClick={true}
      />
      <AlertModal
        isOpen={salvarESairModalOpen}
        title="Deseja salvar e sair?"
        message="Ao confirmar, ação não poderá ser desfeita."
        confirmLabel="SALVAR E SAIR"
        onCancel={() => setSalvarESairModalOpen(false)}
        onConfirm={() => handleSalvar(true)}
        hideOnOutsideClick={true}
      />
    </>
  );
};

export default NovaPerguntasFrequentePage;
