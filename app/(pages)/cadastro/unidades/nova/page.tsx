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
  const [nome, setNome] = useState<string>("");
  const [shopping, setShopping] = useState<string>("");
  const [endereco, setEndereco] = useState<string>("");
  const [estado, setEstado] = useState<string | boolean>("");
  const [cidade, setCidade] = useState<string | boolean>("");
  const [urlMapa, setUrlMapa] = useState<string>("");
  const [telefone, setTelefone] = useState<string>("");
  const [numeroSalas, setNumeroSalas] = useState<string>("");
  const [capacidade, setCapacidade] = useState<string>("");
  const [dataInauguracao, setDataInauguracao] = useState<string>("");
  const [situacao, setSituacao] = useState<string | boolean>("");
  const [idIntranet, setIdIntranet] = useState<string>("");
  const [idUnidade, setIdUnidade] = useState<string>("");
  const [file1, setFile1] = useState<File | null>(null);
  const [file2, setFile2] = useState<File | null>(null);

  const handleSalvar = () => {};

  const handleVoltar = () => router.push("/cadastro/unidades");

  return (
    <Page
      title="Nova Unidade"
      subtitle="Adicione uma nova unidade e defina seus detalhes operacionais"
      backArrow
      rightColumn={
        <Centered className="w-fit gap-y-4" direction="col">
          <ImageUpload
            description="Anexe uma imagem da unidade"
            file={file1}
            setFile={setFile1}
          />
          <ImageUpload
            description="Anexe uma imagem da unidade"
            file={file2}
            setFile={setFile2}
          />
        </Centered>
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
          <Input
            placeholder="Shopping da Unidade"
            value={shopping}
            setValue={setShopping}
          />
        </InputWrapper>
      </Centered>

      <InputWrapper label="Endereço" obrigatoria>
        <Input
          placeholder="Digite o endereço da unidade"
          value={endereco}
          setValue={setEndereco}
        />
      </InputWrapper>

      <Centered className="grid grid-cols-2 gap-x-4 gap-y-4">
        <InputWrapper label="Estado" obrigatoria>
          <ComboBox
            label="Selecione um Estado"
            list={categoriaList}
            value={estado}
            setValue={setEstado}
          />
        </InputWrapper>
        <InputWrapper label="Cidade" obrigatoria>
          <ComboBox
            label="Selecione uma Cidade"
            list={categoriaList}
            value={cidade}
            setValue={setCidade}
          />
        </InputWrapper>
      </Centered>

      <Centered className="grid grid-cols-2 gap-x-4 gap-y-4">
        <InputWrapper label="Link para o mapa">
          <Input
            placeholder="Link para o mapa"
            value={urlMapa}
            setValue={setUrlMapa}
          />
        </InputWrapper>
        <InputWrapper label="Telefone" obrigatoria>
          <Input
            placeholder="Digite o telefone"
            value={telefone}
            setValue={setTelefone}
          />
        </InputWrapper>
      </Centered>

      <Centered className="grid grid-cols-2 gap-x-4 gap-y-4">
        <InputWrapper label="Número de salas">
          <Input
            placeholder="Digite o número de salas"
            value={numeroSalas}
            setValue={setNumeroSalas}
          />
        </InputWrapper>
        <InputWrapper label="Capacidade">
          <Input
            placeholder="Digite a capacidade"
            value={capacidade}
            setValue={setCapacidade}
          />
        </InputWrapper>
      </Centered>

      <Centered className="grid grid-cols-2 gap-x-4 gap-y-4">
        <InputWrapper label="Data de inauguração">
          <Input
            placeholder="Digite uma data"
            value={dataInauguracao}
            setValue={setDataInauguracao}
          />
        </InputWrapper>
        <InputWrapper label="Situação" obrigatoria>
          <ComboBox
            label="Escolha uma opção"
            list={categoriaList}
            value={situacao}
            setValue={setSituacao}
          />
        </InputWrapper>
      </Centered>

      <Centered className="grid grid-cols-2 gap-x-4 gap-y-4">
        <InputWrapper label="ID Intranet">
          <Input placeholder="0" value={idIntranet} setValue={setIdIntranet} />
        </InputWrapper>
        <InputWrapper label="ID da unidade">
          <Input
            placeholder="ID da unidade ao final do cadastro da unidade"
            value={idUnidade}
            setValue={setIdUnidade}
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
