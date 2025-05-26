"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Switch from "@/components/ui/switch";
import Page from "@/app/components/ui/Page";
import Centered from "@/app/components/ui/Centered";
import Typography from "@/app/components/ui/Typography";
import InputWrapper from "@/app/components/InputWrapper";
import ComboBox from "@/app/components/ui/ComboBox";
import PageBottomActionButtons from "@/app/components/PageBottomActionButtons";
import Input from "@/app/components/ui/Input";
import BannerNomeELink from "@/app/components/Banner/BannerNomeELink";
import BannerDataInicioFim from "@/app/components/Banner/BannerDataInicioFim";
import BannerListaFilmes from "@/app/components/Banner/BannerListaFilmes";
import { unidades } from "@/app/constants/unidades";
import {
  paginaList,
  secaoList,
  tipoConteudoList,
} from "@/app/constants/banner";
import BannerImageUpload from "@/app/components/Banner/BannerImageUpload";

const NovoProdutoPage = () => {
  const router = useRouter();
  const [ativo, setAtivo] = useState<boolean>(true);
  const [pagina, setPagina] = useState<string | boolean>("");
  const [secao, setSecao] = useState<string | boolean>("");
  const [tipoConteudo, setTipoConteudo] = useState<string | boolean>("pipocas");
  const [tituloConteudo, setTituloConteudo] = useState<string>("");
  const [ordem, setOrdem] = useState<string>("");
  const [unidade, setUnidade] = useState<string | boolean>("");
  const [filmeId, setFilmeId] = useState<string | boolean>("");
  const [situacao, setSituacao] = useState<string | boolean>("ativo");
  const [dataInicio, setDataInicio] = useState<string>("");
  const [dataExpiracao, setDataExpiracao] = useState<string>("");
  const [nomeBanner, setNomeBanner] = useState<string>("");
  const [linkBanner, setLinkBanner] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [imgCarousel, setImgCarousel] = useState<File | null>(null);
  const [imgMobile, setImgMobile] = useState<File | null>(null);

  const paginaESecao = pagina !== "" && secao !== "";
  const destaqueOuConteudo =
    secao === "banner-destaque" || secao === "conteudo";
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
        <BannerImageUpload
          file={file}
          setFile={setFile}
          imgCarousel={imgCarousel}
          setImgCarousel={setImgCarousel}
          imgMobile={imgMobile}
          setImgMobile={setImgMobile}
        />
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
      {destaqueOuConteudo && (
        <Centered className="grid grid-cols-2 gap-x-4 gap-y-4">
          {secao === "conteudo" ? (
            <InputWrapper label="Título do Conteúdo" obrigatoria>
              <Input
                placeholder="Título do Conteúdo"
                value={tituloConteudo}
                setValue={setTituloConteudo}
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
            list={unidades}
            value={unidade}
            setValue={setUnidade}
          />
        </InputWrapper>
      )}
      {tipoConteudo === "filme" && (
        <BannerListaFilmes
          filmeId={filmeId}
          setFilmeId={setFilmeId}
          situacao={situacao}
          setSituacao={setSituacao}
        />
      )}
      {conteudoOuFilme && (
        <BannerDataInicioFim
          dataInicio={dataInicio}
          setDataInicio={setDataInicio}
          dataExpiracao={dataExpiracao}
          setDataExpiracao={setDataExpiracao}
        />
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
