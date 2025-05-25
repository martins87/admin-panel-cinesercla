import React, { Dispatch, FC, SetStateAction } from "react";

import InputWrapper from "../InputWrapper";
import ComboBox from "../ui/ComboBox";

type BannerListaFilmesProps = {
  filmeId: string | boolean;
  setFilmeId: Dispatch<SetStateAction<string | boolean>>;
  situacao: string | boolean;
  setSituacao: Dispatch<SetStateAction<string | boolean>>;
};

const paginaList = [
  { value: "inicial", label: "Inicial" },
  { value: "institucional", label: "Institucional" },
  { value: "promocoes", label: "Promoções" },
];

const BannerListaFilmes: FC<BannerListaFilmesProps> = ({
  filmeId,
  setFilmeId,
  situacao,
  setSituacao,
}) => {
  return (
    <>
      <InputWrapper label="Selecione um Filme a Ser Exibido" obrigatoria>
        <ComboBox
          label="Selecione um Filme"
          list={paginaList}
          value={filmeId}
          setValue={setFilmeId}
        />
      </InputWrapper>
      <InputWrapper label="Situação" obrigatoria>
        <ComboBox
          label="Selecionar"
          list={paginaList}
          value={situacao}
          setValue={setSituacao}
        />
      </InputWrapper>
    </>
  );
};

export default BannerListaFilmes;
