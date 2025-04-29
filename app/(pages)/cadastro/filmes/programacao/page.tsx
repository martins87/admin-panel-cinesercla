"use client";

import { useEffect, useState } from "react";

import { Schedule } from "@/app/types/schedule";
import { MovieSchedule } from "@/app/types/movie";
import { useSchedule } from "@/app/hooks/useSchedule";
import { groupScheduleByMovie } from "@/lib/utils";
import Centered from "@/app/components/ui/Centered";
import Page from "@/app/components/ui/Page";
import ComboBox from "@/app/components/ui/ComboBox";
import ScheduleMovie from "@/app/components/Movies/Schedule/ScheduleMovie";
import Loading from "@/app/components/Loading";
import { unidades } from "@/app/constants/unidades";
import { useMovieStore } from "@/app/store/movies";
import Typography from "@/app/components/ui/Typography";

const ProgramacaoPage = () => {
  const { fetchMovieList } = useMovieStore();
  const [idUnidade, setIdUnidade] = useState<string | boolean>("1");
  const [movies, setMovies] = useState<MovieSchedule[]>([]);
  const {
    data: scheduleList,
    isLoading: scheduleLoading,
    // isError
  } = useSchedule();
  const [moviesLoading, setMoviesLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setMoviesLoading(true);
        await fetchMovieList();
      } catch (error) {
        console.error("Failed to fetch movies", error);
      } finally {
        setMoviesLoading(false);
      }
    };

    fetchMovies();
  }, [fetchMovieList]);

  useEffect(() => {
    if (scheduleList) {
      const exibicoes = scheduleList.filter(
        (schedule: Schedule) => schedule.idUnidade === idUnidade
      );

      const groupedMovies = groupScheduleByMovie(exibicoes);
      setMovies(groupedMovies);
    }
  }, [idUnidade, scheduleList]);

  return (
    <Page
      title="Programação"
      subtitle={
        movies.length > 0 ? "Válida do dia 17/04/2025 a 23/04/2025" : undefined
      }
      backArrow
      backUrl="/cadastro/filmes"
    >
      {scheduleLoading || moviesLoading ? (
        <Loading />
      ) : movies.length > 0 ? (
        <Centered className="gap-y-4" direction="col">
          <ComboBox
            label="Selecione"
            list={unidades}
            value={idUnidade}
            setValue={setIdUnidade}
          />
          {movies.map((movie) => (
            <ScheduleMovie key={movie.idHtticket} movie={movie} />
          ))}
        </Centered>
      ) : (
        <Typography className="text-lg">
          Programação não encontrada. Por favor, retorne à página de filmes.
        </Typography>
      )}
    </Page>
  );
};

export default ProgramacaoPage;
