"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Faq } from "@/app/types/Faq";
import { useFaqStore } from "@/app/store/faq";
import Page from "@/app/components/ui/Page";
import Centered from "@/app/components/ui/Centered";
import Typography from "@/app/components/ui/Typography";
import Switch from "@/components/ui/switch";
import Input from "@/app/components/ui/Input";
import Button from "@/app/components/ui/Button";
import ComboBox from "@/app/components/ui/ComboBox";
import FAQInput from "@/app/components/FAQ/FAQInput";
import AlertModal from "@/app/components/AlertModal";
import { categorias, opcoes } from "@/app/constants/faq";
import { updateFaq } from "@/lib/db/faq";

const EditarPerguntasFrequentePage = ({
  params,
}: {
  params: { id: string };
}) => {
  const router = useRouter();
  // @ts-expect-error:next-line
  const { id } = use(params);
  const { getFaqById, updateFaqList } = useFaqStore();
  const [categoria, setCategoria] = useState<string | boolean>("");
  const [ordem, setOrdem] = useState<string>("");
  const [principalDuvida, setPrincipalDuvida] = useState<string | boolean>(
    false
  );
  const [ordemPrincipalDuvida, setOrdemPrincipalDuvida] = useState<string>("-");
  const [pergunta, setPergunta] = useState<string>("");
  const [resposta, setResposta] = useState<string>("");
  const [cadastro, setCadastro] = useState<string>("");
  const [cliques, setCliques] = useState<string>("");
  const [ativa, setAtiva] = useState<boolean>(false);
  const [salvarModalOpen, setSalvarModalOpen] = useState<boolean>(false);
  const [salvarESairModalOpen, setSalvarESairModalOpen] =
    useState<boolean>(false);

  useEffect(() => {
    // TODO add loading...
    const faq: Faq | undefined = getFaqById(id);

    if (faq) {
      setCategoria(faq.categoria);
      setOrdem(faq.ordem);
      setPrincipalDuvida(!!faq.principalDuvida);
      setOrdemPrincipalDuvida(faq.ordemPrincipalDuvida);
      setPergunta(faq.pergunta);
      setResposta(faq.resposta);
      setAtiva(!!faq.ativa);
    } else {
      router.push("/cadastro/perguntas-frequentes");
    }
  }, [id, getFaqById, router]);

  const handleSalvar = async (sair?: boolean) => {
    const editedFaq: Faq = {
      _id: id,
      pergunta,
      resposta,
      cadastro,
      cliques,
      ordem,
      categoria,
      principalDuvida: !!principalDuvida,
      ordemPrincipalDuvida,
      ativa,
    };

    try {
      const updatedFaq = await updateFaq(editedFaq);

      if (updatedFaq) {
        console.log("FAQ updated successfully:", updatedFaq);

        // Updates Zustand store
        updateFaqList(updatedFaq);

        if (sair) {
          router.push("/cadastro/perguntas-frequentes");
        }
      } else {
        console.error("Failed to update FAQ.");
      }
    } catch (error) {
      console.error("Error updating FAQ:", error);
    }
  };

  const handleVoltar = () => router.back();

  return (
    <>
      <Page
        title="Editar Pergunta Frequente"
        subtitle="Corrija, atualize ou reorganize perguntas frequentes"
      >
        <Centered className="gap-y-4" direction="col">
          <Centered className="gap-x-2" items="center" justify="start">
            <Typography weight="500">Ativa</Typography>
            <Switch value={ativa} setValue={setAtiva} />
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
                label={principalDuvida ? "Sim" : "Não"}
                list={opcoes}
                value={principalDuvida}
                setValue={setPrincipalDuvida}
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

export default EditarPerguntasFrequentePage;
