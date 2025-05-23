"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Switch from "@/components/ui/switch";
import Page from "@/app/components/ui/Page";
import Centered from "@/app/components/ui/Centered";
import Typography from "@/app/components/ui/Typography";
// import Input from "@/app/components/ui/Input";
import InputWrapper from "@/app/components/InputWrapper";
import ComboBox from "@/app/components/ui/ComboBox";
import Button from "@/app/components/ui/Button";
import AlertModal from "@/app/components/AlertModal";
import ImageUpload from "@/app/components/ImageUpload";

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
  const [salvarModalOpen, setSalvarModalOpen] = useState<boolean>(false);
  const [salvarESairModalOpen, setSalvarESairModalOpen] =
    useState<boolean>(false);

  const handleVoltar = () => router.push("/cadastro/bomboniere");

  const handleSalvar = async (sair?: boolean) => {
    console.log(sair);
  };

  return (
    <>
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
        <Centered className="gap-x-2" justify="end">
          <Button
            label="SALVAR"
            primary
            onClick={() => setSalvarModalOpen(true)}
            disabled
          />
          <Button
            label="SALVAR E SAIR"
            secondary
            onClick={() => setSalvarESairModalOpen(true)}
            disabled
          />
          <Button label="CANCELAR" secondary onClick={handleVoltar} />
        </Centered>
      </Page>
      <AlertModal
        isOpen={salvarModalOpen}
        title="Deseja salvar?"
        message="Ao confirmar, ação não poderá ser desfeita."
        confirmLabel="SALVAR"
        onCancel={() => setSalvarModalOpen(false)}
        onConfirm={() => handleSalvar(false)}
        hideOnOutsideClick
      />
      <AlertModal
        isOpen={salvarESairModalOpen}
        title="Deseja salvar e sair?"
        message="Ao confirmar, ação não poderá ser desfeita."
        confirmLabel="SALVAR E SAIR"
        onCancel={() => setSalvarESairModalOpen(false)}
        onConfirm={() => handleSalvar(true)}
        hideOnOutsideClick
      />
    </>
  );
};

export default NovoProdutoPage;
