"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

import { classificacaoOpcoes, Movie, situacaoOpcoes } from "@/app/types/movie";
import { formatDateBR, formatRuntime, getFormattedDate } from "@/lib/utils";
import { useTMDBMovieImages } from "@/app/hooks/useTMDBMovieImages";
import { editMovie } from "@/app/services/movies";
import { useMovieStore } from "@/app/store/movies";
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
import MovieTrailers from "@/app/components/Movies/MovieTrailers";
import { YOUTUBE_URL_PREFIX } from "@/app/constants/youtube";

const NovoFilmePage = () => {
  const router = useRouter();
  const params = useParams();
  const { id } = params as { id: string };
  const { data: images } = useTMDBMovieImages(id);
  const { getMovieById, updateMovieList } = useMovieStore();
  const movie = getMovieById(+id);
  console.log("movie gotten from store", movie);

  const [tmdbId, setTmdbId] = useState<number>(0);
  const [idHtticket, setIdHtticket] = useState<string>("");
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
  const [cast, setCast] = useState<string>("");
  const [tituloTrailerDublado, setTituloTrailerDublado] = useState<string>("");
  const [keyTrailerDublado, setKeyTrailerDublado] = useState<string>("");
  const [tituloTrailerLegendado, setTituloTrailerLegendado] =
    useState<string>("");
  const [keyTrailerLegendado, setKeyTrailerLegendado] = useState<string>("");
  const [overview, setOverview] = useState<string>("");
  const [ativo, setAtivo] = useState<boolean>(true);
  const [posterPath, setPosterPath] = useState<string>("");
  const [backdropPath, setBackdropPath] = useState<string>("");
  const [salvarModalOpen, setSalvarModalOpen] = useState<boolean>(false);
  const [salvarESairModalOpen, setSalvarESairModalOpen] =
    useState<boolean>(false);
  const [posterModalOpen, setPosterModalOpen] = useState<boolean>(false);
  const [backdropModalOpen, setBackdropModalOpen] = useState<boolean>(false);
  const [posterImages, setPosterImages] = useState([]);
  const [backdropImages, setBackdropImages] = useState([]);

  useEffect(() => {
    if (!movie) return;

    setIdHtticket(movie.idHtticket);
    setTmdbId(movie.tmdbId);
    setPosterPath(movie.poster_path);
    setBackdropPath(movie.backdrop_path);
    setTitle(movie.title);
    setOriginalTitle(movie.original_title);
    setReleaseDate(formatDateBR(movie.release_date));
    setSituacao(movie.situacao);
    setGenre(movie.genres);
    setRuntime(formatRuntime(movie.runtime));
    setCast(movie.cast);
    setOverview(movie.overview);
    setRuntimeNum(movie.runtime);
    if (movie.trailers) {
      if (movie.trailers.length > 0) {
        setTituloTrailerDublado(movie.trailers[0].name);
        setKeyTrailerDublado(YOUTUBE_URL_PREFIX + movie.trailers[0].key);
      }
      if (movie.trailers.length > 1) {
        setTituloTrailerLegendado(movie.trailers[1].name);
        setKeyTrailerLegendado(YOUTUBE_URL_PREFIX + movie.trailers[1].key);
      }
    }
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
    const videos = [];
    if (tituloTrailerDublado && keyTrailerDublado) {
      videos.push({
        name: tituloTrailerDublado,
        key: keyTrailerDublado.slice(YOUTUBE_URL_PREFIX.length),
      });
    }
    if (tituloTrailerLegendado && keyTrailerLegendado) {
      videos.push({
        name: tituloTrailerLegendado,
        key: keyTrailerLegendado.slice(YOUTUBE_URL_PREFIX.length),
      });
    }

    const movieToUpdate: Movie = {
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
      cast,
      situacao: situacao as string,
      overview,
      ativo,
      trailers: videos,
      idHtticket,
    };

    console.log("edited movie", movieToUpdate);

    try {
      const editedMovie = await editMovie(movieToUpdate);

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

  return (
    <>
      <Page
        title={`Editar Filme: ${title}`}
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

          <div className="w-full border-t border-gray-200 my-2" />

          {/* Active toggle */}
          <Centered className="gap-x-2" items="center" justify="start">
            <Typography weight="500">Ativo</Typography>
            <Switch value={ativo} setValue={setAtivo} />
          </Centered>

          <Centered className="">
            <InputWrapper label="Id do Filme no Htticket" obrigatoria>
              <Input
                placeholder="Id do filme no Htticket"
                value={idHtticket}
                setValue={setIdHtticket}
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
                    x
                  </button>
                </div>
              ))}
            </div>
          </InputWrapper>

          {/* Trailers */}
          <MovieTrailers
            tituloTrailerDublado={tituloTrailerDublado}
            setTituloTrailerDublado={setTituloTrailerDublado}
            keyTrailerDublado={keyTrailerDublado}
            setKeyTrailerDublado={setKeyTrailerDublado}
            tituloTrailerLegendado={tituloTrailerLegendado}
            setTituloTrailerLegendado={setTituloTrailerLegendado}
            keyTrailerLegendado={keyTrailerLegendado}
            setKeyTrailerLegendado={setKeyTrailerLegendado}
          />

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
