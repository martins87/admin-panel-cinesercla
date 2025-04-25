"use client";

import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";

import { TMDBMovie } from "@/app/types/tmdbMovie";
import { useTMDBMovies } from "@/app/hooks/useTMDBMovies";
import Centered from "@/app/components/ui/Centered";
import IconButton from "@/app/components/ui/IconButton";
import Typography from "@/app/components/ui/Typography";
import Button from "@/app/components/ui/Button";
import Search from "@/app/components/Search";
import TMDBResultList from "./TMDBResultList";
import TMDBResultPlaceholder from "./TMDBResultPlaceholder";
import TMDBNoResult from "./TMDBNoResult";
import { close } from "@/app/constants/icons";

type TMDBSearchProps = {
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const TMDBSearch: FC<TMDBSearchProps> = ({ setOpen }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [triggerSearch, setTriggerSearch] = useState<boolean>(false);
  const [resultList, setResultList] = useState<TMDBMovie[]>([]);
  const { data, isLoading /**error*/ } = useTMDBMovies(
    searchTerm,
    triggerSearch
  );
  const [totalResults, setTotalResults] = useState<number>(0);

  const handleClose = () => setOpen(false);

  const handleSearch = () => {
    setResultList([]);
    setTriggerSearch(true);
  };

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
        onClickFn={() => handleSearch()}
      />
      {searchTerm === "" ? (
        <TMDBResultPlaceholder />
      ) : isLoading ? (
        <Typography className="text-xl mt-4">
          Carregando resultados...
        </Typography>
      ) : totalResults > 0 ? (
        <TMDBResultList list={resultList} />
      ) : (
        <TMDBNoResult />
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
