"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useProductStore } from "@/app/store/product";
import { deleteProduct } from "@/app/services/bomboniere";
import Button from "@/app/components/ui/Button";
import Page from "@/app/components/ui/Page";
import Loading from "@/app/components/Loading";
import BomboniereRow from "@/app/components/Bomboniere/BomboniereRow";
import AlertModal from "@/app/components/AlertModal";

const BombonierePage = () => {
  const router = useRouter();
  const { productList, fetchProductList, removeProduct } = useProductStore();
  console.log("product list", productList);
  const [loading, setLoading] = useState<boolean>(false);
  const [toDeleteId, setToDeleteId] = useState<string>("");
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);

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

  const handleDelete = async () => {
    setDeleteModalOpen(false);
    setToDeleteId("");

    const deletedProduct = await deleteProduct(toDeleteId);

    // TODO handle error
    // TODO add feedback to user
    if (deletedProduct) removeProduct(toDeleteId);
  };

  const handleNovoProduto = () =>
    router.push("/cadastro/bomboniere/novo-produto");

  return (
    <>
      <Page
        title="Lista de Produtos da Bomboniere"
        subtitle="Gerencie os produtos disponíveis para venda no cinema"
        topActions={
          <Button label="NOVO PRODUTO" primary onClick={handleNovoProduto} />
        }
      >
        {loading ? (
          <Loading />
        ) : (
          productList?.map((product) => (
            <BomboniereRow
              key={product._id}
              product={product}
              setModalOpen={setDeleteModalOpen}
              setToDeleteId={setToDeleteId}
            />
          ))
        )}
      </Page>
      <AlertModal
        isOpen={deleteModalOpen}
        title="Deseja mesmo excluir?"
        message="Ao confirmar, ação não poderá ser desfeita."
        confirmLabel="EXCLUIR"
        onCancel={() => setDeleteModalOpen(false)}
        onConfirm={handleDelete}
        hideOnOutsideClick={true}
      />
    </>
  );
};

export default BombonierePage;
