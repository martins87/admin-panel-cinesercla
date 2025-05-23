"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Switch from "@/components/ui/switch";
import Page from "@/app/components/ui/Page";
import Centered from "@/app/components/ui/Centered";
import Typography from "@/app/components/ui/Typography";
import InputWrapper from "@/app/components/InputWrapper";
import ComboBox from "@/app/components/ui/ComboBox";
import ImageUpload from "@/app/components/ImageUpload";
import PageBottomActionButtons from "@/app/components/PageBottomActionButtons";

const categoriaList = [
  { value: "pipocas", label: "Pipocas" },
  { value: "bebidas", label: "Bebidas" },
  { value: "doces", label: "Doces" },
  { value: "combos", label: "Combos" },
];

const NovoProdutoPage = () => {
  const router = useRouter();
  const [ativo, setAtivo] = useState<boolean>(true);
  const [categoria, setCategoria] = useState<string | boolean>("pipocas");
  const [file, setFile] = useState<File | null>(null);

  const handleVoltar = () => router.push("/cadastro/banners");

  const handleSalvar = async (sair?: boolean) => {
    console.log(sair);
    router.push("/cadastro/banners");
  };

  return (
    <Page
      title="Novo Banner"
      subtitle="Adicione novos banners para cada página e seção selecionada"
      backArrow
      backUrl="/cadastro/banners"
      rightColumn={<ImageUpload file={file} setFile={setFile} />}
    >
      <Centered className="gap-x-2" items="center" justify="start">
        <Typography weight="500">Ativo</Typography>
        <Switch value={ativo} setValue={setAtivo} />
      </Centered>
      <InputWrapper label="Selecione a Página" obrigatoria>
        <ComboBox
          label="Selecione uma Página"
          list={categoriaList}
          value={categoria}
          setValue={setCategoria}
        />
      </InputWrapper>
      <PageBottomActionButtons
        onConfirmFn={handleSalvar}
        onBackFn={handleVoltar}
        saveBtnDisabled={false}
        saveAndReturnBtnDisabled={false}
      />
    </Page>
  );
};

export default NovoProdutoPage;
