"use client";

import { useState } from "react";

import Modal from "@/app/components/Modal";
import Button from "@/app/components/ui/Button";
import Centered from "@/app/components/ui/Centered";
import Page from "@/app/components/ui/Page";
import TMDBSearch from "@/app/components/Movies/TMDBSearch";

const FilmesPage = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleClick = () => setModalOpen(true);

  return (
    <>
      <Page title="Lista de Filmes" subtitle="Lista de Filmes / Estatísticas">
        <Centered justify="start" className="gap-x-2">
          <Button label="IMPORTAR PROGRAMAÇÃO VIA CSV" secondary blue />
          <Button label="NOVO FILME" primary />
          <Button label="NOVO FILME VIA TMDB" primary onClick={handleClick} />
        </Centered>
      </Page>
      <Modal open={modalOpen}>
        <TMDBSearch setOpen={setModalOpen} />
      </Modal>
    </>
  );
};

export default FilmesPage;
