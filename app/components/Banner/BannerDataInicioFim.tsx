import { Dispatch, FC, SetStateAction } from "react";

import InputWrapper from "../InputWrapper";
import Centered from "../ui/Centered";
import Input from "../ui/Input";

type BannerDataInicioFimProps = {
  dataInicio: string;
  setDataInicio: Dispatch<SetStateAction<string>>;
  dataExpiracao: string;
  setDataExpiracao: Dispatch<SetStateAction<string>>;
};

const BannerDataInicioFim: FC<BannerDataInicioFimProps> = ({
  dataInicio,
  setDataInicio,
  dataExpiracao,
  setDataExpiracao,
}) => {
  return (
    <Centered className="grid grid-cols-2 gap-x-4 gap-y-4">
      <InputWrapper label="Data Início">
        <Input
          placeholder="03/06/2025"
          value={dataInicio}
          setValue={setDataInicio}
        />
      </InputWrapper>
      <InputWrapper label="Data Expiração">
        <Input
          placeholder="30/06/2025"
          value={dataExpiracao}
          setValue={setDataExpiracao}
        />
      </InputWrapper>
    </Centered>
  );
};

export default BannerDataInicioFim;
