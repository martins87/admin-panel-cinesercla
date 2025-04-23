import React, { Dispatch, FC } from "react";
import Centered from "../ui/Centered";
import InputWrapper from "../InputWrapper";
import Input from "../ui/Input";

type MovieTrailersProps = {
  tituloTrailerDublado: string;
  setTituloTrailerDublado: Dispatch<React.SetStateAction<string>>;
  keyTrailerDublado: string;
  setKeyTrailerDublado: Dispatch<React.SetStateAction<string>>;
  tituloTrailerLegendado: string;
  setTituloTrailerLegendado: Dispatch<React.SetStateAction<string>>;
  keyTrailerLegendado: string;
  setKeyTrailerLegendado: Dispatch<React.SetStateAction<string>>;
};

const MovieTrailers: FC<MovieTrailersProps> = ({
  tituloTrailerDublado,
  setTituloTrailerDublado,
  keyTrailerDublado,
  setKeyTrailerDublado,
  tituloTrailerLegendado,
  setTituloTrailerLegendado,
  keyTrailerLegendado,
  setKeyTrailerLegendado,
}) => {
  return (
    <>
      <Centered className="grid grid-cols-2 gap-x-4 gap-y-4">
        <InputWrapper label="Título do Trailer Dublado">
          <Input
            placeholder="Título do Trailer Dublado"
            value={tituloTrailerDublado}
            setValue={setTituloTrailerDublado}
          />
        </InputWrapper>
        <InputWrapper label="Link do Vídeo no YouTube">
          <Input
            placeholder="Ex: https://www.youtube.com/watch?v=3IVPHxs4NoM"
            value={keyTrailerDublado}
            setValue={setKeyTrailerDublado}
          />
        </InputWrapper>
      </Centered>
      <Centered className="grid grid-cols-2 gap-x-4 gap-y-4">
        <InputWrapper label="Título do Trailer Legendado">
          <Input
            placeholder="Título do Trailer Legendado"
            value={tituloTrailerLegendado}
            setValue={setTituloTrailerLegendado}
          />
        </InputWrapper>
        <InputWrapper label="Link do Vídeo no YouTube">
          <Input
            placeholder="Ex: https://www.youtube.com/watch?v=mjZgf6-ifCA"
            value={keyTrailerLegendado}
            setValue={setKeyTrailerLegendado}
          />
        </InputWrapper>
      </Centered>
    </>
  );
};

export default MovieTrailers;
