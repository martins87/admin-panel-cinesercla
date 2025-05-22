"use client";

import { useRouter } from "next/navigation";

import { useBomboniere } from "@/app/hooks/useBomboniere";
import Button from "@/app/components/ui/Button";
import Page from "@/app/components/ui/Page";
import Typography from "@/app/components/ui/Typography";
import Loading from "@/app/components/Loading";
import BomboniereRow from "@/app/components/Bomboniere/BomboniereRow";

const BombonierePage = () => {
  const router = useRouter();
  const { data: productList, isFetching, isSuccess, isError } = useBomboniere();
  console.log("product list", productList);

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
      {isFetching ? (
        <Loading />
      ) : isSuccess ? (
        productList?.map((product) => (
          <BomboniereRow key={product._id} product={product} />
        ))
      ) : isError ? (
        <Typography>Erro buscando lista de produtos</Typography>
      ) : null}
    </Page>
  );
};

export default BombonierePage;
