"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { classificacaoOpcoes, Movie, situacaoOpcoes } from "@/app/types/movie";
import { formatRuntime, getFormattedDate } from "@/lib/utils";
import { useTMDBMovieImages } from "@/app/hooks/useTMDBMovieImages";
import Page from "@/app/components/ui/Page";
import Centered from "@/app/components/ui/Centered";
import Typography from "@/app/components/ui/Typography";
import Button from "@/app/components/ui/Button";
import Switch from "@/components/ui/switch";
import ComboBox from "@/app/components/ui/ComboBox";
import Input from "@/app/components/ui/Input";
import AlertModal from "@/app/components/AlertModal";
import InputWrapper from "@/app/components/InputWrapper";
import { useMovieStore } from "@/app/store/movies";
import { editMovie } from "@/app/services/movies";
import Modal from "@/app/components/Modal";
import ImagePicker from "@/app/components/Movies/ImagePicker";
import { upload } from "@/app/constants/icons";

const NovoFilmePage = () => {
  const router = useRouter();
  const params = useParams();
  const { id } = params as { id: string };
  const {
    data: images,
    // isLoading
  } = useTMDBMovieImages(id);
  console.log("movie images", images);
  const { getMovieById, updateMovieList } = useMovieStore();
  const movie = getMovieById(+id);
  console.log("movie gotten from store", movie);

  const [tmdbId, setTmdbId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [originalTitle, setOriginalTitle] = useState<string>("");
  const [releaseDate, setReleaseDate] = useState<string>("");
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
  const [runtimeNum, setRuntimeNum] = useState<number>(0);
  const [distribuidora, setDistribuidora] = useState<string>("");
  const [cast /** , setCast*/] = useState<string[]>([]);
  const [trailerDublado, setTrailerDublado] = useState<string>("");
  const [trailerLegendado, setTrailerLegendado] = useState<string>("");
  const [overview, setOverview] = useState<string>("");
  const [ativo, setAtivo] = useState<boolean>(true);
  const [posterPath, setPosterPath] = useState<string>("");
  const [backdropPath, setBackdropPath] = useState<string>("");
  // const [tmdbSearch, setTmdbSearch] = useState<string>("");
  const [salvarModalOpen, setSalvarModalOpen] = useState<boolean>(false);
  const [salvarESairModalOpen, setSalvarESairModalOpen] =
    useState<boolean>(false);
  const [posterModalOpen, setPosterModalOpen] = useState<boolean>(false);
  const [backdropModalOpen, setBackdropModalOpen] = useState<boolean>(false);
  const [posterImages, setPosterImages] = useState([]);
  const [backdropImages, setBackdropImages] = useState([]);

  useEffect(() => {
    if (!movie) return;

    setTmdbId(movie.tmdbId);
    setBackdropPath(movie.backdrop_path);
    setGenre(movie.genres);
    setOriginalTitle(movie.original_title);
    setOverview(movie.overview);
    setPosterPath(movie.poster_path);
    setReleaseDate(movie.release_date);
    setRuntime(formatRuntime(movie.runtime));
    setRuntimeNum(movie.runtime);
    setSituacao(movie.situacao);
    setTitle(movie.title);
  }, [movie]);

  useEffect(() => {
    if (images) {
      setPosterImages(images.posters);
      setBackdropImages(images.backdrops);
    }
  }, [images]);

  const handleAddTag = () => {
    if (tagInput && !tags.includes(tagInput)) {
      setTags([...tags, tagInput]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  const handleSalvar = async (sair?: boolean) => {
    const newMovie: Movie = {
      tmdbId,
      title,
      cadastro: getFormattedDate(),
      backdrop_path: backdropPath,
      poster_path: posterPath,
      original_title: originalTitle,
      release_date: releaseDate,
      genres: genre,
      // diretor, // change
      runtime: runtimeNum, // change
      // cast,
      situacao: situacao as string,
      // trailerDublado, // change
      // trailerLegendado, // change
      overview,
      ativo,
    };

    console.log("edited movie", newMovie);

    try {
      const editedMovie = await editMovie(newMovie);

      if (editedMovie) {
        // Updates the local state with the new movie
        updateMovieList(editedMovie);
        console.log("Movie edited successfully:", editedMovie);
        if (sair) router.push("/cadastro/filmes");
      } else {
        console.error("Failed to edit Movie.");
      }
    } catch (error) {
      console.error("Error editing Movie:", error);
    }
  };

  const handleVoltar = () => router.push("/cadastro/filmes");

  // const handlePesquisarTMDB = () => {
  //   console.log("Searching TMDB for:", tmdbSearch);
  // };

  return (
    <>
      <Page
        title={`Editar Filme: ${title}`}
        subtitle="Cadastre e gerencie novos filmes exibidos no cinema"
      >
        <Centered className="gap-y-6" direction="col">
          {/* Image upload section */}
          <Centered className="gap-x-4" justify="start">
            <Centered className="relative w-fit gap-y-2" direction="col">
              <div className="relative w-full rounded-lg overflow-hidden">
                <Image
                  width={720}
                  height={1080}
                  src={`https://image.tmdb.org/t/p/original${posterPath}`}
                  alt="Imagem"
                  className="w-auto h-[395px] object-cover"
                  priority
                />
                <Button
                  className="absolute w-fit top-0 right-0 px-4 hover:bg-white/90"
                  label="ALTERAR"
                  secondary
                  onClick={() => setPosterModalOpen(true)}
                />
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
            <Centered className="relative w-fit gap-y-2" direction="col">
              <div className="relative aspect-video w-full rounded-lg overflow-hidden">
                <Image
                  width={1920}
                  height={1080}
                  src={`https://image.tmdb.org/t/p/original${backdropPath}`}
                  alt="Imagem"
                  className="w-auto h-[395px] object-cover"
                  priority
                />
                <Button
                  className="absolute w-fit top-0 right-0 px-4 hover:bg-white/90"
                  label="ALTERAR"
                  secondary
                  onClick={() => setBackdropModalOpen(true)}
                />
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

          {/* Synopsis */}
          <InputWrapper label="Sinopse">
            <Input
              placeholder="Escreva a sinopse do filme"
              value={overview}
              setValue={setOverview}
            />
          </InputWrapper>

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

      <Modal open={posterModalOpen}>
        <ImagePicker
          handleCloseFn={() => setPosterModalOpen(false)}
          images={posterImages}
          setPosterPath={setPosterPath}
        />
      </Modal>
      <Modal open={backdropModalOpen}>
        <ImagePicker
          handleCloseFn={() => setBackdropModalOpen(false)}
          images={backdropImages}
          setPosterPath={setBackdropPath}
          backdrop
        />
      </Modal>

      {/* Confirmation modals */}
      <AlertModal
        isOpen={salvarModalOpen}
        title="Deseja salvar?"
        message="Ao confirmar, ação não poderá ser desfeita."
        confirmLabel="SALVAR"
        onCancel={() => setSalvarModalOpen(false)}
        onConfirm={() => handleSalvar(false)}
        hideOnOutsideClick={true}
      />
      <AlertModal
        isOpen={salvarESairModalOpen}
        title="Deseja salvar e sair?"
        message="Ao confirmar, ação não poderá ser desfeita."
        confirmLabel="SALVAR E SAIR"
        onCancel={() => setSalvarESairModalOpen(false)}
        onConfirm={() => handleSalvar(true)}
        hideOnOutsideClick={true}
      />
    </>
  );
};

export default NovoFilmePage;
