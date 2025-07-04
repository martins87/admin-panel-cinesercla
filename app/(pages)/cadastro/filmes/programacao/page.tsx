"use client";

import { useEffect, useState } from "react";

import { Schedule } from "@/app/types/schedule";
import { MovieSchedule } from "@/app/types/movie";
import {
  formatDateToBR,
  getScheduleDateRange,
  groupScheduleByMovie,
} from "@/lib/utils";
import { useSchedule } from "@/app/hooks/useSchedule";
import { useMovieStore } from "@/app/store/movies";
import Centered from "@/app/components/ui/Centered";
import Page from "@/app/components/ui/Page";
import ComboBox from "@/app/components/ui/ComboBox";
import ScheduleMovie from "@/app/components/Movies/Schedule/ScheduleMovie";
import Loading from "@/app/components/Loading";
import Typography from "@/app/components/ui/Typography";
import { unidades } from "@/app/constants/unidades";

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
  const [dataInicio, setDataInicio] = useState<string>("");
  const [dataFim, setDataFim] = useState<string>("");

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

      const { oldestStart, newestEnd } = getScheduleDateRange(scheduleList);
      setDataInicio(oldestStart as string);
      setDataFim(newestEnd as string);
    }
  }, [idUnidade, scheduleList]);

  return (
    <Page
      title="Programação"
      subtitle={
        movies.length > 0
          ? `Válida do dia ${formatDateToBR(dataInicio)} a ${formatDateToBR(
              dataFim
            )}`
          : undefined
      }
      topActions={
        movies.length > 0 && (
          <Centered className="gap-y-4" direction="col" items="start">
            <ComboBox
              className="w-[360px] mt-10"
              label="Selecione"
              list={unidades}
              value={idUnidade}
              setValue={setIdUnidade}
            />
          </Centered>
        )
      }
      backArrow
      backUrl="/cadastro/filmes"
    >
      {scheduleLoading || moviesLoading ? (
        <Loading />
      ) : movies.length > 0 ? (
        movies.map((movie) => (
          <ScheduleMovie key={movie.idFilme} movie={movie} />
        ))
      ) : (
        <Typography className="text-lg">
          Programação não encontrada. Por favor, retorne à página de filmes.
        </Typography>
      )}
    </Page>
  );
};

export default ProgramacaoPage;
