"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useProductStore } from "@/app/store/product";
import Button from "@/app/components/ui/Button";
import Page from "@/app/components/ui/Page";
import Loading from "@/app/components/Loading";
import BomboniereRow from "@/app/components/Bomboniere/BomboniereRow";

const BombonierePage = () => {
  const router = useRouter();
  const {
    productList,
    fetchProductList,
    // removeProduct
  } = useProductStore();
  console.log("product list", productList);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        await fetchProductList();
      } catch (error) {
        console.error("Failed to fetch products", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [fetchProductList]);

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
      {loading ? (
        <Loading />
      ) : (
        productList?.map((product) => (
          <BomboniereRow key={product._id} product={product} />
        ))
      )}
    </Page>
  );
};

export default BombonierePage;
