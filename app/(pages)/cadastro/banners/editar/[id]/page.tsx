"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Page from "@/app/components/ui/Page";
import Centered from "@/app/components/ui/Centered";
import Typography from "@/app/components/ui/Typography";
import Switch from "@/components/ui/switch";
import ComboBox from "@/app/components/ui/ComboBox";
import InputWrapper from "@/app/components/InputWrapper";
import Input from "@/app/components/ui/Input";
import Button from "@/app/components/ui/Button";

const EditarBannerPage = () => {
  const router = useRouter();
  const [ativo, setAtivo] = useState<boolean>(false);

  return (
    <>
      <Page title="Editar Banner">
        <Centered className="gap-y-4" direction="col">
          <Centered className="gap-x-2" items="center" justify="start">
            <Typography weight="500">Ativo</Typography>
            <Switch value={ativo} setValue={setAtivo} />
          </Centered>
          <InputWrapper label="Selecione a página" obrigatoria>
            <ComboBox
              label="Institucional"
              list={[]}
              value={false}
              setValue={() => {}}
            />
          </InputWrapper>
          <InputWrapper label="Selecione a Seção" obrigatoria>
            <ComboBox
              label="Institucional"
              list={[]}
              value={false}
              setValue={() => {}}
            />
          </InputWrapper>
          <InputWrapper label="Nome do Banner" obrigatoria>
            <Input
              placeholder={"Banner de teste"}
              value={"Banner de teste"}
              setValue={() => {}}
            />
          </InputWrapper>
          <InputWrapper label="Link do Banner" obrigatoria>
            <Input
              placeholder={"Banner de teste"}
              value={"Banner de teste"}
              setValue={() => {}}
            />
          </InputWrapper>
          <Centered className="gap-x-2" justify="end">
            <Button label="SALVAR" primary onClick={() => {}} />
            <Button label="SALVAR E SAIR" secondary onClick={() => {}} />
            <Button label="VOLTAR" secondary onClick={() => router.back()} />
          </Centered>
        </Centered>
      </Page>
    </>
  );
};

export default EditarBannerPage;
