"use client";

import { useEffect, useState } from "react";

import { useMovieStore } from "@/app/store/movies";
import Modal from "@/app/components/Modal";
import Button from "@/app/components/ui/Button";
import Centered from "@/app/components/ui/Centered";
import Page from "@/app/components/ui/Page";
import TMDBSearch from "@/app/components/Movies/TMDBSearch";
import MovieRow from "@/app/components/Movies/MovieRow";

const FilmesPage = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const { movieList, fetchMovieList } = useMovieStore();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        await fetchMovieList();
      } catch (error) {
        console.error("Failed to fetch movies", error);
      }
    };

    fetchMovies();
  }, [fetchMovieList]);

  const handleClick = () => setModalOpen(true);

  return (
    <>
      <Page title="Lista de Filmes" subtitle="Lista de Filmes / Estatísticas">
        <Centered justify="start" className="gap-x-2">
          <Button label="IMPORTAR PROGRAMAÇÃO VIA CSV" secondary blue />
          <Button label="NOVO FILME" primary />
          <Button label="NOVO FILME VIA TMDB" primary onClick={handleClick} />
        </Centered>

        <Centered direction="col" className="gap-y-2">
          {movieList.map((movie) => (
            <MovieRow key={movie._id} movie={movie} />
          ))}
        </Centered>
      </Page>
      <Modal open={modalOpen}>
        <TMDBSearch setOpen={setModalOpen} />
      </Modal>
    </>
  );
};

export default FilmesPage;
