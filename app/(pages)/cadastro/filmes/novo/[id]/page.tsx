"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { classificacaoOpcoes, situacaoOpcoes } from "@/app/types/movie";
import { TMDBMovie } from "@/app/types/tmdbMovie";
import { useTMDBMovie } from "@/app/hooks/useTMDBMovie";
import { formatRuntime, getFormattedDate } from "@/lib/utils";
import Page from "@/app/components/ui/Page";
import Centered from "@/app/components/ui/Centered";
import Typography from "@/app/components/ui/Typography";
import Button from "@/app/components/ui/Button";
import Switch from "@/components/ui/switch";
import ComboBox from "@/app/components/ui/ComboBox";
import Input from "@/app/components/ui/Input";
import AlertModal from "@/app/components/AlertModal";
import InputWrapper from "@/app/components/InputWrapper";
import { upload } from "@/app/constants/icons";

const NovoFilmePage = () => {
  const router = useRouter();
  const params = useParams();
  const { id } = params as { id: string };
  const { data, isLoading } = useTMDBMovie(id);

  const [title, setTitle] = useState<string>("");
  const [originalTitle, setOriginalTitle] = useState<string>("");
  const [releaseDate, setReleaseDate] = useState<string>(getFormattedDate());
  const [situacao, setSituacao] = useState<string | boolean>("Em Breve");
  const [classificacao, setClassificacao] = useState<string | boolean>(
    "Não Definida"
  );
  const [ordem, setOrdem] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState<string>("");
  const [genre, setGenre] = useState<string>("");
  const [diretor, setDiretor] = useState<string>("");
  const [runtime, setRuntime] = useState<string>("");
  const [distribuidora, setDistribuidora] = useState<string>("");
  const [cast /** , setCast*/] = useState<string[]>([]);
  const [trailerDublado, setTrailerDublado] = useState<string>("");
  const [trailerLegendado, setTrailerLegendado] = useState<string>("");
  const [overview, setOverview] = useState<string>("");
  const [ativo, setAtivo] = useState<boolean>(true);
  // const [posterPath, setPosterPath] = useState<string>("");
  const [backdropPath, setBackdropPath] = useState<string>("");
  // const [tmdbSearch, setTmdbSearch] = useState<string>("");
  const [salvarModalOpen, setSalvarModalOpen] = useState<boolean>(false);
  const [salvarESairModalOpen, setSalvarESairModalOpen] =
    useState<boolean>(false);

  useEffect(() => {
    if (!data) return;

    const result = data as TMDBMovie;
    console.log("result", result);

    setBackdropPath(result.backdrop_path);
    setGenre(
      result.genres
        .map((genre: { id: number; name: string }) => genre.name)
        .join(", ")
    );
    setOriginalTitle(result.original_title);
    setOverview(result.overview);
    // setPosterPath(result.poster_path);
    setReleaseDate(result.release_date);
    setRuntime(formatRuntime(result.runtime));
    setTitle(result.title);
  }, [data]);

  const handleAddTag = () => {
    if (tagInput && !tags.includes(tagInput)) {
      setTags([...tags, tagInput]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  const handleSalvar = async () =>
    // sair?: boolean
    {
      // const newMovie: Movie = {
      //   title,
      //   originalTitle,
      //   releaseDate,
      //   situacao: situacao as string, // change
      //   classificacao: classificacao as string, // change
      //   ordem, // change
      //   tags,
      //   genre,
      //   diretor, // change
      //   runtime,
      //   distribuidora, // change
      //   cast,
      //   trailerDublado, // change
      //   trailerLegendado, // change
      //   overview,
      //   ativo,
      //   imagens: [],
      // };
      // try {
      //   console.log("Movie data to save:", newMovie);
      //   if (sair) router.push("/cadastro/filmes");
      // } catch (error) {
      //   console.error("Error creating movie:", error);
      // }
    };

  const handleVoltar = () => router.push("/cadastro/filmes");

  // const handlePesquisarTMDB = () => {
  //   console.log("Searching TMDB for:", tmdbSearch);
  // };

  if (isLoading || !data)
    return (
      <Centered className="h-screen">
        <Typography className="text-2xl" weight="400">
          Carregando...
        </Typography>
      </Centered>
    );

  return (
    <>
      <Page
        title={`Novo Filme: ${title}`}
        subtitle="Cadastre e gerencie novos filmes exibidos no cinema"
      >
        <Centered className="gap-y-6" direction="col">
          {/* Image upload section */}
          <Centered justify="start">
            {[0].map((_, index) => (
              <Centered
                key={index}
                className="relative w-fit gap-y-2"
                direction="col"
              >
                <div className="relative aspect-video w-full rounded-lg overflow-hidden">
                  <Image
                    width={1920}
                    height={1080}
                    src={`https://image.tmdb.org/t/p/original${backdropPath}`}
                    alt="Imagem"
                    className="w-[548px] h-[395px] object-cover bg-red-100"
                    priority
                  />
                  <Centered className="absolute w-fit top-0 right-0 bg-red-600 px-3 py-1 rounded hover:bg-red-700 hover:cursor-pointer">
                    <Typography className="text-white" weight="500">
                      Apagar
                    </Typography>
                  </Centered>
                </div>
                <Typography className="text-[#6C757D]" weight="500">
                  TAMANHO RECOMENDADO: XXXpx
                </Typography>
                <Button
                  label="ENVIAR IMAGEM"
                  tertiary
                  icon={upload}
                  className="w-full"
                  textClassname="font-medium"
                />
              </Centered>
            ))}
          </Centered>

          <div className="w-full border-t border-gray-200 my-2"></div>

          {/* Active toggle */}
          <Centered className="gap-x-2" items="center" justify="start">
            <Typography weight="500">Ativo</Typography>
            <Switch value={ativo} setValue={setAtivo} />
          </Centered>

          {/* TMDB search */}
          {/* <div className="w-full">
            <Typography weight="500" className="mb-2">
              Carregar via TMDB
            </Typography>
            <div className="flex gap-2">
              <Input
                placeholder="Digite o nome do filme..."
                value={tmdbSearch}
                setValue={setTmdbSearch}
                className="flex-grow"
              />
              <Button label="PESQUISAR" primary onClick={handlePesquisarTMDB} />
            </div>
          </div> */}

          {/* Movie details */}
          <Centered className="grid grid-cols-2 gap-x-4 gap-y-4">
            <InputWrapper label="Nome" obrigatoria>
              <Input
                placeholder="Nome do filme"
                value={title}
                setValue={setTitle}
              />
            </InputWrapper>
            <InputWrapper label="Nome Original">
              <Input
                placeholder="Nome Original do filme"
                value={originalTitle}
                setValue={setOriginalTitle}
              />
            </InputWrapper>
            <InputWrapper label="Data de Lançamento" obrigatoria>
              <Input
                placeholder="Data de Lançamento"
                value={releaseDate}
                setValue={setReleaseDate}
              />
              <div className="text-xs text-gray-500 mt-1">
                O filme estará ativo automaticamente na data predefinida.
              </div>
            </InputWrapper>
            <InputWrapper label="Situação" obrigatoria>
              <ComboBox
                label="Selecionar"
                list={situacaoOpcoes}
                value={situacao}
                setValue={setSituacao}
              />
            </InputWrapper>
            <InputWrapper label="Classificação Indicativa" obrigatoria>
              <ComboBox
                label="Selecione"
                list={classificacaoOpcoes}
                value={classificacao}
                setValue={setClassificacao}
              />
            </InputWrapper>
            <InputWrapper label="Ordem">
              <Input
                placeholder="Ordem de exibição"
                value={ordem}
                setValue={setOrdem}
              />
            </InputWrapper>
          </Centered>

          {/* Tags */}
          <InputWrapper label="Tags (Palavra-Chave)">
            <div className="flex gap-2 mb-2">
              <Input
                placeholder="Adicionar tag"
                value={tagInput}
                setValue={setTagInput}
                className="flex-grow"
              />
              <Button label="+" primary onClick={handleAddTag} />
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className="bg-gray-200 rounded-md px-3 py-1 flex items-center gap-2"
                >
                  <span>{tag}</span>
                  <button
                    onClick={() => handleRemoveTag(tag)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </InputWrapper>

          {/* More movie details */}
          <Centered className="grid grid-cols-2 gap-x-4 gap-y-4">
            <InputWrapper label="Gênero">
              <Input
                placeholder="Gênero do Filme"
                value={genre}
                setValue={setGenre}
              />
            </InputWrapper>
            <InputWrapper label="Diretor">
              <Input
                placeholder="Diretor do filme"
                value={diretor}
                setValue={setDiretor}
              />
            </InputWrapper>
            <InputWrapper label="Duração">
              <Input placeholder="0min" value={runtime} setValue={setRuntime} />
            </InputWrapper>
            <InputWrapper label="Distribuidora">
              <Input
                placeholder="Distribuidora do Filme"
                value={distribuidora}
                setValue={setDistribuidora}
              />
            </InputWrapper>
            <InputWrapper label="Elenco">
              <Input
                placeholder="Elenco do Filme"
                value={cast.join(", ")}
                setValue={() => {}} // change
              />
            </InputWrapper>
          </Centered>

          {/* Trailers */}
          <Centered className="grid grid-cols-2 gap-x-4 gap-y-4">
            <InputWrapper label="Trailer Dublado">
              <Input
                placeholder="Link do Vídeo"
                value={trailerDublado}
                setValue={setTrailerDublado}
              />
            </InputWrapper>
            <InputWrapper label="Trailer Legendado">
              <Input
                placeholder="Link do Vídeo"
                value={trailerLegendado}
                setValue={setTrailerLegendado}
              />
            </InputWrapper>
          </Centered>

          {/* Synopsis */}
          <InputWrapper label="Sinopse">
            <Input
              placeholder="Escreva a sinopse do filme"
              value={overview}
              setValue={setOverview}
            />
          </InputWrapper>

          {/* Action buttons */}
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
        </Centered>
      </Page>

      {/* Confirmation modals */}
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

export default NovoFilmePage;
