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
import Input from "@/app/components/ui/Input";

const categoriaList = [
  { value: "inicial", label: "Inicial" },
  { value: "institucional", label: "Institucional" },
  { value: "promocoes", label: "Promoções" },
];

const NovoProdutoPage = () => {
  const router = useRouter();
  const [ativo, setAtivo] = useState<boolean>(true);
  const [categoria, setCategoria] = useState<string | boolean>("pipocas");
  const [ordem, setOrdem] = useState<string>("");
  const [dataInicio, setDataInicio] = useState<string>("");
  const [dataExpiracao, setDataExpiracao] = useState<string>("");
  const [nomeBanner, setNomeBanner] = useState<string>("");
  const [linkBanner, setLinkBanner] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [imgCarousel, setImgCarousel] = useState<File | null>(null);
  const [imgMobile, setImgMobile] = useState<File | null>(null);

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
      rightColumn={
        <Centered className="w-fit gap-y-4" direction="col">
          <ImageUpload
            description="Selecione uma página e seção para ver a prévia"
            file={file}
            setFile={setFile}
          />
          <ImageUpload
            description="Envie uma imagem para exibir no carrossel"
            file={imgCarousel}
            setFile={setImgCarousel}
          />
          <ImageUpload
            description="Envie uma imagem para exibir em celulares"
            file={imgMobile}
            setFile={setImgMobile}
          />
        </Centered>
      }
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
      <InputWrapper label="Selecione a Seção" obrigatoria>
        <ComboBox
          label="Selecione uma Seção"
          list={categoriaList}
          value={categoria}
          setValue={setCategoria}
        />
      </InputWrapper>
      <Centered className="grid grid-cols-2 gap-x-4 gap-y-4">
        <InputWrapper label="Tipo do Conteúdo a Ser Exibido" obrigatoria>
          <ComboBox
            label="Selecione"
            list={categoriaList}
            value={categoria}
            setValue={setCategoria}
          />
        </InputWrapper>
        <InputWrapper label="Ordem">
          <Input placeholder="1" value={ordem} setValue={setOrdem} />
        </InputWrapper>
      </Centered>
      <InputWrapper label="Unidade(s) Participante(s)" obrigatoria>
        <ComboBox
          label="Selecione uma Unidade"
          list={categoriaList}
          value={categoria}
          setValue={setCategoria}
        />
      </InputWrapper>
      <InputWrapper label="Selecione um Filme a Ser Exibido" obrigatoria>
        <ComboBox
          label="Selecione um Filme"
          list={categoriaList}
          value={categoria}
          setValue={setCategoria}
        />
      </InputWrapper>
      <InputWrapper label="Situação" obrigatoria>
        <ComboBox
          label="Selecionar"
          list={categoriaList}
          value={categoria}
          setValue={setCategoria}
        />
      </InputWrapper>
      <Centered className="grid grid-cols-2 gap-x-4 gap-y-4">
        <InputWrapper label="Data Início">
          <Input
            placeholder="03/06/2025"
            value={dataInicio}
            setValue={setDataInicio}
          />
        </InputWrapper>
        <InputWrapper label="Data Expiração">
          <Input
            placeholder="30/06/2025"
            value={dataExpiracao}
            setValue={setDataExpiracao}
          />
        </InputWrapper>
      </Centered>
      <Centered className="grid grid-cols-2 gap-x-4 gap-y-4">
        <InputWrapper label="Nome do Banner">
          <Input
            placeholder="Nome"
            value={nomeBanner}
            setValue={setNomeBanner}
          />
        </InputWrapper>
        <InputWrapper label="Link do Banner">
          <Input
            placeholder="cinesercla.com.br"
            value={linkBanner}
            setValue={setLinkBanner}
          />
        </InputWrapper>
      </Centered>
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
