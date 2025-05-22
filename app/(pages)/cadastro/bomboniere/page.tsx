"use client";

import { useRouter } from "next/navigation";

import { useBomboniere } from "@/app/hooks/useBomboniere";
import Button from "@/app/components/ui/Button";
import Page from "@/app/components/ui/Page";
import BomboniereRow from "@/app/components/Bomboniere/BomboniereRow";

const BombonierePage = () => {
  const router = useRouter();
  const {
    data: productList,
    // isFetching
  } = useBomboniere();
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
      {productList?.map((product) => (
        <BomboniereRow key={product._id} product={product} />
      ))}
    </Page>
  );
};

export default BombonierePage;
