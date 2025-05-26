"use client";

import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";

import { useMovieStore } from "@/app/store/movies";
import InputWrapper from "../InputWrapper";
import ComboBox from "../ui/ComboBox";
import { situacaoOpcoes } from "@/app/constants/movieDetails";
import Loading from "../Loading";

type BannerListaFilmesProps = {
  filmeId: string | boolean;
  setFilmeId: Dispatch<SetStateAction<string | boolean>>;
  situacao: string | boolean;
  setSituacao: Dispatch<SetStateAction<string | boolean>>;
};

const BannerListaFilmes: FC<BannerListaFilmesProps> = ({
  filmeId,
  setFilmeId,
  situacao,
  setSituacao,
}) => {
  const { movieList, fetchMovieList } = useMovieStore();
  const [loading, setLoading] = useState<boolean>(false);
  const filmesList = movieList.map((movie) => ({
    value: movie.idFilme,
    label: movie.title,
  }));

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

  return (
    <>
      <InputWrapper label="Selecione um Filme a Ser Exibido" obrigatoria>
        <ComboBox
          label="Selecione um Filme"
          list={filmesList}
          value={filmeId}
          setValue={setFilmeId}
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
      {loading && <Loading />}
    </>
  );
};

export default BannerListaFilmes;
