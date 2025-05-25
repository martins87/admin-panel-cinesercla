import React, { Dispatch, FC, SetStateAction } from "react";
import Centered from "../ui/Centered";
import InputWrapper from "../InputWrapper";
import Input from "../ui/Input";

type BannerNomeELinkProps = {
  nomeBanner: string;
  setNomeBanner: Dispatch<SetStateAction<string>>;
  linkBanner: string;
  setLinkBanner: Dispatch<SetStateAction<string>>;
};

const BannerNomeELink: FC<BannerNomeELinkProps> = ({
  nomeBanner,
  setNomeBanner,
  linkBanner,
  setLinkBanner,
}) => {
  return (
    <Centered className="grid grid-cols-2 gap-x-4 gap-y-4">
      <InputWrapper label="Nome do Banner">
        <Input placeholder="Nome" value={nomeBanner} setValue={setNomeBanner} />
      </InputWrapper>
      <InputWrapper label="Link do Banner">
        <Input
          placeholder="cinesercla.com.br"
          value={linkBanner}
          setValue={setLinkBanner}
        />
      </InputWrapper>
    </Centered>
  );
};

export default BannerNomeELink;
