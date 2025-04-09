"use client";

import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";

import { close } from "@/app/constants/icons";
import Centered from "../ui/Centered";
import IconButton from "../ui/IconButton";
import Typography from "../ui/Typography";
import Search from "../Search";
import Button from "../ui/Button";
import TMDBResultList from "./TMDBResultList";
import { TMDBMovie } from "@/app/types/tmdbMovie";
import TMDBResultPlaceholder from "./TMDBResultPlaceholder";
import { useMovies } from "@/app/hooks/useMovies";

type TMDBSearchProps = {
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const TMDBSearch: FC<TMDBSearchProps> = ({ setOpen }) => {
  const handleClose = () => setOpen(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [triggerSearch, setTriggerSearch] = useState<boolean>(false);
  const { data /**isLoading, error*/ } = useMovies(searchTerm, triggerSearch);
  const [resultList, setResultList] = useState<TMDBMovie[]>([]);

  const handleSearch = () => {
    setResultList([]);
    setTriggerSearch(true);
  };

  if (data && resultList.length === 0) {
    setResultList(data.results); // assuming TMDB API returns data.results
  }

  useEffect(() => {
    if (data) {
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
      {resultList.length > 0 ? (
        <TMDBResultList list={resultList} />
      ) : (
        <TMDBResultPlaceholder />
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
