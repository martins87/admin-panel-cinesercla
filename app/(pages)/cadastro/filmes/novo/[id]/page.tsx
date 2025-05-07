"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

import { classificacaoOpcoes, Movie, situacaoOpcoes } from "@/app/types/movie";
import { TMDBMovie } from "@/app/types/tmdbMovie";
import { TMDBVideo } from "@/app/types/tmdbVideo";
import { useTMDBMovie } from "@/app/hooks/useTMDBMovie";
import { useTMDBMovieImages } from "@/app/hooks/useTMDBMovieImages";
import { useTMDBMovieVideos } from "@/app/hooks/useTMDBMovieVideos";
import { useTMDBMovieCast } from "@/app/hooks/useTMDBMovieCast";
import { createMovie } from "@/app/services/movies";
import { useMovieStore } from "@/app/store/movies";
import { formatDateBR, formatRuntime, getFormattedDate } from "@/lib/utils";
import Page from "@/app/components/ui/Page";
import Centered from "@/app/components/ui/Centered";
import Typography from "@/app/components/ui/Typography";
import Button from "@/app/components/ui/Button";
import Switch from "@/components/ui/switch";
import ComboBox from "@/app/components/ui/ComboBox";
import Input from "@/app/components/ui/Input";
import Textarea from "@/app/components/ui/Textarea";
import AlertModal from "@/app/components/AlertModal";
import InputWrapper from "@/app/components/InputWrapper";
import Modal from "@/app/components/Modal";
import ImagePicker from "@/app/components/Movies/ImagePicker";
import MovieImages from "@/app/components/Movies/MovieImages";

