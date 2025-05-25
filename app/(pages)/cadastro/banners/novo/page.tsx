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
import BannerNomeELink from "@/app/components/Banner/BannerNomeELink";

const paginaList = [
  { value: "inicial", label: "Inicial" },
  { value: "institucional", label: "Institucional" },
  { value: "promocoes", label: "Promoções" },
];

const secaoList = [
  { value: "destaque", label: "Destaque" },
  { value: "banner-destaque", label: "Banner Destaque" },
  { value: "conteudo", label: "Conteúdo" },
];

const tipoConteudoList = [
  { value: "filme", label: "Filme" },
  { value: "promocao", label: "Promoção" },
  { value: "produto-bomboniere", label: "Produto da Bomboniere" },
  { value: "sessao-especial", label: "Sessão Especial" },
];

const NovoProdutoPage = () => {
  const router = useRouter();
  const [ativo, setAtivo] = useState<boolean>(true);
  const [pagina, setPagina] = useState<string | boolean>("");
  const [secao, setSecao] = useState<string | boolean>("");
  const [tipoConteudo, setTipoConteudo] = useState<string | boolean>("pipocas");
  const [ordem, setOrdem] = useState<string>("");
  const [dataInicio, setDataInicio] = useState<string>("");
  const [dataExpiracao, setDataExpiracao] = useState<string>("");
  const [nomeBanner, setNomeBanner] = useState<string>("");
  const [linkBanner, setLinkBanner] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [imgCarousel, setImgCarousel] = useState<File | null>(null);
  const [imgMobile, setImgMobile] = useState<File | null>(null);

  const paginaESecao = pagina !== "" && secao !== "";
  const conteudoOuFilme = secao === "conteudo" || tipoConteudo === "filme";

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
          list={paginaList}
          value={pagina}
          setValue={setPagina}
        />
      </InputWrapper>
      {pagina && (
        <InputWrapper label="Selecione a Seção" obrigatoria>
          <ComboBox
            label="Selecione uma Seção"
            list={secaoList}
            value={secao}
            setValue={setSecao}
          />
        </InputWrapper>
      )}
      {(secao === "destaque" || secao === "conteudo") && (
        <Centered className="grid grid-cols-2 gap-x-4 gap-y-4">
          {secao === "conteudo" ? (
            <InputWrapper label="Título do Conteúdo" obrigatoria>
              <Input
                placeholder="Título do Conteúdo"
                value={ordem}
                setValue={setOrdem}
              />
            </InputWrapper>
          ) : (
            <InputWrapper label="Tipo do Conteúdo a Ser Exibido" obrigatoria>
              <ComboBox
                label="Selecione"
                list={tipoConteudoList}
                value={tipoConteudo}
                setValue={setTipoConteudo}
              />
            </InputWrapper>
          )}
          <InputWrapper label="Ordem">
            <Input placeholder="1" value={ordem} setValue={setOrdem} />
          </InputWrapper>
        </Centered>
      )}
      {conteudoOuFilme && (
        <InputWrapper label="Unidade(s) Participante(s)" obrigatoria>
          <ComboBox
            label="Selecione uma Unidade"
            list={paginaList}
            value={tipoConteudo}
            setValue={setTipoConteudo}
          />
        </InputWrapper>
      )}
      {tipoConteudo === "filme" && (
        <>
          <InputWrapper label="Selecione um Filme a Ser Exibido" obrigatoria>
            <ComboBox
              label="Selecione um Filme"
              list={paginaList}
              value={tipoConteudo}
              setValue={setTipoConteudo}
            />
          </InputWrapper>
          <InputWrapper label="Situação" obrigatoria>
            <ComboBox
              label="Selecionar"
              list={paginaList}
              value={tipoConteudo}
              setValue={setTipoConteudo}
            />
          </InputWrapper>
        </>
      )}
      {conteudoOuFilme && (
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
      )}
      {paginaESecao && (
        <BannerNomeELink
          nomeBanner={nomeBanner}
          setNomeBanner={setNomeBanner}
          linkBanner={linkBanner}
          setLinkBanner={setLinkBanner}
        />
      )}
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
