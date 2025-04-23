"use client";

import { useEffect, useState } from "react";

import { useMovieStore } from "@/app/store/movies";
import Modal from "@/app/components/Modal";
import Button from "@/app/components/ui/Button";
import Centered from "@/app/components/ui/Centered";
import Page from "@/app/components/ui/Page";
import TMDBSearch from "@/app/components/Movies/TMDBSearch";
import MovieRow from "@/app/components/Movies/MovieRow";
import AlertModal from "@/app/components/AlertModal";
import Loading from "@/app/components/Loading";
import { deleteMovie } from "@/app/services/movies";

const FilmesPage = () => {
  const { movieList, fetchMovieList, removeMovie } = useMovieStore();
  const [tmdbModalOpen, setTmdbModalOpen] = useState<boolean>(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [toDeleteId, setToDeleteId] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        await fetchMovieList();
      } catch (error) {
        console.error("Failed to fetch movies", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [fetchMovieList]);

  const handleDelete = async () => {
    setDeleteModalOpen(false);
    setToDeleteId("");

    // TODO add loading...
    const deletedMovie = await deleteMovie(toDeleteId);

    // TODO handle error
    if (deletedMovie) removeMovie(toDeleteId);
  };

  const handleClick = () => setTmdbModalOpen(true);

  return (
    <>
      <Page title="Lista de Filmes" subtitle="Lista de Filmes / Estatísticas">
        <Centered justify="start" className="gap-x-2">
          <Button label="IMPORTAR PROGRAMAÇÃO VIA CSV" secondary blue />
          <Button label="NOVO FILME" primary />
          <Button label="NOVO FILME VIA TMDB" primary onClick={handleClick} />
        </Centered>

        {loading ? (
          <Loading />
        ) : (
          <Centered direction="col" className="gap-y-2">
            {movieList.map((movie) => (
              <MovieRow
                key={movie._id}
                movie={movie}
                setModalOpen={setDeleteModalOpen}
                setToDeleteId={setToDeleteId}
              />
            ))}
          </Centered>
        )}
      </Page>
      <Modal open={tmdbModalOpen}>
        <TMDBSearch setOpen={setTmdbModalOpen} />
      </Modal>
      <AlertModal
        isOpen={deleteModalOpen}
        title="Deseja mesmo excluir?"
        message="Ao confirmar, ação não poderá ser desfeita."
        confirmLabel="EXCLUIR"
        onCancel={() => setDeleteModalOpen(false)}
        onConfirm={handleDelete}
        hideOnOutsideClick={true}
      />
    </>
  );
};

export default FilmesPage;