const NovoFilmePage = () => {
  const router = useRouter();
  const params = useParams();
  const { addMovie } = useMovieStore();
  const { id } = params as { id: string };
  const { data: movie, isLoading } = useTMDBMovie(id);
  const { data: images } = useTMDBMovieImages(id);
  const { data: trailers } = useTMDBMovieVideos(id);
  const { data: actors } = useTMDBMovieCast(id);
  const [tmdbId, setTmdbId] = useState<number>(0);
  const [idFilme, setIdFilme] = useState<string>("");
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
  const [cast, setCast] = useState<string>();
  const [tituloTrailerDublado, setTituloTrailerDublado] = useState<string>("");
  const [keyTrailerDublado, setKeyTrailerDublado] = useState<string>("");
  const [tituloTrailerLegendado, setTituloTrailerLegendado] =
    useState<string>("");
  const [keyTrailerLegendado, setKeyTrailerLegendado] = useState<string>("");
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
  const [videos, setVideos] = useState<{ name: string; key: string }[]>([]);

  useEffect(() => {
    if (!movie) return;

    const result = movie as TMDBMovie;

    setIdFilme(result.idFilme);
    setTmdbId(result.id);
    setBackdropPath(result.backdrop_path);
    setGenre(
      result.genres
        .map((genre: { id: number; name: string }) => genre.name)
        .join(", ")
    );
    setOriginalTitle(result.original_title);
    setOverview(result.overview);
    setPosterPath(result.poster_path);
    setReleaseDate(formatDateBR(result.release_date));
    setRuntime(formatRuntime(result.runtime));
    setRuntimeNum(result.runtime);
    setSituacao(result.status);
    setTitle(result.title);
  }, [movie]);

  useEffect(() => {
    if (images) {
      setPosterImages(images.posters);
      setBackdropImages(images.backdrops);
    }
  }, [images]);

  useEffect(() => {
    const videosArr: { name: string; key: string }[] = [];
    const trailerDublado = trailers?.find((trailer: TMDBVideo) => {
      const trailerName = trailer.name.toLowerCase();
      return trailerName.includes("dublado") || trailerName.includes("dub");
    });
    if (trailerDublado) {
      setTituloTrailerDublado(trailerDublado.name);
      setKeyTrailerDublado(trailerDublado.key);
      videosArr.push({
        name: trailerDublado.name,
        key: trailerDublado.key,
      });
    }

    const trailerLegendado = trailers?.find((trailer: TMDBVideo) => {
      const trailerName = trailer.name.toLowerCase();
      return trailerName.includes("legendado") || trailerName.includes("leg");
    });
    if (trailerLegendado) {
      setTituloTrailerLegendado(trailerLegendado.name);
      setKeyTrailerLegendado(trailerLegendado.key);
      videosArr.push({
        name: trailerLegendado.name,
        key: trailerLegendado.key,
      });
    }

    setVideos(videosArr);
  }, [trailers]);

  useEffect(() => {
    if (actors) {
      setCast(actors.join(", "));
    }
  }, [actors]);

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
    if (tituloTrailerDublado && keyTrailerDublado) {
      videos.push({
        name: tituloTrailerDublado,
        key: keyTrailerDublado,
      });
    }
    if (tituloTrailerLegendado && keyTrailerLegendado) {
      videos.push({
        name: tituloTrailerLegendado,
        key: keyTrailerLegendado,
      });
    }

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
      cast: cast || "",
      situacao: situacao as string,
      // trailerDublado, // change
      // trailerLegendado, // change
      overview,
      ativo,
      trailers: videos,
      idFilme,
    };

    console.log("new movie", newMovie);

    try {
      const createdMovie = await createMovie(newMovie);

      if (createdMovie) {
        // Updates the local state with the new movie
        addMovie(createdMovie);
        console.log("Movie created successfully:", createdMovie);
        if (sair) router.push("/cadastro/filmes");
      } else {
        console.error("Failed to create Movie.");
      }
    } catch (error) {
      console.error("Error creating Movie:", error);
    }
  };

  const handleVoltar = () => router.push("/cadastro/filmes");

  // const handlePesquisarTMDB = () => {
  //   console.log("Searching TMDB for:", tmdbSearch);
  // };

  if (isLoading)
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
        backArrow
      >
        <Centered className="gap-y-6" direction="col">
          {/* Image upload section */}
          <MovieImages
            posterPath={posterPath}
            backdropPath={backdropPath}
            posterModalFn={() => setPosterModalOpen(true)}
            backdropModalFn={() => setBackdropModalOpen(true)}
          />

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

          <Centered className="">
            <InputWrapper label="Id do Filme" obrigatoria>
              <Input
                placeholder="Id do filme"
                value={idFilme}
                setValue={setIdFilme}
              />
            </InputWrapper>
          </Centered>

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
            <InputWrapper label="Elenco">
              <Input
                placeholder="Elenco do Filme"
                value={cast || ""}
                setValue={() => {}} // change
              />
            </InputWrapper>
          </Centered>

          {/* Synopsis */}
          <InputWrapper label="Sinopse">
            <Textarea
              placeholder="Escreva a sinopse do filme"
              value={overview}
              setValue={setOverview}
            />
          </InputWrapper>

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

          {/* Trailers */}
          <Centered className="grid grid-cols-2 gap-x-4 gap-y-4">
            <InputWrapper label="Título do Trailer Dublado">
              <Input
                placeholder="Título do Trailer Dublado"
                value={tituloTrailerDublado}
                setValue={setTituloTrailerDublado}
              />
            </InputWrapper>
            <InputWrapper label="Key do Vídeo no YouTube">
              <Input
                placeholder="Ex: mjZgf6-ifCA"
                value={keyTrailerDublado}
                setValue={setKeyTrailerDublado}
              />
            </InputWrapper>
          </Centered>

          <Centered className="grid grid-cols-2 gap-x-4 gap-y-4">
            <InputWrapper label="Título do Trailer Legendado">
              <Input
                placeholder="Título do Trailer Legendado"
                value={tituloTrailerLegendado}
                setValue={setTituloTrailerLegendado}
              />
            </InputWrapper>
            <InputWrapper label="Key do Vídeo no YouTube">
              <Input
                placeholder="Ex: mjZgf6-ifCA"
                value={keyTrailerLegendado}
                setValue={setKeyTrailerLegendado}
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
