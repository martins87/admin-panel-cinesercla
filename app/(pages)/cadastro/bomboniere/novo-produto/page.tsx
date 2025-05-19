"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Switch from "@/components/ui/switch";
import Page from "@/app/components/ui/Page";
import Centered from "@/app/components/ui/Centered";
import Typography from "@/app/components/ui/Typography";
import Input from "@/app/components/ui/Input";
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
  const [nome, setNome] = useState<string>("");
  const [preco, setPreco] = useState<string>("");
  const [ordem, setOrdem] = useState<string>("");
  const [salvarModalOpen, setSalvarModalOpen] = useState<boolean>(false);
  const [salvarESairModalOpen, setSalvarESairModalOpen] =
    useState<boolean>(false);

  const handleVoltar = () => router.push("/cadastro/bomboniere");

  const handleSalvar = async () => {};

  return (
    <>
      <Page
        title="Novo Produto"
        subtitle="Registre um novo item para a bomboniere com todas as especificações"
        backArrow
        rightColumn={<ImageUpload />}
      >
        <Centered className="gap-x-2" items="center" justify="start">
          <Typography weight="500">Ativo</Typography>
          <Switch value={ativo} setValue={setAtivo} />
        </Centered>
        <InputWrapper label="Selecione uma categoria" obrigatoria>
          <ComboBox
            label="Selecione"
            list={categoriaList}
            value={categoria}
            setValue={setCategoria}
          />
        </InputWrapper>
        <InputWrapper label="Nome do produto" obrigatoria>
          <Input placeholder="Nome" value={nome} setValue={setNome} />
        </InputWrapper>
        <Centered className="grid grid-cols-2 gap-x-4 gap-y-4">
          <InputWrapper label="Preço do produto">
            <Input placeholder="R$" value={preco} setValue={setPreco} />
          </InputWrapper>
          <InputWrapper label="Ordem">
            <Input placeholder="1" value={ordem} setValue={setOrdem} />
          </InputWrapper>
        </Centered>
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
          <Button label="CANCELAR" secondary onClick={handleVoltar} />
        </Centered>
      </Page>
      <AlertModal
        isOpen={salvarModalOpen}
        title="Deseja salvar?"
        message="Ao confirmar, ação não poderá ser desfeita."
        confirmLabel="SALVAR"
        onCancel={() => setSalvarModalOpen(false)}
        // onConfirm={() => handleSalvar(false)}
        onConfirm={() => handleSalvar()}
        hideOnOutsideClick={true}
      />
      <AlertModal
        isOpen={salvarESairModalOpen}
        title="Deseja salvar e sair?"
        message="Ao confirmar, ação não poderá ser desfeita."
        confirmLabel="SALVAR E SAIR"
        onCancel={() => setSalvarESairModalOpen(false)}
        // onConfirm={() => handleSalvar(true)}
        onConfirm={() => handleSalvar()}
        hideOnOutsideClick={true}
      />
    </>
  );
};

export default NovoProdutoPage;
