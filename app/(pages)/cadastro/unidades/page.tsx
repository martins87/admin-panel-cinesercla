"use client";

import { useRouter } from "next/navigation";

import Button from "@/app/components/ui/Button";
import Page from "@/app/components/ui/Page";
import Typography from "@/app/components/ui/Typography";

const UnidadesPage = () => {
  const router = useRouter();

  const handleNovaUnidade = () => router.push("/cadastro/unidades/nova");

  return (
    <Page
      title="Lista de Unidades"
      subtitle="Lista de Unidades / Predefinições de Salas & Promoções"
      topActions={
        <Button label="NOVA UNIDADE" primary onClick={handleNovaUnidade} />
      }
    >
      <Typography>UnidadesPage</Typography>
    </Page>
  );
};

export default UnidadesPage;
