"use client";

import { useRouter } from "next/navigation";

import ImageUpload from "@/app/components/ImageUpload";
import InputWrapper from "@/app/components/InputWrapper";
import PageBottomActionButtons from "@/app/components/PageBottomActionButtons";
import Centered from "@/app/components/ui/Centered";
import ComboBox from "@/app/components/ui/ComboBox";
import Input from "@/app/components/ui/Input";
import Page from "@/app/components/ui/Page";
import Typography from "@/app/components/ui/Typography";
import { useState } from "react";
import Switch from "@/components/ui/switch";

const categoriaList = [
  { value: "pipocas", label: "Pipocas" },
  { value: "bebidas", label: "Bebidas" },
  { value: "doces", label: "Doces" },
  { value: "combos", label: "Combos" },
];

const NovaUnidadePage = () => {
  const router = useRouter();
  const [ativo, setAtivo] = useState<boolean>(true);
  const [categoria, setCategoria] = useState<string | boolean>("pipocas");
  const [nome, setNome] = useState<string>("");
  const [preco, setPreco] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);

  const handleSalvar = () => {};

  const handleVoltar = () => router.push("/cadastro/unidades");

  return (
    <Page
      title="Nova Unidade"
      subtitle="Adicione uma nova unidade e defina seus detalhes operacionais"
      backArrow
      rightColumn={
        <ImageUpload
          description="Anexe uma imagem da unidade"
          file={file}
          setFile={setFile}
        />
      }
    >
      <Centered className="gap-x-2" items="center" justify="start">
        <Typography weight="500">Ativo</Typography>
        <Switch value={ativo} setValue={setAtivo} />
      </Centered>

      <Centered className="grid grid-cols-2 gap-x-4 gap-y-4">
        <InputWrapper label="Nome da unidade" obrigatoria>
          <Input placeholder="Nome" value={nome} setValue={setNome} />
        </InputWrapper>
        <InputWrapper label="Shopping" obrigatoria>
          <ComboBox
            label="Selecione"
            list={categoriaList}
            value={categoria}
            setValue={setCategoria}
          />
        </InputWrapper>
      </Centered>

      <InputWrapper label="Endereço" obrigatoria>
        <Input
          placeholder="Digite o endereço da unidade"
          value={nome}
          setValue={setNome}
        />
      </InputWrapper>

      <Centered className="grid grid-cols-2 gap-x-4 gap-y-4">
        <InputWrapper label="Estado" obrigatoria>
          <ComboBox
            label="Selecione um Estado"
            list={categoriaList}
            value={categoria}
            setValue={setCategoria}
          />
        </InputWrapper>
        <InputWrapper label="Cidade" obrigatoria>
          <ComboBox
            label="Selecione uma Cidade"
            list={categoriaList}
            value={categoria}
            setValue={setCategoria}
          />
        </InputWrapper>
      </Centered>

      <Centered className="grid grid-cols-2 gap-x-4 gap-y-4">
        <InputWrapper label="Link para o mapa">
          <Input
            placeholder="Link para o mapa"
            value={preco}
            setValue={setPreco}
          />
        </InputWrapper>
        <InputWrapper label="Telefone" obrigatoria>
          <Input
            placeholder="Digite o telefone"
            value={preco}
            setValue={setPreco}
          />
        </InputWrapper>
      </Centered>

      <Centered className="grid grid-cols-2 gap-x-4 gap-y-4">
        <InputWrapper label="Número de salas">
          <Input
            placeholder="Digite o número de salas"
            value={preco}
            setValue={setPreco}
          />
        </InputWrapper>
        <InputWrapper label="Capacidade">
          <Input
            placeholder="Digite a capacidade"
            value={preco}
            setValue={setPreco}
          />
        </InputWrapper>
      </Centered>

      <Centered className="grid grid-cols-2 gap-x-4 gap-y-4">
        <InputWrapper label="Data de inauguração">
          <Input
            placeholder="Digite uma data"
            value={preco}
            setValue={setPreco}
          />
        </InputWrapper>
        <InputWrapper label="Situação" obrigatoria>
          <ComboBox
            label="Escolha uma opção"
            list={categoriaList}
            value={categoria}
            setValue={setCategoria}
          />
        </InputWrapper>
      </Centered>

      <Centered className="grid grid-cols-2 gap-x-4 gap-y-4">
        <InputWrapper label="Número de salas">
          <Input
            placeholder="Digite o número de salas"
            value={preco}
            setValue={setPreco}
          />
        </InputWrapper>
        <InputWrapper label="Capacidade">
          <Input
            placeholder="Digite a capacidade"
            value={preco}
            setValue={setPreco}
          />
        </InputWrapper>
      </Centered>

      <Centered className="grid grid-cols-2 gap-x-4 gap-y-4">
        <InputWrapper label="ID Intranet">
          <Input placeholder="0" value={preco} setValue={setPreco} />
        </InputWrapper>
        <InputWrapper label="ID da unidade">
          <Input
            placeholder="ID da unidade ao final do cadastro da unidade"
            value={preco}
            setValue={setPreco}
          />
        </InputWrapper>
      </Centered>

      <PageBottomActionButtons
        onConfirmFn={handleSalvar}
        onBackFn={handleVoltar}
        saveBtnDisabled={true}
        saveAndReturnBtnDisabled={true}
      />
    </Page>
  );
};

export default NovaUnidadePage;
