"use client";

import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";

import { TMDBMovie } from "@/app/types/tmdbMovie";
import Centered from "../ui/Centered";
import IconButton from "../ui/IconButton";
import Typography from "../ui/Typography";
import Search from "../Search";
import Button from "../ui/Button";
import TMDBResultList from "./TMDBResultList";
import TMDBResultPlaceholder from "./TMDBResultPlaceholder";
import { useMovies } from "@/app/hooks/useMovies";
import { close } from "@/app/constants/icons";

type TMDBSearchProps = {
  setOpen: Dispatch<SetStateAction<boolean>>;
};


const TMDBSearch: FC<TMDBSearchProps> = ({ setOpen }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [triggerSearch, setTriggerSearch] = useState<boolean>(false);
  const [resultList, setResultList] = useState<TMDBMovie[]>([]);
  const { data, isLoading } = useMovies(searchTerm, triggerSearch);
  const [totalResults, setTotalResults] = useState<number>(0);

  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (searchTerm.trim() === "") return;

    const delayDebounce = setTimeout(() => {
      setResultList([]);
      setTriggerSearch(true);
    }, 500); // 100ms

    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);

  useEffect(() => {
    if (data) {
      setTotalResults(data.total_results);
      setResultList(data.results);
      setTriggerSearch(false);
    }
  }, [data]);

  return (
    <Centered
      className="h-full gap-y-4"
      direction="col"
      items="start"
      justify="start"
    >
      <Centered items="start" justify="between" className="my-4">
        <Typography weight="700" className="text-3xl">
          Adicionar Filme via TMDB
        </Typography>
        <IconButton icon={close} tertiary onClick={handleClose} />
      </Centered>
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      {searchTerm === "" ? (
        <TMDBResultPlaceholder />
      ) : isLoading ? (
        <Typography className="text-lg mt-4">
          Carregando resultados...
        </Typography>
      ) : totalResults > 0 ? (
        <div
          id="results-wrapper"
          className="w-full overflow-y-auto max-h-[60vh]" // ou [70vh], dependendo do quanto cabe no seu modal
        >
          <TMDBResultList list={resultList} />
        </div>
      ) : (
        <Typography className="text-lg mt-4">
          Nenhum filme encontrado.
        </Typography>
      )}

      <Button
        label="Inserir informações manualmente"
        className="uppercase ml-auto mt-auto min-h-12"
        tertiary
      />
    </Centered>
  );
};

export default TMDBSearch;
