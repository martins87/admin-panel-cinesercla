"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Banner } from "@/app/types/banner";
import { uploadFile } from "@/lib/utils";
import { createBanner } from "@/app/services/banner";
import Page from "@/app/components/ui/Page";
import Centered from "@/app/components/ui/Centered";
import Typography from "@/app/components/ui/Typography";
import Switch from "@/components/ui/switch";
import InputWrapper from "@/app/components/InputWrapper";
import ComboBox from "@/app/components/ui/ComboBox";
import PageBottomActionButtons from "@/app/components/PageBottomActionButtons";
import Input from "@/app/components/ui/Input";
import BannerNomeELink from "@/app/components/Banner/BannerNomeELink";
import BannerDataInicioFim from "@/app/components/Banner/BannerDataInicioFim";
import BannerListaFilmes from "@/app/components/Banner/BannerListaFilmes";
import BannerImageUpload from "@/app/components/Banner/BannerImageUpload";
import Loading from "@/app/components/Loading";
import { unidades } from "@/app/constants/unidades";
import {
  paginaList,
  secaoList,
  tipoConteudoList,
} from "@/app/constants/banner";

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
  const [img1, setImg1] = useState<File | null>(null);
  const [img2, setImg2] = useState<File | null>(null);
  const [img3, setImg3] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const paginaESecao = pagina !== "" && secao !== "";
  const destaqueOuConteudo =
    secao === "banner-destaque" || secao === "conteudo";
  const conteudoOuFilme = secao === "conteudo" || tipoConteudo === "filme";

  const handleVoltar = () => router.push("/cadastro/banners");

  const handleSalvar = async (sair?: boolean) => {
    setLoading(true);
    let img1FileId;
    let img2FileId;
    let img3FileId;
    const imgFiles = [];

    if (img1) {
      try {
        img1FileId = await uploadFile(img1);
        console.log(`Imagem enviada com sucesso: ${img1FileId}`);
        if (img1FileId) imgFiles.push({ fileId: img1FileId });
      } catch (error) {
        console.error("Error uploading image 1:", error);
        alert(
          `Erro ao enviar a imagem: ${
            error instanceof Error ? error.message : "Erro desconhecido"
          }`
        );
      }
    }

    if (img2) {
      try {
        img2FileId = await uploadFile(img2);
        console.log(`Imagem enviada com sucesso: ${img2FileId}`);
        if (img2FileId) imgFiles.push({ fileId: img2FileId });
      } catch (error) {
        console.error("Error uploading image 2:", error);
        alert(
          `Erro ao enviar a imagem: ${
            error instanceof Error ? error.message : "Erro desconhecido"
          }`
        );
      }
    }

    if (img3) {
      try {
        img3FileId = await uploadFile(img3);
        console.log(`Imagem enviada com sucesso: ${img3FileId}`);
        if (img3FileId) imgFiles.push({ fileId: img3FileId });
      } catch (error) {
        console.error("Error uploading image 3:", error);
        alert(
          `Erro ao enviar a imagem: ${
            error instanceof Error ? error.message : "Erro desconhecido"
          }`
        );
      }
    }

    try {
      const newBanner: Banner = {
        pagina: pagina as string,
        secao: secao as string,
        tipoConteudo: tipoConteudo as string,
        ordem: ordem || "1",
        unidadesParticipantes: unidade
          ? [{ unidadeId: unidade as string }]
          : [],
        idFilme: filmeId as string,
        situacao: situacao as string,
        dataInicio: dataInicio || new Date().toISOString(),
        dataFim: dataExpiracao || new Date().toISOString(),
        nome: nomeBanner || "",
        link: linkBanner || "",
        images: imgFiles,
      };

      const createdBanner = createBanner(newBanner);
      if (createdBanner) {
        console.log("Banner created successfully:", createdBanner);
      } else {
        console.error("Failed to create banner.");
      }

      console.log("new banner", newBanner);
    } catch (error) {
      console.error("Error creating banner:", error);
    } finally {
      if (sair) router.push("/cadastro/banners");
      setLoading(false);
    }
  };

  return (
    <Page
      title="Novo Banner"
      subtitle="Adicione novos banners para cada página e seção selecionada"
      backArrow
      backUrl="/cadastro/banners"
      rightColumn={
        <BannerImageUpload
          pagina={pagina}
          secao={secao}
          img1={img1}
          setImg1={setImg1}
          img2={img2}
          setImg2={setImg2}
          img3={img3}
          setImg3={setImg3}
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
      {loading && <Loading />}
    </Page>
  );
};

export default NovoProdutoPage;
