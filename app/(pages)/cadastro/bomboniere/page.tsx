"use client";

import { useRouter } from "next/navigation";

import Button from "@/app/components/ui/Button";
import Page from "@/app/components/ui/Page";
import Typography from "@/app/components/ui/Typography";

const BombonierePage = () => {
  const router = useRouter();

  const handleNovoProduto = () =>
    router.push("/cadastro/bomboniere/novo-produto");

  return (
    <Page
      title="Lista de Produtos da Bomboniere"
      subtitle="Gerencie os produtos disponíveis para venda no cinema"
      pageHeader={
        <Button label="NOVO PRODUTO" primary onClick={handleNovoProduto} />
      }
    >
      <Typography>BombonierePage</Typography>
    </Page>
  );
};

export default BombonierePage;
